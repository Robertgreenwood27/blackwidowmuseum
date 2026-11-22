import Link from "next/link";
import type { ExhibitNode } from "@/museum/schema";
import s from "./SilkTrail.module.css";

/** Breadcrumb as a dragline: the thread you came in on. */
export function SilkTrail({ chain }: { chain: ExhibitNode[] }) {
  return (
    <nav className={s.trail} aria-label="Location in the museum">
      <Link href="/">Entrance</Link>
      {chain.map((n, i) => (
        <span key={n.id} className={s.step}>
          <span className={s.thread} aria-hidden="true" />
          {i === chain.length - 1 ? <span aria-current="page">{n.title}</span> : <Link href={n.href}>{n.title}</Link>}
        </span>
      ))}
    </nav>
  );
}
