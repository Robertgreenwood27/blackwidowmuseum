"use client";
import dynamic from "next/dynamic";
import type { Anchor } from "./TangleWeb";

/** WebGL never renders on the server; the hall's typography stands alone until it loads. */
const TangleWeb = dynamic(() => import("./TangleWeb"), { ssr: false });

export function Entrance({ anchors }: { anchors: Anchor[] }) {
  return <TangleWeb anchors={anchors} />;
}
