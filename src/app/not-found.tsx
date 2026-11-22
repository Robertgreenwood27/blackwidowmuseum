import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: "100svh", display: "grid", placeContent: "center", gap: 24, padding: "0 var(--gutter)", textAlign: "center" }}>
      <p className="label">Accession not found</p>
      <h1 className="display italic" style={{ fontSize: "clamp(64px, 12vw, 200px)" }}>Empty case.</h1>
      <p style={{ color: "var(--silk-2)" }}>Nothing hangs here — yet. The collection is still growing.</p>
      <Link href="/" className="label" style={{ color: "var(--silk)" }}>← Return to the entrance</Link>
    </section>
  );
}
