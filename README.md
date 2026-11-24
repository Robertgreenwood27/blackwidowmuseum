# The Black Widow Museum

A permanent, never-finished museum devoted to one genus: *Latrodectus*.

```
npm run dev                                   # open the doors (localhost:3000)
npm run new -- web/scaffold/tension "Tension" # open a new case
npm run build                                 # inspects the whole collection; fails on any inconsistency
```

## The building

| Floor        | Lives in                                   | Contains                                       |
|--------------|--------------------------------------------|------------------------------------------------|
| **Collection** | `content/museum/**/exhibit.yaml`         | Identity + science. No presentation.           |
| **Archive**    | `content/sources.yaml`                   | Every citation, keyed `firstauthor+year`.      |
| **Stages**     | `src/stage/registry.tsx` + `src/stage/exhibits/` | How a specific exhibit is *shown*.     |
| **Architecture** | `src/components/`, `src/app/`          | Entrance, vaults, plates, catalogue, archive.  |

**Folders are the floor plan.** `content/museum/web/gumfoot/anchors/` is served at
`/web/gumfoot/anchors`. Depth is unlimited. Top-level folders are **vaults**.

## Adding to the collection

1. `npm run new -- <vault>/<exhibit>[/<sub>…] "Title"` (assigns the id and the next accession number).
2. Fill in `figures` (numbers become huge numerals), `observations` (one verifiable sentence each),
   `terms`, `related`. Cite keys from `content/sources.yaml`; add new sources there.
3. Flip `status: planned` → `open`.

That's it. The page, catalogue entry, vault case, entrance counts, archive cross-references and
footnote numbering are all generated. A new **vault** (top-level folder) automatically becomes a
new gumfoot line in the 3D entrance.

The build validates everything: unknown citation keys, broken `related` links, duplicate ids or
accession numbers, and malformed YAML all fail with a readable list.

## Halls

An exhibit folder that contains exhibit folders is an **exhibit with halls**, and each child is a
**Hall**, numbered I, II, III… in `order`. Nothing declares it; the folders do. Its case card gets
receding doorframes and an "n halls" label. Its plate gets a corridor listing the halls, and each
hall's placard reads "Hall III of VII · Parent", with "Next hall" links ending in a return to the
parent. `body/hourglass/` is the reference.

## Changing how an exhibit looks (without touching its science)

Every exhibit renders as a **Plate** by default. To give one a richer presentation:

```tsx
// src/stage/registry.tsx
"web.gumfoot": { component: GumfootDiagram, medium: "Animated diagram", placement: "lead" },
```

The component receives `{ exhibit }`, which has the full validated data, and decides only how it moves.
`placement`: `lead` (opens the plate), `inline` (after the figures), `replace` (immersive, and the
placard plus sources still render). Swap the component for a physics simulation or a Three.js scene later.
The id, accession, observations and citations stay the same throughout.

**Three.js:** make a client component and load the WebGL part with
`next/dynamic(() => import("./Scene"), { ssr: false })`. `src/components/entrance/` is the reference.

## Identity rules

- `id` is permanent (`web.gumfoot`). Never rename it, because stages, `related` links and future data key off it.
- If a folder moves, add the old path to `aliases:` and it 301s to the new location.
- Accession numbers (`BWM-03.01.02`) are never reused.

## The entrance

`src/components/entrance/`: a Three.js cobweb where every vault is a gumfoot line.
- `widow.ts`: the rigged widow and its chitin material, adapted from **Vesper** (the creator's
  pet-black-widow project). The assets are in `public/models/widow/`: a meshopt-compressed GLB with
  its 85-bone rig intact, the texture set, and `rig-spec.json` (bone names and axes). Her rest pose is
  the neutral stance, so she hangs without IK; `update()` adds small leg taps on the Femur/Patella bones.
- `silk.ts`: silk drawn as a hairline core inside a faint additive glow (Vesper's SilkRenderer approach).
- Still in Vesper and worth taking later: `WebPhysicsSolver` and the web network for a real
  gumfoot physics exhibit, and the IK/choreography code for a widow that walks the web.

## Media & Supabase

Content refers to media as `supabase:<bucket>/<path>` and never hard-codes hosts
(`src/museum/media.ts`). Set `NEXT_PUBLIC_SUPABASE_URL` (see `.env.example`) and create a **public**
bucket, e.g. `specimens`, for photographs, micrographs, video and `.glb` models.

Science text and citations deliberately stay in git, where they are reviewable and versioned and
diff cleanly as research is corrected. Supabase is for heavy binary media now. It will also hold
visitor-generated data later (saved tours, notes) if the museum grows that way. No tables exist yet
because nothing needs one.

### Reviewing images

Media entries carry `generated: true|false` and `review: pending|approved`. Pending items show a red
"Pending curatorial review" tag on the site. `/conservation` (unlinked, noindex) lists every image with
its YAML path. Approve one by setting `review: approved`. Replace one by overwriting the `.webp` in
`public/specimens/`. Full-resolution PNG originals are in `media-originals/` (git-ignored).

## Routes reserved by the building

`/catalogue`, `/archive` and `/conservation` are fixed rooms, so don't name a vault any of those.
