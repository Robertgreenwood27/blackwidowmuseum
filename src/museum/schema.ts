/**
 * THE COLLECTION SCHEMA
 * ---------------------------------------------------------------------------
 * This file defines what an exhibit *is*, independent of how it looks.
 *
 *   content/museum/<vault>/<exhibit>/<sub-exhibit>/.../exhibit.yaml
 *
 * Everything in here is science + identity. No colours, no layout, no
 * component names. Presentation lives in src/stage/ and is keyed by `id`,
 * so an exhibit can move from illustrated plate → animated diagram →
 * Three.js simulation without its facts, citations or identity changing.
 */
import { z } from "zod";

/** A citation key, e.g. "andrade1996". Must exist in content/sources.yaml. */
const SourceKey = z.string().regex(/^[a-z0-9-]+$/, "source keys are lowercase, e.g. andrade1996");

/** A quantitative or categorical fact — the raw material for visual display. */
export const Figure = z.object({
  /** The number or short value. Strings allowed for ranges ("8–13") or ratios. */
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  label: z.string(),
  /** Free-form qualifier shown small: "approx.", "adult female", "per sac". */
  note: z.string().optional(),
  sources: z.array(SourceKey).default([]),
  /** Feature on the museum's front ledger. */
  featured: z.boolean().default(false),
});

/** One verifiable statement. Short — a label, not a paragraph. */
export const Observation = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  text: z.string(),
  sources: z.array(SourceKey).default([]),
  /** "established" (textbook), "supported" (good primary evidence), "debated". */
  confidence: z.enum(["established", "supported", "debated"]).default("established"),
});

export const Term = z.object({ term: z.string(), def: z.string() });

/**
 * Media reference. `src` may be:
 *   - "/local/path.jpg"            → served from /public
 *   - "supabase:bucket/path.jpg"   → Supabase Storage public object
 *   - "https://..."                → external
 */
export const Media = z.object({
  src: z.string(),
  alt: z.string(),
  kind: z.enum(["image", "video", "model"]).default("image"),
  credit: z.string().optional(),
  license: z.string().optional(),
  /** Machine-generated imagery is an interpretation, not a specimen record. */
  generated: z.boolean().default(false),
  /** "pending" media is shown with a visible review mark until a curator approves it. */
  review: z.enum(["pending", "approved"]).default("approved"),
});

/**
 * One row of a taxonomic checklist — e.g. every accepted species in a genus.
 * `author` keeps parentheses exactly as the catalogue prints them.
 */
export const ChecklistEntry = z.object({
  name: z.string(),
  author: z.string(),
  year: z.number(),
  common: z.string().optional(),
  /** Broad region for grouping: a classification, not a range map. */
  region: z.string(),
  range: z.string(),
  sources: z.array(SourceKey).default([]),
});

export const ExhibitFile = z.object({
  /** Permanent identity. Never change it, even if the folder moves. */
  id: z.string().regex(/^[a-z0-9-]+(\.[a-z0-9-]+)*$/, "ids are dotted lowercase, e.g. web.gumfoot"),
  /** Accession number: BWM-03, BWM-03.01, BWM-03.01.02 ... */
  accession: z.string().regex(/^BWM-\d{2}(\.\d{2})*$/),
  title: z.string(),
  /** A short italic line under the title. */
  kicker: z.string().optional(),
  /** One or two sentences. The only "paragraph" an exhibit is allowed. */
  summary: z.string().optional(),
  status: z.enum(["open", "planned"]).default("planned"),
  order: z.number().default(100),
  taxa: z.array(z.string()).default([]),
  figures: z.array(Figure).default([]),
  observations: z.array(Observation).default([]),
  terms: z.array(Term).default([]),
  media: z.array(Media).default([]),
  /** Optional taxonomic checklist (species roster). */
  checklist: z.array(ChecklistEntry).default([]),
  /** Other exhibit ids. */
  related: z.array(z.string()).default([]),
  /** Old URL paths (e.g. "web/old-name") that should redirect here. */
  aliases: z.array(z.string()).default([]),
  revised: z.string().optional(),
});

export const SourceEntry = z.object({
  authors: z.string(),
  year: z.union([z.number(), z.string()]),
  title: z.string(),
  container: z.string().optional(),
  doi: z.string().optional(),
  url: z.string().optional(),
});
export const SourcesFile = z.record(SourceKey, SourceEntry);

export type ChecklistEntryT = z.infer<typeof ChecklistEntry>;
export type FigureT = z.infer<typeof Figure>;
export type ObservationT = z.infer<typeof Observation>;
export type ExhibitData = z.infer<typeof ExhibitFile>;
export type Source = z.infer<typeof SourceEntry> & { key: string };

/** An exhibit placed in the building: data + its position in the tree. */
export type ExhibitNode = ExhibitData & {
  /** URL segments, derived from folders: ["web", "gumfoot"]. */
  path: string[];
  href: string;
  depth: number;
  parentId: string | null;
  childIds: string[];
  /** Vault (depth-1 ancestor) id. Vaults are their own vault. */
  vaultId: string;
};
