/**
 * STAGE — body.breathing, medium: animated lung map.
 * Server half: reads the open halls, plus the low-oxygen treatments from the
 * "When Oxygen Runs Low" hall's figures (oxygen %, temperature, mortality),
 * so the drawing's experiment panel comes from the collection.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { LungMapView, type LungItem, type Treatment } from "./LungMapView";

export function LungMap({ exhibit }: StageProps) {
  const halls = children(exhibit);
  const items: LungItem[] = halls
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));

  const low = halls.find((c) => c.id === "body.breathing.submersion");
  const treatments: Treatment[] = (low?.figures ?? [])
    .filter((f) => /mortality/i.test(f.unit ?? ""))
    .map((f) => {
      const m = /([\d.]+)%\s*oxygen,\s*([\d.]+)\s*°C/i.exec(f.label);
      return m ? { oxygen: Number(m[1]), temp: Number(m[2]), mortality: Number(f.value), note: f.note ?? "" } : null;
    })
    .filter((t): t is Treatment => t !== null);

  return <LungMapView items={items} treatments={treatments} />;
}
