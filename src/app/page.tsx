import Link from "next/link";
import { catalogue, descendants, featuredFigures, stats } from "@/museum/catalogue";
import { roman, shortAccession } from "@/museum/format";
import { Entrance } from "@/components/entrance/Entrance";
import { Hourglass } from "@/components/Hourglass";
import { Colophon } from "@/components/Colophon";
import { Motif } from "@/stage/motifs";
import s from "./page.module.css";

export default function Home() {
  const { vaults } = catalogue();
  const st = stats();
  const anchors = vaults.map((v, i) => {
    const all = descendants(v);
    return {
      href: v.href,
      numeral: roman(i + 1),
      title: v.title,
      open: all.filter((e) => e.status === "open").length,
      planned: all.filter((e) => e.status === "planned").length,
    };
  });
  const ledger = featuredFigures();

  return (
    <>
      <section className={s.hero} aria-label="Entrance">
        <h1 className={s.title}>
          <span className={s.the}>The</span>
          <span className={s.black}>Black</span>
          <span className={s.widow}>Widow</span>
          <span className={s.museum}>Museum</span>
        </h1>
        <Entrance anchors={anchors} />
        <p className={`${s.capTop} label`}>
          Fig. 0 — Latrodectus cobweb, schematic.<br />
          Every gumfoot line leads to a vault.<br />
          Touch one.
        </p>
        <p className={`${s.capSide} label`}>
          <Hourglass size={12} /> She hangs inverted.<br />The hourglass faces you.
        </p>
        <a href="#directory" className={`${s.down} label`}>Descend ↓</a>
      </section>

      <section className={s.thesis}>
        <p className={s.thesisLine}>
          One genus.<br />
          <em>Every</em> question.
        </p>
        <dl className={s.stats}>
          <div><dt className="label">Vaults</dt><dd>{vaults.length}</dd></div>
          <div><dt className="label">Exhibits open</dt><dd>{st.open}</dd></div>
          <div><dt className="label">In preparation</dt><dd>{st.planned}</dd></div>
          <div><dt className="label">Sourced observations</dt><dd>{st.observations}</dd></div>
          <div><dt className="label">Works in the archive</dt><dd>{st.sources}</dd></div>
        </dl>
        <p className={s.thesisNote}>
          A permanent collection that is never finished. New cases open as the research is done;
          the empty ones are marked, not hidden.
        </p>
      </section>

      <section id="directory" className={s.directory} aria-label="Directory of vaults">
        <header className={s.dirHead}>
          <span className="label">Directory</span>
          <span className="label">Open ▮ · In preparation ▯</span>
        </header>
        <ol>
          {vaults.map((v, i) => {
            const all = descendants(v);
            return (
              <li key={v.id}>
                <Link href={v.href} className={s.row}>
                  <span className={s.rowNum}>{roman(i + 1)}</span>
                  <span className={s.rowTitle}>{v.title}</span>
                  <span className={s.rowKicker}>{v.kicker}</span>
                  <span className={s.ticks} aria-label={`${all.filter((e) => e.status === "open").length} open of ${all.length}`}>
                    {all.map((e) => <i key={e.id} className={e.status === "open" ? s.tickOpen : s.tick} />)}
                  </span>
                  <span className={s.rowAcc}>{shortAccession(v.accession)}</span>
                  <Motif vault={v.id} className={s.rowMotif} />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {ledger.length > 0 && (
        <section className={s.ledger} aria-label="The ledger">
          <header className={s.dirHead}>
            <span className="label">The Ledger — the widow in numbers</span>
          </header>
          <div className={s.ledgerGrid}>
            {ledger.map((f, i) => (
              <Link key={i} href={f.exhibit.href} className={s.fig}>
                <span className={s.figVal}>
                  {f.value}
                  {f.unit && <small>{f.unit}</small>}
                </span>
                <span className={s.figLabel}>{f.label}</span>
                <span className="label">{f.exhibit.title} →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Colophon />
    </>
  );
}
