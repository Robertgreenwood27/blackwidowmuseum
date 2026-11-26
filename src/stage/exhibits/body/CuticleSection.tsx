/**
 * STAGE — body.exoskeleton, medium: interactive cuticle section.
 * Server half: reads the open halls, plus the barrier numbers (the
 * temperature band and the lipid-removal ratio) from "The Waxed Shield"
 * hall's figures, so the drawing never hard-codes a measurement.
 */
import type { StageProps } from "@/stage/registry";
import { children } from "@/museum/catalogue";
import { roman } from "@/museum/format";
import { CuticleSectionView, type CuticleItem, type BarrierFacts } from "./CuticleSectionView";

export function CuticleSection({ exhibit }: StageProps) {
  const halls = children(exhibit);
  const items: CuticleItem[] = halls
    .map((c, i) => ({ c, n: roman(i + 1) }))
    .filter(({ c }) => c.status === "open")
    .map(({ c, n }) => ({ id: c.id, title: c.title, kicker: c.kicker ?? "", href: c.href, hall: n }));

  const shield = halls.find((c) => c.id === "body.exoskeleton.waterproofing");
  const bandFig = shield?.figures.find((f) => f.unit === "°C");
  const ratioFig = shield?.figures.find((f) => /faster water loss/i.test(f.label));
  const [lo, hi] = String(bandFig?.value ?? "")
    .split(/[–-]/)
    .map((v) => Number(v));

  const barrier: BarrierFacts = {
    band: Number.isFinite(lo) && Number.isFinite(hi) && hi > lo ? [lo, hi] : null,
    ratioShown: ratioFig ? String(ratioFig.value) : null,
    ratioNote: ratioFig?.note ?? null,
  };

  return <CuticleSectionView items={items} barrier={barrier} />;
}
