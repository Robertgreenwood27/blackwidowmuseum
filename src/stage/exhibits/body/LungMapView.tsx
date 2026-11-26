"use client";
/**
 * The drawing for the lung map. Three modes:
 *
 *   air      — the underside of a female's abdomen: air drifts into the two
 *              lung slits at the ends of the epigastric furrow and into the
 *              single tracheal slit before the spinnerets. Where the widow's
 *              tubes go inside has not been mapped, so they stay dashed.
 *   lung     — inside one book lung: air spaces propped by struts alternate
 *              with hemolymph spaces braced by pillar cells; oxygen crosses
 *              the wall and is carried off toward the heart.
 *   hypoxia  — the western-widow low-oxygen experiment; the treatments and
 *              outcomes arrive as data from the hall.
 *
 * Everything is schematic: no widow page count, spacing or flow speed exists.
 */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./LungMap.module.css";

export type LungItem = { id: string; title: string; kicker: string; href: string; hall: string };
export type Treatment = { oxygen: number; temp: number; mortality: number; note: string };

type Pt = [number, number];
type Mode = "air" | "lung" | "hypoxia";

const round = (v: number) => Math.round(v * 10) / 10;

/** Position along a polyline at fraction k (0..1). */
function along(pts: Pt[], k: number): Pt {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  const total = seg.reduce((a, b) => a + b, 0);
  let d = Math.max(0, Math.min(1, k)) * total;
  for (let i = 0; i < seg.length; i++) {
    if (d <= seg[i] || i === seg.length - 1) {
      const f = seg[i] ? Math.min(1, d / seg[i]) : 0;
      return [round(pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f), round(pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f)];
    }
    d -= seg[i];
  }
  return pts[pts.length - 1];
}

/* ---- the underside ---- */
const C: Pt = [600, 330];
const SLIT_L: Pt = [438, 170];
const SLIT_R: Pt = [762, 170];
const TRACH: Pt = [600, 560];
const AIR_PATHS: Pt[][] = [
  [[250, 110], [380, 150], SLIT_L, [430, 214], [452, 250]],
  [[950, 110], [820, 150], SLIT_R, [770, 214], [748, 250]],
  [[600, 700], [600, 640], TRACH, [600, 520], [600, 480]],
];
/** Book-lung pages under a slit, drawn as a dashed cutaway. */
function pages(cx: number, mirror: 1 | -1) {
  return Array.from({ length: 7 }, (_, i) => {
    const y = 192 + i * 10;
    return `M${cx - 46 * mirror} ${y} Q${cx} ${y - 8} ${cx + 46 * mirror} ${y + 4}`;
  });
}
const HOURGLASS = "M570 300 L630 300 L606 340 L630 380 L570 380 L594 340 Z";

/* ---- inside a lung ---- */
const BANDS = 9; // alternating, starting and ending with air
const BAND_H = 30;
const LX0 = 190, LX1 = 1040, LY0 = 160;
const bandY = (k: number) => LY0 + k * BAND_H;
const isAir = (k: number) => k % 2 === 0;
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  band: (i % 5) * 2, // an air band
  x0: 220 + ((i * 97) % 420),
  phase: (i * 0.37) % 1,
  down: i % 2 === 0 ? 1 : -1,
}));

/* ---- hall spots ---- */
type Spot = { modes: Mode[]; p: Pt; tag: "l" | "r" };
const SPOTS: Record<string, Spot> = {
  "body.breathing.two-systems": { modes: ["air"], p: [600, 100], tag: "r" },
  "body.breathing.spiracles": { modes: ["air"], p: [SLIT_R[0], SLIT_R[1] - 26], tag: "r" },
  "body.breathing.book-lung": { modes: ["air", "lung"], p: [452, 232], tag: "l" },
  "body.breathing.tracheae": { modes: ["air"], p: [640, 500], tag: "r" },
  "body.breathing.exchange": { modes: ["lung"], p: [620, bandY(4) + 2], tag: "r" },
  "body.breathing.development": { modes: ["lung"], p: [LX1 - 30, bandY(BANDS) + 20], tag: "l" },
  "body.breathing.submersion": { modes: ["hypoxia"], p: [600, 120], tag: "r" },
  "body.breathing.temperature": { modes: ["hypoxia"], p: [820, 300], tag: "r" },
};

