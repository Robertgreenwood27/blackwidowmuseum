import type { Metadata } from "next";
import Link from "next/link";
import { catalogue, citedBy } from "@/museum/catalogue";
import { shortAccession } from "@/museum/format";
import { Colophon } from "@/components/Colophon";
import s from "./archive.module.css";

export const metadata: Metadata = { title: "Archive" };

export default function ArchivePage() {
  const sources = [...catalogue().sources.values()].sort((a, b) => Number(b.year) - Number(a.year) || a.key.localeCompare(b.key));
  return (
    <>
      <section className={s.page}>
        <p className="label">Every work the museum cites · newest first</p>
        <h1 className={s.title}>Archive</h1>
        <ol className={s.list}>
          {sources.map((src) => {
            const cites = citedBy(src.key);
            return (
              <li key={src.key} id={src.key} className={s.item}>
                <span className={s.year}>{src.year}</span>
                <div className={s.main}>
                  <p className={s.work}>{src.title}</p>
                  <p className={s.by}>
                    {src.authors}{src.container && <> — <i>{src.container}</i></>}
                  </p>
                  <p className={s.link}>
                    {src.doi ? <a href={`https://doi.org/${src.doi}`}>doi:{src.doi}</a> : src.url && <a href={src.url}>{src.url}</a>}
                  </p>
                </div>
                <ul className={s.cited}>
                  <li className="label">Cited in</li>
                  {cites.map((n) => (
                    <li key={n.id}><Link href={n.href}><span className="label">{shortAccession(n.accession)}</span> {n.title}</Link></li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>
      <Colophon />
    </>
  );
}
