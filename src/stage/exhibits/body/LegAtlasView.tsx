"use client";
/**
 * The drawing for the leg atlas: one widow leg, seven segments, drawn large.
 * It runs the leg's signature cycle on a loop: flexor muscles fold it, then a
 * pulse of hemolymph pressure snaps the two joints that have no extensor
 * muscle (femur–patella and tibia–metatarsus) back out. Hall markers ride on
 * the moving segments.
 *
 * Proportions and angles are schematic. Only positions live here; hall names,
 * kickers and links come from the collection.
 */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./LegAtlas.module.css";

export type LegItem = { id: string; title: string; kicker: string; href: string; hall: string };

type Pt = [number, number];
const SEGMENTS = [
  { name: "Coxa", len: 54, w: [50, 46] },
  { name: "Trochanter", len: 36, w: [44, 40] },
  { name: "Femur", len: 330, w: [40, 32] },
  { name: "Patella", len: 88, w: [32, 29] },
  { name: "Tibia", len: 280, w: [28, 22] },
  { name: "Metatarsus", len: 290, w: [21, 15] },
  { name: "Tarsus", len: 130, w: [15, 9] },
] as const;
/** Joint angles (degrees, relative to the previous segment) extended, and how far each folds when flexed. */
const REST = [-8, 2, -36, 46, 12, 16, 16];
const FOLD = [2, 4, -10, 40, 30, 10, 6];
/** Joints with no extensor muscle: the joint at the START of these segment indices. */
const HYDRAULIC = new Set([3, 5]);

const LOOP = 6.4;
const ease = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
/** 0 = extended, 1 = flexed. Slow fold, hold, fast hydraulic snap, rest. */
function flexAt(t: number) {
  const u = t % LOOP;
  if (u < 2.2) return ease(u / 2.2);
  if (u < 3.0) return 1;
  if (u < 3.55) return 1 - ease((u - 3.0) / 0.55);
  return 0;
}
const phaseAt = (t: number) => {
  const u = t % LOOP;
  return u < 2.2 ? "flex" : u < 3.0 ? "hold" : u < 3.9 ? "extend" : "rest";
};

function pose(f: number) {
  const pts: Pt[] = [[110, 300]];
  let a = 0;
  SEGMENTS.forEach((seg, i) => {
    a += REST[i] + FOLD[i] * f;
    const [x, y] = pts[i];
    const r = (a * Math.PI) / 180;
    pts.push([round(x + Math.cos(r) * seg.len), round(y + Math.sin(r) * seg.len)]);
  });
  return pts;
}
/** Rounded so server and client trig agree to the pixel (no hydration drift). */
const round = (v: number) => Math.round(v * 10) / 10;
const lerp = (a: Pt, b: Pt, k: number): Pt => [round(a[0] + (b[0] - a[0]) * k), round(a[1] + (b[1] - a[1]) * k)];

function segPoly(a: Pt, b: Pt, w0: number, w1: number) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const nx = -dy / L, ny = dx / L;
  const p = (pt: Pt, w: number, sgn: number) => `${(pt[0] + nx * w * sgn / 2).toFixed(1)},${(pt[1] + ny * w * sgn / 2).toFixed(1)}`;
  return `${p(a, w0, 1)} ${p(b, w1, 1)} ${p(b, w1, -1)} ${p(a, w0, -1)}`;
}

/** Where each hall is drawn: on segment `seg` (0 = coxa), a fraction `f` along it. Keyed by permanent exhibit id. */
const SPOTS: Record<string, { seg: number; f: number; side: "l" | "r" }> = {
  "body.legs.segments-and-joints": { seg: 4, f: 0.5, side: "r" },
  "body.legs.muscles": { seg: 2, f: 0.55, side: "l" },
  "body.legs.hydraulics": { seg: 3, f: 0, side: "r" },
  "body.legs.feet-and-grip": { seg: 6, f: 1, side: "r" },
  "body.legs.leg-loss": { seg: 1, f: 0, side: "l" },
  "body.legs.regeneration": { seg: 2, f: 0.15, side: "l" },
  "body.legs.sensory-map": { seg: 5, f: 0.45, side: "r" },
};

function useClock() {
  const [t, setT] = useState(4.5);
  const [playing, setPlaying] = useState(true);
  const last = useRef<number | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setPlaying(false));
      return () => cancelAnimationFrame(id);
    }
  }, []);
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = (now: number) => {
      if (last.current !== null) setT((v) => v + (now - last.current!) / 1000);
      last.current = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      last.current = null;
    };
  }, [playing]);
  return { t, playing, setPlaying };
}

