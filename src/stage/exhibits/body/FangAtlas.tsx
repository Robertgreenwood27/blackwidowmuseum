/**
 * STAGE — body.chelicerae, medium: animated fang atlas.
 * Server half: reads the open halls, plus the few numbers the drawing shows
 * (the pressure-experiment gape change, its sample size, the dry-bite share)
 * from the halls' figures, so nothing factual is hard-coded in the view.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { FangAtlasView, type FangItem, type FangFacts } from "./FangAtlasView";

const num = (v: string | number | undefined) => {
  const n = Number(String(v ?? "").replace(/[^\d.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
};

export function FangAtlas({ exhibit }: StageProps) {
  const halls = children(exhibit);
  const items: FangItem[] = halls
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));

  const hall = (slug: string) => halls.find((c) => c.id === `body.chelicerae.${slug}`);
  const gapeFig = hall("labidognath")?.figures.find((f) => f.unit === "°");
  const sampleFig = hall("muscles")?.figures.find((f) => /pressure experiment/i.test(f.label));
  const dryFig = hall("venom-route")?.figures.find((f) => /no detectable venom/i.test(f.label));

  const facts: FangFacts = {
    gape: num(gapeFig?.value),
    gapeShown: gapeFig ? `${gapeFig.value}${gapeFig.unit}` : null,
    sample: num(sampleFig?.value),
    dryShown: dryFig ? `${dryFig.value}${dryFig.unit ?? ""}` : null,
    dryNote: dryFig?.note ?? null,
  };

  return <FangAtlasView items={items} facts={facts} />;
}
