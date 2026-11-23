import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import { catalogue, children, descendants } from "@/museum/catalogue";
import { roman, shortAccession } from "@/museum/format";
import { Motif } from "@/stage/motifs";
import { stageFor } from "@/stage/registry";
import { ExhibitCase } from "./ExhibitCase";
import { SilkTrail } from "./SilkTrail";
import { Colophon } from "./Colophon";
import { VaultProgress } from "./Visited";
import s from "./VaultView.module.css";

export function VaultView({ vault }: { vault: ExhibitNode }) {
  const { vaults } = catalogue();
  const idx = vaults.findIndex((v) => v.id === vault.id);
  const num = roman(idx + 1);
  const rooms = children(vault);
  const all = descendants(vault);
  const open = rooms.filter((r) => r.status === "open");
  const planned = rooms.filter((r) => r.status === "planned");
  const next = vaults[(idx + 1) % vaults.length];
  const stage = stageFor(vault.id);
  const Stage = stage?.component;

  return (
    <>
      <section className={s.hero}>
        <span className={s.numeral} aria-hidden="true">{num}</span>
        <div className={s.trail}><SilkTrail chain={[vault]} /></div>
        <div className={s.heading}>
          <span className="label">Vault {num} · {shortAccession(vault.accession)}</span>
          <h1 className={s.title}>{vault.title}</h1>
          {vault.kicker && <p className={s.kicker}>{vault.kicker}</p>}
        </div>
        <Motif vault={vault.id} className={s.motif} />
        <div className={s.side}>
          {vault.summary && <p className={s.summary}>{vault.summary}</p>}
          <p className="label">
            {all.filter((e) => e.status === "open").length} open · {all.filter((e) => e.status === "planned").length} in preparation
          </p>
          <VaultProgress ids={all.filter((e) => e.id !== vault.id && e.status === "open").map((e) => e.id)} />
        </div>
      </section>

      {Stage && (
        <section className={s.stage} aria-label={stage.medium}>
          <Stage exhibit={vault} />
        </section>
      )}

      <section className={s.floor} aria-label="Exhibits">
        <div className={s.grid}>
          {open.map((e, i) => (
            <div key={e.id} className={i === 0 ? s.feature : s.cell}>
              <ExhibitCase exhibit={e} size={i === 0 ? "l" : "m"} />
            </div>
          ))}
          {planned.map((e) => (
            <div key={e.id} className={s.cell}>
              <ExhibitCase exhibit={e} size="s" />
            </div>
          ))}
        </div>
      </section>

      <Link href={next.href} className={s.next}>
        <span className="label">Next vault</span>
        <span className={s.nextTitle}>{next.title} →</span>
      </Link>
      <Colophon />
    </>
  );
}
