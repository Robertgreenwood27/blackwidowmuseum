"use client";
/**
 * THE ENTRANCE — a Latrodectus cobweb in three dimensions.
 *
 * Black widows don't weave orbs. They build a tangled scaffold with a
 * retreat, and from it drop taut "gumfoot" lines to the ground, beaded with
 * glue at the foot. When walking prey touches one, it releases and the
 * line's tension hoists the prey into the air.
 *
 * Here every vault of the museum is a gumfoot line. Hover = prey contact
 * (the line trembles). Click = release (the line snaps up, you go with it).
 */
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { loadWidow, type Widow } from "./widow";
import { LiveStrand, silkMaterials, silkSegments } from "./silk";
import type { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import s from "./TangleWeb.module.css";

export type Anchor = { href: string; numeral: string; title: string; open: number; planned: number };

const FLOOR = -2.9;
const SEG = 48;

function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dotTexture(inner: string, outer: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.25, outer);
  grd.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

type Gumfoot = {
  top: THREE.Vector3;
  bottom: THREE.Vector3;
  strand: LiveStrand;
  mats: { core: LineMaterial; glow: LineMaterial };
  phase: number;
  excite: number; // 0..1 hover tremble
  snap: number; // -1 idle, else seconds since release
  anchor: number; // index into anchors or -1
  drops: number[]; // t params of glue droplets
};

export default function TangleWeb({ anchors }: { anchors: Anchor[] }) {
  const host = useRef<HTMLDivElement>(null);
  const labels = useRef<(HTMLAnchorElement | null)[]>([]);
  const hovered = useRef<number>(-1);
  const releasing = useRef<{ i: number; href: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const el = host.current!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rand = rng(1801); // Latrodectus mactans was described in 1775; 1801 is just a good seed.

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050506, 0.045);
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
    const look = new THREE.Vector3(0, 0.75, 0);

    const silk = new THREE.Color("#ece6d9");

    /* ---------- the scaffold: an irregular 3D tangle ---------- */
    const nodes: THREE.Vector3[] = [];
    const retreat = new THREE.Vector3(1.4, 3.35, -0.6);
    for (let i = 0; i < 190; i++) {
      // denser toward the retreat, spreading wide and thin at the edges
      const spread = Math.pow(rand(), 0.7);
      const x = (rand() * 2 - 1) * 8.5 * spread + retreat.x * (1 - spread);
      const y = 1.0 + rand() * 3.6 + (1 - spread) * 0.6;
      const z = (rand() * 2 - 1) * 3.2;
      nodes.push(new THREE.Vector3(x, y, z));
    }
    const seg: number[] = [];
    const seen = new Set<string>();
    nodes.forEach((a, i) => {
      const near = nodes
        .map((b, j) => ({ j, d: a.distanceTo(b) }))
        .filter((o) => o.j !== i)
        .sort((p, q) => p.d - q.d)
        .slice(0, 2 + Math.floor(rand() * 3));
      for (const { j } of near) {
        const k = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(k)) continue;
        seen.add(k);
        seg.push(a.x, a.y, a.z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
    });
    // long structural threads out to the (unseen) walls and ceiling
    for (let i = 0; i < 26; i++) {
      const a = nodes[Math.floor(rand() * nodes.length)];
      const out = new THREE.Vector3((rand() < 0.5 ? -1 : 1) * (14 + rand() * 6), a.y + rand() * 6, a.z - rand() * 4);
      seg.push(a.x, a.y, a.z, out.x, out.y, out.z);
    }
    const lineMats: LineMaterial[] = [];
    const scaffoldSilk = silkMaterials(silk, 0.2, 0.03);
    lineMats.push(scaffoldSilk.core, scaffoldSilk.glow);
    scene.add(silkSegments(seg, scaffoldSilk));

    // knots of silk at junctions
    const knotGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const knotMat = new THREE.PointsMaterial({ size: 0.07, map: dotTexture("rgba(255,255,255,1)", "rgba(236,230,217,.25)"), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.6 });
    scene.add(new THREE.Points(knotGeo, knotMat));

    /* ---------- gumfoot lines ---------- */
    const lowNodes = nodes.filter((n) => n.y < 2.6).sort((a, b) => a.x - b.x);
    const gumfoots: Gumfoot[] = [];
    const nearestLow = (x: number, z: number) =>
      lowNodes.reduce((best, n) => (Math.hypot(n.x - x, (n.z - z) * 0.5) < Math.hypot(best.x - x, (best.z - z) * 0.5) ? n : best));

    const decoySilk = silkMaterials(silk, 0.24, 0.03);
    lineMats.push(decoySilk.core, decoySilk.glow);
    const makeGumfoot = (x: number, z: number, anchor: number) => {
      const top = nearestLow(x, z).clone();
      const bottom = new THREE.Vector3(x, FLOOR, z);
      const mats = anchor >= 0 ? silkMaterials(silk, 0.7, 0.08) : decoySilk;
      if (anchor >= 0) lineMats.push(mats.core, mats.glow);
      const strand = new LiveStrand(SEG + 1, mats);
      scene.add(strand.group);
      const drops = Array.from({ length: anchor >= 0 ? 13 : 7 }, (_, i) => 0.8 + (i / 12) * 0.195 + rand() * 0.006);
      gumfoots.push({ top, bottom, strand, mats, phase: rand() * 10, excite: 0, snap: -1, anchor, drops });
    };
    const n = anchors.length;
    anchors.forEach((_, i) => {
      const x = n === 1 ? 0 : -6 + (12 * i) / (n - 1);
      makeGumfoot(x + (rand() - 0.5) * 0.4, (rand() - 0.5) * 1.6, i);
    });
    for (let i = 0; i < 22; i++) makeGumfoot((rand() * 2 - 1) * 8.5, (rand() * 2 - 1) * 2.8, -1);

    const dropCount = gumfoots.reduce((sum, g) => sum + g.drops.length, 0);
    const dropGeo = new THREE.BufferGeometry();
    dropGeo.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(dropCount * 3), 3));
    const dropMat = new THREE.PointsMaterial({ size: 0.16, map: dotTexture("rgba(255,255,255,1)", "rgba(236,230,217,.5)"), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    scene.add(new THREE.Points(dropGeo, dropMat));

    /* ---------- dust in the gallery air ---------- */
    const dust: number[] = [];
    for (let i = 0; i < 420; i++) dust.push((rand() * 2 - 1) * 12, FLOOR + rand() * 9, (rand() * 2 - 1) * 6);
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.Float32BufferAttribute(dust, 3));
    const dustPts = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.035, color: silk, transparent: true, opacity: 0.35, depthWrite: false }));
    scene.add(dustPts);

    /* ---------- the floor: a pool of light where the lines are anchored ---------- */
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 14),
      new THREE.MeshBasicMaterial({ map: dotTexture("rgba(236,230,217,.10)", "rgba(236,230,217,.04)"), transparent: true, depthWrite: false }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = FLOOR - 0.01;
    scene.add(floor);

    /* ---------- her: Vesper's rigged widow, hanging inverted at the retreat ---------- */
    scene.add(new THREE.HemisphereLight(0x5a5f6c, 0x050404, 1.4));
    const key = new THREE.DirectionalLight(0xece6d9, 7);
    key.position.set(-4, 7, 8);
    const rimLight = new THREE.DirectionalLight(0xcfd6e4, 11);
    rimLight.position.set(3, 5, -7);
    scene.add(key, rimLight);
    let widow: Widow | null = null;
    let widowIn = 0;
    let disposed = false;
    const WIDOW_SCALE = 2.3;
    // a faint pool of gallery light behind her, so the black legs read as silhouette
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTexture("rgba(236,230,217,.5)", "rgba(236,230,217,.12)"), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
    halo.scale.set(5.5, 5.5, 1);
    halo.position.copy(retreat).add(new THREE.Vector3(0, -0.2, 0.2));
    scene.add(halo);
    loadWidow()
      .then((w) => {
        if (disposed) return w.dispose();
        widow = w;
        w.root.position.copy(retreat).add(new THREE.Vector3(0, -0.2, 1.4)); // just in front of the densest silk
        w.root.scale.setScalar(0.0001);
        scene.add(w.root);
      })
      .catch((err) => console.warn("[entrance] widow failed to load", err));

    /* ---------- layout + loop ---------- */
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth - 0.5;
      pointer.ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);

    let dist = 14;
    const fit = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      dist = Math.max(4.9 / t, 7.6 / (t * camera.aspect)) + 1.2;
      // thin screens: thicken the air so silk still reads
      scaffoldSilk.core.opacity = camera.aspect < 1 ? 0.34 : 0.2;
      lineMats.forEach((m) => m.resolution.set(w, h));
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    fit();

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);

    const tmp = new THREE.Vector3();
    const perp = new THREE.Vector3();
    const point = (g: Gumfoot, t: number, time: number, out: THREE.Vector3) => {
      // current foot of the line: on the floor, or springing upward after release
      let footY = g.bottom.y;
      let bow = 0;
      if (g.snap >= 0) {
        const s = g.snap;
        const rise = (g.top.y - g.bottom.y) * 0.48;
        footY = g.bottom.y + rise * (1 - Math.exp(-5 * s) * Math.cos(11 * s));
        bow = Math.exp(-3 * s) * Math.sin(16 * s) * 0.25;
      }
      out.set(
        THREE.MathUtils.lerp(g.top.x, g.bottom.x, t),
        THREE.MathUtils.lerp(g.top.y, footY, t),
        THREE.MathUtils.lerp(g.top.z, g.bottom.z, t),
      );
      const amp = 0.012 + g.excite * 0.11;
      const wob = Math.sin(Math.PI * t) * (amp * Math.sin(time * (2.2 + g.excite * 26) + g.phase + t * 3) + bow);
      perp.set(1, 0, 0.3).normalize();
      out.addScaledVector(perp, wob);
      return out;
    };

    const clock = new THREE.Clock();
    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      const time = reduced ? 0 : clock.elapsedTime;

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      const drift = reduced ? 0 : Math.sin(time * 0.07) * 0.9;
      camera.position.set(pointer.x * 3.2 + drift, 0.35 - pointer.y * 1.4, dist);
      if (releasing.current) camera.position.y += Math.min(g_rel(), 1) * 2.2;
      camera.lookAt(look);

      let d = 0;
      const dropPos = dropGeo.attributes.position as THREE.BufferAttribute;
      for (const g of gumfoots) {
        const target = g.anchor >= 0 && g.anchor === hovered.current ? 1 : 0;
        g.excite += (target - g.excite) * (target ? 0.18 : 0.04);
        if (g.snap >= 0) g.snap += dt;
        for (let i = 0; i <= SEG; i++) {
          point(g, i / SEG, time, tmp);
          g.strand.set(i, tmp.x, tmp.y, tmp.z);
        }
        g.strand.commit();
        if (g.anchor >= 0) {
          g.mats.core.opacity = 0.7 + g.excite * 0.3;
          g.mats.glow.opacity = 0.08 + g.excite * 0.22;
        }
        for (const t of g.drops) {
          point(g, t, time, tmp);
          dropPos.setXYZ(d++, tmp.x, tmp.y, tmp.z);
        }
      }
      dropPos.needsUpdate = true;

      if (widow) {
        widowIn = Math.min(1, widowIn + dt * 0.8);
        const e = 1 - Math.pow(1 - widowIn, 3);
        widow.root.scale.setScalar(WIDOW_SCALE * Math.max(e, 0.0001));
        halo.material.opacity = 0.32 * e;
        widow.root.position.y = retreat.y - 0.2 + (reduced ? 0 : Math.sin(time * 0.6) * 0.025) + (1 - e) * 0.6;
        if (!reduced) {
          widow.root.rotation.y = Math.sin(time * 0.25) * 0.22;
          widow.update(time);
        }
      }
      if (!reduced) dustPts.rotation.y = time * 0.006;

      renderer.render(scene, camera);

      // pin the vault labels to the glue at the foot of each line
      const w = el.clientWidth, h = el.clientHeight;
      for (const g of gumfoots) {
        if (g.anchor < 0) continue;
        const lab = labels.current[g.anchor];
        if (!lab) continue;
        point(g, 1, time, tmp).project(camera);
        lab.style.transform = `translate3d(${((tmp.x + 1) / 2) * w}px, ${((1 - tmp.y) / 2) * h}px, 0)`;
      }
    };
    const relStart = { t: 0 };
    const g_rel = () => (performance.now() - relStart.t) / 900;
    frame();

    // release: called from label click
    (el as HTMLDivElement & { release?: (i: number) => void }).release = (i: number) => {
      const g = gumfoots.find((x) => x.anchor === i);
      if (g) g.snap = 0;
      relStart.t = performance.now();
    };

    return () => {
      disposed = true;
      widow?.dispose();
      gumfoots.forEach((g) => g.strand.dispose());
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        (Array.isArray(mat) ? mat : mat ? [mat] : []).forEach((x) => {
          (x as THREE.MeshBasicMaterial).map?.dispose();
          x.dispose();
        });
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [anchors.length]);

  const release = (e: React.MouseEvent, i: number, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (releasing.current) return;
    releasing.current = { i, href };
    (host.current as HTMLDivElement & { release?: (i: number) => void })?.release?.(i);
    router.prefetch(href);
    setTimeout(() => router.push(href), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 780);
  };

  return (
    <div className={s.stage}>
      <div ref={host} className={s.gl} aria-hidden="true" />
      <nav className={s.labels} aria-label="Vaults">
        {anchors.map((a, i) => (
          <a
            key={a.href}
            href={a.href}
            ref={(r) => { labels.current[i] = r; }}
            className={s.label}
            onPointerEnter={() => (hovered.current = i)}
            onPointerLeave={() => hovered.current === i && (hovered.current = -1)}
            onFocus={() => (hovered.current = i)}
            onBlur={() => (hovered.current = -1)}
            onClick={(e) => release(e, i, a.href)}
          >
            <span className={s.num}>{a.numeral}</span>
            <span className={s.title}>{a.title}</span>
            <span className={s.count}>
              {a.open} open · {a.planned} in prep.
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
