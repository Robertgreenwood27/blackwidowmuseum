import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import { shortAccession } from "@/museum/format";
import { children, descendants } from "@/museum/catalogue";
import { VisitedMark } from "./Visited";
import { stageFor } from "@/stage/registry";
import { mediaUrl } from "@/museum/media";
import s from "./ExhibitCase.module.css";

/** A vitrine: how an exhibit appears from the gallery floor. */
export function ExhibitCase({ exhibit, size = "m" }: { exhibit: ExhibitNode; size?: "s" | "m" | "l" }) {
  const open = exhibit.status === "open";
  const lead = exhibit.figures[0];
  const subs = children(exhibit);
  const within = descendants(exhibit).filter((d) => d.id !== exhibit.id && d.status === "open").map((d) => d.id);
  const stage = stageFor(exhibit.id);
  const image = open ? exhibit.media.find((m) => m.kind === "image") : undefined;
  return (
    <Link href={exhibit.href} className={`${s.case} ${s[size]} ${open ? s.open : s.planned}`}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={s.image} src={mediaUrl(image.src)} alt="" loading="lazy" />
      )}
      <span className={s.top}>
        <span className="label">{shortAccession(exhibit.accession)}</span>
        <span className="label">{open ? (stage ? stage.medium : "Plate") : "In preparation"}</span>
      </span>
      {open && lead && (
        <span className={s.lead} aria-hidden="true">
          {lead.value}
          {lead.unit && <small>{lead.unit}</small>}
        </span>
      )}
      <span className={s.body}>
        <span className={s.title}>{exhibit.title}</span>
        {exhibit.kicker && <span className={s.kicker}>{exhibit.kicker}</span>}
        <span className={`${s.meta} label`}>
          {open ? `${exhibit.observations.length} observations` : "Case draped"}
          {subs.length > 0 && ` · ${subs.length} within`}
          {open && <VisitedMark id={exhibit.id} within={within} />}
        </span>
      </span>
    </Link>
  );
}
