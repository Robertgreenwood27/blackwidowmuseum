/**
 * STAGE — body.digestion, medium: interactive gut map.
 * Server half: reads the exhibit's open halls from the catalogue and hands
 * their identity to the client drawing. Where each hall sits along the
 * canal is presentation, kept in GutMapView.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { GutMapView, type GutItem } from "./GutMapView";

export function GutMap({ exhibit }: StageProps) {
  const halls = children(exhibit);
  const items: GutItem[] = halls
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));
  return <GutMapView items={items} />;
}
