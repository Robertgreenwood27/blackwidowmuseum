import Link from "next/link";
import { Hourglass } from "./Hourglass";
import s from "./Masthead.module.css";

export function Masthead() {
  return (
    <header className={s.mast}>
      <Link href="/" className={s.mark} aria-label="The Black Widow Museum — entrance">
        <Hourglass size={18} />
        <span className={s.name}>
          <span>The Black Widow</span>
          <span>Museum</span>
        </span>
      </Link>
      <nav className={s.nav} aria-label="Museum">
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/archive">Archive</Link>
      </nav>
    </header>
  );
}
