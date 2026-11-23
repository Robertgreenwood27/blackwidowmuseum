"use client";
/**
 * The drawing for the sensory map: a dorsal line drawing of a female widow
 * with one marker per sense. Only positions live here — names, kickers and
 * links come from the collection. A case with no position still appears in
 * the index; a position with no open case is simply not drawn.
 */
import Link from "next/link";
import { useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./SensoryMap.module.css";

export type MapItem = { id: string; title: string; kicker: string; href: string; accession: string };

/** Leg joints, left side, body → tip: coxa, femur, patella, tibia, metatarsus, tarsus. */
const LEGS_L: [number, number][][] = [
  [[592, 286], [562, 268], [470, 178], [450, 160], [380, 92], [300, 44], [258, 32]],
  [[584, 312], [552, 304], [430, 232], [408, 222], [320, 192], [220, 172], [178, 168]],
  [[588, 360], [560, 372], [470, 402], [454, 414], [400, 470], [340, 540], [312, 572]],
  [[598, 390], [576, 408], [502, 480], [490, 500], [458, 590], [420, 690], [404, 732]],
];
const mirror = (leg: [number, number][]) => leg.map(([x, y]) => [1280 - x, y] as [number, number]);
const LEGS = [...LEGS_L, ...LEGS_L.map(mirror)];
const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

/** Where each sense is drawn. Keyed by permanent exhibit id. */
const SPOTS: Record<string, { at: [number, number]; side: "l" | "r" }> = {
  "senses.vision": { at: [640, 262], side: "r" },
  "senses.brain": { at: [640, 322], side: "r" },
  "senses.trichobothria": { at: mid(LEGS_L[0][3], LEGS_L[0][4]), side: "l" },
  "senses.slit-sensilla": { at: LEGS_L[1][5], side: "l" },
  "senses.proprioception": { at: LEGS_L[2][2], side: "l" },
  "senses.contact-chemistry": { at: [588, 204], side: "l" },
  "senses.tarsal-organ": { at: mid(mirror(LEGS_L[0])[5], mirror(LEGS_L[0])[6]), side: "r" },
  "senses.hearing": { at: mid(mirror(LEGS_L[1])[3], mirror(LEGS_L[1])[4]), side: "r" },
  "senses.olfaction": { at: mid(mirror(LEGS_L[2])[4], mirror(LEGS_L[2])[5]), side: "r" },
  "senses.heat-and-water": { at: [706, 568], side: "r" },
  "senses.vibration": { at: [236, 732], side: "l" },
  "senses.light-and-time": { at: [1150, 96], side: "r" },
};

export function SensoryMapView({ items }: { items: MapItem[] }) {
  const [on, setOn] = useState<string | null>(null);
  const visits = useVisits();
  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);

  return (
    <figure className={s.wrap} aria-label="Sensory map: where each sense sits on the body">
      <div className={s.head}>
        <span className="label">Sensory map · dorsal view, female · schematic, not to scale</span>
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="0 0 1280 780" className={s.svg} role="img" aria-label="A female widow from above, with a marker at each sense organ">
            {/* a silk thread beneath one foot, for the web's own sense */}
            <path className={s.thread} d="M60 734 L404 732 L1220 738" />
            <path className={s.thread2} d="M404 732 L404 780 M60 734 L20 700 M1220 738 L1270 700" />
            {/* the moon, for light and time */}
            <path className={s.moon} d="M1166 70 A30 30 0 1 0 1166 122 A22 22 0 1 1 1166 70 Z" />

            {LEGS.map((leg, i) => (
              <g key={i}>
                <polyline className={s.leg} points={leg.map((p) => p.join(",")).join(" ")} />
                {leg.slice(1, -1).map(([x, y], j) => <circle key={j} cx={x} cy={y} r={2.2} className={s.joint} />)}
              </g>
            ))}
            {/* pedipalps */}
            <polyline className={s.leg} points="618,252 600,228 588,204" />
            <polyline className={s.leg} points="662,252 680,228 692,204" />
            {/* chelicerae */}
            <path className={s.body} d="M626 246 q-4 -14 6 -18 q8 6 2 20 Z M654 246 q4 -14 -6 -18 q-8 6 -2 20 Z" />
            {/* prosoma, pedicel, abdomen */}
            <ellipse className={s.body} cx="640" cy="318" rx="66" ry="76" />
            <path className={s.fovea} d="M640 300 l0 34" />
            <path className={s.body} d="M632 392 h16 v12 h-16 Z" />
            <ellipse className={s.body} cx="640" cy="530" rx="122" ry="138" />
            {/* eyes: two rows of four, laterals set apart */}
            {[[612, 258], [630, 262], [650, 262], [668, 258], [608, 276], [630, 274], [650, 274], [672, 276]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 1 || i === 2 ? 4.2 : 3.4} className={s.eye} />
            ))}

            {drawn.map((it) => {
              const { at: [x, y], side } = SPOTS[it.id];
              const hot = on === it.id;
              const lx = side === "l" ? x - 26 : x + 26;
              return (
                <Link
                  key={it.id}
                  href={it.href}
                  className={`${s.spot} ${hot ? s.hot : ""}`}
                  onMouseEnter={() => setOn(it.id)}
                  onMouseLeave={() => setOn(null)}
                  onFocus={() => setOn(it.id)}
                  onBlur={() => setOn(null)}
                  aria-label={`${it.title} — ${it.kicker}`}
                >
                  <circle cx={x} cy={y} r={22} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 9 : 6} className={s.ring} />
                  <circle cx={x} cy={y} r={2.6} className={s.dot} />
                  {hot && (
                    <text x={lx} y={y + 4} textAnchor={side === "l" ? "end" : "start"} className={s.tag}>
                      {it.title.toUpperCase()}
                    </text>
                  )}
                </Link>
              );
            })}
          </svg>
          <div className={s.caption} aria-live="polite">
            {active ? (
              <>
                <span className="label">{active.accession}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Touch a sense organ to see what it reads.</span>
            )}
          </div>
        </div>

        <ol className={s.index}>
          {items.map((it) => (
            <li key={it.id}>
              <Link
                href={it.href}
                className={`${s.row} ${on === it.id ? s.rowOn : ""}`}
                onMouseEnter={() => setOn(it.id)}
                onMouseLeave={() => setOn(null)}
                onFocus={() => setOn(it.id)}
                onBlur={() => setOn(null)}
              >
                <span className={s.rowN}>{it.accession}</span>
                <span className={s.rowT}>{it.title}</span>
                {visits.has(it.id) && <span className={s.seen} title="Visited" aria-label="Visited" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
