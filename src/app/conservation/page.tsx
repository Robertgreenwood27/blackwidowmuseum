/**
 * THE CONSERVATION DESK — every media item awaiting curatorial review.
 * To approve: set `review: approved` on the media entry in its exhibit.yaml.
 * To replace: drop a new file at the same path (or change `src`), then approve.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { catalogue } from "@/museum/catalogue";
import { shortAccession } from "@/museum/format";
import { mediaUrl } from "@/museum/media";
import s from "./conservation.module.css";

export const metadata: Metadata = { title: "Conservation desk", robots: { index: false } };

export default function ConservationPage() {
  const items = [...catalogue().byId.values()]
    .sort((a, b) => a.accession.localeCompare(b.accession))
    .flatMap((n) => n.media.map((m) => ({ n, m })));
  const pending = items.filter((i) => i.m.review === "pending");

  return (
    <section className={s.page}>
      <p className="label">Back of house · not linked from the galleries</p>
      <h1 className={s.title}>Conservation</h1>
      <p className={s.lede}>
        {pending.length} of {items.length} media items await review. Approve one by setting{" "}
        <code>review: approved</code> on its entry in the exhibit&apos;s <code>exhibit.yaml</code>; replace one by
        overwriting the file at its path. Full-resolution originals are in <code>media-originals/</code>.
      </p>
      <ol className={s.grid}>
        {items.map(({ n, m }) => (
          <li key={m.src} className={m.review === "pending" ? s.pending : s.approved}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mediaUrl(m.src)} alt={m.alt} loading="lazy" />
            <div className={s.meta}>
              <span className="label">{shortAccession(n.accession)} · {m.review}{m.generated && " · generated"}</span>
              <Link href={n.href} className={s.name}>{n.title}</Link>
              <p className={s.alt}>{m.alt}</p>
              <code className={s.path}>content/museum{n.href}/exhibit.yaml</code>
              <code className={s.path}>{m.src}</code>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
