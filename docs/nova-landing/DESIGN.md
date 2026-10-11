---
name: Denarius
description: AI-spend governance cockpit. Money first, verdict first, calm by default.
colors:
  ink: "oklch(0.18 0 0)"
  graphite: "oklch(0.40 0 0)"
  ash: "oklch(0.528 0 0)"
  ash-rail: "oklch(0.505 0 0)"
  mist: "oklch(0.63 0 0)"
  surface-rail: "oklch(0.93 0 0)"
  surface-canvas: "oklch(0.955 0 0)"
  surface-card: "oklch(0.97 0 0)"
  surface-control: "oklch(0.91 0 0)"
  surface-elevated: "oklch(1 0 0)"
  surface-hover: "oklch(0.945 0 0)"
  surface-selected: "oklch(0.985 0 0)"
  rail-hover: "oklch(0.91 0 0)"
  rail-selected: "oklch(0.89 0 0)"
  hairline: "oklch(0.9 0 0)"
  focus-ring: "oklch(0.55 0 0)"
  action-ink: "oklch(0.2 0 0)"
  action-ink-hover: "oklch(0.3 0 0)"
  on-action: "oklch(0.985 0 0)"
  coin-orange: "#ff6524"
  signal-orange: "#c7480d"
  green-base: "#22c55e"
  amber-base: "#f59e0b"
  red-base: "#e5303c"
  status-green: "green-base"
  status-green-soft: "color-mix(in oklab, status-green 12%, transparent)"
  status-green-fg: "color-mix(in srgb, green-base, black 45%)"
  status-amber: "amber-base"
  status-amber-soft: "color-mix(in oklab, status-amber 12%, transparent)"
  status-amber-fg: "color-mix(in srgb, amber-base, black 45%)"
  status-red: "red-base"
  status-red-soft: "color-mix(in oklab, status-red 12%, transparent)"
  status-red-fg: "color-mix(in srgb, red-base, black 20%)"
  badge-neutral: "oklch(0.43 0 0)"
  badge-amber: "status-amber-fg"
  badge-positive: "status-green-fg"
  badge-destructive: "status-red-fg"
  destructive: "oklch(0.577 0.245 27.325)"
  pace-orange-base: "#f67a12"
  pace-red-base: "#e5303c"
  pace-spent: "pace-orange-base"
  pace-projected: "color-mix(in srgb, pace-orange-base, white 60%)"
  pace-overspent: "pace-red-base"
  pace-over: "color-mix(in srgb, pace-red-base, white 60%)"
  pace-budget: "oklch(0.88 0 0)"
typography:
  display-money:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
    fontFeature: "tnum"
  display:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  metric-lg:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontFeature: "tnum"
  narrative:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  metric:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  title:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  card-title:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-strong:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
  ui:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  ui-strong:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  caption:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption-strong:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label-caps:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
  badge:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  kbd:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
  code:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "12px"
  pill: "9999px"
spacing:
  "0.5": "2px"
  "1": "4px"
  "1.5": "6px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
components:
  hero-figure:
    textColor: "{colors.ink}"
    typography: "{typography.display-money}"
  page-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  card-compact:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px"
  card-title:
    textColor: "{colors.graphite}"
    typography: "{typography.card-title}"
  card-description:
    textColor: "{colors.ash}"
    typography: "{typography.caption}"
  kpi-label:
    textColor: "{colors.ash}"
    typography: "{typography.caption}"
  kpi-value:
    textColor: "{colors.ink}"
    typography: "{typography.metric}"
  button-primary:
    backgroundColor: "{colors.action-ink}"
    textColor: "{colors.on-action}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 16px"
  button-primary-hover:
    backgroundColor: "{colors.action-ink-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-control}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 16px"
  button-small:
    typography: "{typography.ui-strong}"
    rounded: "{rounded.pill}"
    height: "28px"
    padding: "0 12px"
  input:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    height: "32px"
    padding: "0 10px"
  field-label:
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
  field-help:
    textColor: "{colors.ash}"
    typography: "{typography.caption}"
  menu:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.md}"
    padding: "4px"
  menu-item:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: "28px"
    padding: "0 8px"
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  dialog:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  status-badge:
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    height: "20px"
    padding: "0 8px"
  sidebar-group-label:
    textColor: "{colors.ash-rail}"
    typography: "{typography.label-caps}"
    height: "32px"
    padding: "0 8px"
  sidebar-item:
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: "32px"
    padding: "0 8px"
  sidebar-item-hover:
    backgroundColor: "{colors.rail-hover}"
    textColor: "{colors.ink}"
  sidebar-item-active:
    backgroundColor: "{colors.rail-selected}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-strong}"
  table-header:
    textColor: "{colors.ash}"
    typography: "{typography.label-caps}"
    height: "36px"
  table-cell:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    height: "40px"
---

# Design System: Denarius