const MODES: { key: Mode; label: string }[] = [
  { key: "air", label: "Air in" },
  { key: "lung", label: "Inside a lung" },
  { key: "hypoxia", label: "Low oxygen" },
];

function useClock() {
  const [t, setT] = useState(1.3);
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

export function LungMapView({ items, treatments }: { items: LungItem[]; treatments: Treatment[] }) {
  const [on, setOn] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("air");
  const oxygens = [...new Set(treatments.map((x) => x.oxygen))].sort((a, b) => b - a);
  const temps = [...new Set(treatments.map((x) => x.temp))].sort((a, b) => a - b);
  const [oxy, setOxy] = useState(oxygens[0] ?? 2);
  const [temp, setTemp] = useState(temps[0] ?? 1);
  const visits = useVisits();
  const { t, playing, setPlaying } = useClock();

  const result = treatments.find((x) => x.oxygen === oxy && x.temp === temp) ?? null;

  const active = items.find((i) => i.id === on) ?? null;
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });

  /* ---- air mode ---- */
  const airDots =
    mode === "air"
      ? AIR_PATHS.flatMap((path, pi) =>
          Array.from({ length: 5 }, (_, j) => {
            const k = ((t / 4 + j / 5 + pi * 0.13) % 1 + 1) % 1;
            const [x, y] = along(path, k);
            return <circle key={`${pi}-${j}`} cx={x} cy={y} r={3.2} className={s.air} style={{ opacity: round(Math.min(1, k * 4, (1 - k) * 4)) }} />;
          }),
        )
      : null;

  const underside = (
    <g>
      <path d="M582 40 L618 40 L612 70 L588 70 Z" className={s.pedicel} />
      <ellipse cx={C[0]} cy={C[1]} rx={300} ry={262} className={s.abdomen} />
      {/* epigastric furrow, lung slits, epigynum */}
      <path d="M410 176 Q600 140 790 176" className={s.furrow} />
      <path d={`M${SLIT_L[0] - 22} ${SLIT_L[1] + 6} Q${SLIT_L[0]} ${SLIT_L[1] - 6} ${SLIT_L[0] + 22} ${SLIT_L[1] - 4}`} className={s.slit} />
      <path d={`M${SLIT_R[0] - 22} ${SLIT_R[1] - 4} Q${SLIT_R[0]} ${SLIT_R[1] - 6} ${SLIT_R[0] + 22} ${SLIT_R[1] + 6}`} className={s.slit} />
      <path d="M576 128 Q600 112 624 128 Q620 146 600 148 Q580 146 576 128 Z" className={s.epigynum} />
      {/* book-lung cutaways */}
      {pages(445, 1).map((d, i) => <path key={`l${i}`} d={d} className={s.page} />)}
      {pages(755, -1).map((d, i) => <path key={`r${i}`} d={d} className={s.page} />)}
      <path d={HOURGLASS} className={s.hourglass} />
      {/* rear tracheal slit, unmapped tubes, spinnerets */}
      <path d={`M${TRACH[0] - 26} ${TRACH[1]} Q${TRACH[0]} ${TRACH[1] - 5} ${TRACH[0] + 26} ${TRACH[1]}`} className={s.slit} />
      <path d="M592 552 C580 520 566 500 556 474 M608 552 C620 520 634 500 644 474" className={s.tube} />
      <text x={556} y={462} textAnchor="middle" className={s.q}>?</text>
      <text x={644} y={462} textAnchor="middle" className={s.q}>?</text>
      {[-16, 0, 16].map((dx) => (
        <ellipse key={dx} cx={600 + dx} cy={588} rx={8} ry={12} className={s.spinneret} />
      ))}
      <g className={s.names}>
        <text x={600} y={30} textAnchor="middle">PEDICEL — TOWARD THE HEAD</text>
        <text x={300} y={176} textAnchor="end">LUNG SLIT</text>
        <text x={600} y={204} textAnchor="middle">EPIGASTRIC FURROW</text>
        <text x={672} y={128}>EPIGYNUM</text>
        <text x={240} y={266} textAnchor="end">BOOK LUNG</text>
        <text x={672} y={568}>TRACHEAL SLIT</text>
        <text x={672} y={480}>TUBES — UNMAPPED</text>
        <text x={630} y={614}>SPINNERETS</text>
      </g>
      <path d="M306 172 L414 170 M246 262 L404 230" className={s.leader} />
    </g>
  );

  /* ---- lung mode ---- */
  const lung = (
    <g>
      {/* the atrium: open air chamber feeding every air space */}
      <rect x={LX0 - 60} y={LY0 - 10} width={60} height={BANDS * BAND_H + 20} rx={16} className={s.atrium} />
      <path d={`M${LX0 - 90} ${LY0 + (BANDS * BAND_H) / 2} l40 0 m-10 -8 l10 8 l-10 8`} className={s.arrowIn} />
      {Array.from({ length: BANDS }, (_, k) => (
        <g key={k}>
          <rect x={LX0} y={bandY(k)} width={LX1 - LX0} height={BAND_H} className={isAir(k) ? s.airBand : s.hemoBand} />
          {isAir(k)
            ? Array.from({ length: 17 }, (_, i) => <line key={i} x1={LX0 + 24 + i * 48} x2={LX0 + 24 + i * 48} y1={bandY(k) + 2} y2={bandY(k) + 9} className={s.strut} />)
            : Array.from({ length: 14 }, (_, i) => <circle key={i} cx={LX0 + 40 + i * 58} cy={bandY(k) + BAND_H / 2} r={6} className={s.pillar} />)}
        </g>
      ))}
      {Array.from({ length: BANDS + 1 }, (_, k) => (
        <line key={k} x1={LX0} x2={LX1} y1={bandY(k)} y2={bandY(k)} className={s.wall} />
      ))}
      {/* hemolymph flows out to the right */}
      <path d={`M${LX1 + 10} ${LY0 + (BANDS * BAND_H) / 2} l60 0 m-10 -8 l10 8 l-10 8`} className={s.arrowOut} />
      {PARTICLES.map((p, i) => {
        const u = ((t / 5 + p.phase) % 1 + 1) % 1;
        const airY = bandY(p.band) + BAND_H / 2 + 4;
        const target = Math.max(1, Math.min(BANDS - 2, p.band + p.down));
        const hemoY = bandY(target) + BAND_H / 2;
        let x: number, y: number, bound: boolean;
        if (u < 0.45) {
          x = p.x0 + (u / 0.45) * 90;
          y = airY;
          bound = false;
        } else if (u < 0.58) {
          const k = (u - 0.45) / 0.13;
          x = p.x0 + 90;
          y = airY + (hemoY - airY) * k;
          bound = k > 0.5;
        } else {
          x = p.x0 + 90 + ((u - 0.58) / 0.42) * (LX1 - p.x0 - 90);
          y = hemoY;
          bound = true;
        }
        return <circle key={i} cx={round(x)} cy={round(y)} r={3.6} className={bound ? s.o2Bound : s.o2} />;
      })}
      <g className={s.names}>
        <text x={LX0 - 30} y={LY0 - 22} textAnchor="middle">ATRIUM</text>
        <text x={LX0 + 8} y={bandY(0) - 8}>AIR SPACE — STRUTS HOLD IT OPEN</text>
        <text x={LX0 + 8} y={bandY(BANDS) + 24}>HEMOLYMPH SPACE — PILLAR CELLS BRACE IT</text>
        <text x={LX1 + 20} y={LY0 + (BANDS * BAND_H) / 2 - 18}>TO THE HEART</text>
        <text x={LX1 + 20} y={LY0 + (BANDS * BAND_H) / 2 + 30} className={s.nameSm}>VIA THE</text>
        <text x={LX1 + 20} y={LY0 + (BANDS * BAND_H) / 2 + 46} className={s.nameSm}>PERICARDIAL SINUS</text>
        <text x={LX0 - 100} y={LY0 + (BANDS * BAND_H) / 2 - 18} textAnchor="middle">AIR</text>
      </g>
      <g className={s.legend}>
        <circle cx={LX0 + 10} cy={500} r={4} className={s.o2} />
        <text x={LX0 + 24} y={505}>OXYGEN IN AIR</text>
        <circle cx={LX0 + 200} cy={500} r={4} className={s.o2Bound} />
        <text x={LX0 + 214} y={505}>CROSSED THE WALL — CARRIED BY HEMOCYANIN</text>
      </g>
    </g>
  );

  /* ---- hypoxia mode ---- */
  const nDots = Math.round(oxy * 7);
  const jar = (
    <g>
      <rect x={440} y={150} width={320} height={360} rx={40} className={s.jar} />
      <rect x={470} y={128} width={260} height={28} rx={8} className={s.lid} />
      {Array.from({ length: nDots }, (_, i) => {
        const x = 470 + ((i * 113) % 260);
        const y = 190 + ((i * 71) % 290) + round(Math.sin(t * 1.3 + i) * 6);
        return <circle key={i} cx={x} cy={round(y)} r={3.4} className={s.o2} />;
      })}
      {/* a widow on a twig */}
      <path d="M470 430 L730 400" className={s.twig} />
      <g transform="translate(600 392)">
        {[-1, 1].flatMap((sd) =>
          [0, 1, 2, 3].map((i) => (
            <path key={`${sd}${i}`} d={`M${sd * 10} ${-8 + i * 6} q${sd * 30} ${-26 + i * 12} ${sd * 46} ${-6 + i * 14}`} className={s.leg} />
          )),
        )}
        <ellipse cx={0} cy={-26} rx={28} ry={24} className={s.widow} />
        <ellipse cx={0} cy={6} rx={13} ry={11} className={s.widow} />
      </g>
      {temp <= 5 ? (
        <g className={s.frost}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M${452 + i * 54} 160 l8 14 l-8 14 l8 14`} />
          ))}
        </g>
      ) : (
        <g className={s.warm}>
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${800 + i * 22} 420 c-8 -16 8 -28 0 -44 c-8 -16 8 -28 0 -44`} />
          ))}
        </g>
      )}
      <g className={s.names}>
        <text x={600} y={548} textAnchor="middle">{`${oxy}% OXYGEN · ${temp} °C · SEALED AIR, NOT WATER`}</text>
      </g>
      <text x={600} y={604} textAnchor="middle" className={s.outcome}>
        {result ? `${result.mortality}% died` : "Not tested"}
      </text>
    </g>
  );

  return (
    <figure className={s.wrap} aria-label="Lung map: the halls on a widow's respiratory system">
      <div className={s.head}>
        <span className="label">Lung map · adult female · schematic, not to scale</span>
        {mode !== "hypoxia" && (
          <button type="button" className={s.toggle} onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="80 0 1100 640" className={s.svg} role="img" aria-label="The underside of a widow's abdomen with two lung slits and a rear tracheal slit; a zoom into the stacked air and hemolymph spaces of a book lung; and a low-oxygen experiment">
            {mode === "air" && underside}
            {airDots}
            {mode === "lung" && lung}
            {mode === "hypoxia" && jar}

            {items.map((it) => {
              const sp = SPOTS[it.id];
              if (!sp || !sp.modes.includes(mode)) return null;
              const [x, y] = mode === "lung" && it.id === "body.breathing.book-lung" ? [LX0 - 30, LY0 + 20] : sp.p;
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
          </svg>

          <div className={s.modes} role="group" aria-label="What the drawing shows">
            {MODES.map((m) => (
              <button key={m.key} type="button" className={`${s.mode} ${mode === m.key ? s.modeOn : ""}`} aria-pressed={mode === m.key} onClick={() => setMode(m.key)}>
                {m.label}
              </button>
            ))}
          </div>

          {mode === "hypoxia" && treatments.length > 0 && (
            <div className={s.controls}>
              <div className={s.choose} role="group" aria-label="Oxygen level">
                <span className="label">Oxygen</span>
                {oxygens.map((o) => (
                  <button key={o} type="button" className={`${s.mode} ${oxy === o ? s.modeOn : ""}`} aria-pressed={oxy === o} onClick={() => setOxy(o)}>
                    {o}%
                  </button>
                ))}
              </div>
              <div className={s.choose} role="group" aria-label="Temperature">
                <span className="label">Temperature</span>
                {temps.map((c) => (
                  <button key={c} type="button" className={`${s.mode} ${temp === c ? s.modeOn : ""}`} aria-pressed={temp === c} onClick={() => setTemp(c)}>
                    {c} °C
                  </button>
                ))}
              </div>
              <span className={s.note}>
                {result ? `Western widows, ${result.note}.` : "This combination was not part of the experiment."} A day in sealed, oxygen-poor air — a pest-control experiment, not flooding.
              </span>
            </div>
          )}
          {mode === "air" && <span className={s.note}>Three openings, two systems. The widow&rsquo;s internal tube routes have not been mapped.</span>}
          {mode === "lung" && <span className={s.note}>Air and hemolymph never mix; oxygen diffuses across a wall a fraction of a micrometre thick.</span>}

          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Breathing through pages and tubes. Touch a marker to open its hall.</span>
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
