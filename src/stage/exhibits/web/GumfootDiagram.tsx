"use client";
/**
 * STAGE — web.gumfoot, medium: animated diagram.
 * Contact → release → hoist, scrubbable. The facts come from the exhibit's
 * YAML (passed in as `exhibit`); this file only decides how they move.
 * Future: replace with a physics simulation and register it in registry.tsx.
 */
import { useEffect, useRef, useState } from "react";
import type { StageProps } from "@/stage/registry";
import s from "./GumfootDiagram.module.css";

const LOOP = 10;
const GROUND = 640;
const TOP = 200;
const LINE_X = 640;
const CONTACT = 3.4;
const RELEASE = 4.3;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (x: number) => 1 - Math.pow(1 - clamp(x), 3);

function lineFoot(t: number) {
  if (t < RELEASE) {
    const tremble = t > CONTACT ? Math.sin(t * 70) * 3 * (t - CONTACT) : 0;
    return { x: LINE_X + tremble, y: GROUND };
  }
  const s = t - RELEASE;
  const rise = (GROUND - TOP) * 0.5;
  return { x: LINE_X + Math.sin(s * 9) * 14 * Math.exp(-2.4 * s), y: GROUND - rise * (1 - Math.exp(-4.5 * s) * Math.cos(9 * s)) };
}

function Ant({ x, y, rot, walk, struggle }: { x: number; y: number; rot: number; walk: number; struggle: number }) {
  const legs = [-1, 0, 1].flatMap((k) =>
    [-1, 1].map((side) => {
      const phase = Math.sin(walk * 14 + k * 2 + (side > 0 ? Math.PI : 0)) * 5 + Math.sin(struggle * 40 + k) * struggle * 7;
      const bx = k * 6;
      return <path key={`${k}${side}`} d={`M${bx} 0 L${bx + phase + k * 4} ${side * 9} L${bx + phase * 1.4 + k * 7} ${side * 15}`} />;
    }),
  );
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} className={s.ant}>
      {legs}
      <ellipse cx="-14" cy="0" rx="9" ry="6" />
      <ellipse cx="0" cy="0" rx="7" ry="4" />
      <circle cx="11" cy="-1" r="5" />
      <path d="M14 -4 Q22 -14 28 -10 M14 -3 Q24 -8 30 -2" className={s.antenna} />
    </g>
  );
}

