/**
 * HER — the rigged Latrodectus from Vesper (black_widow_procedural_rig.glb),
 * dressed in its authored texture set and Vesper's chitin material.
 *
 * Rig conventions (see /models/widow/rig-spec.json): the model faces -X with
 * +Y dorsal. The rest pose is the neutral bent-leg stance, so no IK is needed
 * for her to hang; the museum only adds a slow, occasional leg test.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

const BASE = "/models/widow/";

/**
 * The little sky she reflects (Vesper): a black body looks black because its
 * highlights are colder than the room. A narrow cool band at the zenith gives
 * one moving highlight and leaves the rest of her black.
 */
function chitinEnvironment(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 128;
  const g = c.getContext("2d")!;
  const sky = g.createLinearGradient(0, 0, 0, c.height);
  sky.addColorStop(0, "#4a4f5c");
  sky.addColorStop(0.2, "#17191f");
  sky.addColorStop(0.45, "#08090c");
  sky.addColorStop(1, "#050404");
  g.fillStyle = sky;
  g.fillRect(0, 0, c.width, c.height);
  // one small ivory glint — the gallery light, as she sees it
  const lamp = g.createRadialGradient(70, 30, 0, 70, 30, 60);
  lamp.addColorStop(0, "rgba(236,230,217,.7)");
  lamp.addColorStop(1, "rgba(236,230,217,0)");
  g.fillStyle = lamp;
  g.fillRect(0, 0, c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function dress(mesh: THREE.SkinnedMesh) {
  const tl = new THREE.TextureLoader();
  const load = (f: string, color: boolean) => {
    const t = tl.load(BASE + f);
    t.flipY = false; // glTF UV convention
    if (color) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  const m = new THREE.MeshPhysicalMaterial({
    map: load("basecolor.webp", true),
    roughnessMap: load("roughness.webp", false),
    normalMap: load("normal.webp", false),
    color: new THREE.Color(0x6a707c),
    roughness: 0.62,
    metalness: 0,
    specularColor: new THREE.Color(0xc9c4bb),
    specularIntensity: 0.45,
    clearcoat: 0.38,
    clearcoatRoughness: 0.47,
    sheen: 0.05,
    sheenColor: new THREE.Color(0xb9b3a8),
    sheenRoughness: 0.8,
    envMap: chitinEnvironment(),
    envMapIntensity: 1.1,
  });
  // Vesper's grade, trimmed: black point + contrast curve on the chitin,
  // with the hourglass masked out by its own chroma so the red holds.
  m.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <opaque_fragment>",
      /* glsl */ `
      float wChroma = diffuseColor.r - max(diffuseColor.g, diffuseColor.b);
      float wMark = smoothstep(0.004, 0.02, wChroma);
      float wPull = 1.0 - wMark;
      outgoingLight = max(outgoingLight - 0.012 * wPull, vec3(0.0));
      outgoingLight = mix(outgoingLight, pow(max(outgoingLight, vec3(0.0)), vec3(1.18)) * 1.3, wPull);
      outgoingLight += vec3(0.35, 0.02, 0.01) * wMark * 0.25; // the mark keeps a little of its own light
      #include <opaque_fragment>`,
    );
  };
  mesh.material = m;
  mesh.frustumCulled = false;
}

export type Widow = {
  root: THREE.Group;
  update: (time: number) => void;
  dispose: () => void;
};

export async function loadWidow(): Promise<Widow> {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(BASE + "widow.glb");
  const model = gltf.scene;

  let skinned: THREE.SkinnedMesh | null = null;
  model.traverse((o) => {
    if ((o as THREE.SkinnedMesh).isSkinnedMesh) skinned = o as THREE.SkinnedMesh;
  });
  if (skinned) dress(skinned);

  // Hang her: head down (model -X → world -Y), venter toward the viewer
  // (model -Y → world +Z), so the dorsal side faces the scaffold behind her.
  const basis = new THREE.Matrix4().makeBasis(
    new THREE.Vector3(0, 1, 0), // model +X (rear) → world up
    new THREE.Vector3(0, 0, -1), // model +Y (dorsal) → away from camera
    new THREE.Vector3(-1, 0, 0), // model +Z → completes the right-handed frame
  );
  const pivot = new THREE.Group();
  pivot.quaternion.setFromRotationMatrix(basis);
  pivot.add(model);

  // centre her body (not her leg span) on the root
  model.updateMatrixWorld(true);
  const body = model.getObjectByName("Abdomen") ?? model;
  const thorax = model.getObjectByName("Thorax") ?? model;
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  body.getWorldPosition(a);
  thorax.getWorldPosition(b);
  model.position.sub(a.add(b).multiplyScalar(0.5));

  const root = new THREE.Group();
  root.add(pivot);

  // legs that test the silk now and then
  const legs = ["L1", "R1", "L2", "R2", "L4", "R4"].map((id, i) => {
    const femur = model.getObjectByName(`Leg_${id}_Femur`);
    const patella = model.getObjectByName(`Leg_${id}_Patella`);
    return {
      femur, patella, i,
      f0: femur?.quaternion.clone(), p0: patella?.quaternion.clone(),
    };
  });
  const abdomen = model.getObjectByName("Abdomen");
  const ab0 = abdomen?.quaternion.clone();
  const q = new THREE.Quaternion();
  const X = new THREE.Vector3(1, 0, 0);

  const update = (t: number) => {
    for (const l of legs) {
      // a slow tide plus, for the front pair, a periodic deliberate tap
      const tide = Math.sin(t * 0.7 + l.i * 1.7) * 0.025;
      const tapPhase = (t * 0.23 + l.i * 0.37) % 1;
      const tap = l.i < 2 && tapPhase < 0.12 ? Math.sin((tapPhase / 0.12) * Math.PI) * 0.22 : 0;
      if (l.femur && l.f0) l.femur.quaternion.copy(l.f0).multiply(q.setFromAxisAngle(X, tide + tap * 0.6));
      if (l.patella && l.p0) l.patella.quaternion.copy(l.p0).multiply(q.setFromAxisAngle(X, -tap));
    }
    if (abdomen && ab0) abdomen.quaternion.copy(ab0).multiply(q.setFromAxisAngle(X, Math.sin(t * 0.9) * 0.012));
  };

  const dispose = () => {
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.MeshPhysicalMaterial | undefined;
      if (mat) {
        [mat.map, mat.normalMap, mat.roughnessMap, mat.envMap].forEach((x) => x?.dispose());
        mat.dispose();
      }
    });
  };

  return { root, update, dispose };
}
