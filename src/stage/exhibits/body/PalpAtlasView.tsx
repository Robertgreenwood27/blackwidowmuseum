"use client";
/**
 * The drawing for the palp atlas: one adult male widow palp, side view, drawn
 * large. It runs the bulb's signature cycle on a loop: at rest the bulb sits
 * tucked under the cupped cymbium; hemolymph then inflates the membrane (the
 * hematodocha) in a shallow pulse and a full one, swinging the bulb and its
 * coiled embolus out of the cup; then it deflates.
 *
 * There are no muscles in the bulb, so nothing here "pulls". Proportions,
 * the swing and the tilt are schematic — no widow rotation angle has been
 * measured. Coil-count presets arrive as data from the collection.
 */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./PalpAtlas.module.css";

export type PalpItem = { id: string; title: string; kicker: string; href: string; hall: string };
export type CoilPreset = { name: string; turns: number; shown: string; note: string };

type Pt = [number, number];
/** Rounded so server and client trig agree to the pixel (no hydration drift). */
const round = (v: number) => Math.round(v * 10) / 10;
const lerp = (a: Pt, b: Pt, k: number): Pt => [round(a[0] + (b[0] - a[0]) * k), round(a[1] + (b[1] - a[1]) * k)];

/** The six palp segments; the last (the tarsus) is the cymbium, drawn as its own cup. */
const JOINTS: Pt[] = [[110, 470], [168, 452], [214, 440], [456, 372], [536, 362], [662, 372]];
const SEGMENTS = [
  { name: "Coxa", w: [52, 46] },
  { name: "Trochanter", w: [44, 40] },
  { name: "Femur", w: [38, 32] },
  { name: "Patella", w: [32, 31] },
  { name: "Tibia", w: [32, 50] },
] as const;

/** The cymbium: a spoon, hollow side facing down, the bulb seated in it. */
const CYMBIUM = "M652 346 C716 292 878 268 990 312 C1034 330 1046 360 1018 374 C960 362 862 364 764 394 C722 406 684 408 662 400 Z";
const BULB_REST: Pt = [812, 410];
const BULB_OUT: Pt = [66, 96];
const TILT_REST = -6;
const TILT_OUT = 30;

const LOOP = 7.2;
const ease = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
/** 0 = at rest, 1 = fully inflated. Rest, shallow pulse, hold, full inflation, hold, collapse. */
function inflationAt(t: number) {
  const u = t % LOOP;
  if (u < 1.2) return 0;
  if (u < 1.9) return 0.35 * ease((u - 1.2) / 0.7);
  if (u < 2.5) return 0.35;
  if (u < 3.5) return 0.35 + 0.65 * ease((u - 2.5) / 1.0);
  if (u < 4.9) return 1;
  if (u < 6.1) return 1 - ease((u - 4.9) / 1.2);
  return 0;
}
const phaseAt = (t: number) => {
  const u = t % LOOP;
  return u < 1.2 ? "rest" : u < 2.5 ? "shallow" : u < 4.9 ? "full" : u < 6.1 ? "collapse" : "rest";
};
const PHASE_TEXT: Record<string, string> = {
  rest: "AT REST — THE BULB SITS TUCKED IN THE CUPPED CYMBIUM",
  shallow: "A SHALLOW INFLATION — HEMOLYMPH ENTERS THE MEMBRANE",
  full: "FULL INFLATION — THE MEMBRANE SWELLS, THE BULB SWINGS OUT",
  collapse: "THE MEMBRANE COLLAPSES — NO MUSCLE PULLS IT BACK",
};

function segPoly(a: Pt, b: Pt, w0: number, w1: number) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const nx = -dy / L, ny = dx / L;
  const p = (pt: Pt, w: number, sgn: number) => `${(pt[0] + nx * w * sgn / 2).toFixed(1)},${(pt[1] + ny * w * sgn / 2).toFixed(1)}`;
  return `${p(a, w0, 1)} ${p(b, w1, 1)} ${p(b, w1, -1)} ${p(a, w0, -1)}`;
}

