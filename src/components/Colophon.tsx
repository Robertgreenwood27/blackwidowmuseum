import Link from "next/link";
import { Hourglass } from "./Hourglass";
import s from "./Colophon.module.css";

export function Colophon() {
  return (
    <footer className={s.foot}>
      <div className={s.big}>
        <Hourglass size={64} />
        <span>Latrodectus</span>
      </div>
      <div className={s.cols}>
        <p className="label">The Black Widow Museum<br />Permanent collection · never complete</p>
        <p className="label">
          <Link href="/catalogue">Catalogue</Link><br />
          <Link href="/archive">Archive of sources</Link>
        </p>
        <p className="label">Every statement in this building cites its source.<br />Corrections are acquisitions.</p>
      </div>
    </footer>
  );
}
