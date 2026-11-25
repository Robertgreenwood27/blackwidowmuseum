"use client";
/**
 * The drawing for the tract map: a female widow's abdomen seen from below,
 * front to the left, with the genital region enlarged. Three modes trace the
 * system's separate journeys:
 *   in   — the male's route: atrium → copulatory opening → coiled duct → store
 *   out  — later: stored sperm leave by the fertilisation ducts; eggs come
 *          down the oviduct; both reach the gonopore in the epigastric furrow
 *   tips — where broken embolus tips have been found lodged
 * Insemination and egg-laying never share a passage: eggs do not travel
 * through the copulatory ducts or the stores. Everything else is schematic.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./TractMap.module.css";

export type TractItem = { id: string; title: string; kicker: string; href: string; hall: string };
type Pt = [number, number];
const round = (v: number) => Math.round(v * 10) / 10;

/* ---- geometry (front of the animal to the left; the spider's left side up) ---- */
const MID = 380;
const ATRIUM: Pt = [232, MID];
const OPEN = (k: 1 | -1): Pt => [252, MID + k * 24];
/** Each store is a dumbbell: anterior lobe (entry) and posterior lobe (exit). */
const LOBE_A = (k: 1 | -1): Pt => [304, MID + k * 132];
const LOBE_P = (k: 1 | -1): Pt => [364, MID + k * 110];
const GONOPORE: Pt = [430, MID];
const FURROW_X = 430;

/** A coiled duct: a looping path from the opening, out laterally, and back to the anterior lobe. */
function ductPath(k: 1 | -1) {
  const a = OPEN(k);
  const b: Pt = [LOBE_A(k)[0] - 6, LOBE_A(k)[1] - k * 22];
  const ctl: Pt = [150, MID + k * 150];
  const loops = 4, steps = 200, r = 18;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    /* quadratic Bézier spine, bulging outward toward the front */
    const x = (1 - u) ** 2 * a[0] + 2 * (1 - u) * u * ctl[0] + u * u * b[0];
    const y = (1 - u) ** 2 * a[1] + 2 * (1 - u) * u * ctl[1] + u * u * b[1];
    const th = u * loops * Math.PI * 2;
    const fade = Math.sin(Math.PI * u);
    pts.push(`${round(x + Math.cos(th) * r * fade - r * fade)} ${round(y + k * Math.sin(th) * r * fade)}`);
  }
  return "M" + pts.join(" L");
}
const fertPath = (k: 1 | -1) => {
  const p = LOBE_P(k);
  return `M${p[0] + 10} ${p[1] - k * 10} C${p[0] + 40} ${p[1] - k * 30} ${GONOPORE[0] - 30} ${MID + k * 30} ${GONOPORE[0] - 4} ${MID + k * 4}`;
};
/** Ovaries: two long tubes along the abdomen, joined by oviducts to a median passage at the gonopore. */
const OVARY = (k: 1 | -1) => `M530 ${MID + k * 92} C620 ${MID + k * 150} 860 ${MID + k * 150} 1060 ${MID + k * 88}`;
const OVIDUCT = (k: 1 | -1) => `M530 ${MID + k * 92} C490 ${MID + k * 60} 470 ${MID + k * 8} ${GONOPORE[0] + 6} ${MID}`;
const EGG_ROUTE = (k: 1 | -1) => `M820 ${MID + k * 138} C720 ${MID + k * 148} 590 ${MID + k * 128} 530 ${MID + k * 92} C490 ${MID + k * 60} 470 ${MID + k * 8} ${GONOPORE[0] + 6} ${MID} L${GONOPORE[0] - 34} ${MID}`;

/** Oocytes budding on stalks along each ovary; deterministic sizes. */
function oocytes(k: 1 | -1) {
  return Array.from({ length: 9 }, (_, i) => {
    const u = 0.08 + i * 0.105;
    const x = 530 + (1060 - 530) * u;
    const y = MID + k * (92 + 58 * Math.sin(Math.PI * u) * 1.0);
    const rr = 6 + ((i * 5) % 4) * 3 + (i > 3 && i < 7 ? 5 : 0);
    const out = k * (rr + 6);
    return { x: round(x), y: round(y), cy: round(y + out), r: rr, yolk: rr > 12 };
  });
}

/** Lodged tip positions, from the dissection literature: entrance, inside the store, stranded in a duct. */
const TIPS: { p: Pt; rot: number }[] = [
  { p: [292, MID - 108], rot: -60 },
  { p: [302, MID - 104], rot: -30 },
  { p: [306, MID - 136], rot: 10 },
  { p: [292, MID + 108], rot: 60 },
  { p: [186, MID + 96], rot: 120 },
];

