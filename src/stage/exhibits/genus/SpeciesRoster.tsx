"use client";
/**
 * STAGE — any exhibit with a `checklist` (first used by genus.roster),
 * medium: interactive species roster.
 * A timeline of naming years, region filters and a sortable table.
 * Every name, year, authority and range comes from the exhibit's YAML.
 */
import { useMemo, useState } from "react";
import type { StageProps } from "@/stage/registry";
import type { ChecklistEntryT } from "@/museum/schema";
import s from "./SpeciesRoster.module.css";

const authority = (c: ChecklistEntryT) =>
  c.author.startsWith("(") ? `(${c.author.replace(/[()]/g, "")}, ${c.year})` : `${c.author}, ${c.year}`;
const epithet = (name: string) => name.split(" ").slice(1).join(" ");

const W = 1200;
const PAD = 40;

export function SpeciesRoster({ exhibit }: StageProps) {
  const rows = exhibit.checklist;
  const regions = useMemo(() => [...new Set(rows.map((r) => r.region))].sort(), [rows]);
  const [region, setRegion] = useState<string | null>(null);
  const [sort, setSort] = useState<"name" | "year">("name");
  const [hot, setHot] = useState<string | null>(null);

  const y0 = Math.floor(Math.min(...rows.map((r) => r.year)) / 25) * 25;
  const y1 = Math.ceil(Math.max(...rows.map((r) => r.year)) / 25) * 25;
  const x = (year: number) => PAD + ((year - y0) / (y1 - y0)) * (W - PAD * 2);

  // stack names that share a year, or nearly do, so every dot is visible
  const placed = useMemo(() => {
    const sorted = [...rows].sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));
    const lanes: number[] = [];
    return sorted.map((r) => {
      const px = PAD + ((r.year - y0) / (y1 - y0)) * (W - PAD * 2);
      let lane = lanes.findIndex((end) => end < px - 9);
      if (lane === -1) lane = lanes.length;
      lanes[lane] = px;
      return { r, px, lane };
    });
  }, [rows, y0, y1]);
  const maxLane = Math.max(0, ...placed.map((p) => p.lane));
  const H = 70 + maxLane * 12;

  const shown = rows
    .filter((r) => !region || r.region === region)
    .sort((a, b) => (sort === "name" ? a.name.localeCompare(b.name) : a.year - b.year || a.name.localeCompare(b.name)));
  const ticks = Array.from({ length: (y1 - y0) / 25 + 1 }, (_, i) => y0 + i * 25);

  return (
    <figure className={s.wrap} aria-label={`${exhibit.title}: ${rows.length} species`}>
      <div className={s.timelineHead}>
        <span className="label">When each name was given · {y0}–{y1}</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H + 30}`} className={s.svg} role="img" aria-label={`Timeline of species descriptions from ${y0} to ${y1}`}>
        <line x1={PAD} x2={W - PAD} y1={H} y2={H} className={s.axis} />
        {ticks.map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={H} y2={H + 6} className={s.axis} />
            <text x={x(t)} y={H + 22} textAnchor="middle" className={s.tick}>{t}</text>
          </g>
        ))}
        {placed.map(({ r, px, lane }) => {
          const dim = region && r.region !== region;
          const on = hot === r.name;
          return (
            <g key={r.name} className={`${s.dot} ${dim ? s.dim : ""} ${on ? s.on : ""}`} onMouseEnter={() => setHot(r.name)} onMouseLeave={() => setHot(null)}>
              <line x1={px} x2={px} y1={H} y2={H - 14 - lane * 12} />
              <circle cx={px} cy={H - 14 - lane * 12} r={on ? 5 : 3.4} />
              {on && (
                <text x={px} y={H - 26 - maxLane * 12} textAnchor={px > W - 200 ? "end" : px < 200 ? "start" : "middle"} className={s.hotLabel}>
                  L. {epithet(r.name)} · {r.year}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className={s.controls}>
        <div className={s.group} role="radiogroup" aria-label="Region">
          <button role="radio" aria-checked={region === null} className={`${s.chip} ${region === null ? s.chipOn : ""}`} onClick={() => setRegion(null)}>
            All <span>{rows.length}</span>
          </button>
          {regions.map((g) => (
            <button key={g} role="radio" aria-checked={region === g} className={`${s.chip} ${region === g ? s.chipOn : ""}`} onClick={() => setRegion(g)}>
              {g} <span>{rows.filter((r) => r.region === g).length}</span>
            </button>
          ))}
        </div>
        <div className={s.group} role="radiogroup" aria-label="Sort">
          <span className="label">Sort</span>
          {(["name", "year"] as const).map((k) => (
            <button key={k} role="radio" aria-checked={sort === k} className={`${s.chip} ${sort === k ? s.chipOn : ""}`} onClick={() => setSort(k)}>
              {k === "name" ? "A–Z" : "Year"}
            </button>
          ))}
        </div>
      </div>

      <ol className={s.table}>
        {shown.map((r) => (
          <li
            key={r.name}
            className={`${s.row} ${hot === r.name ? s.rowOn : ""}`}
            onMouseEnter={() => setHot(r.name)}
            onMouseLeave={() => setHot(null)}
          >
            <span className={s.year}>{r.year}</span>
            <span className={s.name}>
              <i>{r.name}</i>
              <span className={s.auth}>{authority(r)}</span>
            </span>
            <span className={s.common}>{r.common ?? ""}</span>
            <span className={s.range}>{r.range}</span>
            <span className={s.region}>{r.region}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
