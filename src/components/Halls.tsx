/**
 * HALLS — an exhibit that opens into further exhibits.
 *
 * Any exhibit with sub-exhibits is a hall-bearing exhibit, and each of its
 * children is a Hall, numbered in roman order. Nothing in content/ declares
 * this: folders inside an exhibit folder are its halls.
 */
import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import { descendants } from "@/museum/catalogue";
import { roman, shortAccession } from "@/museum/format";
import { mediaUrl } from "@/museum/media";
import { VisitedMark } from "./Visited";
import s from "./Halls.module.css";

/** Receding doorframes: the mark of an exhibit with halls. */
export function HallsGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 16" width="22" height="16" aria-hidden="true">
      <path d="M1 15.5V6a5 5 0 0 1 10 0v9.5" />
      <path d="M6 15.5V7.5a3.5 3.5 0 0 1 7 0v8" opacity=".6" />
      <path d="M10.5 15.5V9a2.5 2.5 0 0 1 5 0v6.5" opacity=".35" />
      <path d="M0 15.5h22" opacity=".35" />
    </svg>
  );
}

export const hallsLabel = (n: number) => `${n} ${n === 1 ? "hall" : "halls"}`;

/** The corridor on a hall-bearing exhibit's plate. */
export function HallCorridor({ parent, halls }: { parent: ExhibitNode; halls: ExhibitNode[] }) {
  const open = halls.filter((h) => h.status === "open").length;
  return (
    <section className={s.corridor} aria-label={`Halls of ${parent.title}`}>
      <header className={s.head}>
        <HallsGlyph className={s.glyph} />
        <h2 className="label">The halls · {hallsLabel(halls.length)}</h2>
        <span className="label">{open} open</span>
      </header>
      <ol className={s.list}>
        {halls.map((h, i) => {
          const isOpen = h.status === "open";
          const image = isOpen ? h.media.find((m) => m.kind === "image") : undefined;
          const within = descendants(h).filter((d) => d.status === "open").map((d) => d.id);
          return (
            <li key={h.id}>
              <Link href={h.href} className={`${s.hall} ${isOpen ? "" : s.draped}`}>
                <span className={s.num}>
                  <span className="label">Hall</span>
                  <span className={s.numeral}>{roman(i + 1)}</span>
                </span>
                <span className={s.body}>
                  <span className={s.title}>{h.title}</span>
                  {h.kicker && <span className={s.kicker}>{h.kicker}</span>}
                </span>
                <span className={`${s.meta} label`}>
                  <span>{shortAccession(h.accession)}</span>
                  <span>{isOpen ? `${h.observations.length} observations` : "In preparation"}</span>
                  {isOpen && <VisitedMark id={h.id} within={within} />}
                </span>
                <span className={s.thumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {image && <img src={mediaUrl(image.src)} alt="" loading="lazy" />}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
