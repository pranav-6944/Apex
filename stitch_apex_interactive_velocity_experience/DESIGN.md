---
name: Kinetic Telemetry
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e5'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e3e2e5'
  inverse-on-surface: '#303033'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#8fd5ff'
  on-tertiary: '#00344a'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Chivo
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Chivo
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Chivo
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  telemetry-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0.02em
  telemetry-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the uncompromising rigor of high-performance automotive skunkworks and aerodynamic wind tunnels. It treats the digital surface as a tactile cockpit readout: instrumentation-grade, surgically precise, and deliberately stripped of decorative excess. Every element serves an operational purpose, borrowing paradigms from computational fluid dynamics (CFD), structural carbon fiber monocoques, and physical aircraft toggles.

The aesthetic fuses **Precision Technical Brutalism** with **Aerodynamic Minimalism**:
- **Engineering Over Decoration:** Data indicators, telemetry registers, coordinate ticks, and structural grid rules anchor the layout.
- **Physical Feedback:** Digital controls behave like machined knurled titanium toggles and dry-carbon switches—rapid actuation, zero bounce, tactile state changes.
- **High-Velocity Restraint:** High contrast dark obsidian surfaces minimize distraction while focused kinetic amber highlights isolate critical state transitions and telemetry peaks.

## Colors

The palette operates under low-emission, deep-night cockpit conditions. The primary light source is emitted from data points, never flooded backdrops.

- **Base Surfaces:** 
  - Canvas Deep: `#0a0b0d` (Obsidian cockpit substrate)
  - Surface Mid: `#0f1115` (Chassis structural containment)
  - Surface Raised: `#14171d` (Instrument housing panels)
- **Primary Accent (Kinetic Amber):** `#f59e0b` (Alerts, active toggles, peak redlines). Scaled through `#fbbf24` for high-velocity focus and `#d97706` for perimeter strokes. Used strictly for active data flow and operational confirmation—never as decorative fill.
- **Secondary (Aero Slate):** `#64748b` (Baseline graphs, vector guides, calibration indicators), transitioning into `#94a3b8` for muted metrics and `#334155` for panel boundaries.
- **Structural Text & Typography:**
  - Primary Readout: `#eceae5` (Warm surgical titanium)
  - Secondary Readout: `#d6d3cb` (Sub-telemetry, passive metrics)
  - Disabled / Grid Hairline: `#1f242d`

## Typography

Typography establishes an unambiguous division between structural identity, narrative data, and machine telemetry:

- **Display & Headings (Space Grotesk):** Engineered geometry with sharp apex cuts. Used for high-level mechanical sections, performance metrics, and velocity indicators.
- **Narrative & Body (Chivo):** Grounded, low-drag humanist sans-serif providing instantaneous readability in documentation, specifications, and continuous engineering logs.
- **Instrumentation & Telemetry (JetBrains Mono):** Monospaced, tabular-native, laser-legible. Used strictly for numeric values, coordinate grids, real-time readouts, HUD overlays, and operational statuses (`label-caps` must always render in uppercase).

## Layout & Spacing

The layout adopts a modular telemetry grid based on micro-increments of 4px and major structural blocks of 16px.

- **Grid Architecture:** 
  - **Desktop (1440px+):** 12-column engineering grid with 1.5rem (24px) gutters and 3rem (48px) margins. Structural layout hair-lines (`1px solid #1f242d`) optionally divide major quadrants to simulate aerospace schematics.
  - **Tablet (768px - 1439px):** 8-column layout with 1rem (16px) gutters and 2rem (32px) margins.
  - **Mobile (< 768px):** 4-column layout with 1rem gutters and 1rem margins. Component stacks compress into vertical rack-mount orientations.
- **Spacing Rhythm:** Dense, functional component spacing (`space-xs` to `space-md`) within instrumentation clusters to maintain high contextual density, contrasted against expansive structural pacing (`space-xl`) between distinct mechanical assemblies.

