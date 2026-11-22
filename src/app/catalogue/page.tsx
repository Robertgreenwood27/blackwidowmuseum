import type { Metadata } from "next";
import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import { catalogue, children } from "@/museum/catalogue";
import { roman, shortAccession } from "@/museum/format";
import { Colophon } from "@/components/Colophon";
import s from "./catalogue.module.css";

export const metadata: Metadata = { title: "Catalogue" };

function Branch({ node }: { node: ExhibitNode }) {
  const kids = children(node);
  return (
    <li className={node.status === "open" ? s.open : s.planned}>
      <Link href={node.href} className={s.entry} style={{ paddingLeft: `${(node.depth - 2) * 40}px` }}>
        <span className={s.acc}>{shortAccession(node.accession)}</span>
        <span className={s.name}>{node.title}</span>
        <span className={s.kick}>{node.kicker}</span>
        <span className={s.state}>{node.status === "open" ? "On view" : "In prep."}</span>
      </Link>
      {kids.length > 0 && <ul>{kids.map((k) => <Branch key={k.id} node={k} />)}</ul>}
    </li>
  );
}

export default function CataloguePage() {
  const { vaults } = catalogue();
  return (
    <>
      <section className={s.page}>
        <p className="label">The complete accession register</p>
        <h1 className={s.title}>Catalogue</h1>
        {vaults.map((v, i) => (
          <section key={v.id} className={s.vault}>
            <Link href={v.href} className={s.vaultHead}>
              <span className={s.num}>{roman(i + 1)}</span>
              <span className={s.vaultTitle}>{v.title}</span>
            </Link>
            <ul>{children(v).map((c) => <Branch key={c.id} node={c} />)}</ul>
          </section>
        ))}
      </section>
      <Colophon />
    </>
  );
}
