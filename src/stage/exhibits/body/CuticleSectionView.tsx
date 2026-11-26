"use client";
/**
 * The drawing for the cuticle section: one slice through a widow's body
 * wall, from the waxy surface down to the living epidermis and a muscle
 * beneath. On the left the wall is a stiff plate; on the right it thins
 * into a folded joint membrane. Three modes:
 *
 *   layers  — peel the wall one layer at a time; a hair, a slit sensillum,
 *             pore canals and a tendon cell pass through it
 *   barrier — set the temperature and strip the lipid film; water vapour
 *             escapes accordingly (a qualitative curve — no absolute widow
 *             flux has been measured; the band and ratio arrive as data)
 *   molt    — apolysis → new cuticle beneath → ecdysis → expansion
 *
 * Thicknesses are schematic: no widow layer thickness has been measured.
 */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./CuticleSection.module.css";

export type CuticleItem = { id: string; title: string; kicker: string; href: string; hall: string };
export type BarrierFacts = { band: [number, number] | null; ratioShown: string | null; ratioNote: string | null };

type Pt = [number, number];
type Mode = "layers" | "barrier" | "molt";

/** Rounded so server and client trig agree to the pixel (no hydration drift). */
const round = (v: number) => Math.round(v * 10) / 10;
const ease = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

/* The wall, as functions of x. Plate on the left, membrane on the right. */
const X0 = 60, X1 = 1220, MEM0 = 900, MEM1 = 990;
const BASE = 380; // bottom of the cuticle / top of the epidermis
const EPI_H = 48;
const surf = (x: number) =>
  x <= MEM0 ? 140 : x >= MEM1 ? 214 + 13 * Math.sin((x - MEM1) / 24) : lerp(140, 214, ease((x - MEM0) / (MEM1 - MEM0)));
const epiB = (x: number) => surf(x) + 16;
const exoB = (x: number) => (x <= MEM0 ? 272 : x >= MEM1 ? epiB(x) : lerp(272, epiB(x), ease((x - MEM0) / (MEM1 - MEM0))));
const XS = Array.from({ length: Math.round((X1 - X0) / 8) + 1 }, (_, i) => X0 + i * 8);

const line = (f: (x: number) => number, xs = XS) => "M" + xs.map((x) => `${x} ${round(f(x))}`).join(" L");
const band = (top: (x: number) => number, bot: (x: number) => number, xs = XS) =>
  line(top, xs) + " L" + [...xs].reverse().map((x) => `${x} ${round(bot(x))}`).join(" L") + " Z";

/** Lamellae: lines inside a band; in the membrane they wave. */
function lamellae(top: (x: number) => number, bot: (x: number) => number, n: number, wave: boolean) {
  return Array.from({ length: n }, (_, k) => {
    const t = (k + 1) / (n + 1);
    return line((x) => {
      const y = lerp(top(x), bot(x), t);
      return wave && x > MEM0 ? y + 5 * Math.sin((x - MEM0) / 18 + k) * ease((x - MEM0) / 120) : y;
    });
  });
}
/** The rotating-plywood glyph: short fibre ticks whose angle turns from sheet to sheet. */
function plywood(top: number, bot: number, n: number) {
  const out: string[] = [];
  for (let k = 0; k < n; k++) {
    const y = round(lerp(top, bot, (k + 0.5) / n));
    const th = ((k * 180) / n) * (Math.PI / 180);
    const dx = round(Math.cos(th) * 6), dy = round(Math.sin(th) * 2.4);
    for (let x = 96; x <= 236; x += 20) out.push(`M${x - dx} ${y - dy} L${x + dx} ${y + dy}`);
  }
  return out.join(" ");
}

const PORES = [330, 470, 660, 790];
const pore = (x: number) => `M${x} ${BASE} C${x + 8} 340 ${x - 8} 300 ${x} 262 S${x + 8} 184 ${x} 142`;
const SETA_X = 230;
const SLIT_X = 560;
const TENDON_X = 420;
const CELLS = Array.from({ length: Math.round((X1 - X0) / 40) }, (_, i) => X0 + 2 + i * 40);

