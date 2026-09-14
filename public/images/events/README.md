# Recent events — photos live here

Drop event photos into these folders. Then update the matching `imagePaths` in
`src/data.ts` → `EVENTS`. Keep descriptive kebab-case names (e.g. `session.jpg`).

## Folders

- `prakriti-resource-center/` → Event: **Prakriti Resource Center**
  - referenced as `/images/events/prakriti-resource-center/<name>`
- `ime-group/` → Event: **IME Group**
  - referenced as `/images/events/ime-group/<name>`

Missing/extra files are fine — the gallery shows exactly the paths in `imagePaths`,
and any 404 renders a tasteful placeholder automatically.

To add a whole new event: copy an existing block in `EVENTS` in `src/data.ts`,
create a new folder here, and update `imagePaths`.