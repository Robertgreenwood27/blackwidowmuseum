"use client";
/**
 * The drawing for the gut map: a lateral cutaway of a female widow with the
 * alimentary canal traced from mouth to anus. It is drawn dorsal-up, the
 * anatomical convention, even though she usually hangs the other way. A meal
 * flows through it on a loop: fluid goes out onto the wrapped prey and comes
 * back, then moves on through the pump and the midgut.
 *
 * Only positions live here. Hall names, kickers and links come from the
 * collection. A hall with no position still appears in the index; a position
 * with no open hall is simply not drawn.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useVisits } from "@/museum/visits";
import s from "./GutMap.module.css";

export type GutItem = { id: string; title: string; kicker: string; href: string; hall: string };

/** The canal, as one path: mouth → pharynx → oesophagus → pump → midgut → pedicel → intestine → stercoral pocket → anus. */
const CANAL =
  "M302 392 C318 384 328 360 344 338 L436 316 C452 312 488 312 504 316 L604 324 C690 312 820 262 940 292 C1000 308 1036 330 1052 344 L1086 370";
/** Out onto the prey and back. */
const SPIT = "M302 392 C292 420 276 446 262 474";

const DIVERTICULA: [number, number, number, number, number][] = [
  [690, 250, 62, 40, -18], [770, 214, 70, 42, -6], [866, 206, 72, 44, 8], [956, 232, 60, 42, 26],
  [1010, 290, 44, 40, 40], [700, 360, 58, 46, 14], [790, 376, 66, 50, 0], [884, 372, 62, 50, -12],
  [962, 352, 48, 42, -28], [640, 304, 36, 34, 0], [840, 300, 52, 30, 0],
];

/** Where each hall is drawn. Keyed by permanent exhibit id. */
const SPOTS: Record<string, { at: [number, number]; side: "l" | "r" }> = {
  "body.digestion.extra-oral": { at: [262, 478], side: "l" },
  "body.digestion.mouth-and-pump": { at: [470, 314], side: "r" },
  "body.digestion.midgut": { at: [866, 206], side: "r" },
  "body.digestion.enzymes": { at: [790, 376], side: "r" },
  "body.digestion.menu": { at: [254, 620], side: "r" },
  "body.digestion.microbes": { at: [956, 296], side: "r" },
  "body.digestion.wastes": { at: [1050, 344], side: "r" },
  "body.digestion.water": { at: [1034, 160], side: "r" },
};

function useCalm() {
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setCalm(q.matches);
    set();
    q.addEventListener("change", set);
    return () => q.removeEventListener("change", set);
  }, []);
  return calm;
}

