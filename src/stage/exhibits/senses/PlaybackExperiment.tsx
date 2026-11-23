"use client";
/**
 * STAGE — senses.vibration.prey-or-mate, medium: interactive playback.
 * Re-enacts the design of the western widow playback experiment: a recorded
 * vibration (male, cricket or fly) is replayed into the web at low or high
 * strength. The verdict text is read from the exhibit's own observations by
 * id ("whisper", "shout", "no-code"), so this file holds no findings.
 * Waveforms are schematic: the real recordings overlap in frequency.
 */
import { useEffect, useRef, useState } from "react";
import type { StageProps } from "@/stage/registry";
import s from "./PlaybackExperiment.module.css";

type Source = "male" | "cricket" | "fly";
type Level = "low" | "high";

const SOURCES: { id: Source; label: string }[] = [
  { id: "male", label: "Courting male" },
  { id: "cricket", label: "Cricket" },
  { id: "fly", label: "Fly" },
];

const X0 = 150;
const X1 = 1010;
const Y = 300;
const SPEED = 520; // px/s along the drawing — schematic, not a measured propagation speed

/** A schematic signature for each source; amplitude is what the experiment varied. */
function wave(src: Source, x: number, t: number) {
  const p = (x - X0) / 80 - t * (SPEED / 80);
  if (src === "male") {
    // rhythmic bursts — tremulation
    const env = Math.max(0, Math.sin(p * 0.42)) ** 2;
    return Math.sin(p * 5.2) * env;
  }
  if (src === "cricket") {
    // irregular kicks
    return (Math.sin(p * 3.1) * 0.6 + Math.sin(p * 7.3 + 1) * 0.3) * (0.6 + 0.4 * Math.sin(p * 0.9) ** 2);
  }
  // fly: buzzing jitter
  return Math.sin(p * 6.4) * 0.55 + Math.sin(p * 11.7) * 0.3;
}

/** Attenuates with distance and pins both ends of the thread. */
const taper = (u: number) => (1 - u * 0.35) * Math.min(1, u * 14, (1 - u) * 10);

export function PlaybackExperiment({ exhibit }: StageProps) {
  const [src, setSrc] = useState<Source>("male");
  const [lvl, setLvl] = useState<Level>("low");
  const [t, setT] = useState(0);
  const [reduced, setReduced] = useState(false);
  const last = useRef<number | null>(null);

  const obs = (id: string) => exhibit.observations.find((o) => o.id === id)?.text ?? "";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const id = requestAnimationFrame(() => setReduced(mq.matches));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const tick = (now: number) => {
      const dt = last.current == null ? 0 : (now - last.current) / 1000;
      last.current = now;
      setT((v) => v + dt);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      last.current = null;
    };
  }, [reduced]);

  // each new playback starts the signal at the source again
  const [start, setStart] = useState(0);
  const play = (next: { src?: Source; lvl?: Level }) => {
    if (next.src) setSrc(next.src);
    if (next.lvl) setLvl(next.lvl);
    setStart(t);
  };
  const elapsed = reduced ? 99 : t - start;
  const front = Math.min(X1, X0 + elapsed * SPEED);
  const arrived = front >= X1;
  const amp = lvl === "high" ? 46 : 9;
  const attack = arrived && lvl === "high";
  const lunge = attack ? Math.min(1, (elapsed - (X1 - X0) / SPEED) * 2.2) : 0;

  const pts: string[] = [];
  for (let x = X0; x <= X1; x += 3) {
    const y = x <= front ? Y + wave(src, x, reduced ? 0 : t) * amp * taper((x - X0) / (X1 - X0)) : Y;
    pts.push(`${x},${y.toFixed(1)}`);
  }

  return (
    <figure className={s.wrap} aria-label={`${exhibit.title}: a playback experiment`}>
      <div className={s.controls}>
        <div className={s.group} role="radiogroup" aria-label="Recorded source">
          <span className="label">Recording</span>
          {SOURCES.map((o) => (
            <button key={o.id} role="radio" aria-checked={src === o.id} className={`${s.btn} ${src === o.id ? s.on : ""}`} onClick={() => play({ src: o.id })}>
              {o.label}
            </button>
          ))}
        </div>
        <div className={s.group} role="radiogroup" aria-label="Playback strength">
          <span className="label">Strength</span>
          {(["low", "high"] as Level[]).map((l) => (
            <button key={l} role="radio" aria-checked={lvl === l} className={`${s.btn} ${lvl === l ? s.on : ""}`} onClick={() => play({ lvl: l })}>
              {l === "low" ? "Low" : "High"}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 1280 520" className={s.svg} role="img" aria-label={`${src} vibration replayed at ${lvl} strength; the female ${attack ? "attacks" : "stays put"}`}>
        {/* scaffold above */}
        <path className={s.scaffold} d="M0 60 L220 120 L420 40 L640 110 L860 50 L1080 120 L1280 70 M220 120 L150 300 M640 110 L700 300 M1080 120 L1240 300 M420 40 L520 300" />
        {/* the shaker */}
        <g className={s.shaker}>
          <rect x="70" y="270" width="64" height="60" rx="3" />
          <text x="102" y="356" textAnchor="middle">SHAKER</text>
        </g>
        {/* the signal on the thread */}
        <polyline className={`${s.thread} ${arrived ? s.threadOn : ""}`} points={pts.join(" ")} />
        {!arrived && <circle cx={front} cy={Y} r={4} className={s.front} />}
        {/* her stretch of thread, beyond the signal's arrival point */}
        <path className={s.threadRest} d={`M${X1} ${Y} L1270 ${Y}`} />
        {/* the female, hanging belly-up beneath the thread; the hourglass faces the sky */}
        <g transform={`translate(${-lunge * 90} 0)`} className={s.female}>
          {[
            [1070, 1012], [1074, 1040], [1086, 1150], [1092, 1196],
          ].map(([hip, foot], i) => (
            <path key={i} d={`M${hip} ${Y + 40} Q${(hip + foot) / 2 + (i < 2 ? -8 : 8)} ${Y + 4} ${foot} ${Y}`} className={i === 0 ? s.foreleg : undefined} />
          ))}
          <ellipse cx="1078" cy={Y + 42} rx="16" ry="11" className={s.pro} />
          <ellipse cx="1124" cy={Y + 56} rx="34" ry="28" className={s.abd} />
          <path d={`M1114 ${Y + 27} h20 l-8 6 l8 6 h-20 l8 -6 Z`} className={s.hourglass} />
        </g>
        <g className={s.readout}>
          <text x="1110" y="440" textAnchor="middle">{!arrived ? "LISTENING" : attack ? "PREDATORY APPROACH" : "NO APPROACH"}</text>
        </g>
        <text x="640" y="500" textAnchor="middle" className={s.note}>SCHEMATIC · WAVEFORMS ILLUSTRATIVE · REAL RECORDINGS OVERLAP IN FREQUENCY</text>
      </svg>

      <figcaption className={s.verdict}>
        <p className={s.big}>{arrived ? obs(lvl === "high" ? "shout" : "whisper") : " "}</p>
        <p className={s.small}>{obs("no-code")}</p>
      </figcaption>
    </figure>
  );
}