/** Bristles along the upper edge of a segment; deterministic, so they never flicker. */
function bristles(a: Pt, b: Pt, w: number, n: number) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L, nx = uy, ny = -ux;
  return Array.from({ length: n }, (_, i) => {
    const k = (i + 0.5) / n;
    const x = a[0] + dx * k + nx * w / 2, y = a[1] + dy * k + ny * w / 2;
    const len = 12 + ((i * 7) % 5) * 2;
    return `M${round(x)} ${round(y)} l${round(nx * len * 0.7 + ux * len * 0.7)} ${round(ny * len * 0.7 + uy * len * 0.7)}`;
  }).join(" ");
}

/** Embolus as a helix about the bulb's long axis, in bulb-local coordinates. Split into front / back strokes. */
const COIL_R = 64;
const COIL_PITCH = 24;
const COIL_X0 = 34;
function coil(turns: number) {
  const steps = Math.max(24, Math.round(turns * 36));
  const end = turns * Math.PI * 2;
  const front: string[] = [], back: string[] = [];
  let cur: Pt[] = [], curFront = true;
  const flush = () => {
    if (cur.length > 1) (curFront ? front : back).push("M" + cur.map(([x, y]) => `${x} ${y}`).join(" L"));
  };
  for (let i = 0; i <= steps; i++) {
    const th = (end * i) / steps;
    const x = round(COIL_X0 + (th / (Math.PI * 2)) * COIL_PITCH + Math.sin(th) * COIL_R * 0.22);
    const y = round(-Math.cos(th) * COIL_R * 0.92);
    const isFront = Math.sin(th) >= 0;
    if (i === 0) curFront = isFront;
    if (isFront !== curFront) {
      cur.push([x, y]);
      flush();
      cur = [[x, y]];
      curFront = isFront;
    } else cur.push([x, y]);
  }
  flush();
  const th = end;
  const last: Pt = [round(COIL_X0 + turns * COIL_PITCH + Math.sin(th) * COIL_R * 0.22), round(-Math.cos(th) * COIL_R * 0.92)];
  const tip: Pt = [round(last[0] + 26), round(last[1] - 10)];
  const mid: Pt = [round(COIL_X0 + (turns / 2) * COIL_PITCH), round(-COIL_R * 0.92)];
  return { front, back, last, tip, mid };
}

/** Where each hall is drawn. `frame`: fixed to the palp, riding on the bulb, or a computed anchor. Keyed by permanent exhibit id. */
type Spot = { frame: "palp" | "bulb"; p: Pt; side: "l" | "r" } | { frame: "membrane" | "coil" | "tip"; side: "l" | "r" };
const SPOTS: Record<string, Spot> = {
  "body.pedipalps.appendage": { frame: "palp", p: [335, 406], side: "l" },
  "body.pedipalps.senses-and-tasks": { frame: "palp", p: [598, 367], side: "l" },
  "body.pedipalps.development": { frame: "palp", p: [884, 296], side: "r" },
  "body.pedipalps.bulb-anatomy": { frame: "bulb", p: [-12, 34], side: "l" },
  "body.pedipalps.sperm-induction": { frame: "bulb", p: [-84, -12], side: "l" },
  "body.pedipalps.fit": { frame: "bulb", p: [92, -46], side: "r" },
  "body.pedipalps.inflation": { frame: "membrane", side: "l" },
  "body.pedipalps.the-coil": { frame: "coil", side: "r" },
  "body.pedipalps.breaking-point": { frame: "tip", side: "r" },
};

