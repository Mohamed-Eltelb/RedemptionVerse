# RedemptionVerse

Discover and redeem codes for games and gaming services (Xbox Game Pass, PlayStation Plus, Steam / PC launchers, digital currency, bundles, and more). The project is a fast, static, front‑end experience focused on clarity, accessibility, and zero back‑end dependencies.

> NOTE: The landing page currently links to `all-codes.html`, while the repository contains `games.html`. Either rename `games.html` to `all-codes.html` or update the link in `index.html` for consistency.

---
## Table of Contents
- [Live Preview / Usage](#live-preview--usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Data Model](#data-model)
- [UI Architecture](#ui-architecture)
- [Accessibility (A11y)](#accessibility-a11y)
- [Adding / Updating Content](#adding--updating-content)
- [Styling & Theming](#styling--theming)
- [Report Flow Logic](#report-flow-logic)
- [Copy & Redeem Modal Flow](#copy--redeem-modal-flow)
- [Performance Notes](#performance-notes)
- [Roadmap Ideas](#roadmap-ideas)
- [Contributing](#contributing)
- [Privacy & Data](#privacy--data)
- [Disclaimer](#disclaimer)

---
## Live Preview / Usage
This is a pure static site. To run locally:

1. Clone or download the repository.
2. Open `index.html` directly in your browser (double‑click or drag into a tab).  
   (Optional) Serve with a lightweight static server for correct relative path handling.

Example (Node, if desired):
```bash
npx serve .
```
Then visit: http://localhost:3000 (port may vary).

No build step, bundler, or package manager is required.

---
## Features
- Landing page with hero, "How It Works", platforms, latest drops, FAQ, final CTA.
- Full library page (`games.html` / `all-codes.html`) with:
  - Search (debounced input)
  - Custom ARIA listboxes (Sort, Platform, Type, Reason selector in report modal)
  - Pagination (adaptive ellipsis algorithm)
  - Responsive CSS grid
  - Empty state with inline clear button
- Data‑driven redemption modal (codes + context‑aware instructions per platform or game).
- Code copy buttons with optimistic UI feedback (icon swap + revert).
- Report modal:
  - Multi‑select codes via checkboxes
  - Custom listbox for reason
  - Validation + inline feedback state machine
- Centralized instruction templates plus game‑specific overrides.
- Lightweight theming via CSS variables (`:root`).
- Accessible semantics: landmarks, ARIA attributes, live regions, keyboard navigation.
- No external JS dependencies (fully framework‑agnostic).

---
## Project Structure
```
index.html          # Landing / marketing + 'Latest Drops'
games.html          # (Full library page – may be renamed to all-codes.html)
style.css           # Global design system + layout + shared components
games.css           # Page-specific & modal/listbox/report enhancements
games.js            # Data + rendering + filtering + modals + reporting logic
assets/             # Images / logos / cover art
```

---
## Data Model
Defined at the top of `games.js`:

### Games Array
Each game / service entry:
```js
{
  id: Number,              // unique identifier (integer)
  title: String,           // display title
  desc: String,            // short description
  cover: String,           // image path or remote URL
  platform: String,        // comma+space delimited list (e.g. "PC, Xbox, PlayStation")
  type: 'Game' | 'Service' | 'In-game item'
}
```

### Codes Map
```js
const codes = {
  [gameId: number]: [ 'CODE1', 'CODE2', ... ]
}
```
If an ID has no entry or an empty array → modal shows "No codes available." fallback.

### Instructions
- `baseInstructions` – keyed by platform token (`PC`, `Xbox`, `PlayStation`, `Switch`, `Multi`).
- `gameSpecificInstructions` – keyed by `id` to override with a custom array (e.g. GOG flow).
The resolver picks in order: `gameSpecificInstructions[id]` → `baseInstructions[platformString]` → `baseInstructions['Multi']`.

---
## UI Architecture
| Layer | Responsibility |
|-------|----------------|
| HTML  | Semantic scaffolding (sections, headings, nav, modals). |
| CSS (`style.css`) | Global theme, grids, cards, hero, sections, modal base. |
| CSS (`games.css`) | Filters shell, pagination, custom listbox, redeem/report details. |
| JS (`games.js`) | Data, render pipeline, filtering, pagination, modal & report flows, listbox accessibility logic. |

Render cycle: `render()` → applies filters → slices current page → injects card HTML → binds button events → updates meta + pagination.

Pagination condenses ranges when page count > 7 using ellipsis placeholders.

---
## Accessibility (A11y)
- Custom listboxes implement `role="listbox"`, `aria-activedescendant`, `aria-selected`, keyboard arrows, Escape collapse, and roving selection.
- Live regions (`aria-live="polite"`) announce result counts and loading status.
- Modals use `aria-modal="true"`, manage focus trapping heuristically (return focus to opener) and set `aria-hidden` while toggled.
- Screen reader–only text for structural headings (`.sr-only`).
- High‑contrast gradients kept subtle; text uses accessible luminance against dark background.

Improvements to consider: formal focus trap loop, `inert` on background when modal open, better labeling of copy buttons with code content via `aria-label="Copy code XXXX"`.

---
## Adding / Updating Content
### Add a Game / Service
1. Append a new object to `games` with a unique incremental `id`.
2. (Optional) Add an array of codes in `codes[id]`.
3. (Optional) Add specific instructions in `gameSpecificInstructions[id]`.
4. Include art in `assets/` or use an external URL.

### Add Codes Later
Just push new entries into the array (order preserved):
```js
codes[GAME_ID] = [...codes[GAME_ID], 'NEW-CODE-123'];
```
Re-open the modal or re-run `render()` to see changes.

### Remove / Expire Codes
Delete from the array or set it empty to show fallback.

---
## Styling & Theming
Core variables live in `:root` of `style.css`:
```css
--bg, --text, --accent1, --accent2, --muted, --radius, --glass-border
```
Change the radial gradient + accent RGB tuples for quick theme swaps. Components rely on layered translucent backgrounds for a glassy, low-bandwidth aesthetic.

---
## Report Flow Logic
1. User opens Redeem Modal → clicks "Report".
2. Report modal populates codes dynamically via `populateReportCodes(gameId)`.
3. Validation ensures:
   - At least one checkbox selected
   - Reason chosen (custom listbox data attribute)
4. Simulated async (`setTimeout`) to mimic submission; console logs payload:
```js
{
  gameId, codes: [...], reason, comments, timestamp
}
```
5. Success message clears after a delay and closes modal.

Integration idea: Replace the simulated block with a `fetch('/api/report', {method:'POST', body: JSON.stringify(payload)})` call.

---
## Copy & Redeem Modal Flow
- Modal constructed on demand with code rows + instructions list (`<ol class="redeem-steps">`).
- Copy icon swaps to a checkmark for 1.4s after `navigator.clipboard.writeText()` resolves.
- No codes = graceful message panel.

---
## Performance Notes
- Pure DOM manipulation; minimal reflow due to batch rendering per page.
- No external libraries → small footprint.
- Images: mixture of local assets and remote headers; consider adding `loading="lazy"` if switching to `<img>` tags inside cards.
- Could inline critical CSS or add a tiny build step if scaling.

---
## Roadmap Ideas
| Priority | Idea |
|----------|------|
| High | Persist filters in query params (`?q=&platform=&page=`) |
| High | Real backend or serverless endpoint for reports & code freshness |
| Medium | Tag/genre system & filter (currently placeholder variable `activeGenre`) |
| Medium | Dark/light theme toggle (toggle CSS variables) |
| Medium | Sorting by "Newest Added" (track timestamps) |
| Low | Service worker for offline + stale‑while‑revalidate updates |
| Low | Analytics dashboard (aggregate report reasons) |

---
## Contributing
1. Fork the repo
2. Create a feature branch: `feat/add-new-platform`
3. Commit changes with clear messages
4. Open a Pull Request describing rationale & screenshots (if UI changes)

Coding style: keep vanilla JS, avoid adding frameworks unless the scope changes. Strive for semantic HTML and maintain ARIA integrity.

---
## Privacy & Data
- No tracking scripts included.
- All logic executes client‑side only.
- Reports currently log to the browser console only (no data leaves the user device).

If adding telemetry, document it clearly and obtain consent where applicable.

---
## Disclaimer
RedemptionVerse is an independent project and is not affiliated with, endorsed by, or sponsored by any publishers, platforms, or service providers mentioned. Logos, trademarks, and brand names are the property of their respective owners. Sample codes in this repository may be placeholders or expired and are for demonstration purposes.

---
## License
A license file has not been added yet. Recommended choices:
- **MIT** – permissive, common for open web projects
- **Apache 2.0** – explicit patent grant
- **GPLv3** – copyleft (if you want derivatives to remain open)

Add a `LICENSE` file to formalize usage rights.

---
## Quick Maintenance Checklist
- [ ] Sync `index.html` link (`all-codes.html` vs `games.html`)
- [ ] Prune expired codes
- [ ] Add new game/service entries
- [ ] Verify platform instructions correctness
- [ ] Run a manual accessibility pass (keyboard + screen reader)

---
### Screenshots (Optional)
You can add screenshots to `assets/` and embed them here:
```
![Landing](assets/landing_preview.png)
![Library](assets/library_preview.png)
```

---
Need help or want an enhancement drafted? Open an issue or start a discussion.

Enjoy exploring the universe of redemption codes ✨
