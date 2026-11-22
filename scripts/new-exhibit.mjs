#!/usr/bin/env node
/**
 * Open a new case in the museum.
 *
 *   npm run new -- web/gumfoot/droplet-physics "Droplet Physics"
 *   npm run new -- venom "Venom"            (a new top-level vault)
 *
 * Creates content/museum/<path>/exhibit.yaml with a permanent id and the
 * next free accession number under its parent. Status starts as "planned"
 * (a draped case) until you add observations and flip it to "open".
 */
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const [rel, ...titleParts] = process.argv.slice(2);
if (!rel || !titleParts.length) {
  console.error('usage: npm run new -- <path/in/museum> "Title"');
  process.exit(1);
}
const segs = rel.replace(/^\/+|\/+$/g, "").split("/");
if (!segs.every((s) => /^[a-z0-9-]+$/.test(s))) {
  console.error("path segments must be lowercase-kebab, e.g. web/gumfoot/droplet-physics");
  process.exit(1);
}
const MUSEUM = path.join(process.cwd(), "content", "museum");
const dir = path.join(MUSEUM, ...segs);
const parentDir = path.dirname(dir);
if (fs.existsSync(path.join(dir, "exhibit.yaml"))) {
  console.error(`already exists: ${path.relative(process.cwd(), dir)}`);
  process.exit(1);
}

const read = (f) => YAML.parse(fs.readFileSync(f, "utf8"));
const siblings = fs.existsSync(parentDir)
  ? fs.readdirSync(parentDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && fs.existsSync(path.join(parentDir, e.name, "exhibit.yaml")))
      .map((e) => read(path.join(parentDir, e.name, "exhibit.yaml")))
  : [];

let accession, id;
if (segs.length === 1) {
  const n = Math.max(0, ...siblings.map((s) => parseInt(s.accession.slice(4, 6), 10))) + 1;
  accession = `BWM-${String(n).padStart(2, "0")}`;
  id = segs[0];
} else {
  const parentFile = path.join(parentDir, "exhibit.yaml");
  if (!fs.existsSync(parentFile)) {
    console.error(`parent exhibit missing: ${path.relative(process.cwd(), parentFile)} — create it first`);
    process.exit(1);
  }
  const parent = read(parentFile);
  const n = Math.max(0, ...siblings.map((s) => parseInt(s.accession.split(".").pop(), 10))) + 1;
  accession = `${parent.accession}.${String(n).padStart(2, "0")}`;
  id = `${parent.id}.${segs.at(-1)}`;
}

const order = Math.max(0, ...siblings.map((s) => s.order ?? 0)) + 1;
const title = titleParts.join(" ");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(
  path.join(dir, "exhibit.yaml"),
  `id: ${id}            # permanent — never change, even if the folder moves
accession: ${accession}
title: ${title}
# kicker: One italic line
# summary: One or two sentences, max.
status: planned       # flip to "open" when it has observations
order: ${order}
# taxa: [Latrodectus hesperus]
# figures:
#   - { value: 8, label: eyes, note: two rows of four, sources: [jocque2006] }
# observations:
#   - id: short-slug
#     text: One verifiable sentence.
#     sources: [key-from-content/sources.yaml]
# terms:
#   - { term: tarsus, def: the final segment of the leg }
# media:
#   - { src: "supabase:specimens/example.jpg", alt: "...", credit: "...", license: CC-BY }
# related: [web.gumfoot]
revised: ${new Date().toISOString().slice(0, 10)}
`,
);
console.log(`✓ ${accession}  ${id}  →  /${segs.join("/")}`);
