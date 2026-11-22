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
 */
import type { ComponentType } from "react";
import type { ExhibitNode } from "@/museum/schema";
import { GumfootDiagram } from "./exhibits/web/GumfootDiagram";

export type StageProps = { exhibit: ExhibitNode };
export type StageEntry = {
  component: ComponentType<StageProps>;
  /** Shown on the placard: "illustrated plate", "animated diagram", "simulation", "3D specimen"… */
  medium: string;
  placement: "lead" | "inline" | "replace";
};

export const STAGES: Record<string, StageEntry> = {
  "web.gumfoot": { component: GumfootDiagram, medium: "Animated diagram", placement: "lead" },
};

export const stageFor = (id: string): StageEntry | null => STAGES[id] ?? null;
