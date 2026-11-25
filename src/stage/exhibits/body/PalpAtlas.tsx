/**
 * STAGE — body.pedipalps, medium: animated palp atlas.
 * Server half: reads the open halls, plus the coil-count figures from the
 * "Counting the Turns" hall, so the drawing's coil presets come from the
 * collection rather than being hard-coded here.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { PalpAtlasView, type PalpItem, type CoilPreset } from "./PalpAtlasView";

export function PalpAtlas({ exhibit }: StageProps) {
  const halls = children(exhibit);
  const items: PalpItem[] = halls
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));

  const coil = halls.find((c) => c.id === "body.pedipalps.the-coil");
  const presets: CoilPreset[] = (coil?.figures ?? [])
    .filter((f) => /^turns\b/i.test(f.label))
    .map((f) => ({
      name: f.label.replace(/^turns,?\s*/i, ""),
      turns: Number(String(f.value).replace(/[^\d.]/g, "")),
      shown: String(f.value),
      note: f.note ?? "",
    }))
    .filter((p) => p.turns > 0);

  return <PalpAtlasView items={items} presets={presets} />;
}
