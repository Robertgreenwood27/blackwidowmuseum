"use client";
/**
 * The drawing for the fang atlas: a widow's two chelicerae seen from the
 * front, beneath the clypeus and the eight eyes. Four modes:
 *
 *   bite      — folded → opened by the small extensor → closed toward the
 *               midline by the larger flexor → folded away
 *   venom     — a dry bite, then a wet one: venom runs gland → duct → fang
 *               canal → the pore short of the tip (never out of the point)
 *   pressure  — the 2025 western-widow experiment: raised fluid pressure
 *               spreads the bases; the gape change is read from the halls
 *   tarantula — the orthognath comparison: parallel fangs striking down,
 *               foreshortened when seen from the front
 *
 * All geometry is schematic. No widow fang length, hinge excursion or pore
 * offset has been measured, so the drawing carries no scale bar or degrees
 * except the experimental gape change, which comes in as data.
 */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./FangAtlas.module.css";

export type FangItem = { id: string; title: string; kicker: string; href: string; hall: string };
export type FangFacts = {
  gape: number | null;
  gapeShown: string | null;
  sample: number | null;
  dryShown: string | null;
  dryNote: string | null;
};

type Pt = [number, number];
type Side = "L" | "R";
type Mode = "bite" | "venom" | "pressure" | "tarantula";

/** Rounded so server and client trig agree to the pixel (no hydration drift). */
const round = (v: number) => Math.round(v * 10) / 10;
const ease = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
const rad = (d: number) => (d * Math.PI) / 180;
const rot = ([x, y]: Pt, deg: number, [cx, cy]: Pt = [0, 0]): Pt => {
  const c = Math.cos(rad(deg)), sn = Math.sin(rad(deg));
  const dx = x - cx, dy = y - cy;
  return [round(cx + dx * c - dy * sn), round(cy + dx * sn + dy * c)];
};

/* Left-side geometry; the right side is its mirror image about x = 640. */
const W = 1280;
const PIVOT: Pt = [540, 198]; // where the paturon meets the body wall
const HINGE: Pt = [472, 426]; // the fang's hinge, at the outer lower corner
const PATURON = "M462 198 C520 184 606 186 630 202 C646 272 634 352 608 408 C586 446 522 456 484 444 C458 434 448 402 446 350 C442 290 448 240 462 198 Z";
const GROOVE = "M486 414 C538 410 584 398 610 378";
const EXTENSOR = "M462 300 C470 270 494 268 496 300 C498 336 474 352 466 334 Z";
const FLEXOR = "M520 236 C566 226 606 244 604 300 C602 362 566 392 534 380 C508 368 504 260 520 236 Z";
const GLAND = { c: [512, 108] as Pt, rx: 34, ry: 66 };
const DUCT = "M512 172 C508 262 488 352 474 424";
/** Fang in its own frame: base at the hinge, pointing +x (toward the midline) when folded. */
const FANG = "M-2 -16 C50 -15 110 -20 152 -48 C128 -8 74 14 -2 16 Z";
const CANAL = "M4 0 C52 0 100 -6 124 -22";
const PORE: Pt = [127, -24];

const LOOP = 6;

function useClock() {
  const [t, setT] = useState(2.2);
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
  return { t, setT, playing, setPlaying };
}

/** Fang angle in degrees: 0 = folded into the groove, 100 = swung open and pointing down. */
function biteAt(u: number): { a: number; text: string } {
  if (u < 1) return { a: 0, text: "FOLDED — EACH FANG LIES IN ITS GROOVE, POINT TOWARD THE MIDLINE" };
  if (u < 1.8) return { a: 100 * ease((u - 1) / 0.8), text: "OPENING — THE SMALL EXTENSOR SWINGS THE FANG OUT" };
  if (u < 2.6) return { a: 100, text: "OPEN — BOTH POINTS EXPOSED" };
  if (u < 3.0) return { a: 100 - 62 * ease((u - 2.6) / 0.4), text: "STRIKE — THE LARGER FLEXOR CLOSES THE FANGS TOWARD EACH OTHER" };
  if (u < 4.0) return { a: 38, text: "STRIKE — THE FANGS MEET ACROSS THE MIDLINE, LIKE PINCERS" };
  if (u < 5.0) return { a: 38 - 38 * ease(u - 4.0), text: "FOLDING AWAY" };
  return { a: 0, text: "FOLDED — EACH FANG LIES IN ITS GROOVE, POINT TOWARD THE MIDLINE" };
}

