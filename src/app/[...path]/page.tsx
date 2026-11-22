/**
 * One route serves the entire building, to any depth:
 *   /web                       → Vault
 *   /web/gumfoot               → Exhibit
 *   /web/gumfoot/anchors/...   → Sub-exhibit, sub-sub-exhibit, forever.
 */
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { catalogue, getNode } from "@/museum/catalogue";
import { VaultView } from "@/components/VaultView";
import { Plate } from "@/components/Plate";

export function generateStaticParams() {
  const { byHref, aliases } = catalogue();
  return [...byHref.keys(), ...aliases.keys()].map((href) => ({ path: href.slice(1).split("/") }));
}

const hrefOf = (path: string[]) => "/" + path.map(decodeURIComponent).join("/");

export async function generateMetadata({ params }: PageProps<"/[...path]">): Promise<Metadata> {
  const { path } = await params;
  const node = getNode(hrefOf(path));
  if (!node) return {};
  return { title: node.title, description: node.summary ?? node.kicker };
}

export default async function Page({ params }: PageProps<"/[...path]">) {
  const { path } = await params;
  const href = hrefOf(path);
  const node = getNode(href);
  if (!node) {
    const moved = catalogue().aliases.get(href);
    if (moved) permanentRedirect(moved);
    notFound();
  }
  return node.depth === 1 ? <VaultView vault={node} /> : <Plate exhibit={node} />;
}