/* Barrier mode: deterministic vapour wisp slots. */
const WISP_SLOTS = Array.from({ length: 24 }, (_, i) => 110 + ((i * 7) % 24) * 46);
const wisp = (x: number) => {
  const y = round(surf(x) - 8);
  return `M${x} ${y} c-8 -16 8 -28 0 -44 c-8 -16 8 -28 0 -44`;
};

const PEEL = ["Lipid film", "Epicuticle", "Exocuticle", "Endocuticle"] as const;

/** Where each hall sits, per mode. */
type Spot = { modes: Mode[]; at: (g: Geo) => Pt; tag: "l" | "r" };
type Geo = { gap: number; newH: number };
const SPOTS: Record<string, Spot> = {
  "body.exoskeleton.layers": { modes: ["layers"], at: () => [130, 330], tag: "r" },
  "body.exoskeleton.gloss": { modes: ["layers"], at: () => [140, 126], tag: "r" },
  "body.exoskeleton.hairs": { modes: ["layers"], at: () => [306, 40], tag: "r" },
  "body.exoskeleton.apodemes-and-attachment": { modes: ["layers"], at: () => [TENDON_X, 500], tag: "r" },
  "body.exoskeleton.slits-and-strain": { modes: ["layers"], at: () => [SLIT_X, 214], tag: "r" },
  "body.exoskeleton.waterproofing": { modes: ["layers", "barrier"], at: () => [720, 132], tag: "l" },
  "body.exoskeleton.sclerotization": { modes: ["layers"], at: () => [820, 210], tag: "l" },
  "body.exoskeleton.materials": { modes: ["layers"], at: () => [860, 330], tag: "l" },
  "body.exoskeleton.hard-and-soft": { modes: ["layers"], at: () => [1090, 300], tag: "l" },
  "body.exoskeleton.molting-mechanics": { modes: ["molt"], at: (g) => [520, round(BASE + g.gap / 2)], tag: "r" },
  "body.exoskeleton.soft-after-molt": { modes: ["molt"], at: (g) => [820, round(BASE + g.gap - Math.max(g.newH, 12) / 2)], tag: "l" },
};

const MODES: { key: Mode; label: string }[] = [
  { key: "layers", label: "Layers" },
  { key: "barrier", label: "Water barrier" },
  { key: "molt", label: "Molting" },
];

function useClock(run: boolean) {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const last = useRef<number | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setPlaying(false));
      return () => cancelAnimationFrame(id);
    }
  }, []);
  useEffect(() => {
    if (!playing || !run) return;
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
  }, [playing, run]);
  return { t, setT, playing, setPlaying };
}

const MOLT_LOOP = 14;
function moltAt(u: number) {
  let gap = 0, newH = 0, oldDy = 0, oldOp = 1, shade = 0.25, text = "";
  if (u < 3.5) {
    gap = 70 * ease(u / 3);
    oldOp = ease(u / 0.6);
    text = "APOLYSIS — THE EPIDERMIS PULLS AWAY; MOLTING FLUID FILLS THE GAP";
  } else if (u < 7) {
    gap = 70;
    newH = 34 * ease((u - 3.5) / 3);
    text = "A NEW CUTICLE IS SECRETED BENEATH THE OLD ONE";
  } else if (u < 10) {
    gap = 70;
    newH = 34;
    const k = ease((u - 7) / 2.6);
    oldDy = -170 * k;
    oldOp = 1 - k;
    text = "ECDYSIS — THE OLD SHELL SPLITS AND IS LEFT BEHIND";
  } else {
    const k = ease((u - 10) / 3.4);
    oldOp = 0;
    gap = 70 * (1 - k);
    newH = lerp(34, BASE - 140, k);
    shade = lerp(0.25, 1, k);
    text = "EXPANSION — THE PALE NEW CUTICLE INFLATES, THICKENS AND HARDENS";
  }
  return { gap: round(gap), newH: round(newH), oldDy: round(oldDy), oldOp: round(oldOp), shade: round(shade), text };
}