/** Hall spots. `side` = frame of the paturon on that side; `fang` = rides on that side's fang; `world` = fixed. */
type Spot =
  | { frame: "world"; p: Pt; tag: "l" | "r" }
  | { frame: "side" | "fang"; side: Side; p: Pt; tag: "l" | "r" };
const SPOTS: Record<string, Spot> = {
  "body.chelicerae.first-appendage": { frame: "world", p: [640, 176], tag: "r" },
  "body.chelicerae.venom-route": { frame: "side", side: "L", p: [512, 96], tag: "l" },
  "body.chelicerae.paturon": { frame: "side", side: "L", p: [500, 230], tag: "l" },
  "body.chelicerae.muscles": { frame: "side", side: "R", p: [560, 300], tag: "r" },
  "body.chelicerae.taxonomy": { frame: "side", side: "L", p: [590, 400], tag: "l" },
  "body.chelicerae.feeding-tools": { frame: "world", p: [640, 270], tag: "r" },
  "body.chelicerae.fang": { frame: "fang", side: "L", p: [62, 0], tag: "l" },
  "body.chelicerae.fang-materials": { frame: "fang", side: "L", p: [146, -42], tag: "l" },
  "body.chelicerae.growing-fangs": { frame: "fang", side: "R", p: [62, 0], tag: "r" },
  "body.chelicerae.prey-bite": { frame: "fang", side: "R", p: [146, -42], tag: "r" },
  "body.chelicerae.labidognath": { frame: "world", p: [640, 580], tag: "r" },
};

const MODES: { key: Mode; label: string }[] = [
  { key: "bite", label: "The bite" },
  { key: "venom", label: "Venom route" },
  { key: "pressure", label: "Pressure experiment" },
  { key: "tarantula", label: "Compare a tarantula" },
];