function useClock() {
  const [t, setT] = useState(4.2);
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

export function PalpAtlasView({ items, presets }: { items: PalpItem[]; presets: CoilPreset[] }) {
  const [on, setOn] = useState<string | null>(null);
  const [preset, setPreset] = useState(0);
  const visits = useVisits();
  const { t, playing, setPlaying } = useClock();
  const f = inflationAt(t);
  const phase = phaseAt(t);
  const turns = presets[preset]?.turns ?? 3;
  const helix = coil(turns);

  const center: Pt = [round(BULB_REST[0] + BULB_OUT[0] * f), round(BULB_REST[1] + BULB_OUT[1] * f)];
  const tilt = round(TILT_REST + (TILT_OUT - TILT_REST) * f);
  const rad = (tilt * Math.PI) / 180;
  const toWorld = ([x, y]: Pt): Pt => [round(center[0] + x * Math.cos(rad) - y * Math.sin(rad)), round(center[1] + x * Math.sin(rad) + y * Math.cos(rad))];

  /* the hematodocha: a translucent bladder between the alveolus and the bulb's upper face */
  const alveolus: Pt = [842, 380];
  const bulbTop = toWorld([-6, -48]);
  const mem = lerp(alveolus, bulbTop, 0.5);
  const memRx = round(62 + 70 * f);
  const memRy = round(10 + Math.max(0, (bulbTop[1] - alveolus[1]) / 2) + 14 * f);
  const memAngle = round(tilt * 0.6);

  const anchor = (sp: Spot): Pt =>
    sp.frame === "palp" ? sp.p : sp.frame === "bulb" ? toWorld(sp.p) : sp.frame === "membrane" ? [mem[0], round(mem[1] + memRy * 0.3)] : sp.frame === "coil" ? toWorld(helix.mid) : toWorld(helix.tip);

  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });
  const cur = presets[preset];
  const bulbLabel = toWorld([-60, 70]);
  const embLabel = toWorld([COIL_X0 + turns * COIL_PITCH + 46, 46]);

  return (
    <figure className={s.wrap} aria-label="Palp atlas: the halls on one male palp">
      <div className={s.head}>
        <span className="label">Palp atlas · adult male, one palp, side view · schematic, not to scale</span>
        <button type="button" className={s.toggle} onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="0 210 1280 520" className={s.svg} role="img" aria-label="A male widow's palp: six segments ending in a cupped cymbium that holds the copulatory bulb; the bulb inflates and swings out, carrying its coiled embolus">
            {/* the front of the prosoma the palp springs from */}
            <path className={s.body} d="M-10 330 C66 330 104 400 116 470 C104 540 66 600 -10 600 Z" />

            {SEGMENTS.map((sg, i) => (
              <g key={sg.name}>
                <polygon className={s.seg} points={segPoly(JOINTS[i], JOINTS[i + 1], sg.w[0], sg.w[1])} />
                {i >= 2 && <path className={s.hair} d={bristles(JOINTS[i], JOINTS[i + 1], sg.w[0], i === 2 ? 9 : i === 3 ? 3 : 6)} />}
              </g>
            ))}
            {JOINTS.slice(1).map(([x, y], j) => (
              <circle key={j} cx={x} cy={y} r={4} className={s.joint} />
            ))}

            {/* hematodocha */}
            <ellipse cx={mem[0]} cy={mem[1]} rx={memRx} ry={memRy} transform={`rotate(${memAngle} ${mem[0]} ${mem[1]})`} className={s.membrane} style={{ opacity: round(0.25 + 0.75 * f) }} />
            {f > 0.2 && (
              <g transform={`rotate(${memAngle} ${mem[0]} ${mem[1]})`} className={s.folds} style={{ opacity: round(f) }}>
                <path d={`M${round(mem[0] - memRx * 0.7)} ${mem[1]} q${round(memRx * 0.35)} ${round(-memRy * 0.5)} ${round(memRx * 0.7)} 0`} />
                <path d={`M${round(mem[0] - memRx * 0.1)} ${round(mem[1] + memRy * 0.25)} q${round(memRx * 0.35)} ${round(-memRy * 0.5)} ${round(memRx * 0.7)} 0`} />
              </g>
            )}

            {/* the bulb, in its own frame */}
            <g transform={`translate(${center[0]} ${center[1]}) rotate(${tilt})`}>
              {helix.back.map((d, i) => (
                <path key={`b${i}`} d={d} className={s.coilBack} />
              ))}
              <ellipse cx={-70} cy={-8} rx={62} ry={42} className={s.subteg} />
              <ellipse cx={4} cy={0} rx={112} ry={58} className={s.teg} />
              {/* the internal sperm duct: blind fundus, reservoir loop, out to the embolus */}
              <path className={s.duct} d="M-84 -12 C-60 -40 0 -40 26 -14 C50 10 0 32 -30 14 C-52 0 -10 -22 40 -4 C60 6 76 4 86 2" />
              <circle cx={-84} cy={-12} r={4} className={s.fundus} />
              {/* conductor and median apophysis: small processes on the tegulum */}
              <path className={s.proc} d="M70 -40 C88 -62 108 -58 104 -40 C100 -30 88 -30 84 -36" />
              <path className={s.proc} d="M30 50 C40 68 60 66 58 50" />
              {helix.front.map((d, i) => (
                <path key={`f${i}`} d={d} className={s.coil} />
              ))}
              <path className={s.coil} d={`M${helix.last[0]} ${helix.last[1]} Q${round(helix.last[0] + 18)} ${round(helix.last[1] - 2)} ${helix.tip[0]} ${helix.tip[1]}`} />
            </g>

            {/* the cymbium sits over the bulb's back */}
            <path className={s.cymbium} d={CYMBIUM} />
            <path className={s.hair} d={bristles([668, 344], [990, 300], 0, 12)} />

            {/* part names */}
            <text x={300} y={350} className={s.name}>FEMUR</text>
            <text x={472} y={334} className={s.name}>PATELLA</text>
            <text x={580} y={330} className={s.name}>TIBIA</text>
            <text x={800} y={262} className={s.name}>CYMBIUM</text>
            <text x={bulbLabel[0]} y={bulbLabel[1] + 24} textAnchor="middle" className={s.name}>TEGULUM</text>
            <text x={embLabel[0]} y={embLabel[1]} className={s.name}>EMBOLUS</text>
            {f > 0.5 && (
              <text x={round(mem[0] - memRx - 10)} y={mem[1]} textAnchor="end" className={s.name} style={{ opacity: round((f - 0.5) * 2) }}>
                HEMATODOCHA
              </text>
            )}

            {drawn.map((it) => {
              const [x, y] = anchor(SPOTS[it.id]);
              const side = SPOTS[it.id].side;
              const hot = on === it.id;
              return (
                <Link key={it.id} href={it.href} className={`${s.spot} ${hot ? s.hot : ""}`} {...hover(it.id)} aria-label={`Hall ${it.hall}: ${it.title} — ${it.kicker}`}>
                  <circle cx={x} cy={y} r={22} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 13 : 9} className={s.ring} />
                  <circle cx={x} cy={y} r={3.4} className={s.dot} />
                  {hot && (
                    <text x={side === "l" ? x - 30 : x + 30} y={y - 18} textAnchor={side === "l" ? "end" : "start"} className={s.tag}>
                      {it.title.toUpperCase()}
                    </text>
                  )}
                </Link>
              );
            })}

            <text x={40} y={716} className={s.state}>{PHASE_TEXT[phase]}</text>
          </svg>

          {presets.length > 0 && (
            <div className={s.presets} role="group" aria-label="Embolus coil count">
              <span className="label">Embolus turns</span>
              {presets.map((p, i) => (
                <button key={p.name} type="button" className={`${s.preset} ${i === preset ? s.presetOn : ""}`} aria-pressed={i === preset} onClick={() => setPreset(i)}>
                  <span className={s.presetN}>{p.shown}</span> {p.name}
                </button>
              ))}
              {cur && <span className={s.presetNote}>{cur.note}. Apparent counts shift with the viewing angle.</span>}
            </div>
          )}

          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>The bulb has no muscles; fluid pressure unfolds it. Touch a marker to open its hall.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link href={it.href} className={`${s.row} ${on === it.id ? s.rowOn : ""}`} {...hover(it.id)}>
                <span className={s.rowN}>{it.hall}</span>
                <span className={s.rowT}>{it.title}</span>
                {SPOTS[it.id] ? <span className={s.onMap} title="On the palp" /> : <span />}
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