type Mode = "in" | "out" | "tips";
const MODES: { id: Mode; label: string; text: string }[] = [
  { id: "in", label: "Insemination", text: "THE MALE'S ROUTE — ATRIUM, COILED DUCT, STORE" },
  { id: "out", label: "Fertilisation & laying", text: "LATER — SPERM LEAVE BY ANOTHER DUCT; EGGS COME DOWN THE OVIDUCT" },
  { id: "tips", label: "Lodged tips", text: "WHERE BROKEN EMBOLUS TIPS HAVE BEEN FOUND" },
];

/** Where each hall is drawn. Keyed by permanent exhibit id. */
const SPOTS: Record<string, { p: Pt; side: "l" | "r" }> = {
  "body.epigynum.the-plate": { p: [ATRIUM[0], MID], side: "l" },
  "body.epigynum.becoming-adult": { p: [ATRIUM[0] + 2, MID + 50], side: "r" },
  "body.epigynum.copulatory-ducts": { p: [176, MID - 104], side: "l" },
  "body.epigynum.spermathecae": { p: [LOBE_A(-1)[0], LOBE_A(-1)[1]], side: "l" },
  "body.epigynum.storage": { p: [LOBE_P(1)[0], LOBE_P(1)[1]], side: "r" },
  "body.epigynum.fertilisation": { p: [404, MID - 52], side: "r" },
  "body.epigynum.laying": { p: [GONOPORE[0], MID], side: "r" },
  "body.epigynum.ovaries": { p: [760, MID - 136], side: "r" },
  "body.epigynum.plugged": { p: [284, MID + 96], side: "l" },
};