## Elevation & Depth

This system avoids soft, non-directional blur shadows. Depth is achieved via **structural edge lighting**, **surface luminosity tiers**, and **etched hairline enclosures**.

- **Level 0 (Monocoque Floor):** `#0a0b0d` flat baseline canvas.
- **Level 1 (Sub-Chassis Panel):** `#0f1115` surface, framed by a 1px boundary of `#1f242d`.
- **Level 2 (Active Telemetry Pod):** `#14171d` surface with top edge-light highlight: `border-t: 1px solid #334155`, lateral and bottom borders in `#1f242d`.
- **Level 3 (Tactile Hover / Engaged State):** Top border accents with `#f59e0b` (kinetic amber hairline), accompanied by a tight, directional ambient amber luminescence: `box-shadow: 0 0 16px -4px rgba(245, 158, 11, 0.15)`.
- **HUD Glass / Aerodynamic Layer:** High-velocity overlays use `#0a0b0d` at 85% opacity with `backdrop-filter: blur(12px)` and a continuous 1px micro-border of `#334155`.

## Shapes

The shape vocabulary is strictly **Zero-Radius Architectural** (`roundedness: 0`). 

Curvature implies structural compliance; precision engineering demands rigid tolerances. UI elements utilize clean 90-degree corners or 45-degree chamfered clips (`polygon` clip-paths) on primary tactical panels to evoke milled aerospace components and ground-effect diffusers. Inner containment borders track outer perimeters with surgical alignment.

## Components

### Buttons & Actuators
- **Primary Kinetic Actuator:** Razor-sharp rectangular module. Background `#f59e0b`, text `#0a0b0d`, font `JetBrains Mono` bold uppercase. Hover: background `#fbbf24`, accompanied by a 1px rightward mechanical cursor offset. Active: scale(0.99) instantaneous snap.
- **Secondary Telemetry Button:** Background `#0f1115`, 1px border `#334155`, text `#eceae5`. Top-right corner cut with a 4px 45-degree chamfer. Hover: border color resolves to `#f59e0b`, text to `#f59e0b`.

### Status Indicators & Chips
- **Telemetry Chips:** Zero-radius micro-containers. Background `#14171d`, border `1px solid #1f242d`, typography `label-caps` in `#94a3b8`. Prefix with a 4px solid square state indicator (Amber `#f59e0b` for active, Slate `#334155` for standby).

### Forms & Input Fields
- **Data Registers (Inputs):** Recessed background `#0a0b0d`, bottom border `1px solid #334155`, sides and top transparent until focused. Monospaced numeric entry with trailing engineering units (e.g., `BAR`, `RPM`, `Nm`, `G-FORCE`) fixed in `#64748b`. Focus: bottom border transitions instantaneously to `1px solid #f59e0b` with no glow spread.

### Toggles, Radios & Checkboxes
- **Physical Rocker Switches:** Bimodal segmented sliders. Background `#0a0b0d`, active segment slides into position with high-spring mechanical dampening (0.15s cubic-bezier(0, 0, 0.2, 1)). Active thumb: `#14171d` with a 2px amber status line.
- **Check-Registers:** 14px sharp squares. Unchecked: `1px solid #334155`. Checked: Solid fill `#f59e0b` enclosing a centered 4px `#0a0b0d` square dot.

### Display Cards & Data Pods
- **Telemetry Pods:** `#0f1115` background enclosed in a 1px `#1f242d` perimeter. Header zones feature monospaced coordinate markers (e.g., `SEC_04 // LATERAL_ACCEL`) styled in `label-caps`. Bottom corners feature etched tick marks (`+` or `L-brackets`) simulating technical blueprints.

### Specialized Component: Crosshair HUD Reticle
- Interactive focal points overlay a micro crosshair (`+`) with dynamic numeric coordinates (`X: 104.2 Y: 890.1`) that track mouse vector velocity across 3D models and dynamic performance charts.