export function GutMapView({ items }: { items: GutItem[] }) {
  const [on, setOn] = useState<string | null>(null);
  const visits = useVisits();
  const calm = useCalm();
  const active = items.find((i) => i.id === on) ?? null;
  const drawn = items.filter((i) => SPOTS[i.id]);
  const hover = (id: string | null) => ({
    onMouseEnter: () => setOn(id),
    onMouseLeave: () => setOn(null),
    onFocus: () => setOn(id),
    onBlur: () => setOn(null),
  });

  return (
    <figure className={s.wrap} aria-label="Gut map: the halls along the digestive tract">
      <div className={s.head}>
        <span className="label">Gut map · lateral cutaway, female, dorsal up · schematic, not to scale</span>
      </div>
      <div className={s.grid}>
        <div className={s.canvas}>
          <svg viewBox="0 0 1280 720" className={s.svg} role="img" aria-label="A female widow in side view, with the digestive tract traced from mouth to anus and a marker for each hall">
            {/* a gumfoot line still holding the prey */}
            <path className={s.thread2} d="M262 500 L250 720" />

            {/* far-side legs, behind the body */}
            {[
              "M372 404 L262 298 L168 252 L74 330 L40 420",
              "M424 410 L336 330 L258 318 L182 430 L160 520",
              "M480 412 L566 486 L612 476 L660 604 L672 660",
              "M532 408 L700 560 L760 560 L902 640 L986 662",
            ].map((d, i) => <path key={i} className={s.leg} d={d} />)}

            {/* prosoma, pedicel, opisthosoma */}
            <ellipse className={s.body} cx="430" cy="330" rx="152" ry="88" />
            <rect className={s.body} x="572" y="312" width="34" height="24" rx="6" />
            <ellipse className={s.body} cx="840" cy="306" rx="252" ry="216" />
            {/* spinnerets and anal tubercle */}
            <path className={s.body} d="M1068 392 q22 6 24 26 q-18 8 -30 -10 Z" />

            {/* chelicera with its fang folded back, pedipalp ahead of it */}
            <path className={s.body} d="M300 352 C286 380 282 410 290 432 C298 444 312 440 314 426 C318 400 316 372 312 350 Z" />
            <path className={s.fang} d="M292 432 C286 446 290 458 302 462" />
            <path className={s.leg} d="M290 344 L238 366 L220 404" />
            {/* eyes on the front of the carapace */}
            {[[300, 286], [314, 276], [330, 270], [306, 300]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} className={s.eye} />)}

            {/* the larder: midgut diverticula filling the abdomen */}
            {DIVERTICULA.map(([cx, cy, rx, ry, r], i) => (
              <ellipse key={i} className={s.div} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${r} ${cx} ${cy})`} />
            ))}
            {/* prosomal caeca, branching toward the leg bases */}
            <path className={s.caeca} d="M520 318 C514 350 500 376 486 400 M548 320 C546 352 540 380 534 402 M430 318 C424 350 420 376 418 402 M470 316 C470 350 468 380 466 404 M512 316 C470 296 420 288 372 298" />
            {/* Malpighian tubules */}
            <path className={s.tubule} d="M1010 320 C960 360 900 420 820 440 M1004 318 C950 300 900 330 860 360 M1016 324 C1000 400 940 460 880 480 M1002 316 C980 260 930 250 900 262" />

            {/* the pump's dilator muscles, run up to the carapace */}
            <path className={s.muscle} d="M462 304 L446 252 M470 302 L470 246 M478 304 L496 252" />

            {/* the canal itself */}
            <path className={s.canal} d={CANAL} />
            <ellipse className={s.pump} cx="470" cy="314" rx="30" ry="14" />
            <ellipse className={s.pocket} cx="1050" cy="344" rx="20" ry="14" />

            {/* wrapped prey, held at the mouth */}
            <g className={s.prey}>
              <ellipse cx="258" cy="490" rx="42" ry="26" transform="rotate(-24 258 490)" />
              <path d="M222 486 L292 470 M226 502 L296 482 M232 514 L290 498 M240 470 L280 520 M260 462 L248 518" />
            </g>

            {/* the meal on the move */}
            {!calm && (
              <g aria-hidden="true">
                <circle r="5" className={s.flow}>
                  <animateMotion dur="3.6s" repeatCount="indefinite" path={SPIT} keyPoints="0;1;1;0" keyTimes="0;0.35;0.5;1" calcMode="linear" />
                </circle>
                {[0, 1, 2].map((k) => (
                  <circle key={k} r="3.6" className={s.flow}>
                    <animateMotion dur="9s" begin={`${-k * 3}s`} repeatCount="indefinite" path={CANAL} />
                  </circle>
                ))}
              </g>
            )}

            {drawn.map((it) => {
              const { at: [x, y], side } = SPOTS[it.id];
              const hot = on === it.id;
              const lx = side === "l" ? x - 30 : x + 30;
              return (
                <Link key={it.id} href={it.href} className={`${s.spot} ${hot ? s.hot : ""}`} {...hover(it.id)} aria-label={`Hall ${it.hall}: ${it.title} — ${it.kicker}`}>
                  <circle cx={x} cy={y} r={22} className={s.hit} />
                  <circle cx={x} cy={y} r={hot ? 13 : 9} className={s.ring} />
                  <circle cx={x} cy={y} r={3.4} className={s.dot} />
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
                <span className="label">Hall {active.hall}</span>
                <span className={s.capTitle}>{active.title}</span>
                <span className={s.capKicker}>{active.kicker}</span>
              </>
            ) : (
              <span className={s.capHint}>Follow a meal from the prey to the stercoral pocket. Touch a marker to open its hall.</span>
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
