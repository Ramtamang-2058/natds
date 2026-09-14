# Recent events — photos go here

Drop event photos into these folders. Then update the matching `imagePaths` in
`src/data.ts` → `EVENTS`. Name files `1.jpg`, `2.jpg`, `3.jpg` … (or whatever you like).

## Folders

- `prakriti-resource-center/` → Event: **Prakriti Resource Center**
  - referenced as `/images/events/prakriti-resource-center/1.jpg` (6: 1–3 currently expected)
- `researcher-training/` → Event: **Researcher Training**
  - referenced as `/images/events/researcher-training/1.jpg` (currently 1–3)
  - also used as the hero poster: `/images/events/researcher-training/poster.jpg`

Missing files show a tasteful placeholder automatically — no rebuild needed until
you're ready to add the real photos.

To add a whole new event: copy an existing block in `EVENTS` in `src/data.ts`,
create a new folder here, and update `imagePaths`.