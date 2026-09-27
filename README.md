# EchoGPT — Chrome Extension Redesign (Frontend Concept)

A redesigned popup UI for the EchoGPT Chrome extension, built with Next.js 14
(App Router), TypeScript, and Tailwind CSS — scoped to **frontend only**, as
requested. The backend (NestJS + PostgreSQL + Swagger) described in the
accompanying assignment is a separate, later piece of work.

## Important scope note

This is a **concept app**, not a packaged `.crx`/Manifest V3 build. It renders
the popup at its real dimensions (420×640, matching the reference screenshots)
inside a normal Next.js page so it's easy to preview, share, and iterate on.
Turning it into a loadable extension is a packaging step (manifest.json,
static export, content-security-policy adjustments) that makes more sense to
do once the backend exists and there's a real API to call — the component
structure here doesn't need to change for that migration.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the popup is centered on the page, alongside a
theme toggle for the demo page itself.

## What was redesigned, and why

Comparing against the reference screenshots:

- **Popup UI**: consistent spacing, icon weight, and corner radii across all
  9 screens (Chat, Write, Read, Translate, Image Studio, Video Studio,
  Compare, Connectors, Settings) — the original mixes several icon styles and
  button shapes. A single `Composer` component now backs both Chat and
  Compare instead of two divergent input bars.
- **Navigation**: the icon rail keeps the original's structure but adds a
  sliding active-state indicator (Framer Motion `layoutId`), text labels at
  all times (not just on hover), and `aria-current` for state.
- **Prompt input experience**: model selector, attachments, and a page/tab
  reference tool live in one toolbar row under the textarea; a dedicated
  "Search" toggle surfaces web-search as a first-class option per the
  assignment's Web Search API section, rather than being buried.
- **AI model selection**: one `ModelSelector` component (dropdown with
  per-model description + Pro badge) reused everywhere a model choice is
  needed, instead of the plain text label in the original.
- **Conversation history**: was a bare clock icon with no visible list in the
  reference; now a proper slide-over panel (`history-panel.tsx`) with search,
  pinned/recent grouping, and per-item pin/delete actions.
- **Quick actions**: the original's two rows of differently-styled cards are
  now one consistent grid, each with a colored icon tile and a one-line hint.
- **Settings page**: rebuilt from scratch (the reference has none visible) —
  Appearance (theme), **AI Providers** (enable/disable + default, matching
  the backend's planned Provider Management), **Plan & usage** (a usage bar,
  matching the planned Subscription/Usage Limits API), and Data & Privacy.
- **Accessibility**: every icon-only control has an `aria-label`; the model
  dropdown and history search use correct roles; focus rings are visible in
  both themes; the history panel is a labeled `dialog`; motion is disabled
  under `prefers-reduced-motion`.

## Structure

```
app/
  layout.tsx, page.tsx    Demo page hosting the popup at real size
components/
  popup/
    popup-shell.tsx        Composes title bar, header, active view, rail, history panel
    header.tsx              TitleBar (pin/close) + PopupHeader (per-view title, new chat)
    icon-rail.tsx            Right-hand navigation rail
    history-panel.tsx        Slide-over conversation history
    views/                   One file per screen (chat, write, read, translate,
                             image, video, compare, connectors, settings, upgrade)
    shared/                  Composer, ModelSelector, QuickActions, SegmentedControl,
                             ChipGroup, EmptyState, MessageBubble — reused across views
  ui/                       Button, Card, Switch, Chip, Badge
lib/
  types.ts                  Shared types — AiProvider and usage shapes mirror
                            the planned backend entities directly
  constants.ts               All mock content in one place (nav items, models,
                            providers, quick actions, history, usage)
hooks/
  use-popup-nav.ts           Active view / history panel / pinned state
  use-chat.ts                 Local demo chat (see below for backend wiring)
```

## Wiring up the real backend later

Every place that currently uses local state or `lib/constants.ts` mock data
is a direct stand-in for one of the planned API's resources:

| UI piece | Backend resource (from the assignment) |
|---|---|
| `hooks/use-chat.ts` | Chat API — Send Prompt / Receive Response / Streaming |
| `history-panel.tsx` + `MOCK_HISTORY` | Chat API — Conversation History |
| `settings-view.tsx` "AI Providers" + `AI_PROVIDERS` | AI Provider Management |
| `settings-view.tsx` "Plan & usage" + `MOCK_USAGE` | Subscription Management — Status / Remaining Requests |
| `composer.tsx` "Search" toggle | Web Search API |
| `upgrade-view.tsx` | Subscription Management — Upgrade/Downgrade |

None of these need JWT/session handling yet since there's no backend — that
arrives with an auth layer (login state, token refresh) wrapping the whole
`PopupShell` once the NestJS API is live.

## Verified

`npm run build` (type-check + lint + production build) passes cleanly in this
repo as delivered.
