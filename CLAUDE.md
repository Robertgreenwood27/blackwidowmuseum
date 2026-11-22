@AGENTS.md

# The Black Widow Museum — working rules

- Roles: Claude does all development. Codex is used only for delegated research (fact-checking claims, finding citations) and image generation. One pass per delegation, no unsolicited back-and-forth, no review loops, no uncontrolled retries.
- Science lives in `content/` (YAML), presentation lives in `src/stage/` keyed by exhibit `id`. Never put layout/visual hints into content; never hard-code facts into components.
- Every observation and figure cites a key in `content/sources.yaml`. Unverified claims don't go in. Prefer primary literature / World Spider Catalog.
- Exhibit `id`s and accession numbers are permanent. Moving a folder → add `aliases`.
- Visual identity: darkness, silk (#ece6d9), one red (#e3241c) rationed like the hourglass. Fraunces display (no opsz axis — sturdy strokes; avoid hairline Didones, they break up on black), IBM Plex Mono labels, Inter Tight text. Favour numerals and diagrams over prose.
- Accuracy notes: widows build tangle cobwebs with gumfoot lines (never draw an orb web); the hourglass is ventral and faces up because she hangs inverted.
- `npm run build` is the collection's inspection — it must pass.