export function TractMapView({ items }: { items: TractItem[] }) {
  const [on, setOn] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("in");
  const [still, setStill] = useState(false);
  const visits = useVisits();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setStill(true));
      return () => cancelAnimationFrame(id);
    }
  }, []);
  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });
  const sides = [-1, 1] as const;
  const lit = (m: Mode) => (mode === m ? s.lit : "");

  return (
    <figure className={s.wrap} aria-label="Tract map: the halls of the female reproductive system">
      <div className={s.head}>
        <span className="label">Tract map · female, seen from below, front to the left · schematic, genital region enlarged</span>
      </div>
      <div className={s.modes} role="group" aria-label="Which journey to trace">
        {MODES.map((m) => (
          <button key={m.id} type="button" className={`${s.mode} ${mode === m.id ? s.modeOn : ""}`} aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>
            {m.label}
          </button>
        ))}
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="0 140 1280 480" className={s.svg} role="img" aria-label="A female widow's reproductive system: a genital plate opening into two coiled ducts and two sperm stores, separate fertilisation ducts, and two ovaries leading to the gonopore">
            {/* the abdomen, from below; pedicel at the left, spinnerets at the right */}
            <path className={s.body} d="M70 380 C70 250 180 160 420 150 C760 140 1120 210 1210 380 C1120 550 760 620 420 610 C180 600 70 510 70 380 Z" />
            <rect x={34} y={MID - 14} width={40} height={28} rx={8} className={s.body} />
            <g className={s.spinnerets}>
              <ellipse cx={1214} cy={MID - 10} rx={10} ry={7} />
              <ellipse cx={1214} cy={MID + 10} rx={10} ry={7} />
            </g>
            {/* the hourglass outline: same underside, farther back */}
            <path className={s.hourglass} d="M900 330 L1010 330 L966 380 L1010 430 L900 430 L944 380 Z" />
            {/* epigastric furrow with the book-lung slits at its ends */}
            <path className={s.furrow} d={`M${FURROW_X} ${MID - 176} Q${FURROW_X + 14} ${MID} ${FURROW_X} ${MID + 176}`} />
            {sides.map((k) => (
              <path key={k} className={s.lung} d={`M${FURROW_X - 4} ${MID + k * 128} q16 ${k * 14} 8 ${k * 36}`} />
            ))}
            <text x={FURROW_X + 16} y={MID - 112} className={s.name}>EPIGASTRIC FURROW</text>
            <text x={FURROW_X + 20} y={MID + 168} className={s.name}>BOOK-LUNG SLIT</text>

            {/* the plate */}
            <ellipse cx={ATRIUM[0]} cy={MID} rx={34} ry={56} className={s.plate} />
            <path className={s.atrium} d={`M${ATRIUM[0] + 4} ${MID - 26} q14 26 0 52`} />

            {/* ovaries and oviducts */}
            {sides.map((k) => (
              <g key={`ov${k}`} className={`${s.ovary} ${lit("out")}`}>
                <path d={OVARY(k)} className={s.ovTube} />
                <path d={OVIDUCT(k)} className={s.oviduct} />
                {oocytes(k).map((o, i) => (
                  <g key={i}>
                    <line x1={o.x} y1={o.y} x2={o.x} y2={round(o.cy - k * o.r)} className={s.stalk} />
                    <circle cx={o.x} cy={o.cy} r={o.r} className={o.yolk ? s.yolk : s.oocyte} />
                  </g>
                ))}
              </g>
            ))}

            {/* copulatory ducts, stores, fertilisation ducts */}
            {sides.map((k) => (
              <g key={`tr${k}`}>
                <path d={ductPath(k)} className={`${s.duct} ${lit("in")}`} />
                <path d={fertPath(k)} className={`${s.fert} ${lit("out")}`} />
                <line x1={LOBE_A(k)[0]} y1={LOBE_A(k)[1]} x2={LOBE_P(k)[0]} y2={LOBE_P(k)[1]} className={s.waist} />
                <circle cx={LOBE_A(k)[0]} cy={LOBE_A(k)[1]} r={20} className={s.lobe} />
                <circle cx={LOBE_P(k)[0]} cy={LOBE_P(k)[1]} r={17} className={s.lobe} />
              </g>
            ))}
            <circle cx={GONOPORE[0]} cy={MID} r={6} className={s.gonopore} />

            {/* part names */}
            <text x={ATRIUM[0] - 44} y={MID + 5} textAnchor="end" className={s.name}>EPIGYNUM</text>
            <text x={LOBE_A(-1)[0] + 26} y={LOBE_A(-1)[1] - 28} className={s.name}>SPERMATHECA</text>
            <text x={760} y={MID + 4} textAnchor="middle" className={s.name}>OVARIES</text>
            <text x={955} y={455} textAnchor="middle" className={s.nameDim}>HOURGLASS</text>

            {/* the moving journeys (declarative, so the server markup needs no clock) */}
            {!still && mode === "in" &&
              sides.map((k) => (
                <circle key={`m${k}`} r={5} className={s.sperm}>
                  <animateMotion dur="4.2s" repeatCount="indefinite" path={ductPath(k)} begin={k === 1 ? "0.9s" : "0s"} />
                </circle>
              ))}
            {!still && mode === "out" && (
              <>
                {sides.map((k) => (
                  <circle key={`f${k}`} r={4} className={s.sperm}>
                    <animateMotion dur="2.6s" repeatCount="indefinite" path={fertPath(k)} begin={k === 1 ? "0.6s" : "0s"} />
                  </circle>
                ))}
                {sides.map((k) =>
                  [0, 1.6].map((d) => (
                    <circle key={`e${k}${d}`} r={9} className={s.egg}>
                      <animateMotion dur="4.8s" repeatCount="indefinite" path={EGG_ROUTE(k)} begin={`${d + (k === 1 ? 0.8 : 0)}s`} />
                    </circle>
                  )),
                )}
              </>
            )}
            {mode === "tips" &&
              TIPS.map((t, i) => <path key={i} className={s.tip} transform={`translate(${t.p[0]} ${t.p[1]}) rotate(${t.rot}) scale(1.6)`} d="M-7 3 C-4 -4 4 4 7 -3" />)}

            {drawn.map((it) => {
              const { p: [x, y], side } = SPOTS[it.id];
              const hot = on === it.id;
              return (
                <Link key={it.id} href={it.href} className={`${s.spot} ${hot ? s.hot : ""}`} {...hover(it.id)} aria-label={`Hall ${it.hall}: ${it.title} — ${it.kicker}`}>
                  <circle cx={x} cy={y} r={20} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 12 : 8} className={s.ring} />
                  <circle cx={x} cy={y} r={3.2} className={s.dot} />
                  {hot && (
                    <text x={side === "l" ? x - 26 : x + 26} y={y - 16} textAnchor={side === "l" ? "end" : "start"} className={s.tag}>
                      {it.title.toUpperCase()}
                    </text>
                  )}
                </Link>
              );
            })}

            <text x={40} y={606} className={s.state}>{MODES.find((m) => m.id === mode)!.text}</text>
          </svg>

          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Sperm come in by one route and leave by another; eggs never pass through the stores. Touch a marker to open its hall.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link href={it.href} className={`${s.row} ${on === it.id ? s.rowOn : ""}`} {...hover(it.id)}>
                <span className={s.rowN}>{it.hall}</span>
                <span className={s.rowT}>{it.title}</span>
                {SPOTS[it.id] ? <span className={s.onMap} title="On the map" /> : <span />}
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