export function FangAtlasView({ items, facts }: { items: FangItem[]; facts: FangFacts }) {
  const [on, setOn] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("bite");
  const visits = useVisits();
  const { t, setT, playing, setPlaying } = useClock();

  const u = mode === "venom" ? t % 7 : t % LOOP;
  let a = 0;
  let spread = 0; // degrees each base swings outward
  let fore = 1; // tarantula fang foreshortening
  let pulse: number | null = null; // 0..1 along gland → pore
  let state = "";

  if (mode === "bite") {
    const b = biteAt(u);
    a = b.a;
    state = b.text;
  } else if (mode === "venom") {
    a = u < 0.6 ? 70 * ease(u / 0.6) : 70;
    if (u >= 3.5 && u < 6.5) pulse = (u - 3.5) / 3;
    state = u < 3.5 ? "DRY BITE — THE FANGS PUNCTURE, NO DETECTABLE VENOM" : "WET BITE — VENOM RUNS GLAND → DUCT → THE PORE SHORT OF EACH TIP";
  } else if (mode === "pressure") {
    const k = 0.5 - 0.5 * Math.cos((2 * Math.PI * u) / LOOP);
    spread = round(((facts.gape ?? 0) / 2) * k);
    a = 30;
    state = k > 0.5 ? "RAISED PRESSURE — THE BASES SPREAD AND LIFT" : "PRESSURE FALLS — THE BASES RETURN";
  } else {
    fore = round(0.3 + 0.7 * (0.5 + 0.5 * Math.cos((2 * Math.PI * u) / 3)));
    state = "TARANTULA — PARALLEL FANGS STRIKE DOWNWARD; SEEN HEAD-ON THEY ONLY FORESHORTEN";
  }
  a = round(a);

  const mirror = ([x, y]: Pt, side: Side): Pt => (side === "R" ? [W - x, y] : [x, y]);
  const sideToWorld = (p: Pt, side: Side): Pt => mirror(rot(p, spread, PIVOT), side);
  const fangToWorld = (p: Pt, side: Side): Pt => {
    const r = rot(p, a);
    return sideToWorld([r[0] + HINGE[0], r[1] + HINGE[1]], side);
  };
  const anchor = (sp: Spot): Pt => (sp.frame === "world" ? sp.p : sp.frame === "side" ? sideToWorld(sp.p, sp.side) : fangToWorld(sp.p, sp.side));

  /* the moving venom bead: first along the duct (70% of the trip), then along the fang canal */
  const bead = (part: "duct" | "canal") => {
    if (pulse === null) return { opacity: 0 };
    const q = part === "duct" ? pulse / 0.7 : (pulse - 0.7) / 0.3;
    if (q < 0 || q > 1) return { opacity: 0 };
    return { strokeDasharray: "14 200", strokeDashoffset: round(14 - q * 114) };
  };
  const porePulse = pulse !== null && pulse > 0.92;

  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });

  const side = (sd: Side) => (
    <g key={sd} transform={sd === "R" ? `translate(${W} 0) scale(-1 1)` : undefined}>
      <g transform={`rotate(${spread} ${PIVOT[0]} ${PIVOT[1]})`}>
        <ellipse cx={GLAND.c[0]} cy={GLAND.c[1]} rx={GLAND.rx} ry={GLAND.ry} className={`${s.gland} ${mode === "venom" ? s.glandOn : ""}`} />
        <path d={PATURON} className={s.paturon} />
        <path d={FLEXOR} className={`${s.muscle} ${mode === "bite" && a > 0 && u > 2.6 && u < 3.0 ? s.muscleOn : ""}`} />
        <path d={EXTENSOR} className={`${s.muscle} ${mode === "bite" && u > 1 && u < 1.8 ? s.muscleOn : ""}`} />
        <path d={GROOVE} className={s.groove} />
        <path d={DUCT} className={`${s.duct} ${mode === "venom" ? s.ductOn : ""}`} />
        <path d={DUCT} pathLength={100} className={s.bead} style={bead("duct")} />
        {mode === "tarantula" ? (
          <g transform={`translate(536 440) scale(1 ${fore}) rotate(90)`}>
            <path d={FANG} className={s.fang} />
          </g>
        ) : (
          <g transform={`translate(${HINGE[0]} ${HINGE[1]}) rotate(${a})`}>
            <path d={FANG} className={s.fang} />
            <path d={CANAL} className={`${s.canal} ${mode === "venom" ? s.ductOn : ""}`} />
            <path d={CANAL} pathLength={100} className={s.bead} style={bead("canal")} />
            <circle cx={PORE[0]} cy={PORE[1]} r={porePulse ? 5 : 3} className={`${s.pore} ${porePulse ? s.poreOn : ""}`} />
            <circle cx={0} cy={0} r={5} className={s.hinge} />
          </g>
        )}
      </g>
    </g>
  );

  const eyes: Pt[] = [-69, -23, 23, 69].flatMap((dx) => [[640 + dx, 92], [640 + dx * 1.12, 134]] as Pt[]);
  const showPressure = mode === "pressure" && facts.gape;

  return (
    <figure className={s.wrap} aria-label="Fang atlas: the halls on a widow's two chelicerae">
      <div className={s.head}>
        <span className="label">Fang atlas · adult female, front view · schematic, not to scale</span>
        <button type="button" className={s.toggle} onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="200 0 880 650" className={s.svg} role="img" aria-label="A widow's two chelicerae seen from the front: stout bases beneath the eight eyes, each with a hinged fang that folds into a groove and closes toward the other">
            {/* the front of the carapace, the clypeus edge and eight eyes */}
            <path className={s.carapace} d="M230 0 L1050 0 L1050 52 C990 148 862 198 640 204 C418 198 290 148 230 52 Z" />
            {eyes.map(([x, y], i) => (
              <circle key={i} cx={round(x)} cy={y} r={i % 2 === 0 && Math.abs(x - 640) < 30 ? 12 : 10} className={s.eye} />
            ))}
            <text x={640} y={44} textAnchor="middle" className={s.name}>EIGHT EYES</text>

            {side("L")}
            {side("R")}

            <text x={640} y={238} textAnchor="middle" className={s.nameSm}>MOUTH</text>
            <text x={430} y={330} textAnchor="end" className={s.name}>PATURON</text>
            {mode !== "tarantula" && (
              <text x={round(fangToWorld([70, 40], "L")[0] - 10)} y={round(fangToWorld([70, 40], "L")[1] + 10)} textAnchor="end" className={s.name}>FANG</text>
            )}
            {mode === "venom" && (
              <text x={448} y={60} textAnchor="end" className={s.name}>VENOM GLAND</text>
            )}
            {mode === "bite" && (
              <>
                <text x={850} y={292} className={s.nameSm}>FLEXOR</text>
                <text x={850} y={314} className={s.nameSm}>EXTENSOR</text>
              </>
            )}
            {showPressure && (
              <g className={s.arrows}>
                <path d={`M${round(sideToWorld([462, 440], "L")[0] - 14)} 470 l-40 0 m10 -8 l-10 8 l10 8`} />
                <path d={`M${round(sideToWorld([462, 440], "R")[0] + 14)} 470 l40 0 m-10 -8 l10 8 l-10 8`} />
              </g>
            )}

            {drawn.map((it) => {
              const sp = SPOTS[it.id];
              if (mode === "tarantula" && sp.frame === "fang") return null;
              const [x, y] = anchor(sp);
              const hot = on === it.id;
              return (
                <Link key={it.id} href={it.href} className={`${s.spot} ${hot ? s.hot : ""}`} {...hover(it.id)} aria-label={`Hall ${it.hall}: ${it.title} — ${it.kicker}`}>
                  <circle cx={x} cy={y} r={22} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 13 : 9} className={s.ring} />
                  <circle cx={x} cy={y} r={3.4} className={s.dot} />
                  {hot && (
                    <text x={sp.tag === "l" ? x - 30 : x + 30} y={y - 18} textAnchor={sp.tag === "l" ? "end" : "start"} className={s.tag}>
                      {it.title.toUpperCase()}
                    </text>
                  )}
                </Link>
              );
            })}

            <text x={230} y={630} className={s.state}>{state}</text>
          </svg>

          <div className={s.modes} role="group" aria-label="What the drawing shows">
            {MODES.map((m) => (
              <button
                key={m.key}
                type="button"
                className={`${s.mode} ${mode === m.key ? s.modeOn : ""}`}
                aria-pressed={mode === m.key}
                onClick={() => {
                  setMode(m.key);
                  setT(m.key === "bite" ? 2.2 : 0);
                }}
              >
                {m.label}
              </button>
            ))}
            <span className={s.modeNote}>
              {mode === "venom" && facts.dryShown && (
                <>
                  <span className={s.modeN}>{facts.dryShown}</span> of single defensive bites delivered no detectable venom ({facts.dryNote}).
                </>
              )}
              {mode === "pressure" && facts.gapeShown && (
                <>
                  <span className={s.modeN}>{facts.gapeShown}</span> added gape when fluid pressure was raised
                  {facts.sample ? ` in ${facts.sample} freshly killed female western widows` : ""} — an experimental change, drawn at true angle, not a live bite.
                </>
              )}
              {mode === "bite" && "Opening and closing angles are schematic; no widow hinge excursion has been measured."}
              {mode === "tarantula" && "Opposed versus parallel is a difference of direction, not of strength."}
            </span>
          </div>

          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Two fangs, closing toward each other like pincers. Touch a marker to open its hall.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link href={it.href} className={`${s.row} ${on === it.id ? s.rowOn : ""}`} {...hover(it.id)}>
                <span className={s.rowN}>{it.hall}</span>
                <span className={s.rowT}>{it.title}</span>
                {SPOTS[it.id] ? <span className={s.onMap} title="On the drawing" /> : <span />}
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
