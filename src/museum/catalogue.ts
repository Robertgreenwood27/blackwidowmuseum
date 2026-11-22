/**
 * THE CATALOGUE — reads the collection from disk and builds the building.
 *
 * Server-only. Walks content/museum/, validates every exhibit.yaml against
 * the schema, cross-checks citations and relations, and fails the build
 * loudly if anything is inconsistent. Adding an exhibit = adding a folder.
 */
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { ExhibitFile, SourcesFile, type ExhibitNode, type Source } from "./schema";

const ROOT = path.join(process.cwd(), "content");
const MUSEUM = path.join(ROOT, "museum");
const FILE = "exhibit.yaml";

export type Catalogue = {
  byId: Map<string, ExhibitNode>;
  byHref: Map<string, ExhibitNode>;
  aliases: Map<string, string>; // old href -> current href
  vaults: ExhibitNode[];
  sources: Map<string, Source>;
};

let memo: Catalogue | null = null;

export function catalogue(): Catalogue {
  if (memo && process.env.NODE_ENV === "production") return memo;
  memo = build();
  return memo;
}

function build(): Catalogue {
  const errors: string[] = [];
  const sourcesRaw = YAML.parse(fs.readFileSync(path.join(ROOT, "sources.yaml"), "utf8")) ?? {};
  const parsedSources = SourcesFile.safeParse(sourcesRaw);
  if (!parsedSources.success) throw new Error(`sources.yaml: ${parsedSources.error.message}`);
  const sources = new Map<string, Source>(
    Object.entries(parsedSources.data).map(([key, s]) => [key, { ...s, key }]),
  );

  const byId = new Map<string, ExhibitNode>();
  const byHref = new Map<string, ExhibitNode>();
  const accessions = new Map<string, string>();

  const walk = (dir: string, segs: string[], parentId: string | null, vaultId: string | null) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory() || e.name.startsWith("_") || e.name.startsWith(".")) continue;
      const folder = path.join(dir, e.name);
      const file = path.join(folder, FILE);
      if (!fs.existsSync(file)) {
        errors.push(`${rel(folder)} has no ${FILE}`);
        continue;
      }
      const parsed = ExhibitFile.safeParse(YAML.parse(fs.readFileSync(file, "utf8")));
      if (!parsed.success) {
        errors.push(`${rel(file)}:\n  ${parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("\n  ")}`);
        continue;
      }
      const data = parsed.data;
      const p = [...segs, e.name];
      const node: ExhibitNode = {
        ...data,
        path: p,
        href: "/" + p.join("/"),
        depth: p.length,
        parentId,
        childIds: [],
        vaultId: vaultId ?? data.id,
      };
      if (byId.has(data.id)) errors.push(`duplicate id "${data.id}" (${rel(file)})`);
      const dupe = accessions.get(data.accession);
      if (dupe) errors.push(`accession ${data.accession} used by both ${dupe} and ${data.id}`);
      accessions.set(data.accession, data.id);
      byId.set(data.id, node);
      byHref.set(node.href, node);
      if (parentId) byId.get(parentId)!.childIds.push(data.id);
      walk(folder, p, data.id, vaultId ?? data.id);
    }
  };
  walk(MUSEUM, [], null, null);

  const aliases = new Map<string, string>();
  for (const n of byId.values()) {
    const cite = (keys: string[], where: string) =>
      keys.forEach((k) => !sources.has(k) && errors.push(`${n.id} ${where} cites unknown source "${k}"`));
    n.figures.forEach((f) => cite(f.sources, `figure "${f.label}"`));
    n.observations.forEach((o) => cite(o.sources, `observation "${o.id}"`));
    n.related.forEach((r) => !byId.has(r) && errors.push(`${n.id} relates to unknown exhibit "${r}"`));
    n.aliases.forEach((a) => aliases.set("/" + a.replace(/^\/+/, ""), n.href));
    n.childIds.sort((a, b) => sortKey(byId.get(a)!) - sortKey(byId.get(b)!) || a.localeCompare(b));
  }

  if (errors.length) {
    throw new Error(`\n\n✗ The collection failed inspection:\n\n- ${errors.join("\n- ")}\n`);
  }

  const vaults = [...byId.values()].filter((n) => n.depth === 1).sort((a, b) => sortKey(a) - sortKey(b));
  return { byId, byHref, aliases, vaults, sources };
}

const sortKey = (n: ExhibitNode) => n.order;
const rel = (p: string) => path.relative(process.cwd(), p);

/* ---------- queries ---------- */

export const getNode = (href: string) => catalogue().byHref.get(href) ?? null;
export const getById = (id: string) => catalogue().byId.get(id) ?? null;
export const children = (n: ExhibitNode) => n.childIds.map((id) => catalogue().byId.get(id)!);

export function ancestry(n: ExhibitNode): ExhibitNode[] {
  const chain: ExhibitNode[] = [];
  let cur: ExhibitNode | null = n;
  while (cur) {
    chain.unshift(cur);
    cur = cur.parentId ? getById(cur.parentId) : null;
  }
  return chain;
}

export function descendants(n: ExhibitNode): ExhibitNode[] {
  return children(n).flatMap((c) => [c, ...descendants(c)]);
}

/** Ordered, de-duplicated source list for an exhibit — numbering for footnotes. */
export function citationsFor(n: ExhibitNode): Source[] {
  const keys: string[] = [];
  const add = (k: string) => !keys.includes(k) && keys.push(k);
  n.figures.forEach((f) => f.sources.forEach(add));
  n.observations.forEach((o) => o.sources.forEach(add));
  return keys.map((k) => catalogue().sources.get(k)!);
}

export function stats() {
  const all = [...catalogue().byId.values()].filter((n) => n.depth > 1);
  return {
    open: all.filter((n) => n.status === "open").length,
    planned: all.filter((n) => n.status === "planned").length,
    sources: catalogue().sources.size,
    observations: all.reduce((s, n) => s + n.observations.length, 0),
  };
}

export function featuredFigures() {
  return [...catalogue().byId.values()].flatMap((n) =>
    n.figures.filter((f) => f.featured).map((f) => ({ ...f, exhibit: n })),
  );
}

/** Which exhibits cite a given source. */
export function citedBy(key: string): ExhibitNode[] {
  return [...catalogue().byId.values()].filter(
    (n) => n.figures.some((f) => f.sources.includes(key)) || n.observations.some((o) => o.sources.includes(key)),
  );
}