export function CuticleSectionView({ items, barrier }: { items: CuticleItem[]; barrier: BarrierFacts }) {
  const [on, setOn] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("layers");
  const [peel, setPeel] = useState(0);
  const [temp, setTemp] = useState(30);
  const [scrubbed, setScrubbed] = useState(false);
  const visits = useVisits();
  const { t, setT, playing, setPlaying } = useClock(mode === "molt");

  const molt = mode === "molt" ? moltAt(t % MOLT_LOOP) : null;
  const geo: Geo = { gap: molt?.gap ?? 0, newH: molt?.newH ?? 0 };

  /* barrier: a logistic rise centred on the measured band; uncalibrated */
  const [lo, hi] = barrier.band ?? [45, 51];
  const mid = (lo + hi) / 2;
  const rise = 1 / (1 + Math.exp(-(temp - mid) / ((hi - lo) / 4)));
  const intensity = scrubbed ? 1 : 0.06 + 0.6 * rise;
  const nWisps = mode === "barrier" ? Math.round(1 + 23 * intensity) : 0;

  const filmGone = (mode === "layers" && peel >= 1) || (mode === "barrier" && scrubbed);
  const gone = (i: number) => mode === "layers" && peel > i;

  const active = items.find((i) => i.id === on) ?? null;
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });

  const cuticle = (
    <g>
      {/* endocuticle */}
      <g className={`${s.layer} ${gone(3) ? s.peeled : ""}`}>
        <path d={band(exoB, () => BASE)} className={s.endo} />
        {lamellae(exoB, () => BASE, 6, true).map((d, i) => (
          <path key={i} d={d} className={s.lam} />
        ))}
        <path d={plywood(290, 370, 6)} className={s.ply} />
        {!gone(3) && PORES.map((x) => <path key={x} d={pore(x)} className={s.pore} />)}
      </g>
      {/* exocuticle */}
      <g className={`${s.layer} ${gone(2) ? s.peeled : ""}`}>
        <path d={band(epiB, exoB)} className={s.exo} />
        {lamellae(epiB, exoB, 9, false).map((d, i) => (
          <path key={i} d={d} className={s.lamDense} />
        ))}
        <path d={plywood(166, 262, 9)} className={s.ply} />
        {/* the slit sensillum: a covered slot through the hard layers */}
        <path d={`M${SLIT_X - 3} 142 L${SLIT_X - 3} 250 Q${SLIT_X} 258 ${SLIT_X + 3} 250 L${SLIT_X + 3} 142 Z`} className={s.slit} />
      </g>
      {/* epicuticle */}
      <g className={`${s.layer} ${gone(1) ? s.peeled : ""}`}>
        <path d={band(surf, epiB)} className={s.epi} />
        <path d={`M${SLIT_X - 8} 141 Q${SLIT_X} 146 ${SLIT_X + 8} 141`} className={s.slitCap} />
      </g>
      {/* lipid film + one glint of gloss */}
      <g className={`${s.layer} ${filmGone ? s.peeled : ""}`}>
        <path d={line((x) => surf(x) - 2.5)} className={s.film} />
        <ellipse cx={150} cy={137} rx={26} ry={2.6} className={s.glint} />
      </g>
      {/* the seta in its socket */}
      <g className={`${s.layer} ${gone(2) ? s.peeled : ""}`}>
        <ellipse cx={SETA_X} cy={141} rx={16} ry={6} className={s.socket} />
        <path d={`M${SETA_X - 4} 140 C${SETA_X + 2} 100 ${SETA_X + 32} 60 ${SETA_X + 76} 36 C${SETA_X + 38} 64 ${SETA_X + 10} 102 ${SETA_X + 4} 140 Z`} className={s.seta} />
        <path d={`M${SETA_X} 146 L${SETA_X} ${BASE}`} className={s.dendrite} />
      </g>
      <path d={`M${SLIT_X} 256 L${SLIT_X} ${BASE}`} className={`${s.dendrite} ${gone(2) ? s.peeledLine : ""}`} />
    </g>
  );

  const epidermis = (dy: number) => (
    <g transform={dy ? `translate(0 ${dy})` : undefined}>
      {CELLS.map((x) => {
        const tendon = Math.abs(x + 18 - TENDON_X) < 20;
        return (
          <g key={x}>
            <rect x={x} y={BASE + 2} width={36} height={tendon ? EPI_H + 10 : EPI_H} rx={9} className={tendon ? s.tendonCell : s.cell} />
            <circle cx={x + 18} cy={BASE + 24} r={5} className={s.nucleus} />
          </g>
        );
      })}
      {/* muscle pulling on the tendon cell */}
      <path d={`M${TENDON_X - 30} ${BASE + EPI_H + 10} L${TENDON_X - 48} 600 L${TENDON_X + 48} 600 L${TENDON_X + 30} ${BASE + EPI_H + 10} Z`} className={s.muscle} />
      {[-30, -15, 0, 15, 30].map((d) => (
        <path key={d} d={`M${TENDON_X + d * 0.8} ${BASE + EPI_H + 12} L${TENDON_X + d * 1.5} 598`} className={s.fibre} />
      ))}
    </g>
  );

  /* molt mode: the new cuticle growing on the epidermis */
  const newTop = (x: number) => (molt ? Math.max(surf(x), BASE + molt.gap - molt.newH) : BASE);
  const newBot = () => BASE + (molt?.gap ?? 0);
  const newCuticle =
    molt && molt.newH > 0 ? (
      <g>
        <path d={band(newTop, newBot)} className={s.newCut} style={{ fillOpacity: molt.shade }} />
        {molt.newH > 24 &&
          lamellae(newTop, newBot, Math.min(9, Math.round(molt.newH / 22)), true).map((d, i) => (
            <path key={i} d={d} className={s.lam} style={{ opacity: round(0.2 + 0.5 * molt.shade) }} />
          ))}
      </g>
    ) : null;

  const peelNext = () => setPeel((p) => (p + 1) % (PEEL.length + 1));

  return (
    <figure className={s.wrap} aria-label="Cuticle section: the halls on one slice of a widow's body wall">
      <div className={s.head}>
        <span className="label">Cuticle section · body wall, plate to joint membrane · schematic, not to scale</span>
        {mode === "molt" && (
          <button type="button" className={s.toggle} onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="-120 0 1360 620" className={s.svg} role="img" aria-label="A slice through a widow's cuticle: a thin waxy film and epicuticle over thick laminated exocuticle and endocuticle, the living epidermis below with a muscle attached; on the right the wall thins into a folded joint membrane">
            {/* wisps of water vapour */}
            {WISP_SLOTS.slice(0, nWisps).map((x, i) => (
              <path key={x} d={wisp(x)} className={s.wisp} style={{ animationDelay: `${(i % 6) * 0.42}s` }} />
            ))}

            {mode === "molt" ? (
              <>
                {molt && molt.gap > 2 && <rect x={X0} y={BASE} width={X1 - X0} height={molt.gap} className={s.fluid} />}
                {epidermis(molt?.gap ?? 0)}
                {newCuticle}
                {molt && molt.oldOp > 0 && (
                  <g transform={`translate(0 ${molt.oldDy})`} style={{ opacity: molt.oldOp }}>
                    {cuticle}
                  </g>
                )}
              </>
            ) : (
              <>
                {epidermis(0)}
                {cuticle}
              </>
            )}

            {/* names */}
            {mode !== "molt" && (
              <g className={s.names}>
                {!filmGone && <text x={X1 - 20} y={124} textAnchor="end">LIPID FILM</text>}
                <text x={44} y={154} textAnchor="end" className={gone(1) ? s.nameGone : ""}>EPICUTICLE</text>
                <text x={44} y={222} textAnchor="end" className={gone(2) ? s.nameGone : ""}>EXOCUTICLE</text>
                <text x={44} y={332} textAnchor="end" className={gone(3) ? s.nameGone : ""}>ENDOCUTICLE</text>
                <text x={44} y={BASE + 30} textAnchor="end">EPIDERMIS</text>
                <text x={TENDON_X + 64} y={590}>MUSCLE</text>
                {mode === "layers" && (
                  <>
                    <text x={1100} y={190} textAnchor="middle">JOINT MEMBRANE</text>
                    <text x={SETA_X + 84} y={30}>SETA</text>
                    {!gone(2) && <text x={SLIT_X + 12} y={128}>SLIT</text>}
                  </>
                )}
              </g>
            )}
            {mode === "molt" && molt && (
              <g className={s.names}>
                {molt.oldOp > 0.3 && <text x={X1 - 20} y={round(124 + molt.oldDy)} textAnchor="end">OLD CUTICLE</text>}
                {molt.newH > 10 && <text x={X1 - 20} y={round(BASE + molt.gap - molt.newH + 22)} textAnchor="end">NEW CUTICLE</text>}
                {molt.gap > 30 && molt.oldOp > 0.3 && <text x={44} y={round(BASE + molt.gap / 2 + 5)} textAnchor="end">MOLTING FLUID</text>}
                <text x={44} y={round(BASE + molt.gap + 30)} textAnchor="end">EPIDERMIS</text>
              </g>
            )}

            {items.map((it) => {
              const sp = SPOTS[it.id];
              if (!sp || !sp.modes.includes(mode)) return null;
              const [x, y] = sp.at(geo);
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

            <text x={-100} y={612} className={s.state}>
              {mode === "layers" && (peel === 0 ? "THE WHOLE WALL — TOUCH “PEEL” TO REMOVE IT LAYER BY LAYER" : `PEELED AWAY: ${PEEL.slice(0, peel).join(" · ").toUpperCase()}`)}
              {mode === "barrier" && `${temp} °C · LIPID FILM ${scrubbed ? "SCRUBBED AWAY (EXPERIMENT)" : "INTACT"}`}
              {mode === "molt" && molt?.text}
            </text>
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
                  setT(0);
                  setPeel(0);
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          {mode === "layers" && (
            <div className={s.controls}>
              <button type="button" className={s.action} onClick={peelNext}>
                {peel < PEEL.length ? `Peel: ${PEEL[peel]}` : "Restore the wall"}
              </button>
              <span className={s.note}>Three cuticle regions over one living cell layer. Thicknesses are drawn, not measured.</span>
            </div>
          )}

          {mode === "barrier" && (
            <div className={s.controls}>
              <label className={s.slider}>
                <span className="label">Temperature</span>
                <input type="range" min={20} max={60} step={1} value={temp} onChange={(e) => setTemp(Number(e.target.value))} aria-valuetext={`${temp} degrees Celsius`} />
                <span className={s.sliderN}>{temp} °C</span>
              </label>
              <button type="button" className={`${s.action} ${scrubbed ? s.actionOn : ""}`} aria-pressed={scrubbed} onClick={() => setScrubbed((v) => !v)}>
                {scrubbed ? "Restore the lipid film" : "Scrub off the lipids"}
              </button>
              <svg viewBox="0 0 300 100" className={s.chart} role="img" aria-label="Water loss rises with temperature, steeply within the measured band; scrubbing off the lipids raises it far more">
                {barrier.band && <rect x={round(10 + ((lo - 20) / 40) * 280)} y={6} width={round(((hi - lo) / 40) * 280)} height={78} className={s.bandRect} />}
                <path d={"M" + Array.from({ length: 41 }, (_, i) => { const T = 20 + i; const r = 1 / (1 + Math.exp(-(T - mid) / ((hi - lo) / 4))); return `${round(10 + i * 7)} ${round(84 - (0.06 + 0.6 * r) * 70)}`; }).join(" L")} className={s.curve} />
                <path d="M10 14 L290 14" className={s.curveScrub} />
                <circle cx={round(10 + ((temp - 20) / 40) * 280)} cy={round(84 - intensity * 70)} r={4} className={s.marker} />
                <text x={10} y={98} className={s.axis}>20 °C</text>
                <text x={290} y={98} textAnchor="end" className={s.axis}>60 °C</text>
                {barrier.band && <text x={round(10 + ((mid - 20) / 40) * 280)} y={4} textAnchor="middle" className={s.axis}>{lo}–{hi} °C</text>}
              </svg>
              <span className={s.note}>
                {barrier.ratioShown && (
                  <>
                    <span className={s.noteN}>{barrier.ratioShown}</span> more water lost with the lipids removed ({barrier.ratioNote}).{" "}
                  </>
                )}
                Permeability rises fastest in the shaded band. The vertical scale is uncalibrated — no absolute widow rate was recovered.
              </span>
            </div>
          )}

          {mode === "molt" && (
            <div className={s.controls}>
              <span className={s.note}>The sequence is schematic and untimed; no widow hardening time has been measured.</span>
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
              <span className={s.capHint}>One slice of armour, from wax to living cells. Touch a marker to open its hall.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link href={it.href} className={`${s.row} ${on === it.id ? s.rowOn : ""}`} {...hover(it.id)}>
                <span className={s.rowN}>{it.hall}</span>
                <span className={s.rowT}>{it.title}</span>
                {SPOTS[it.id] ? <span className={s.onMap} title="On the section" /> : <span />}
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
