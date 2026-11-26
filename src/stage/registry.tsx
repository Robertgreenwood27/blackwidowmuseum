/**
 * THE STAGE REGISTRY — presentation, keyed by permanent exhibit id.
 *
 * Every exhibit renders as a Plate by default (generated from its YAML).
 * To give an exhibit a richer presentation, write a component that takes
 * `{ exhibit }` and register it here. Nothing in content/ changes.
 *
 *   'web.gumfoot': { component: GumfootDiagram, medium: 'animated diagram' }
 *
 * For Three.js / WebGL: make the component a client component that loads
 * the heavy part with next/dynamic(..., { ssr: false }) — see
 * src/components/entrance/Entrance.tsx for the pattern.
 *
 * `placement`:
 *   "lead"    — the stage replaces the plate's opening (full-bleed, first thing seen)
 *   "inline"  — the stage sits after the key figures, the plate continues around it
 *   "replace" — the stage is the whole exhibit (immersive); placard + sources still render
 *
 * A stage keyed by a VAULT id renders on the vault page, between the hero
 * and the cases (placement is ignored there).
 */
import type { ComponentType } from "react";
import type { ExhibitNode } from "@/museum/schema";
import { GumfootDiagram } from "./exhibits/web/GumfootDiagram";
import { SensoryMap } from "./exhibits/senses/SensoryMap";
import { PlaybackExperiment } from "./exhibits/senses/PlaybackExperiment";
import { SpeciesRoster } from "./exhibits/genus/SpeciesRoster";
import { GutMap } from "./exhibits/body/GutMap";
import { LegAtlas } from "./exhibits/body/LegAtlas";
import { PalpAtlas } from "./exhibits/body/PalpAtlas";
import { TractMap } from "./exhibits/body/TractMap";
import { FangAtlas } from "./exhibits/body/FangAtlas";
import { CuticleSection } from "./exhibits/body/CuticleSection";

export type StageProps = { exhibit: ExhibitNode };
export type StageEntry = {
  component: ComponentType<StageProps>;
  /** Shown on the placard: "illustrated plate", "animated diagram", "simulation", "3D specimen"… */
  medium: string;
  placement: "lead" | "inline" | "replace";
};

export const STAGES: Record<string, StageEntry> = {
  "web.gumfoot": { component: GumfootDiagram, medium: "Animated diagram", placement: "lead" },
  senses: { component: SensoryMap, medium: "Interactive sensory map", placement: "lead" },
  "senses.vibration.prey-or-mate": { component: PlaybackExperiment, medium: "Interactive playback experiment", placement: "inline" },
  "genus.roster": { component: SpeciesRoster, medium: "Interactive species roster", placement: "inline" },
  "body.digestion": { component: GutMap, medium: "Exhibit with halls · interactive gut map", placement: "inline" },
  "body.legs": { component: LegAtlas, medium: "Exhibit with halls · animated leg atlas", placement: "inline" },
  "body.pedipalps": { component: PalpAtlas, medium: "Exhibit with halls · animated palp atlas", placement: "inline" },
  "body.epigynum": { component: TractMap, medium: "Exhibit with halls · animated tract map", placement: "inline" },
  "body.chelicerae": { component: FangAtlas, medium: "Exhibit with halls · animated fang atlas", placement: "inline" },
  "body.exoskeleton": { component: CuticleSection, medium: "Exhibit with halls · interactive cuticle section", placement: "inline" },
};

export const stageFor = (id: string): StageEntry | null => STAGES[id] ?? null;
