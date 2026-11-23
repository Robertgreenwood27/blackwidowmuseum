/**
 * STAGE — senses (vault), medium: interactive sensory map.
 * Server half: reads the vault's open cases from the catalogue and hands
 * their identity (title, kicker, href) to the client drawing. Where each
 * sense sits on the body is presentation, kept in SensoryMapView.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { shortAccession } from "@/museum/format";
import { SensoryMapView, type MapItem } from "./SensoryMapView";

export function SensoryMap({ exhibit }: StageProps) {
  const items: MapItem[] = children(exhibit)
    .filter((c) => c.status === "open")
    .map((c) => ({
      id: c.id,
      title: c.title,
      kicker: c.kicker ?? "",
      href: c.href,
      accession: shortAccession(c.accession),
    }));
  return <SensoryMapView items={items} />;
}
