<!-- Copilot / AI agent instructions for the OMDI landing site project -->
# Repo snapshot for AI coding agents

This repository is a small static single-page landing site (no backend). The app assembles partial HTML views at runtime via a client-side controller.

- Entry point: `index.html` (mount point `#app`) and `app.js` which calls `controllers/landingController.js`.
- Views: `views/*.html` (e.g. `navbar.html`, `home.html`, `sejarah.html`, `categories.html`) are fetched and concatenated by `initLandingPage` in `controllers/landingController.js`.
- Models / view helpers: `models/eventModel.js` and `views/landingView.js` show the simple data shape used for the landing content (fields: `title`, `date`, `description`, `location`, `image`).
- Assets: static images and icons live under `src/` and root-level CSS is `style.css`.

How this project is organized (big picture)
- Single-page static site: client-side ES module (`type=module`) `app.js` initializes the page and injects HTML partials into `#app`.
- No build system: files are served directly as static files. Development/test workflow is to open `index.html` in a browser or use a static file server (e.g. `http-server` or `python -m http.server`).
- Minimal MVC-ish separation: `controllers/` contains logic that orchestrates loading partials; `views/` contains HTML fragments and a small view helper; `models/` contains static data used by views.

Project-specific conventions and patterns for edits
- Keep views as plain HTML fragments (no wrapping <html>/<body>) — these are concatenated by the controller. See `controllers/landingController.js` for the exact concatenation order.
- Use ES module exports for JS files (`export default ...`) to match `app.js` import style.
- Assets referenced from views use relative paths like `src/...` or root-level files (e.g. `style.css`). Keep those paths intact.
- Avoid adding server-side code — this repo is static. If you need routes or an API, prefer adding a separate folder (e.g. `api/`) and document it here first.

Quick examples (copyable patterns found in repo)
- Load partials using fetch + text() (controller pattern):
  - See `controllers/landingController.js` -> `loadPartial(url)` and `initLandingPage()` which calls `loadPartial('views/navbar.html')`, etc.
- Data shape for event content:
  - See `models/eventModel.js` — object with { title, date, description, location, image }.
  - `views/landingView.js` demonstrates using template literals to interpolate those fields.

Developer workflows / commands
- No build step. To preview locally use any static server. Examples (not part of repo):
  - Node: `npx http-server -c-1 .` (serves repo root)
  - Python 3: `python -m http.server 8000`
- Open `index.html` in a modern browser that supports ES modules (Chrome, Firefox, Edge).

What to watch for when editing
- When changing view filenames or the order of sections, update `controllers/landingController.js` accordingly.
- CSS is global (`style.css`). Prefer adding small, namespaced classes rather than modifying many global rules.
- Keep image sizes and paths correct; most views reference `src/` assets directly.
- Avoid introducing Node-only APIs or package.json unless you're intentionally adding a dev toolchain; document any added toolchain here.

Files to read first (helpful entry points)
- `app.js`
- `controllers/landingController.js`
- `views/*.html` (especially `navbar.html`, `home.html`, `categories.html`)
- `models/eventModel.js` and `views/landingView.js`
- `style.css`

If you need to make bigger changes
- Propose modifications in an issue or a short PR description. For example: "Convert partial-loading to client-side router" — include suggested changes to `controllers/landingController.js` and any added dependencies.

If something is missing from the repo (tests, package.json, CI), call it out in the PR description.

Questions for the user
- Should the project adopt a local dev server or build tool? If yes, which (Node, Vite, Rollup)?

End of file.