> **Status:** founder-directed 2026-10-04, **implemented** in v2 and audited against the code on 2026-10-10 (see [Adoption](#adoption)). `app/globals.css` carries the tokens and the components carry the recipes below. When this file and the "Decided visual direction" in `docs/frontend.md` disagree, this file wins and the conflict is listed under Adoption.
>
> **How to read it.** The YAML frontmatter holds the **primitive tokens** (normative values). The prose defines **styles**: named combinations of primitives (size + weight + tracking + case + ink + numerals, or radius + surface + padding). Every style says **when** to use it, **where** it appears, and **when never** to use it. New UI picks an existing style; it never assembles raw values.
>
> Docs are in English; UI copy examples are pt-BR, as they appear in the product.

## Overview

**Creative North Star: "The Quiet Ledger"**

Denarius reads like a well-kept ledger in a calm office. One figure is written large in fine pen: the money the executive came to see. Everything else is set in disciplined steps of gray that recede in order, so the eye lands on the number, then the verdict, then the scope that needs attention, in the 10 seconds the CEO gives the product. Hierarchy comes from **subtraction**: large things are light in weight, small things are low in contrast, and nothing sits in the uncertain middle.

This is an **Operate** surface (Impeccable's mode for product UI): one well-tuned sans, a fixed rem scale, familiar controls, density where the executive needs it. Brand lives in precise details: the light hero numeral, the segmented solid bars, the single orange coin. The interface is **monochrome first**. Orange is a punctual "on" signal. Green, amber and red mean budget status and nothing else.

The founder's 2026-10-04 direction shapes three axes of this system:

1. **Sharper hierarchy.** Small, secondary text is genuinely small and genuinely quiet. Large text is a little larger. The steps between them are clearly visible.
2. **Lighter weight as the voice.** Size already carries authority, so large type gets *less* weight. Small elements get *more* weight only when they must hold their ground.
3. **A wider radius ladder.** Small radii get smaller, so a 6px control, a 12px card and a pill button read as three distinct shapes.

**Key Characteristics:**

- Monochrome ink on near-neutral surfaces, separated by tone first and a faint ring second.
- One hero numeral per screen at weight 400. Page titles at 400. Card titles step down to secondary ink so the content leads. No bold titles anywhere in the app.
- A four-step ink ladder (primary, secondary, subtle, faint) with no opacity values in between.
- Uppercase appears only as a small, quiet 11px divider label, never as a headline or eyebrow.
- Radii in clear steps (6px controls, 10px nested, 12px surfaces) plus the pill, with every child smaller than its parent.
- Tabular numerals on every number. Money is always the largest figure in its region.

## Colors

The palette is neutral ink on neutral surfaces, with one orange signal and a semaphore reserved for budget status.

### Primary

- **Ledger Ink** (`action-ink`, hover `action-ink-hover`): primary buttons, the one action that moves the task forward. Ink, never orange. In dark mode the action inverts to near-white (`oklch(0.94 0 0)`, hover `oklch(0.86 0 0)`) with ink text.

### Secondary

- **Coin Orange** (`coin-orange`): the logo coin, the loading mark and the unread dot.
- **Signal Orange** (`signal-orange`, 4.78:1 on white): fills of an **on** state only: a checked switch, the selected theme option. It is the orange that controls fill with.

### Semantic

- **Semaphore** (`status-green|amber|red`, each with `-soft` and `-fg`): budget status only. Strong values paint graphics (bar fills, verdict dots, chart strokes). `-soft` paints pill and callout backgrounds. `-fg` is the only semaphore color allowed on text, because it holds AA at 11–12px. Built like a palette scale (2026-10-07, founder-directed): each hue is ONE vivid base (`green-base`, `amber-base`, `red-base`, the same red as the pacing bar), and every other value is that base mixed toward white or black, never a hand-picked tone. Strong is the base (dark lifts it 10% toward white); `-soft` is a 12% tint of strong toward the surface; light-mode `-fg` is the base mixed toward black by the smallest 5% step that holds 4.5:1 on its wash (45% green and amber, 20% red), so the ink stays as bright as AA allows without going heavy. In dark, the lifted base is already the ink for green and amber; red takes 20% more white. The one founder exception (2026-10-04): the Home week-over-week figure uses `status-red-fg` when spend rose and `status-green-fg` when it fell.
- **State tones** (`badge-neutral|amber|positive|destructive`, each with `-soft`): states that are *not* budget status (connection, sync, invite, data quality, a failed save) in badges, notices, inline results and toasts. The positive tone marks a data source that landed: a live provider connection and a completed roster import (its "Importado" badge, founder-directed 2026-10-10). They mirror the semaphore triad: the `-soft` wash is 12% of the hue's strong value (neutral tints with its own ink), and the ink is the hue's most legible text color. That ink is exactly the semaphore `-fg` in both themes, so each hue has one text color. Neutral is hue-free, like the rest of the ink ladder. `tests/design-system.test.ts` holds every ink at 4.5:1 on its wash over the page, card, popover and hover surfaces, and keeps `status-*` classes on budget-status surfaces only.
- **Pacing hues** (`pace-spent|projected|overspent|over|budget`, founder-directed 2026-10-05, layered 2026-10-07): the pacing bar only (Home hero and the team executive summary, which share `PacingBar`). Built like a palette scale: each hue has ONE vivid base per theme (`pace-orange-base`, `pace-red-base`; dark lifts each 10% toward white), and every other step is that base mixed with white or black in fixed 20% steps, never a hand-picked tone. The spend is the orange base and turns the red base past the budget; the two bases sit apart in hue and lightness without going dark (darkening them for separation read as heavy in light mode). What is still to come is the base pushed toward the surface: 60% white in light (`pace-projected`, `pace-over`), 60% black in dark. The budget is a quiet gray (`pace-budget`). Strong is already spent, light is still to come, so the segments separate without color vision too. Never reuse these tokens outside that bar, with two founder-directed exceptions (2026-10-10): `pace-spent` also paints the realized series of the spend-over-time chart and the share-of-spend bars (see Charts and bars).
- **Money domains** (founder-directed 2026-10-07, PRD P18): two families keep spend and simulation apart at a glance. **Orange is spend**: money that happened (strong) or will happen at the current pace (light). The pacing hues are its first users, and any future spend series derives from the same orange base. **Violet is models and simulation**: model prices, comparisons and planned stretches, as shades of ONE violet base ordered by price (darkest = most expensive), built like the pacing hues (one vivid base per theme, fixed mix steps). Its tokens landed with the Simulação screen: `--sim-violet-base` (#7357ff) and four tiers `--sim-1`…`--sim-4` as fixed mixes of it (light: 30% black, base, 45% and 72% white; dark: the base lifted 10% white, then 28%, 48% and 64% black, so the strongest tier is always the most expensive), `--sim-ink` for violet text and icons, `--sim-soft` for a wash. A model's tier comes from its list price in absolute bands (`TIER_FLOORS` in `lib/engine/model-catalog.ts`), so adding a model never repaints the others. In a simulation the locked past keeps the orange; only the planned stretch is violet. A simulated figure carries `≈` and a "Simulação" label, and each domain has its own icon, so color is never the only cue. Seats stay neutral gray. The semaphore is unchanged and never paints a model or a spend series.
- **Destructive** (`destructive`): irreversible actions and failures only (delete, sign-out confirmation, failed mutation). Failure text in notices, inline results and toasts uses the destructive state tone (`badge-destructive`), which holds AA.

### Neutral: surfaces

Surfaces stack by tone. In light mode the rail is the darkest layer and transient surfaces are the lightest. Dark mode keeps the same order without pure black.

| Token | Light | Dark | Role |
|---|---|---|---|
| `surface-rail` | 0.93 | 0.11 | Sidebar rail behind the inset shell |
| `surface-canvas` | 0.955 | 0.145 | Inset shell / page background |
| `surface-card` | 0.97 | 0.19 | Cards, the working surfaces |
| `surface-control` | 0.91 | 0.12 | Tab tracks, muted callouts, secondary buttons |
| `surface-elevated` | 1.0 | 0.23 | Popovers, menus, select popups, dialogs, sheets |
| `surface-hover` | 0.945 | 0.21 | Hovered rows, items and buttons |
| `surface-selected` | 0.985 | 0.26 | Pressed and selected in-content items |
| `rail-hover` / `rail-selected` | 0.91 / 0.89 | 0.21 / 0.19 | The rail's own hover and active ladder |
| `hairline` | 0.9 | white 7% | Structural borders, table rules |

All values are OKLCH lightness with zero chroma.

### Neutral: the ink ladder

Text has exactly **four steps**. Each step roughly halves the contrast of the one above it, so the ladder reads as distinct levels, not shades.

| Step | Token (CSS) | Light | Dark | On card, light / dark | Job |
|---|---|---|---|---|---|
| **Primary** | `--text-primary` (`ink`) | 0.18 | 0.97 | 17.2 / 16.9 :1 | Values, names, titles, anything the eye must land on |
| **Secondary** | `--text-secondary` (`graphite`) | 0.40 | 0.80 | 8.4 / 9.9 :1 | Readable prose, inactive navigation, supporting figures |
| **Subtle** | `--text-subtle` (`ash`) | 0.528 | 0.62 | 4.9 / 5.1 :1 | Commentary about the data: descriptions, meta, labels, footnotes |
| **Faint** | `--text-faint` (`mist`) | 0.63 | 0.52 | 3.2 / 3.4 :1 | **Never text.** Decorative icons, glyph markers, secondary affordances |

The rail has its own subtle step: `--sidebar-text-subtle` (`ash-rail`), 0.505 light (4.8:1 on the rail) and 0.62 dark (5.6:1).

Measured contrast of each step on every surface it may touch (WCAG 2 ratio, achromatic OKLCH, Y = L³):

| Light | rail | control | hover | canvas | card | selected | elevated |
|---|---|---|---|---|---|---|---|
| primary 0.18 | 15.3 | 14.4 | 16.0 | 16.5 | 17.2 | 18.0 | 18.8 |
| secondary 0.40 | 7.5 | 7.1 | 7.8 | 8.1 | 8.4 | 8.8 | 9.2 |
| subtle 0.528 | *4.3* | *4.1* | 4.5 | 4.7 | 4.9 | 5.1 | 5.3 |
| ash-rail 0.505 | 4.8 | — | — | — | — | — | — |
| faint 0.63 | 2.9 | 2.7 | 3.0 | 3.1 | 3.2 | 3.4 | 3.5 |

| Dark | rail | control | canvas | card | hover | elevated | selected |
|---|---|---|---|---|---|---|---|
| primary 0.97 | 18.8 | 18.6 | 18.2 | 16.9 | 16.2 | 15.5 | 14.3 |
| secondary 0.80 | 11.0 | 10.9 | 10.6 | 9.9 | 9.5 | 9.0 | 8.3 |
| subtle 0.62 | 5.6 | 5.6 | 5.4 | 5.1 | 4.9 | 4.6 | *4.3* |
| faint 0.52 | 3.7 | 3.7 | 3.6 | 3.4 | 3.2 | 3.1 | 2.8 |

Italic cells fail 4.5:1. That is why subtle text never sits on `surface-rail` (use `ash-rail`), on light `surface-control` (use secondary), or on dark `surface-selected` (use secondary).

**The Four Steps Rule.** Text is primary, secondary, subtle or faint, and nothing else. No `text-foreground/80`, no `muted-foreground/70`, no `opacity-70` on text. An in-between gray is a decision you skipped.

**The Floor Rule.** Subtle is set at the lowest contrast that still passes 4.5:1 on the surfaces it touches. That floor comes from Impeccable's craft floor and WCAG AA. It is where "quiet" stops, so nothing that carries meaning goes below it. In light mode the incumbent `muted-foreground` already sat at this floor, so quiet text recedes there by lifting what surrounds it (data moves up to primary or secondary) rather than by fading further. In dark mode subtle drops from 0.71 to 0.62, which is the visible reduction.

**The Faint-Is-Not-Text Rule.** Faint exists for non-text marks: the leading icon of a card title, the info-tip glyph at rest, chevrons in a row. It holds about 3:1 so these marks stay perceivable. A word never uses faint. Disabled controls keep their own 50% opacity treatment.

**The One Signal Rule.** Orange appears at most once per region and only as an *on* state or the brand mark. It never fills a button, a hover, a data series or a decoration. One founder-directed exception (2026-10-05): the underline of a link inside the executive digest turns `brand-accent` on hover and keyboard focus. The spend domain (Money domains, above) is the one place orange carries data: spend series derive from the pacing base, never from `coin-orange` or `signal-orange`.

## Typography

**Body and display font:** DM Sans (variable, weights 100–1000), with `ui-sans-serif, system-ui` as fallback.
**Code font:** Geist Mono, for literal codes only.
**Caps font:** DM Mono (weight 500), for `label-caps` only (founder-directed, 2026-10-05).

**Character:** DM Sans is a low-contrast geometric sans with open apertures. It stays crisp at 11px for labels and turns refined at weight 300 and 44px, which is what lets the hero numeral be large and light at once. DM Sans carries the whole product (titles, data, labels and prose) except the caps divider labels, which DM Mono sets apart.

### Scale

The scale is a fixed rem ladder. There is no fluid `clamp()` inside the app: a product surface is viewed at a stable density, and a heading that shrinks with its container reads as a bug. The single responsive step is the hero numeral, which drops one size below `md`.

| px | rem | Styles at this size |
|---|---|---|
| 44 (36 below md) | 2.75 (2.25) | `display-money`, `display` |
| 28 | 1.75 | `headline` |
| 22 | 1.375 | `title-lg`, `metric-lg` |
| 18 | 1.125 | `metric`, `narrative` |
| 16 | 1 | `title`, `lead` |
| 14 | 0.875 | `card-title`, `body`, `body-strong` |
| 13 | 0.8125 | `ui`, `ui-strong` |
| 12 | 0.75 | `caption`, `caption-strong`, `code` |
| 11 | 0.6875 | `label-caps`, `badge`, `kbd` |

11px is the floor: no text renders smaller. 11px is never sentence-case running text. It is reserved for uppercase labels, badges and key caps, where the case or the container compensates for the size.

**The Two-Axis Rule.** The small end of the scale moves in 1px steps (11, 12, 13, 14). Adjacent sizes are therefore never allowed to differ by size alone: each pair must also differ in ink step, weight or case. For example, 11px caps sits in subtle at 500 next to 13px nav items in secondary at 400.

### Weight

**The Inverse Weight Rule.** Weight falls as size rises. Size and ink already give large type its authority, and adding weight on top turns authority into noise. Small type earns weight only when it must hold its ground.

| Size band | Prose and labels | Values and names | Never |
|---|---|---|---|
| 36–44px | 300 | 300 (`display-money` 400, founder 2026-10-05) | 500 or more |
| 20–28px | 400 | 400 | 500 or more |
| 14–18px | 400 | 500 | 600 or more (one founder exception, 2026-10-10: the Home verdict word) |
| 12–13px | 400 | 500 | 300 |
| 11px | 500 (caps, kbd) | 600 (badge) | 300, 400 |

Weight 300 lives only at 36px and above. Small light text in a subtle gray falls below effective legibility, which is the limit Impeccable sets on "quieter". Small text recedes through ink and size, never through a thinner stroke. Weight 700 is not used anywhere in the app. The printed report keeps its own print scale.

### Hierarchy: the text styles

Each style is a fixed combination. Change the style, never one property of it.

| Style | Size / line | Weight | Tracking · case | Ink | Numerals |
|---|---|---|---|---|---|
| `display-money` | 44 (36) / 1.08 | 400 | −0.025em | primary | tabular |
| `display` | 44 (36) / 1.08 | 300 | −0.025em | primary | — |
| `headline` | 28 / 1.2 | 400 | −0.02em | primary | — |
| `title-lg` | 22 / 1.3 | 400 | −0.01em | primary | — |
| `metric-lg` | 22 / 1.2 | 400 | −0.015em | primary | tabular |
| `narrative` | 18 / 1.6 | 400 (emphasis 500) | −0.005em | secondary (emphasis primary) | — |
| `metric` | 18 / 1.25 | 500 | −0.01em | primary | tabular |
| `title` | 16 / 1.4 | 500 | −0.005em | primary | — |
| `lead` | 16 / 1.5 | 400 | normal | secondary | — |
| `card-title` | 14 / 1.5 | 500 | normal | secondary | — |
| `body` | 14 / 1.55 | 400 | normal | primary (values) · secondary (prose) | tabular for figures |
| `body-strong` | 14 / 1.55 | 500 | normal | primary | tabular for figures |
| `ui` | 13 / 1.4 | 400 | normal | primary (data, actions) · secondary (inactive nav) | tabular for figures |
| `ui-strong` | 13 / 1.4 | 500 | normal | primary | tabular for figures |
| `caption` | 12 / 1.5 | 400 | normal | subtle | tabular for figures |
| `caption-strong` | 12 / 1.5 | 500 | normal | primary | tabular for figures |
| `label-caps` | 11 / 1.3 · DM Mono | 500 | +0.06em · UPPERCASE | subtle (`ash-rail` on the rail) | — |
| `badge` | 11 / 1 | 600 | +0.01em | tone ink on tone wash | tabular |
| `kbd` | 11 / 1 | 500 | +0.02em | secondary (subtle as a bare hint) | — |
| `code` | 12 / 1.5 Geist Mono | 400 | normal | primary on `surface-control` | — |

#### `display-money`: the answer

- **When:** the single figure the screen exists to answer.
- **Where:** the Home hero spend ("Gasto no período"), the team's spend leading its executive summary on `/times/[teamId]` (founder-directed 2026-10-07: that card answers the same question for one team), and the plan's saving leading the Simulação card (before a plan, the cut the budget asks for), with `≈` in `sim-ink` (2026-10-07, the same grammar as the team summary).
- **Pairs with:** the budget suffix ("de R$ 80.000") in `lead` secondary on the same baseline, and the week-over-week line below it in `body`.
- **Never:** twice on a screen; for projections, deltas, or team values outside the team's own summary; above weight 400. The size already makes it the hero; 400 (founder, 2026-10-05, up from 350) gives the figure a little more body over the 300 of `display`.

#### `display`: the threshold heading

- **When:** a screen outside the app shell that has one job.
- **Where:** sign-in, sign-up, recovery, invitation, onboarding and error pages. Max 15ch, balanced.
- **Never:** inside the authenticated shell. There, the page title is `headline`.

#### `headline`: the page name

- **When:** naming the page you are on.
- **Where:** the `PageHeader` h1 on Times, Composição, Relatórios, Ajustes and its subpages, Preferências, a team's diagnosis page, and the legal documents.
- **Never:** inside a card; twice on a page; above weight 400. Home has no headline: its h1 is the greeting in `lead` (founder decision, kept).

#### `title-lg`: the conclusion

- **When:** a standalone sentence that states the verdict or the first-use promise.
- **Where:** the onboarding guide heading on a cold start, and the `VerdictLine` sentence wherever a verdict is stated on its own. The component lives in `components/domain/` and is not mounted on any screen today.
- **Never:** for drawer or dialog titles (use `title`); for a conclusion inside a card, such as the sentence under the team summary's figure; for labels; above weight 400.

#### `metric-lg`: the lead figure of a non-Home screen

- **When:** a screen other than Home leads with figures of its own: one per summary card.
- **Where:** the vendor totals on Composição's "Por provedor" cards (founder decision 2026-10-10: one per card, in the standard `Card`, so two or three sit side by side at the same weight; the display size stays the Home hero's).
- **Never:** on Home (the hero owns the large figure there); for a figure that is not a screen's lead (the vendor cards are the one place equals share it); in a row of equal KPI figures inside one card, such as the team summary's projected close and margin, which stay `metric`.

#### `narrative`: the executive read

- **When:** a short paragraph is the content, written to be read rather than scanned.
- **Where:** the executive digest card. Max 38ch. The emphasized clause steps up to primary at 500.
- **Never:** for UI labels, lists or helper text.

#### `metric`: a KPI value

- **When:** a number someone reads as a key figure.
- **Where:** the hero's "Projeção de fechamento" value, the "Evolução do mês" header figures, team diagnosis summary values, the Simulação close pair (ritmo atual → com o plano; the budget is a caption line under the pair, not a third figure), and secondary figures in Composição's summary row.
- **Always** under a `caption` label (see the KPI recipe in Components).
- **Never:** as a page or card title; for counts inside running text.

#### `title`: a section or dialog name

- **When:** naming a section that sits on the canvas, or a dialog or sheet.
- **Where:** Relatórios section headings ("Agora", "Fechamento", "Histórico"), Preferências section headings, the "sem orçamento" heading on Times, dialog and sheet titles, full-page empty-state titles, and the profile name in Preferências.
- **Never:** inside a card header (use `card-title`).

#### `lead`: supporting copy at reading size

- **When:** a statement accompanies a large element and must be read, not skimmed.
- **Where:** the hero's "de R$ 80.000" suffix, the Home greeting, and the auth subheading under `display`.
- **Never:** for meta, help or footnotes (use `caption`).

#### `card-title`: a card's name

- **When:** naming a card or a self-contained panel.
- **Where:** every `CardTitle`, toast and notification-item titles, settings index item titles, and the notifications panel heading. Set in **secondary** ink (founder, 2026-10-05): a title names the card but must not compete with the figures inside it. A leading 16px icon sits in **faint**, 8px from the text.
- **Never:** at 600; with a separator under it (card headers flow straight into content).

#### `body` / `body-strong`: content

- **When:** `body` is the default for reading text and values at comfortable size. `body-strong` names the thing a row or item is about.
- **Where (body):** dialog and sheet descriptions and empty-state descriptions (secondary, max 65ch); input text and selected values (primary); notice text at full size; `PageHeader` description (secondary, max 65ch).
- **Where (body-strong):** the primary label of a list row (team, model, provider, tool, person); default and large button labels; the week-over-week figure (in `status-*-fg`).
- **Never:** `body-strong` for whole sentences; `body` in subtle.

#### `ui` / `ui-strong`: controls and dense data

- **When:** text inside a control or a dense data row.
- **Where (ui):** sidebar items (secondary at rest), menu and select items (primary), tab labels, dense table cells (primary), the back link in `PageHeader` (secondary).
- **Where (ui-strong):** the active sidebar item, the selected tab, small button labels (`size="sm"`), row names in dense tables and ranked lists.
- **Never:** for paragraphs; at 12px (that is `caption`).

#### `caption`: commentary about the data

- **When:** the text is *about* the data (when it was read, where it came from, how it was computed, what is missing) rather than the data itself.
- **Where:** card descriptions (for example "O total combina provedores e assentos no câmbio congelado do período."), freshness stamps ("Dados de …"), honesty footers (unconverted USD, unattributed spend), field help text, KPI labels, the secondary line under a row name, chart axis ticks and legends, units and currency suffixes, pagination, disclaimers, and `PageHeader` meta.
- **Never:** for values or money; at weight 300; inside a muted callout or a notice on light `surface-control` (switch to secondary ink there).

#### `caption-strong`: a small value that holds its ground

- **When:** 12px text that carries a value or names a field.
- **Where:** form field labels, the hero pacing bar's "% gasto", the chart date pill and chart-tooltip header, compact values in mobile team cards, notice titles, and "Total" labels in compact lists.
- **Never:** for descriptions or sentences.

#### `label-caps`: the divider label

The only uppercase role in the app, and the only one set in DM Mono. Caps already draw the eye, so the role pays for it with one size step down (11px), a quiet ink (subtle) and open tracking (+0.06em). It names a **group of things**. It never introduces a heading.

- **Where (closed list):**
  1. Sidebar group labels: "COCKPIT", "CONTA".
  2. Column headers of dense data tables: Composição's table, the Times index table, the budgets table, and the diagnosis contributors table.
  3. Group headings inside menus, select popups and search results ("PÁGINAS", "TIMES").
  4. Group headings on the Ajustes index and Conexões, and section labels inside the Simulação cards.
- **Never:**
  - above a page or card title (the eyebrow is banned outright by Impeccable's craft floor);
  - on buttons, badges, status, tabs or navigation items;
  - for sentences or for more than three words;
  - stacked: one caps level per region;
  - typed in caps in `copy.ts`. Copy stays sentence case ("Cockpit"); the style applies `text-transform: uppercase`.

#### `badge`: a state

- **When:** a compact, glanceable state.
- **Where:** `StatusPill` (semaphore tones, budget status only), `StateBadge` (state tones), the notification count, and "novo" markers.
- **Never:** for metadata or labels; a semaphore tone for anything that is not budget status.

#### `kbd`: a key

- **Where:** shortcuts in the search dialog footer and menu shortcuts, shown inside a key cap. In the rail, the "Ctrl P" hint uses the same metrics without the cap, in `ash-rail`.

#### `code`: a literal value

- **Where:** invite links, error reference IDs, key fingerprints.
- **Never:** for numbers or money (those use DM Sans tabular figures), or as a "technical" costume.

### Choosing a style

Ask in order and stop at the first yes:

1. Is it the one figure the screen exists to answer? → `display-money`
2. Is it the name of the page? → `headline` (Home: `lead` greeting)
3. Is it the verdict sentence? → `title-lg`
4. Is it a number read as a KPI? → `metric` (the lead figure of a non-Home screen: `metric-lg`)
5. Does it name a card? → `card-title`. A canvas section or a dialog? → `title`
6. Does it name a row or item? → `body-strong`; in a dense table, nav or ranked list → `ui-strong`
7. Is it prose explaining something? → `body` in secondary (`lead` next to a large element, `narrative` in the digest)
8. Is it a control's text? → `ui` (small button: `ui-strong`; default button: `body-strong`)
9. Is it about the data rather than the data? → `caption`
10. Is it a 12px value or field name? → `caption-strong`
11. Is it a divider naming a group of things? → `label-caps`
12. Is it a state? → `badge`

**The Size–Ink Coupling Rule.** The smaller the text, the lower its default ink:

| Size | Default ink | May step up to | Never |
|---|---|---|---|
| 16px and above | primary | (secondary only for `lead` / `narrative` prose) | subtle |
| 13–14px | primary (values, names) or secondary (prose, inactive nav) | — | subtle, faint |
| 12px | subtle | primary, but only with weight 500 (`caption-strong`); secondary inside callouts and notices | faint |
| 11px | subtle (`label-caps`, rail hint) | tone ink (`badge`), secondary (`kbd` in a cap) | primary at 400 |

**The Data-Is-Never-Subtle Rule.** Money and primary values are primary ink. Supporting figures (a share next to an amount, a unit price) may be secondary. Only commentary is subtle. When a 12px description and a 12px value sit in the same card, the value steps up and the description stays down.

## Layout

The spacing scale is a standard 4px base with 2px and 6px half-steps reserved for the inside of controls. Group by proximity first and add containers only when proximity cannot do the job.

### Spacing roles

| Role | Value | Where |
|---|---|---|
| Micro | 2px | Inside badges and key caps; row name → secondary line |
| Inline | 6px (11–13px text) · 8px (14px and above) | Icon ↔ label in buttons, titles, nav items, badges |
| Stack tight | 4px | Card title → description; KPI label → value; field label → control |
| Stack | 8px | Control → help text; rows in a list; headline → `PageHeader` description |
| Stack loose | 12px | Blocks inside a card (bar → KPI); the cockpit grid gutter |
| Card padding | 16px (`size="sm"`: 12px) | `Card`, dialogs |
| Group | 16px | Card header → content; between fields; between figures in a header row; between sidebar groups |
| Section | 24px above · 12px below a `title` | Sections on the canvas |
| Page | 24px | `PageHeader` → first content block |
| Shell frame | 12px sides and 16px top and bottom on mobile, 20px from md | `[data-app-content]` padding (founder decision, kept) |

**The Heading Air Rule.** Space above a heading is at least twice the space below it. A heading belongs to what follows it.

### Shell and grid

- **Shell:** sidebar rail (`surface-rail`) and an inset canvas (`surface-canvas`) at radius `lg`, with an 8px margin from md and no shadow (the hairline border at 60% is the only edge). The rail collapses to icons on desktop and becomes a sheet below md.
- **Home cockpit:** a 12px gutter grid. Row 1 holds hero, digest and composition (`1.55fr / 18–24rem / 1.45fr` at xl). Row 2 holds the pace chart and the teams table, which take the remaining height.
- **Containers:** wide layouts switch on container width, not viewport width (the Times index switches to its dense table at 960px of its own width).

### Measure and responsive behavior

- Prose: 65ch max (`body`, `lead`); digest 38ch; `display` 15ch.
- Responsive changes are structural (stack columns, swap tables for stacked rows), never a smaller type scale. The one exception is the hero numeral, which drops from 44 to 36px below md.
- Below md every control is at least 44px tall (existing global rule), even when its visible mark is smaller.

## Elevation & Depth

Depth comes from **tonal layering**: rail, canvas, card and elevated surfaces step in lightness. A 1px ring at 6% ink confirms a card's edge after the tone has already separated it. Shadows appear only on things that **float** above the page.

| Level | Surface | Edge | Shadow | Used by |
|---|---|---|---|---|
| 0 Ground | `surface-rail`, `surface-canvas` | none | none | Rail, page background |
| 1 Card | `surface-card` | ring 1px ink 6% | none | Cards, panels |
| 1s Shell | `surface-canvas` | border `hairline` 60% | none | The inset shell only |
| 2 Floating | `surface-elevated` | ring 1px ink 10% | `shadow-lg` | Menus, select popups, popovers, toasts, chart tooltips |
| 3 Modal | `surface-elevated` | ring 1px ink 10% | `shadow-xl` + overlay | Dialogs, sheets, the search dialog |

**The Flat-at-Rest Rule.** Nothing in the page flow casts a shadow. A card that needs to feel more important gets a better position or a larger figure, not a shadow. Hover changes the tone (`surface-hover`) and never lifts a container. The one exception is the primary button, which lifts 1px.

## Shapes

The founder's direction: small radii get smaller and the jump to large is unmistakable. Controls drop from 10px to **6px**, and cards from 14px to **12px** (founder, 2026-10-05), so the control-to-card ratio grows from 1.4× to 2×.

| Token | Value | Character | Used for | Never for |
|---|---|---|---|---|
| `xs` | 4px | Nearly square | Data marks: legend swatches, report paper sheets | Containers, controls |
| `sm` | 6px | Crisp | **Controls and their parts:** inputs, select triggers, textareas, checkboxes, sidebar items, menu and select items, tooltips, key caps, code chips, skeleton text lines, focus targets | Cards, popovers |
| `md` | 10px | Soft | **Nested and floating containers:** menus, select popups, popovers, toasts, chart tooltips, notices, stale banners, muted callouts inside cards, row cards inside a card (mobile team cards, contributor rows), the search dialog's field, dashed empty boxes inside cards | Top-level cards and dialogs |
| `lg` | 12px | Rounded | **Top-level surfaces:** cards, dialogs, the search dialog, sheets (exposed corners), the inset shell, full-page empty panels | Anything nested inside a card |
| `pill` | 9999px | Capsule | **Things you press or that state something:** buttons of every size, icon buttons, badges and status pills, tab tracks and triggers, switches, segmented controls, filter and scope chips, avatars, status dots, the chart date pill, count badges | Inputs, containers, menu items |

**The Concentric Rule.** A child's radius is its parent's radius minus the padding between them, rounded down to the next token, and never equal to the parent's. A 12px card holds 10px callouts. A 10px menu with 4px padding holds 6px items.

**The Pill-Means-Press Rule.** The pill shape belongs to things you act on or read as a state. An input is not a pill and a container is never a pill. This keeps "press me" readable at a glance.

**Bars are segmented.** Budget, pacing and composition bars are solid segments (2026-10-08, founder-directed: the tick grid is retired), each with a small radius and a small gap from its neighbour — 3px radius and 2px gap on the 6–12px bars, 6px and 3px on the tall bars, the 32px hero and the 24px plan timeline (`BAR_SHAPE` / `TALL_BAR_SHAPE` in `lib/bars.ts`). Segments tile the track instead of stacking on it, so a gap shows the card, never another layer. The budget marker is a 1px line.

## Components

Each recipe names the styles and tokens it combines. Change a recipe here before changing it in code.

### Buttons

Ink capsules: quiet until pressed, never orange.

- **Shape:** `pill` at every size. Heights: `sm` 28px, default 36px, `lg` 40px, at least 44px below md.
- **Text:** default and `lg` in `body-strong`; `sm` in `ui-strong` (up from 12px). Icons are 16px (14px in `sm`), 8px from the label (6px in `sm`).
- **Primary:** `action-ink` fill with `on-action` text. On hover it uses `action-ink-hover` and lifts 1px; on press it settles. One per region.
- **Secondary:** `surface-control` fill, hairline border, primary ink. For the second action, such as "Gerenciar".
- **Tertiary:** transparent with a hairline border and secondary ink that turns primary on hover. For in-card navigation such as "Mapear" or "Ver time".
- **Ghost:** no border, secondary ink. For icon buttons and the sidebar close button.
- **Destructive:** a soft `destructive` wash with destructive ink. Only behind a confirmation.
- **Link:** primary ink with a 30% ink underline at 4px offset, full underline on hover.
- **Focus:** a 2px `focus-ring` ring at 40%. **Disabled:** 50% opacity and no lift. **Loading:** the spokes mark replaces the label in place.

### Inputs and fields

- **Shape:** `sm`. Height 32px on desktop (up from 28px), 44px below md. A transparent hairline-tinted fill. Threshold screens (login, password recovery, invitation) keep 44px fields and full-width 44px buttons at every width: the form is the whole screen there, and the touch size is kept on desktop too.
- **Text:** value in `body` primary; placeholder in `body` subtle; money prefix in `caption` subtle behind a hairline divider.
- **Label:** `caption-strong` primary, 4px above the control. **Help:** `caption` subtle, 8px below. **Error:** `caption` in destructive, replacing the help text, with `aria-invalid` on the control.
- **Focus:** the border shifts to `focus-ring` and a 2px ring at 40% appears.
- **Select triggers** share the input recipe. **Textareas** share it and grow vertically.

### Cards

The working surface: a quiet tone with no line under the title.

- **Shape:** `lg`. **Surface:** `surface-card` with a ring at 6% ink and no shadow (Level 1).
- **Padding:** 16px; `size="sm"` 12px for dense cockpit cards.
- **Header:** a 16px leading icon in faint, then `card-title`. Below it, an optional description in `caption` subtle, at most two lines, 4px under the title. A card action (a `sm` secondary or tertiary button) sits top-right. No header separator.
- **Content:** 16px under the header. Nested elements use `md`.
- **Footer (honesty line):** `caption` subtle. Use it for unconverted USD, unattributed spend and methodology notes. These are never tooltips.

### KPI and header figures

- A `<dl>`: `dt` in `caption` subtle, `dd` in `metric` primary, 4px apart.
- In a header row, figures sit 32px apart (24px below sm) and the row sits 16px under the card title.
- A footnote under the row uses `caption` subtle, 8px below.
- A figure that is unavailable shows "—" in `metric` subtle with its reason in `caption` ("coletando ritmo…"). Never a guessed number.

### Tables and dense lists

- **Header row:** `label-caps` subtle, 36px tall, with a `hairline` rule below.
- **Cells:** `ui` primary, 40px rows (44px below md). Numbers are right-aligned and tabular.
- **Row name:** `ui-strong`. A secondary line under it uses `caption` subtle, 2px below.
- **Hover:** `surface-hover` across the row, with no radius on full-bleed rows and `sm` on inset rows.
- **Total row:** `body-strong`, with a `hairline` rule above.
- **Narrow widths:** the table becomes stacked row cards (`md`, hairline border, 12px padding) and keeps the decision fields visible. It never scrolls them out of view.

### Sidebar

- **Rail:** `surface-rail`. The wordmark at 24px crossfades to the orange coin when collapsed.
- **Group label:** `label-caps` in `ash-rail` ("COCKPIT", "CONTA"), 32px tall, 8px inset, with 16px between groups. It hides on the collapsed rail.
- **Item:** `ui` in secondary, a 16px icon in the same ink, 32px tall (44px below md), radius `sm`, 8px padding.
- **Hover:** `rail-hover` with primary ink. **Active:** `ui-strong` primary on `rail-selected`.
- **Unread dot:** 6px `coin-orange`, top-right of the item, with an `sr-only` label. Never a count.
- **Search entry:** an item with the "Ctrl P" hint right-aligned in `kbd` metrics and `ash-rail`, without a cap. Radius `md`, a `surface-canvas` fill with the rail hairline border at 50%, `rail-hover` on hover. The fill is a quiet neutral step off the rail, never as strong as `rail-selected`, which stays the rail's focal point. The fill and border drop away on the collapsed rail.
- **Account footer:** name in `ui-strong`, e-mail in `caption` subtle, avatar `pill`.

The hierarchy reads in three clear steps: the quiet caps divider, then the readable items, then the active item in ink.

### Menus, select popups and popovers

- **Container:** `md`, `surface-elevated`, ring 10%, `shadow-lg`, 4px padding (Level 2).
- **Item:** `ui` primary, 28px tall (44px below md), radius `sm`, 8px inset. Focus and hover use `surface-hover`. Destructive items use destructive ink.
- **Group label:** `label-caps` subtle. **Shortcut:** `kbd` subtle, right-aligned. **Separator:** `hairline`, 4px vertical margin.

### Tooltips and info tips

- **Tooltip:** `sm`, inverse (an ink fill with canvas text), `caption`, 6×12px padding, 20rem max width.
- **Info tip trigger:** a 16px glyph in faint that turns primary on hover and focus, with a 44px hit area below md. Explanations live here. Honesty disclosures never do.

### Dialogs and sheets

- **Dialog:** `lg`, `surface-elevated`, `shadow-xl`, overlay, 16px padding. Title in `title`, description in `body` secondary. Actions are right-aligned with the primary action last, and stack below sm.
- **Sheet / drawer:** attached to an edge, with `lg` on its exposed corners and 24px padding. Title in `title`. Section labels inside use `label-caps`. Same Level 3 as a dialog (ring 1px ink 10%, `shadow-xl`). Side sheets that hold a table are `2xl` wide on desktop and full width on phones; a width override uses the primitive's own `data-[side=…]` prefix, or the base width wins.
- **Overlay:** one for every modal, a 6px blur with no dimming (founder decision 2026-10-10).
- **Closing:** a modal that runs an action closes through Cancelar in its footer and has no corner X (confirmations, e-mail codes, account deletion, the team budget). A read-only modal has the corner X, a 44px target on phones (the models sheets, notifications). Two exceptions: the full-screen report preview keeps its "Fechar" at the top left, and the welcome dialog closes through its single button. The search dialog has no X on desktop (`Esc`); on phones a close button ends the field row.
- **Saving:** a form modal closes when its action lands and confirms with a toast; an error keeps it open. While the action runs, Cancelar is disabled and Esc and outside clicks are ignored too.
- **Focus:** a confirmation opens on Cancelar, a form on its first field, a read-only modal on the panel itself (the reader hears the title before any control). Opening focus goes through `initialFocus`, never `autoFocus`, and closing focus returns to the opener; when the opener is gone (a menu item, a link that unmounts), `finalFocus` names where focus lands. A step that mounts while the modal is open (account deletion's code and phrase) focuses its field.
- **One modal at a time:** a modal never opens another over itself. A detail inside a sheet replaces the sheet's content, with "Voltar" (tertiary, `sm`) above the title (Composição's "Comparar").
- **Confirmation:** states the scope and the consequence in `body`, and puts the destructive variant on the confirming button.

### Badges and status

- **StatusPill** (budget status): `pill`, 20px tall, 8px padding, `badge` type, a 12px icon, drawn by `StateBadge` in the positive, amber and destructive tones (neutral while collecting). Its labels are fixed in the component, No controle · Atenção · Estourado · Coletando ritmo (product-analysis.md), and no screen renames them. Always text plus icon; color is never the only cue.
- **StateBadge** (non-budget state): the same shape with state tones (`badge-*` ink on its `-soft` wash).
- **Icon grammar** (`components/domain/state-icons.ts`): one glyph per meaning across badges, notices, toasts and inline results. `done` (checkmark circle: done, under control, connected), `attention` (alert circle: amber, a threshold reached, a data gap), `breached` (cancel circle), `failure` (alert triangle: a sync error, a save that did not go through), `pending` (clock: collecting, pending, coming soon, a projected risk) and `info`. Domain objects take their glyph from the icon lexicon below; provider marks and one-off context glyphs stay at their call sites.
- **Icon lexicon** (`components/domain/domain-icons.ts`, founder-approved 2026-10-10): one glyph per domain object, so the same object wears the same icon on the sidebar, settings, search, empty states, menus and card titles, and no two objects share one. Teams `UserGroup`, the roster `UserList`, app access `ShieldUser` (also the Admin role), personal preferences `UserSettings01`, composition `PieChart` (the Composição screen and its Home preview), attribution `Split`, subscriptions and seats `CreditCard`, API keys `Key01`, connections `Plug01`, the budget `Wallet03`, spend `Invoice01` (the wallet is the budget, never spend), reports `FileChartLine`, audit `Audit01`, privacy `ViewOffSlash`, the company `Building02`, passwords `LockPassword`, restricted or locked `SquareLock02` (a padlock; Hugeicons `Lock` is a keyhole disc that reads as a target at 16px), simulation `SlidersHorizontal`, a model swap `ArrowDataTransferHorizontal`, settings `Settings01`, the executive digest `News01` (a deterministic summary: sparkles mean AI by convention and are not used for it), notifications `Bell`. Check a glyph by its drawing, not its name: `Compass01` is a drafting compass (the 404 uses `Compass`), `Settings03` is a hex nut, `Coins01` reads as database cylinders. `ArrowUpDown` means sorting only; a control that opens a list uses `UnfoldMore`.
- **Count:** a `pill` at least 20px wide, `badge` with tabular figures, ringed in the canvas color.

### Notices and banners

- **Shape:** `md`. **Surface:** the tone's `-soft` wash (neutral for disclosures), so a notice reads the same on the page and inside a card. 10×12px padding with a 16px icon that defaults to the tone's glyph in the icon grammar.
- **Title:** `caption-strong`. **Message:** `caption` in **secondary** (the tone's ink for amber and destructive), because inside a notice the message is the content. **Action:** right-aligned in its own grid column, sized by its label.
- **Stale banner:** a neutral card (freshness is not budget status) with one line per provider, failures first, each saying when its data is from (`syncStamp`, tabular figures). Only a failed sync takes the destructive tone, on its own line. The effect on totals is said once and the CTA reads as an `sm` tertiary button. Nothing is clamped, so no failure can hide behind an ellipsis.
- **Toast:** a 28px tone disc with the grammar glyph before the title: neutral for success (green stays budget-only), destructive for failure, with a destructive hairline.
- **Calm by default:** alarm wording and destructive tone only for real failures.

### Empty states

- **In a card:** an `md` dashed hairline box with 20px padding. Title in `card-title`, description in `body` secondary (max 45ch), and a CTA button. Never a blank card.
- **Full page:** title in `title`, description in `body` secondary, and the next action. A cold start always offers a CTA.

### Skeletons

- Same geometry as what they stand for: text lines at the line height of their style with radius `sm`, cards at `lg`, pills as pills.
- A pulse, and no spinners for daily data (RSC streaming).

### Loading mark

The root loading screen (`components/loading-ui/denarius-loader.tsx`) draws the coin as a line, in a 2.6s loop (founder-directed 2026-10-10): both contours draw at once, hold, then erase from their start. Flat on purpose: no glow, halo or pulse. The line is `--brand-accent` mixed 75% with `--background`, at about 1.7px, over a guide of the same contours in `--border`. Under reduced motion the coin sits fully drawn and still.

### Charts and bars

- **Series:** the neutral ink ramp (`chart-1…5`). Semaphore only for budget lines and status. Spend series use the orange domain and model or simulated series the violet domain (Money domains); one model keeps one color on every screen.
- **Spend over time** (`SpendTrendChart`, Home's "Evolução do mês"; founder-directed 2026-10-10): what was already spent is the spend orange (`pace-spent`) — the line, its vertical gradient fill, today's ring, the focus dot and the tooltip marker — so it reads as the same "gasto" as the pacing bar. From today on, the projection is a dashed neutral line over the neutral gradient (ink at the same fade), not the light orange the Money domains give a current-pace close: the founder chose gray here so the chart's tail reads plainly as "not yet happened". The orange never turns red here: overruns stay with the pacing bar and the semaphore.
- **Axis ticks and legends:** `caption` subtle, tabular, at full opacity (no 70% legend). **Gridlines:** `hairline` at 50%.
- **Legend swatch:** 8×10px, radius `xs`.
- **Tooltip:** `md`, `surface-elevated`, `shadow-lg`, header in `caption-strong`, labels in `caption` subtle and values in `caption-strong`.
- **Date focus pill:** `pill`, `surface-control`, `caption-strong` with tabular figures.
- **Budget and pacing bars:** solid rounded segments with a small gap. The track (the stretch nothing else covers) is ink at 15%; the run-rate ghost ink at 30%. The fill is the semaphore (budget) or the spend orange `pace-spent` for a share of spend (founder decision 2026-10-10: Home's "Gasto por fonte", Composição's vendor cards and the team mix share `RankedTickList`). The budget marker is a 1px line at 70–80% ink.
- **Pacing bar (layers):** three layers measured from zero — gasto, projeção and orçamento — with the shorter of projection and budget in front, so the order adapts: a close that fits the budget reads gasto → projeção → orçamento; one that passes it reads gasto → orçamento → projeção (red). A realized overrun turns the spend the red base past the limit. No lines, no overlays; the visible stretches always tile the track. The legend lists the layers in the order the bar paints them, in `caption` subtle. The meta row above holds `dia N de M` in `caption` subtle and the "% gasto" readout in `caption-strong`.

### Verdict

- **Standalone verdict (`VerdictLine`):** a 16px status halo with an 8px pulsing semaphore dot, the `title-lg` sentence in primary, and an optional tertiary `sm` action.
- **Team summary card** (founder-directed 2026-10-07): the team's spend leads in `display-money` with the budget suffix, and the conclusion sentence sits directly under it in primary, with no rule between them, so figure and sentence read as one answer. The projected close and the signed projected margin sit apart in `metric` behind a `hairline` divider (beside on wide screens, above on narrow ones). The shared pacing bar closes the card.
- **Home (founder decisions, kept 2026-10-04 and 2026-10-10):** no pill. The greeting in `lead` secondary, a 1px vertical divider (`ink-secondary` at 40%, 16px tall), then the pulsing dot and the verdict words in `body` secondary, with the verdict word itself at weight 600 (the one 600 at body size in the app). The dot keeps its full semaphore color. The freshness stamp sits on the right in `caption` subtle.

### Page header

- Optional back link in `ui` secondary with a 14px chevron, 4px above the title.
- `headline`, with a description in `body` secondary (max 65ch) 8px below.
- Meta (sync time, period) in `caption` subtle with tabular figures, only where the page itself compares against the period (founder-directed 2026-10-10: Times, a team page and Composição drop the "Mês · dia N de M" stamp; the day lives in the components that compare against it, such as the pacing bar). Actions right-aligned.
- 24px down to the first content block.

### Search dialog

- **Dialog:** `lg`, Level 3. **Field:** `md` (the dialog's primary field, treated as nested), 48px tall, `body`.
- **Result groups:** headed by `label-caps`. **Result:** title in `body-strong`, description in `caption` subtle, meta in `caption` subtle with tabular figures.
- **Scope chips:** `pill`, `ui-strong`. **Footer:** `kbd` caps with `caption` subtle labels.

### Signature: the Home hero

| Element | Style |
|---|---|
| "Gasto no período" + spend icon (`Invoice01`) | `card-title` + faint 16px icon |
| Spend | `display-money` (400, 44px from md) |
| "de R$ 80.000" | `lead` secondary, same baseline |
| "+12,4% X semana anterior" | figure in `body-strong` `status-*-fg` (founder exception) + label in `body` secondary |
| Pacing bar | meta row: "dia 5 de 31" in `caption` subtle, "% gasto" in `caption-strong`; three layers from zero (gasto, projeção, orçamento), the shorter of projection and budget in front, see Charts and bars |
| "Projeção de fechamento" | KPI: `caption` subtle over `metric` primary |
| Unconverted-USD footer | `caption` subtle |

### Worked example: "Gasto por fonte"

This card shows the hierarchy fix the founder asked for. The description must recede, and in light mode it is already at the contrast floor. So the data around it steps up, and the description moves down where there is room (dark mode).

| Element | Today | Target |
|---|---|---|
| Pie icon | `text-muted-foreground` (0.53 / 0.71) | faint (0.63 / 0.52): decorative, recedes visibly |
| "Gasto por fonte" | `text-sm font-medium` | `card-title` (unchanged) |
| Info-tip glyph | muted | faint, primary on hover and focus |
| Description | `text-xs text-muted-foreground`: 4.8:1 light, 7.2:1 dark | `caption` subtle: 4.9:1 light (at the floor), **5.1:1 dark** |
| Provider name | 12px `font-medium` primary | `ui-strong` primary |
| Amount | 12px `text-muted-foreground` | `ui` **primary**, tabular |
| Share ("· 54%") | 12px `text-muted-foreground` | `ui` secondary, tabular |
| Unattributed footer | `text-xs font-light` muted | `caption` subtle at 400 |

Result: the description is now the quietest text in the card, while before it shared its gray with the amounts. The data reads first, the description last, and the decorative icon steps back further still.

## Do's and Don'ts

### Do:

- **Do** pick a named style from the Typography table and use all of its properties together.
- **Do** keep exactly one `display-money` per screen and give it weight 400.
- **Do** step large type *down* in weight: 300 at 36px and above, 400 from 20–28px.
- **Do** step small type *up* in weight only when it carries a value, a field name or a state (`caption-strong`, `ui-strong`, `badge`).
- **Do** use the four ink steps by token. Map any `/80`, `/70` or `/65` opacity to the nearest step.
- **Do** keep subtle text at or above 4.5:1 on its actual surface. On light `surface-control` and on the rail, switch to secondary or `ash-rail`.
- **Do** use `label-caps` for group dividers: sidebar groups, dense table headers, menu and search groups.
- **Do** make every child radius smaller than its parent's (Concentric Rule).
- **Do** use `tabular-nums` on every figure, and the `money()` helper for every amount.
- **Do** keep motion on the existing tokens (120–180ms, `--motion-ease-standard`); the expressive ease is for signature moments only: chart and bar reveals, the sidebar rail, and the Simulação bars gliding as the plan changes (320ms, `[data-bar-glide]`).

### Don't:

- **Don't** use weight 600 or 700 on titles, headings or large figures.
- **Don't** use weight 300 below 36px.
- **Don't** render text smaller than 11px, or sentence-case text at 11px.
- **Don't** put a caps label above a heading. The eyebrow is banned.
- **Don't** type uppercase into copy constants; uppercase is a style.
- **Don't** put faint ink on words.
- **Don't** use subtle ink for money or primary values.
- **Don't** use an orange fill, hover, series or decoration outside the spend domain (the digest link underline on hover is the other exception). Orange marks an on state, the brand, or spend.
- **Don't** paint a simulated or model-price figure orange, or real spend violet.
- **Don't** use green, amber or red outside budget status (and the Home week-over-week exception).
- **Don't** give menu items, inputs or containers a pill radius; don't give a nested element its parent's radius.
- **Don't** add shadows to cards or other in-flow surfaces.
- **Don't** add separators under card titles.
- **Don't** use `clamp()` font sizes inside the app.
- **Don't** reach for Geist Mono to make something look technical.

## Adoption

Status (2026-10-10): **implemented in v2.** A pre-production audit compared every screen, modal, button and route with this file and fixed the gaps in five batches: primitives and tokens, Composição and Simulação, the remaining screens, these docs, and the modals (overlay, closing, focus). `tests/design-system.test.ts` guards the parts a test can hold (the button set, radii, the semaphore allowlist, the weight-300 allowlist, the state-tone contrast).

### Founder decisions from the audit (2026-10-10)

1. **Buttons:** `outline` merged into `tertiary` (secondary ink); the 24px `xs` size is gone, `sm` is the smallest.
2. **Home verdict:** keeps its divider and the 600 verdict word (see Verdict).
3. **Threshold screens** (convite, erro and 404 outside the shell, configuração) title in `display` with no eyebrow.
4. **Composição's vendor cards:** the total in `metric-lg` inside the standard `Card`.
5. **Share-of-spend bars** are the spend orange on Home, Composição and the team mix.
6. **Modals** (from the modal consistency pass): one overlay, blur without dimming; action modals close through Cancelar and read-only ones through the corner X; the team budget dialog has Cancelar and Salvar and closes on save with a toast; "Comparar" replaces the models sheet's content instead of opening a second sheet (see Dialogs and sheets).

### Known gaps (flagged, not silently decided)

1. **[CLAUDE.md](CLAUDE.md) §11 F5 "components/ui untouched" vs this file.** The recipes here live partly in the primitives: the button variants and sizes, the input text size, the pt-BR close labels of dialog and sheet, and the error tone of `FieldError` were set in `components/ui/` during the audit. Whether F5 should read "no product rules in the primitives" instead of "untouched" is a founder call.
2. **[CLAUDE.md](CLAUDE.md) §11 "sentence case everywhere" vs `label-caps`.** Reconciled by keeping copy in sentence case and applying uppercase only through the style.
3. **Two form compositions.** Auth, invitation and the setup company step use the `Field` primitives (label → control 8px); the Ajustes forms and dialogs compose `Label` + control + help by hand (6px). The field recipe asks for 4px; unifying them is open.
4. **Login's mode switch** ("Entrar | Criar conta") is its own segmented control instead of `Tabs`.
5. **The daily-spend chart** reads its per-day values through the native `title` tooltip.
6. **Light-mode subtle cannot drop further.** The incumbent value already sits at the 4.5:1 floor on hover rows. Quiet text recedes there through the Data-Is-Never-Subtle and Faint-Is-Not-Text rules instead.

### Out of scope

- The printed monthly report (`.report-*` in `app/globals.css`) keeps its own print scale and colors. When it is revisited, it should adopt the caps discipline (small, 500–600, +0.06em).