export function LegAtlasView({ items }: { items: LegItem[] }) {
  const [on, setOn] = useState<string | null>(null);
  const [seg, setSeg] = useState<number | null>(null);
  const visits = useVisits();
  const { t, playing, setPlaying } = useClock();
  const f = flexAt(t);
  const phase = phaseAt(t);
  const pts = pose(f);
  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });
  const tip = pts[pts.length - 1];
  const tipDir = Math.atan2(tip[1] - pts[pts.length - 2][1], tip[0] - pts[pts.length - 2][0]);

  return (
    <figure className={s.wrap} aria-label="Leg atlas: the halls along one leg">
      <div className={s.head}>
        <span className="label">Leg atlas · one walking leg, side view · schematic, not to scale</span>
        <button type="button" className={s.toggle} onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="0 0 1280 790" className={s.svg} role="img" aria-label="A widow leg with its seven segments labelled; it bends with muscles and straightens with blood pressure">
            {/* the edge of the prosoma the leg springs from */}
            <path className={s.body} d="M-10 180 C70 180 112 230 120 300 C112 370 70 420 -10 420 Z" />

            {SEGMENTS.map((sg, i) => {
              const hot = seg === i;
              const sq = i === 2 && (phase === "flex" || phase === "hold");
              return (
                <g key={sg.name} onMouseEnter={() => setSeg(i)} onMouseLeave={() => setSeg(null)}>
                  <polygon className={`${s.seg} ${hot ? s.segHot : ""}`} points={segPoly(pts[i], pts[i + 1], sg.w[0], sg.w[1])} />
                  {/* the flexor in the femur, drawn as a tendon line pulling across the knee */}
                  {i === 2 && <line className={`${s.flexor} ${sq ? s.flexorOn : ""}`} x1={lerp(pts[2], pts[3], 0.25)[0]} y1={lerp(pts[2], pts[3], 0.25)[1] + 5} x2={lerp(pts[3], pts[4], 0.3)[0]} y2={lerp(pts[3], pts[4], 0.3)[1] + 5} />}
                </g>
              );
            })}

            {/* joints; the two hydraulic ones pulse while pressure straightens them */}
            {pts.slice(1, -1).map(([x, y], j) => {
              const hydraulic = HYDRAULIC.has(j + 1);
              return (
                <g key={j}>
                  {hydraulic && phase === "extend" && <circle cx={x} cy={y} r={26} className={s.pulse} />}
                  <circle cx={x} cy={y} r={hydraulic ? 6 : 4} className={hydraulic ? s.jointH : s.joint} />
                </g>
              );
            })}

            {/* three claws at the tip of the tarsus */}
            <g transform={`translate(${tip[0]} ${tip[1]}) rotate(${round((tipDir * 180) / Math.PI)}) scale(1.8)`} className={s.claws}>
              <path d="M0 -3 q14 -2 16 10" />
              <path d="M0 3 q14 2 15 12" />
              <path d="M0 0 q9 1 9 8" />
            </g>

            {/* segment names */}
            {SEGMENTS.map((sg, i) => {
              const [mx, my] = lerp(pts[i], pts[i + 1], 0.5);
              const dx = pts[i + 1][0] - pts[i][0], dy = pts[i + 1][1] - pts[i][1];
              const L = Math.hypot(dx, dy) || 1;
              /* the normal on the upper side of the segment; the two short basal segments split above and below */
              let nx = dy / L, ny = -dx / L;
              if (ny > 0) { nx = -nx; ny = -ny; }
              const k = (i === 0 ? -1 : 1) * (sg.w[0] / 2 + 18 + sg.name.length * 5 * Math.abs(dy / L));
              return (
                <text key={sg.name} x={round(mx + nx * k)} y={round(my + ny * k + 5)} textAnchor="middle" className={`${s.name} ${seg === i ? s.nameHot : ""}`}>
                  {sg.name.toUpperCase()}
                </text>
              );
            })}

            {drawn.map((it) => {
              const sp = SPOTS[it.id];
              const [x, y] = lerp(pts[sp.seg], pts[sp.seg + 1], sp.f);
              const hot = on === it.id;
              const lx = sp.side === "l" ? x - 30 : x + 30;
              return (
                <Link key={it.id} href={it.href} className={`${s.spot} ${hot ? s.hot : ""}`} {...hover(it.id)} aria-label={`Hall ${it.hall}: ${it.title} — ${it.kicker}`}>
                  <circle cx={x} cy={y} r={22} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 13 : 9} className={s.ring} />
                  <circle cx={x} cy={y} r={3.4} className={s.dot} />
                  {hot && (
                    <text x={lx} y={y - 18} textAnchor={sp.side === "l" ? "end" : "start"} className={s.tag}>
                      {it.title.toUpperCase()}
                    </text>
                  )}
                </Link>
              );
            })}

            {/* what is doing the work right now */}
            <text x={40} y={772} className={s.state}>
              {phase === "flex" || phase === "hold" ? "FLEXOR MUSCLES PULL — THE LEG FOLDS" : phase === "extend" ? "HEMOLYMPH PRESSURE PUSHES — TWO JOINTS SNAP STRAIGHT" : "EXTENDED"}
            </text>
          </svg>
          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Muscles bend a spider&apos;s leg; at two joints only pressure straightens it. Touch a marker to open its hall.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link href={it.href} className={`${s.row} ${on === it.id ? s.rowOn : ""}`} {...hover(it.id)}>
                <span className={s.rowN}>{it.hall}</span>
                <span className={s.rowT}>{it.title}</span>
                {SPOTS[it.id] ? <span className={s.onMap} title="On the leg" /> : <span />}
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
