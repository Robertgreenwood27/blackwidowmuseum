/**
 * Vault glyphs — one line drawing per vault, keyed by vault id.
 * Pure presentation. A vault without a glyph gets the tangle.
 */
import type { ReactNode } from "react";
import s from "./motifs.module.css";

const P = (d: string, red = false) => <path d={d} pathLength={1} className={red ? s.red : undefined} />;

const legs = [
  "M92 88 C70 70 52 52 30 30", "M90 94 C64 86 42 80 16 82", "M90 104 C66 112 46 126 24 150", "M92 110 C76 132 66 156 58 186",
  "M108 88 C130 70 148 52 170 30", "M110 94 C136 86 158 80 184 82", "M110 104 C134 112 154 126 176 150", "M108 110 C124 132 134 156 142 186",
];

const GLYPHS: Record<string, ReactNode> = {
  // ventral view, legs splayed, the mark
  body: (
    <>
      {legs.map((d) => P(d))}
      <ellipse cx="100" cy="98" rx="13" ry="16" pathLength={1} />
      <ellipse cx="100" cy="138" rx="30" ry="34" pathLength={1} />
      <path d="M90 118 L110 118 L102 136 L98 136 Z M98 140 L102 140 L110 158 L90 158 Z" className={s.fill} />
    </>
  ),
  // α-latrotoxin tetramer: four lobes around a pore, ions falling through
  venom: (
    <>
      {[0, 90, 180, 270].map((r) => (
        <g key={r} transform={`rotate(${r} 100 100)`}>
          <path d="M100 74 C82 60 74 38 92 26 C108 16 126 30 120 50 C116 62 108 68 100 74" pathLength={1} />
          <path d="M100 74 L100 60" pathLength={1} />
        </g>
      ))}
      <circle cx="100" cy="100" r="9" pathLength={1} className={s.red} />
      {[0, 1, 2].map((i) => <circle key={i} cx="100" cy={150 + i * 14} r="2.2" className={s.fill} />)}
    </>
  ),
  // tangle with gumfoot lines and glue
  web: (
    <>
      {P("M10 20 L80 46 L150 18 L190 52 L120 70 L60 62 L10 20 M80 46 L120 70 M150 18 L120 70 M60 62 L30 80 L10 20 M120 70 L170 88 L190 52")}
      {[40, 78, 116, 160].map((x, i) => (
        <g key={x}>
          {P(`M${x + (i % 2 ? 4 : -6)} ${70 + i * 3} L${x} 190`)}
          {[0, 1, 2, 3].map((j) => <circle key={j} cx={x} cy={160 + j * 8} r={1.6 + j * 0.3} className={s.fill} />)}
        </g>
      ))}
      <line x1="0" y1="191" x2="200" y2="191" pathLength={1} />
    </>
  ),
  // a trichobothrium: hair in its cup socket, air moving
  senses: (
    <>
      {P("M60 160 C60 134 140 134 140 160")}
      {P("M48 166 L152 166")}
      {P("M100 150 C102 110 104 70 112 18")}
      {P("M24 70 C40 60 56 80 72 70", true)}
      {P("M18 92 C34 82 50 102 66 92")}
      {P("M140 98 C150 90 162 106 176 96")}
    </>
  ),
  // the egg sac, silk wound round
  life: (
    <>
      <circle cx="100" cy="108" r="58" pathLength={1} />
      {P("M48 84 C80 70 130 120 156 94 M44 112 C84 96 120 150 158 120 M56 142 C86 124 116 164 146 148 M60 66 C90 58 120 92 148 76")}
      {P("M100 50 L100 8")}
      {[[86, 100], [110, 116], [96, 132], [122, 96], [76, 122]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="3" className={s.fill} />
      ))}
    </>
  ),
  // a cladogram: the genus branching
  genus: (
    <>
      {P("M100 190 L100 150 M100 150 L40 110 M100 150 L160 110 M40 110 L20 30 M40 110 L60 30 M160 110 L130 70 M160 110 L184 30 M130 70 L110 30 M130 70 L150 30")}
      {[20, 60, 110, 150, 184].map((x, i) => <circle key={x} cx={x} cy={26} r="4" className={i === 2 ? s.red : s.fill} />)}
    </>
  ),
  // two punctures and the spreading consequence
  humans: (
    <>
      <circle cx="86" cy="100" r="3" className={s.fill} />
      <circle cx="114" cy="100" r="3" className={s.fill} />
      {[22, 40, 62, 88].map((r, i) => (
        <ellipse key={r} cx="100" cy="100" rx={r + 10} ry={r} pathLength={1} className={i === 0 ? s.red : undefined} />
      ))}
    </>
  ),
};

export function Motif({ vault, className }: { vault: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`${s.motif} ${className ?? ""}`} aria-hidden="true">
      {GLYPHS[vault] ?? GLYPHS.web}
    </svg>
  );
}
