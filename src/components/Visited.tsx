"use client";
/**
 * Small client islands for the visit marks. Each renders nothing until the
 * browser has said otherwise, so server HTML stays the same for everyone.
 */
import { useEffect } from "react";
import { forgetVisits, markVisited, useVisits } from "@/museum/visits";
import s from "./Visited.module.css";

/** Mounted on an open plate: records the visit. Renders nothing. */
export function VisitTracker({ id }: { id: string }) {
  useEffect(() => markVisited(id), [id]);
  return null;
}

/** "Visited" on a case card; "n of m read" when the case has sub-cases. */
export function VisitedMark({ id, within = [] }: { id: string; within?: string[] }) {
  const visits = useVisits();
  const seen = visits.has(id);
  const n = within.filter((w) => visits.has(w)).length;
  if (!seen && !n) return null;
  return (
    <span className={s.mark}>
      {seen && <><span className={s.dot} aria-hidden="true" />Visited</>}
      {within.length > 0 && n > 0 && <span className={s.within}>{n} of {within.length} within</span>}
    </span>
  );
}

/** Vault progress: "4 of 13 visited · forget". */
export function VaultProgress({ ids }: { ids: string[] }) {
  const visits = useVisits();
  const n = ids.filter((id) => visits.has(id)).length;
  if (!n) return null;
  return (
    <span className={`${s.progress} label`}>
      <span className={s.dot} aria-hidden="true" />
      {n} of {ids.length} visited
      <button type="button" className={s.forget} onClick={() => forgetVisits(ids)}>
        Forget
      </button>
    </span>
  );
}
