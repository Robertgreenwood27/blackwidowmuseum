/**
 * Silk, drawn as caught light: a hairline core inside a faint additive halo.
 * Technique adapted from Vesper's SilkRenderer — real silk is microns wide and
 * reads almost entirely as glint, so it is drawn near the one-pixel floor and
 * the eye fills in the rest. Additive layers stack in a dense tangle, so the
 * halo is deliberately fainter than it looks like it should be.
 */
import * as THREE from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";

export type SilkLayer = { core: LineMaterial; glow: LineMaterial };

export function silkMaterials(color: THREE.Color, coreOpacity: number, glowOpacity: number): SilkLayer {
  const make = (width: number, opacity: number) =>
    new LineMaterial({
      color: color.getHex(),
      linewidth: width,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: true,
    } as ConstructorParameters<typeof LineMaterial>[0]);
  return { core: make(1.1, coreOpacity), glow: make(4.2, glowOpacity) };
}

/** A static bundle of strands (pairs of points) drawn in both layers. */
export function silkSegments(positions: number[], layer: SilkLayer): THREE.Group {
  const g = new THREE.Group();
  const geo = new LineSegmentsGeometry().setPositions(positions);
  const glow = new LineSegments2(geo, layer.glow);
  const core = new LineSegments2(geo, layer.core);
  glow.renderOrder = 2;
  core.renderOrder = 3;
  g.add(glow, core);
  return g;
}

/**
 * A strand whose points move every frame (a trembling gumfoot line).
 * `write` fills the polyline in place — no reallocation per frame.
 */
export class LiveStrand {
  readonly group = new THREE.Group();
  private readonly geo: LineSegmentsGeometry;
  private readonly buf: Float32Array;
  private readonly pts: Float32Array;

  constructor(readonly points: number, readonly layer: SilkLayer) {
    this.pts = new Float32Array(points * 3);
    const segs = new Array((points - 1) * 6).fill(0);
    this.geo = new LineSegmentsGeometry().setPositions(segs);
    this.buf = (this.geo.attributes.instanceStart as THREE.InterleavedBufferAttribute).data.array as Float32Array;
    const glow = new LineSegments2(this.geo, layer.glow);
    const core = new LineSegments2(this.geo, layer.core);
    glow.renderOrder = 2;
    core.renderOrder = 3;
    glow.frustumCulled = core.frustumCulled = false;
    this.group.add(glow, core);
  }

  set(i: number, x: number, y: number, z: number) {
    this.pts[i * 3] = x; this.pts[i * 3 + 1] = y; this.pts[i * 3 + 2] = z;
  }

  commit() {
    const p = this.pts, b = this.buf;
    for (let s = 0; s < this.points - 1; s++) {
      const o = s * 6, a = s * 3;
      b[o] = p[a]; b[o + 1] = p[a + 1]; b[o + 2] = p[a + 2];
      b[o + 3] = p[a + 3]; b[o + 4] = p[a + 4]; b[o + 5] = p[a + 5];
    }
    (this.geo.attributes.instanceStart as THREE.InterleavedBufferAttribute).data.needsUpdate = true;
  }

  dispose() {
    this.geo.dispose();
  }
}
