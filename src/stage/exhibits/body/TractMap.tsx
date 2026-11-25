/**
 * STAGE — body.epigynum, medium: animated tract map.
 * Server half: reads the open halls from the catalogue and hands their
 * identity to the client drawing. Where each hall sits is presentation,
 * kept in TractMapView.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { TractMapView, type TractItem } from "./TractMapView";

export function TractMap({ exhibit }: StageProps) {
  const items: TractItem[] = children(exhibit)
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));
  return <TractMapView items={items} />;
}
