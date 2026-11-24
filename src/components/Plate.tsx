/**
 * THE PLATE — the default presentation of any exhibit, generated entirely
 * from its YAML. Figures become numerals, observations become numbered
 * labels with footnotes, sources become a bibliography. A registered stage
 * (src/stage/registry.tsx) is mounted into it without changing any data.
 */
import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import { ancestry, children, citationsFor, getById } from "@/museum/catalogue";
import { roman, shortAccession, vaultNumber } from "@/museum/format";
import { mediaUrl } from "@/museum/media";
import { stageFor } from "@/stage/registry";
import { Motif } from "@/stage/motifs";
import { SilkTrail } from "./SilkTrail";
import { Colophon } from "./Colophon";
import { VisitTracker, VisitedMark } from "./Visited";
import { HallCorridor, hallsLabel } from "./Halls";
import s from "./Plate.module.css";

export function Plate({ exhibit }: { exhibit: ExhibitNode }) {
  const chain = ancestry(exhibit);
  const vault = chain[0];
  const stage = stageFor(exhibit.id);
  const Stage = stage?.component;
  const cites = citationsFor(exhibit);
  const fn = (keys: string[]) =>
    keys.map((k) => cites.findIndex((c) => c.key === k) + 1).sort((a, b) => a - b);
  const subs = children(exhibit);
  const related = exhibit.related.map(getById).filter((n): n is ExhibitNode => !!n);
  const siblings = exhibit.parentId ? children(getById(exhibit.parentId)!) : [];
  const si = siblings.findIndex((x) => x.id === exhibit.id);
  const parent = exhibit.parentId ? getById(exhibit.parentId)! : null;
  /** A plate below vault level that sits inside another exhibit is a hall. */
  const isHall = !!parent && parent.depth > 1;
  const next = siblings[si + 1];
  const open = exhibit.status === "open";
  const replace = stage?.placement === "replace";

  return (
    <article className={s.plate}>
      {open && <VisitTracker id={exhibit.id} />}
      <header className={s.head}>
        <div className={s.trail}><SilkTrail chain={chain} /></div>
        <div className={s.titleBlock}>
          <h1 className={s.title}>{exhibit.title}</h1>
          {exhibit.kicker && <p className={s.kicker}>{exhibit.kicker}</p>}
        </div>
        <dl className={s.placard}>
          <div><dt>Accession</dt><dd>{shortAccession(exhibit.accession)}</dd></div>
          <div><dt>Vault</dt><dd>{roman(vaultNumber(exhibit.accession))} · {vault.title}</dd></div>
          <div><dt>Medium</dt><dd>{open ? (stage?.medium ?? (subs.length ? "Exhibit with halls" : "Illustrated plate")) : "—"}</dd></div>
          {isHall && (
            <div><dt>Hall</dt><dd>{roman(si + 1)} of {roman(siblings.length)} · <Link href={parent!.href}>{parent!.title}</Link></dd></div>
          )}
          {subs.length > 0 && <div><dt>Halls</dt><dd>{hallsLabel(subs.length)}</dd></div>}
          <div><dt>Status</dt><dd className={open ? undefined : s.prep}>{open ? "On view" : "In preparation"}</dd></div>
          {exhibit.taxa.length > 0 && <div><dt>Taxa</dt><dd><i>{exhibit.taxa.join(", ")}</i></dd></div>}
          {exhibit.revised && <div><dt>Revised</dt><dd>{exhibit.revised}</dd></div>}
          <div><dt>Sources</dt><dd>{cites.length}</dd></div>
        </dl>
        {exhibit.summary && <p className={s.summary}>{exhibit.summary}</p>}
      </header>

      {!open && (
        <section className={s.draped} aria-label="Case in preparation">
          <Motif vault={vault.id} className={s.drapedMotif} />
          <p className={s.drapedText}>This case is being prepared.</p>
          <p className="label">Accession {exhibit.accession} is reserved. The research is under way.</p>
        </section>
      )}

      {subs.length > 0 && <HallCorridor parent={exhibit} halls={subs} />}

      {Stage && stage?.placement !== "inline" && (
        <section className={s.stage}><Stage exhibit={exhibit} /></section>
      )}

      {exhibit.media.length > 0 && (
        <section className={s.media} aria-label="Plates">
          {exhibit.media.map((m, i) => (
            <figure key={m.src} className={s.mediaFig}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mediaUrl(m.src)} alt={m.alt} loading={i === 0 ? "eager" : "lazy"} />
              <figcaption className={s.mediaCap}>
                <span className="label">Plate {roman(i + 1)}</span>
                <span className={s.mediaAlt}>{m.alt}</span>
                <span className="label">
                  {[m.credit, m.license].filter(Boolean).join(" · ")}
                  {m.review === "pending" && <span className={s.pending}>Pending curatorial review</span>}
                </span>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {!replace && exhibit.figures.length > 0 && (
        <section className={s.figures} aria-label="Key figures">
          {exhibit.figures.map((f, i) => (
            <div key={i} className={s.figure}>
              <span className={s.figVal}>
                {f.value}
                {f.unit && <small>{f.unit}</small>}
              </span>
              <span className={s.figLabel}>{f.label}</span>
              <span className="label">
                {f.note}
                {f.sources.length > 0 && <Refs n={fn(f.sources)} />}
              </span>
            </div>
          ))}
        </section>
      )}

      {Stage && stage?.placement === "inline" && (
        <section className={s.stage}><Stage exhibit={exhibit} /></section>
      )}


      {!replace && exhibit.observations.length > 0 && (
        <section className={s.obs} aria-label="Observations">
          <h2 className="label">Observations</h2>
          <ol>
            {exhibit.observations.map((o, i) => (
              <li key={o.id} id={o.id}>
                <span className={s.obsN}>{String(i + 1).padStart(2, "0")}</span>
                <p>
                  {o.text}
                  <Refs n={fn(o.sources)} />
                </p>
                {o.confidence !== "established" && <span className={s.conf}>{o.confidence}</span>}
              </li>
            ))}
          </ol>
        </section>
      )}

      {exhibit.terms.length > 0 && (
        <section className={s.terms} aria-label="Terms">
          <h2 className="label">Terms</h2>
          <dl>
            {exhibit.terms.map((t) => (
              <div key={t.term}><dt>{t.term}</dt><dd>{t.def}</dd></div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className={s.related} aria-label="Related exhibits">
          <h2 className="label">Threads to other cases</h2>
          <ul>
            {related.map((r) => (
              <li key={r.id}>
                <Link href={r.href}>
                  <span className="label">{shortAccession(r.accession)}</span>
                  <span className={s.relTitle}>{r.title}</span>
                  <span className="label"><VisitedMark id={r.id} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {cites.length > 0 && (
        <section className={s.sources} aria-label="Sources">
          <h2 className="label">Sources</h2>
          <ol>
            {cites.map((c, i) => (
              <li key={c.key} id={`src-${i + 1}`}>
                <span className={s.srcN}>{i + 1}</span>
                <span>
                  {c.authors} ({c.year}). <i>{c.title}</i>
                  {c.container && <>. {c.container}</>}.{" "}
                  {c.doi ? <a href={`https://doi.org/${c.doi}`}>doi:{c.doi}</a> : c.url && <a href={c.url}>{new URL(c.url).hostname}</a>}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {next ? (
        <Link href={next.href} className={s.next}>
          <span className="label">{isHall ? `Next hall · ${roman(si + 2)}` : "Next case"} · {shortAccession(next.accession)}</span>
          <span className={s.nextTitle}>{next.title} →</span>
        </Link>
      ) : isHall && (
        <Link href={parent!.href} className={s.next}>
          <span className="label">Last hall · return to the exhibit · {shortAccession(parent!.accession)}</span>
          <span className={s.nextTitle}>← {parent!.title}</span>
        </Link>
      )}
      <Colophon />
    </article>
  );
}

function Refs({ n }: { n: number[] }) {
  if (!n.length) return null;
  return (
    <sup className={s.refs}>
      {n.map((i) => <a key={i} href={`#src-${i}`}>{i}</a>)}
    </sup>
  );
}