export function GumfootDiagram({ exhibit }: StageProps) {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const last = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => {
        setPlaying(false);
        setT(6.5);
      });
      return () => cancelAnimationFrame(id);
    }
  }, []);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = (now: number) => {
      const dt = last.current == null ? 0 : (now - last.current) / 1000;
      last.current = now;
      setT((v) => (v + dt) % LOOP);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      last.current = null;
    };
  }, [playing]);

  const foot = lineFoot(t);
  const walkT = clamp(t / CONTACT);
  const antOnGround = t < RELEASE;
  const ant = antOnGround
    ? { x: 180 + (LINE_X - 30 - 180) * ease(walkT * 1.02), y: GROUND - 10, rot: 0 }
    : { x: foot.x - 6, y: foot.y + 22, rot: -78 + Math.sin(t * 5) * 6 };
  const struggle = t > CONTACT ? 1 : 0;
  const stage = t < CONTACT ? 0 : t < RELEASE ? 1 : 2;
  const fade = t > LOOP - 0.8 ? 1 - (t - (LOOP - 0.8)) / 0.8 : t < 0.4 ? t / 0.4 : 1;

  // the main line, with glue beads on its lower 22%
  const cx = (LINE_X + foot.x) / 2 + (t > RELEASE ? Math.sin((t - RELEASE) * 12) * 30 * Math.exp(-2 * (t - RELEASE)) : 0);
  const cy = (TOP + foot.y) / 2;
  const beads = Array.from({ length: 9 }, (_, i) => {
    const u = 0.78 + i * 0.026;
    const bx = (1 - u) ** 2 * LINE_X + 2 * (1 - u) * u * cx + u * u * foot.x;
    const by = (1 - u) ** 2 * TOP + 2 * (1 - u) * u * cy + u * u * foot.y;
    return <circle key={i} cx={bx} cy={by} r={2.2 + i * 0.35} className={s.bead} />;
  });

  const steps = [
    { n: "01", h: "Contact", d: "Walking prey brushes the glue at the foot." },
    { n: "02", h: "Release", d: "The weak dendritic anchor disc gives way." },
    { n: "03", h: "Hoist", d: "Tension in the line lifts the prey off the ground." },
  ];

  return (
    <figure className={s.wrap} aria-label={`${exhibit.title}: how a gumfoot line captures prey`}>
      <svg viewBox="0 0 1280 700" className={s.svg} style={{ opacity: fade }} role="img" aria-hidden="true">
        <defs>
          <linearGradient id="gf-floor" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(236,230,217,.08)" />
            <stop offset="1" stopColor="rgba(236,230,217,0)" />
          </linearGradient>
        </defs>
        {/* scaffold */}
        <path className={s.scaffold} d="M0 40 L210 120 L380 60 L520 150 L640 200 L760 110 L930 170 L1100 70 L1280 130 M210 120 L330 200 L520 150 M760 110 L860 30 L1100 70 M930 170 L1040 220 L1280 130 M380 60 L460 0 M640 200 L700 90 L760 110 M330 200 L380 60 M1040 220 L1100 70" />
        {/* the staple-pin anchor on the scaffold */}
        <g className={s.callout}>
          <circle cx="640" cy="200" r="5" className={s.disc} />
          <path d="M646 196 L760 250" />
          <text x="768" y="254">STAPLE-PIN DISC · HOLDS</text>
        </g>
        {/* decoy gumfoot lines */}
        {[260, 420, 880, 1060].map((x, i) => (
          <g key={x}>
            <path className={s.line2} d={`M${x + (i % 2 ? 30 : -20)} ${[130, 160, 150, 120][i]} L${x} ${GROUND}`} />
            {[0, 1, 2, 3, 4].map((j) => (
              <circle key={j} cx={x + (i % 2 ? 30 : -20) * (1 - (0.84 + j * 0.035))} cy={GROUND - 70 + j * 15} r={1.8 + j * 0.3} className={s.bead2} />
            ))}
          </g>
        ))}
        {/* ground */}
        <rect x="0" y={GROUND} width="1280" height="60" fill="url(#gf-floor)" />
        <line x1="0" x2="1280" y1={GROUND} y2={GROUND} className={s.ground} />
        {/* the dendritic anchor, broken after release */}
        <g className={s.callout} style={{ opacity: 1 }}>
          <path d={`M${LINE_X - 9} ${GROUND} l4 -4 l4 4 l4 -5 l4 5`} className={stage === 2 ? s.discBroken : s.disc} />
          <path d={`M${LINE_X + 14} ${GROUND + 6} L${LINE_X + 120} ${GROUND + 34}`} />
          <text x={LINE_X + 128} y={GROUND + 38}>
            DENDRITIC DISC · {stage === 2 ? "RELEASED" : "DESIGNED TO FAIL"}
          </text>
        </g>
        {/* the line */}
        <path className={`${s.line} ${stage >= 1 ? s.lineHot : ""}`} d={`M${LINE_X} ${TOP} Q${cx} ${cy} ${foot.x} ${foot.y}`} />
        {beads}
        <Ant x={ant.x} y={ant.y} rot={ant.rot} walk={antOnGround && t < CONTACT ? t : 0} struggle={struggle} />
        {/* height gauge after hoist */}
        {stage === 2 && (
          <g className={s.gauge}>
            <line x1={LINE_X - 120} x2={LINE_X - 120} y1={GROUND} y2={foot.y + 22} />
            <line x1={LINE_X - 128} x2={LINE_X - 112} y1={foot.y + 22} y2={foot.y + 22} />
            <text x={LINE_X - 136} y={(GROUND + foot.y) / 2 + 10} textAnchor="end">LIFT</text>
          </g>
        )}
      </svg>

      <figcaption className={s.steps}>
        {steps.map((st, i) => (
          <button key={st.n} className={`${s.step} ${stage === i ? s.on : ""}`} onClick={() => { setPlaying(false); setT([2.2, 4.0, 6.5][i]); }}>
            <span className={s.n}>{st.n}</span>
            <span className={s.h}>{st.h}</span>
            <span className={s.d}>{st.d}</span>
          </button>
        ))}
      </figcaption>

      <div className={s.controls}>
        <button className={s.play} onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "❚❚" : "▶"}
        </button>
        <input
          type="range" min={0} max={LOOP} step={0.01} value={t}
          onChange={(e) => { setPlaying(false); setT(parseFloat(e.target.value)); }}
          className={s.scrub} aria-label="Scrub through the capture"
        />
        <span className="label">t = {t.toFixed(2)} s · schematic, not to scale</span>
      </div>
    </figure>
  );
}
