/**
 * STAGE — body.legs, medium: animated leg atlas.
 * Server half: reads the exhibit's open halls from the catalogue and hands
 * their identity to the client drawing. Where each hall sits on the leg is
 * presentation, kept in LegAtlasView.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { LegAtlasView, type LegItem } from "./LegAtlasView";

export function LegAtlas({ exhibit }: StageProps) {
  const items: LegItem[] = children(exhibit)
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));
  return <LegAtlasView items={items} />;
}
