# Detailed UI Requirements — External Links (Option A / Hero Area)

## 0) Goal

Add a compact “External Links” set to the hero section of [https://www.slray.com/](https://www.slray.com/) that links to:

* [https://industry.slray.com](https://industry.slray.com)
* [https://academic.slray.com](https://academic.slray.com)
* [https://blog.slray.com](https://blog.slray.com)

The links must preserve the existing style: **优雅 / 高端 / concise** and visually align with the existing “chips” (MATHEMATICS / COMPUTER SCIENCE / RESEARCH / STARTUPS).

---

## 1) Placement & Layout (Option A)

### 1.1 Location

Place the External Links row **directly under the existing category chips** (preferred), aligned to the left edge of the chip group.

If the chip group is in a flex row:

* Chips row stays unchanged
* External links row becomes the next row below it

### 1.2 Spacing

* Vertical spacing between chips row and external links row: **12px (desktop)**, **10px (mobile)**
* External links row should not push the hero layout to overlap or collide with the photo card on the right.

### 1.3 Responsive behavior

* Desktop (≥ 1024px): links appear in one row, no wrap unless needed.
* Tablet (768–1023px): links may wrap to 2 lines if necessary.
* Mobile (≤ 767px): links wrap naturally; keep consistent gap and no overlap with hero image card.

---

## 2) Component Structure

Create a reusable component `ExternalLinks`.

### 2.1 Data Model (must be data-driven)

Each link item:

* `label`: string (Industry / Academic / Blog)
* `href`: URL
* `desc` (optional for tooltip): short string (e.g., “professional profile”)
* `ariaLabel`: string

Default list (order):

1. Industry → [https://industry.slray.com](https://industry.slray.com)
2. Academic → [https://academic.slray.com](https://academic.slray.com)
3. Blog → [https://blog.slray.com](https://blog.slray.com)

---

## 3) Visual Style — “Pill Links” (must match chip system)

We will implement these links as **pills** similar in geometry to existing chips, but **visually secondary**.

### 3.1 Typography

* Font family: inherit from site (no new fonts).
* Font size:

  * Desktop: **12px**
  * Mobile: **11px**
* Font weight: **400–500** (match secondary UI labels)
* Letter spacing:

  * If your chips use tracking: match it
  * Otherwise set **0.06em** (subtle, editorial)
* Text transform: **UPPERCASE optional**

  * If chips are uppercase, links should be uppercase too.
  * If chips are title case, keep: Industry / Academic / Blog.

### 3.2 Pill dimensions

* Height:

  * Desktop: **28px**
  * Mobile: **26px**
* Horizontal padding:

  * Desktop: **12px 14px** (left/right)
  * Mobile: **10px 12px**
* Border radius: **999px** (full pill)
* Gap between pills: **8px** (desktop), **6px** (mobile)

### 3.3 Label format

Each pill shows:

* `Industry ↗`
* `Academic ↗`
* `Blog ↗`

Use the Unicode arrow **↗** (no icon library).
Arrow spacing: 6px from label text.

---

## 4) Color Theme Tokens (Light Section)

These values are chosen to fit a high-end monochrome editorial theme.
If your site already has CSS variables for grays, map these tokens to those variables instead of hardcoding.

### 4.1 Base tokens (light background)

* `--link-bg`: transparent
* `--link-text`: **#1A1A1A**
* `--link-border`: **rgba(0,0,0,0.16)** (or **#D6D6D6**)
* `--link-hover-bg`: **rgba(0,0,0,0.04)** (or **#F2F2F2**)
* `--link-hover-border`: **rgba(0,0,0,0.24)** (or **#BDBDBD**)
* `--link-active-bg`: **rgba(0,0,0,0.06)**

### 4.2 States

* Default: text `--link-text`, border `--link-border`, background transparent
* Hover (desktop only): background `--link-hover-bg`, border `--link-hover-border`
* Active (mouse down): background `--link-active-bg`
* Visited: do **not** change color (keep monochrome)

---

## 5) Color Theme Tokens (Dark Section Compatibility)

Your page includes dark sections; ensure pills remain readable if reused there.

* `--link-text-dark`: **rgba(255,255,255,0.86)** (or **#EDEDED**)
* `--link-border-dark`: **rgba(255,255,255,0.18)** (or **#3A3A3A**)
* `--link-hover-bg-dark`: **rgba(255,255,255,0.06)**
* `--link-hover-border-dark`: **rgba(255,255,255,0.28)**

If the component is only used in the light hero, this is still required for future-proofing.

---

## 6) Motion / Interaction (must be subtle)

### 6.1 Transitions

* Transition duration: **160ms**
* Easing: **ease-out**
* Properties:

  * background-color
  * border-color
  * transform (optional)

### 6.2 Hover motion (optional, very subtle)

On hover:

* `transform: translateY(-1px)` (optional)
* No shadow jump. If shadow exists, keep it extremely soft.

---

## 7) Accessibility Requirements

### 7.1 Opening behavior

Links must open in new tab:

* `target="_blank"`
* `rel="noopener noreferrer"`

### 7.2 Focus ring (keyboard)

Must show a tasteful but visible focus style:

* Focus outline thickness: **2px**
* Focus outline offset: **2px**
* Focus color (light): **rgba(0,0,0,0.40)** or **#666666**
* Focus color (dark): **rgba(255,255,255,0.45)**

### 7.3 Aria labels (required)

* Industry: “Open Industry site in a new tab”
* Academic: “Open Academic site in a new tab”
* Blog: “Open Blog site in a new tab”

---

## 8) Tooltip (optional; only if it fits the vibe)

If you implement tooltips, they must be minimal and match the editorial style:

* Trigger: hover/focus
* Placement: top
* Style:

  * background: #111
  * text: #fff
  * font-size: 11px
  * padding: 6px 8px
  * border-radius: 6px
  * max-width: 220px
    If tooltip makes UI feel “busy”, do not implement.

---

## 9) Engineering Constraints / Integration

* Do not import new UI libraries.
* Reuse existing spacing, type scale, and border styles wherever possible.
* If project uses CSS variables (recommended), define tokens once and use them in `ExternalLinks`.

---

## 10) Acceptance Criteria (Definition of Done)

1. External links appear under the hero chips (Option A), aligned and not competing with the hero title.
2. Pills match the existing chip geometry, but are visually secondary.
3. Hover + focus states are subtle and high-end (no flashy animation).
4. Mobile layout wraps cleanly without overlap.
5. Links open new tab with proper rel attributes and accessible aria-labels.
6. Theme tokens include both light and dark compatibility.

---

## 11) QA Checklist

* [ ] Desktop: pills align with chips; no layout shift on hover.
* [ ] Mobile: wraps neatly; taps are easy (≥ 40px tap target recommended; if pill height is 26px, ensure enough padding / line height).
* [ ] Keyboard: tab focus ring visible and tasteful.
* [ ] External links open correctly in new tab.
