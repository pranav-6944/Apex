# APEX — PROJECT CONTEXT & IMPLEMENTATION SPECIFICATION
**Version:** 1.0.0  
**Source of Truth:** `stitch_apex_interactive_velocity_experience/DESIGN.md`, `code.html`, `screen.png`  
**Aesthetic Paradigm:** Precision Technical Brutalism × Aerodynamic Minimalism  

---

## 1. Design Philosophy

The APEX digital experience represents an **Automotive Engineering Interface**, not a conventional luxury car advertisement. The surface behaves as an active instrument-grade readout—tactile, surgically precise, and deliberately stripped of decorative excess.

### Guiding Principles:
- **Engineering Over Decoration:** Telemetry registers, coordinate ticks, structural hairline grids, and aerodynamic vectors anchor the layout.
- **Physical Cockpit Feedback:** Digital actuators mimic machined knurled titanium toggles and dry-carbon switches—rapid actuation, zero bounce, tactile state feedback.
- **High-Velocity Restraint:** Obsidian dark surfaces minimize eye fatigue and distraction under night conditions, while focused kinetic amber highlights isolate critical state transitions and telemetry redlines.
- **Extreme Scale Contrast:** Massive macro-typography ("FIND YOUR LIMIT.", "YOU ARE IN COMMAND.") juxtaposed with razor-sharp micro-telemetry (JetBrains Mono, 10–12px, tabular tracking).
- **Architectural Zero-Radius:** Corners maintain strict 90° precision or 45° chamfers (`polygon` clip-paths), rejecting arbitrary rounded pill shapes unless simulating physical toggle recesses.

---

## 2. Visual Hierarchy

The interface operates across three distinct visual registers:

1. **Macro Editorial & Display Register:**
   - Giant display cuts (`Space Grotesk` & `Syne`, 48px to 140px, bold/black weight).
   - Used for primary philosophical declarations: `FIND YOUR LIMIT.`, `THE APEX CODE.`, `AERODYNAMICS FIRST.`, `0 TO 100 KM/H IN 3.2 SEC.`.
2. **Narrative & Engineering Documentation Register:**
   - Grounded, low-drag humanist sans-serif (`Chivo` / `Space Grotesk`, 13px to 18px).
   - Used for structural descriptions, material specifications, and doctrine narratives.
3. **Micro Telemetry & Instrumentation Register:**
   - Monospaced tabular data (`JetBrains Mono`, 10px to 14px, uppercase, tracking +0.12em to +0.4em).
   - Coordinates (`45.4215° N, 75.6972° W`), sensor links (`TELEMETRY_LINK // ACTIVE`), dynamic G-forces (`1.02 G`), drag coefficients (`0.21 Cd`), torque values (`1,240 Nm`).

---

## 3. Color System

Directly extracted from `DESIGN.md` and `code.html`:

| Token | Hex Value | Semantic Application |
|---|---|---|
| **Canvas Deep / Obsidian** | `#060708` / `#0a0b0d` | Cockpit baseline canvas substrate |
| **Surface Mid / Graphite** | `#0b0c0e` / `#0f1115` | Structural containment panels, section backdrops |
| **Surface Raised / Card** | `#111317` / `#14171d` | Instrument pods, cards, tactile clusters |
| **Active Pod Surface** | `#12151c` / `#161a22` | Benchmark cards, illuminated active pods |
| **Hairline Grid / Border** | `#1f242d` / `rgba(255,255,255,0.08)` | Aerospace schematic dividers, quadrant rules |
| **Border Active / Slate Tech**| `#334155` | Secondary button outlines, inactive ticks |
| **Kinetic Amber (Primary)** | `#f59e0b` | High-velocity alerts, active states, ignition core |
| **Kinetic Amber Glow** | `#fbbf24` | Peak focus, hover radiance, laser flare |
| **Kinetic Amber Dim** | `#78350f` / `#d97706` | Boundary strokes, inactive amber nodes |
| **Titanium Readout (Primary)**| `#eceae5` | High-contrast surgical text, primary titles |
| **Titanium Dim (Secondary)** | `#9e9c96` / `#d6d3cb` | Sub-telemetry, passive metrics, labels |
| **Aero Slate** | `#64748b` / `#475569` | Coordinate tags, baseline vector guides |
| **Status Nominal (Green)** | `#10b981` / `#34d399` | Telemetry link active, battery nominal |

*Rule:* Zero arbitrary purples, magentas, or neon blues. The color palette strictly stays within obsidian black, surgical titanium, aero slate, and kinetic amber.

---

## 4. Typography System

| Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Spacing / Line Height |
|---|---|---|---|---|---|
| **Display Hero** | Syne / Space Grotesk | 72px – 140px | 40px – 56px | 700 / 900 | -0.04em, line-height 0.95 |
| **Headline XL** | Space Grotesk | 48px – 64px | 32px – 40px | 700 | -0.03em, line-height 1.1 |
| **Headline LG** | Space Grotesk | 32px – 40px | 24px – 28px | 600 | -0.02em, line-height 1.2 |
| **Headline MD** | Space Grotesk | 24px | 20px | 500 | -0.01em, line-height 1.3 |
| **Body Narrative** | Chivo / Space Grotesk | 15px – 18px | 14px – 15px | 400 | line-height 1.6 |
| **Telemetry LG** | JetBrains Mono | 20px – 24px | 16px – 18px | 700 | tabular-nums, 0.02em |
| **Telemetry MD** | JetBrains Mono | 12px – 14px | 11px – 12px | 400 / 500 | tabular-nums, 0.04em |
| **Label Caps** | JetBrains Mono | 10px – 11px | 9px – 10px | 600 | uppercase, 0.12em – 0.3em |

---

## 5. Spacing & Grid System

- **Modular Telemetry Grid:** Micro increments of 4px, base cadence of 16px (1rem).
- **Desktop (≥ 1440px):** 12-column engineering grid, 24px (1.5rem) gutters, 48px–64px margins. Layout lines (`1px solid #1f242d`) divide major quadrants.
- **Tablet (768px – 1439px):** 8-column layout, 16px gutters, 32px margins.
- **Mobile (< 768px):** 4-column layout, 16px gutters, 16px margins. Component stacks compress into vertical rack-mount assemblies.
- **Horizontal Overflow Zero Tolerance:** Elements adhere to rigid viewport boundaries with strict `max-w` containment.

---

## 6. Section Architecture (1:1 Stitch Mapping)

1. **Top Telemetry HUD (Fixed Header):**
   - APEX authentic vector logo.
   - Status: `TELEMETRY_LINK // ACTIVE` (pulsing green indicator).
   - Real-time Aero (`0.21 Cd`), Torque (`1,240 Nm`), Lateral G (`1.02 G`).
   - Velocity counter (`000 KM/H` synchronized with scroll speed).
   - Primary actuator: `[ RESERVE CHASSIS ]`.
2. **01 — The Ignition (Initial Pure Cold State - `#ignition-section`):**
   - Cold boot screen, system offline status (`SYSTEM OFFLINE`).
   - Tactile ignition core with concentric pulsing energy ripples.
   - Coordinates ticker: `45.4215° N, 75.6972° W • CHASSIS 001`.
   - Interaction: Clicking/tapping ignites horizontal laser beam (`animate-laser`), dissolves blur/lock, reveals HUD, and unlocks drive experience in 0.8s–1.2s.
3. **02 — Aerodynamics First: Assembly by Scroll (`#assembly-section`):**
   - Stage 01 Deconstruction header.
   - Left rack: 4 phases (Carbon-Fiber Aero Monocoque, 21" Centerlock Wheels, Amber Matrix Blades, Active Dual Venturi Diffuser).
   - Right viewport: Assembled hypercar with WebGL Air Streamline Shader (flowing boundary aerodynamic streamlines) and wind tunnel telemetry ribbon.
4. **03 & 04 — Find Your Limit: Velocity Scroll (`#velocity-hero`):**
   - Scroll speed calculation (virtual km/h dynamically generated from scroll delta / time).
   - Gigantic editorial title: `FIND YOUR LIMIT.` with kinetic amber gradient clip.
   - Dynamic typography stretch on high-velocity scroll (`scaleX`).
   - Telemetry ribbon and quick-transition actuator: `[ ENTER DRIVE CAPSULE ↓ ]`.
5. **05 — Cockpit Mode: You Are In Command (`#cockpit-section`):**
   - Track mode header (`NURBURGRING NORDSCHLEIFE`, battery 92%, temp 84°C).
   - Interactive 2D G-Force & Yaw accelerometer ball tracking mouse physics.
   - Center digital speedometer, 16,000 RPM gauge, tactile gear selector (`P`, `R`, `N`, `D`, `S+`).
   - Regen & flux load meters (410 HP front, 790 HP rear, 220 kW regen).
   - Bottom status toggles (Torque vectoring, suspension, diff).
6. **06 — 0 to 100 KM/H in 3.2 Sec: Acceleration Lab (`#acceleration-lab`):**
   - Giant digital counter (`00` -> `100` KM/H).
   - Interactive launch pedal ("INITIATE FULL POWER LAUNCH") with physical acceleration ramp, torque notification, and kinetic kickback snap.
   - Reset launch pad button.
   - Benchmark specifications: 1,200 HP, 3.2 SEC, 350+ KM/H, 900V.
7. **07 & 08 — The Material Lab: Exploded Disassembly (`#material-lab`):**
   - 4 engineering strata panels with technical telemetry:
     - 01: Pre-Preg Carbon Fiber Skin (148 kg, 54,000 Nm/deg)
     - 02: Structural 900V Silicon-Anode Battery Cell (112 kWh, 6.5C peak)
     - 03: Dual Axial-Flux Carbon-Sleeved Motors (15 kW/kg, 1,240 Nm)
     - 04: Micro-Channel Active Thermal Heat Exchangers (85 kW heat rejection)
8. **09 — The Apex Code: Stacking Cards (`#apex-code-section`):**
   - Sticky/ScrollTrigger progressive stacking cards:
     - Card 01: CONTROL OVER VELOCITY (< 2.4 ms response)
     - Card 02: SURGICAL PRECISION (0.4 mm gap tolerance)
     - Card 03: TACTILE INTELLIGENCE (100% physical switches)
9. **10 — Look Closer: X-Ray Photon Scanner (`#scanner-section`):**
   - High-contrast vehicle geometry viewport.
   - Radial collimated beam spotlight following cursor.
   - Pinpointed HUD inspection readouts (Nose Splitter 420 kg flux, Canopy 0.21 Cd, Brake Assembly 410mm ceramic, Active Rear Wing ±15°).
   - Clean mobile fallback.
10. **11 & 12 — Timeline & Fleet Specification (`#models-section`):**
    - 4-year development track: 2024 (CFD) -> 2025 (Thermal) -> 2026 (Ring) -> 2027 (Production).
    - 3 Vehicle Archetypes:
      - APEX V1 (Road GT, 850 HP, 680 KM)
      - APEX GT (Benchmark Spec / Circuit, 1,050 HP, 2.8 SEC, 850 KG downforce)
      - APEX X (Experimental Prototype, 1,400 HP, 2.85 G, 30 Allocations)
11. **13 & 14 — One Continuous Road & Acoustic Kinetics (`#drive-journey`):**
    - Shifting biome canvas (St. Gotthard Alpine Sector, 2,106 M elevation).
    - Acoustic kinetic frequency visualizer (sound without sound waveform bars).
    - 4 sectors: Tunnel Flux, Alpine Switchbacks, Pacific Coastal Cliff, Salt Flat Terminal Run.
12. **15 — Final Calm & Reserve Chassis (`#reserve-section`):**
    - "YOU'VE SEEN THE MACHINE. NOW DRIVE IT."
    - 99 numbered chassis notice.
    - Magnetic dual CTAs (`[ RESERVE APEX CHASSIS ]`, `[ SCHEDULE TRACK SIMULATION ]`).
    - System telemetry footer.

---

## 7. Asset Mapping

All assets are preserved 1:1 from the Stitch design:
- **Logo:** `https://lh3.googleusercontent.com/aida/AEtjO1VKjA4zWoe6oxC6V2H_vbdp4EpBAWLimXoMuQk3LPqlbUJGC_LKQaNLHBdIA6_kHZuzel_d6MK4UmLZ4AJOihGAEbiKAn1nTyE2Y4fH1BSBQJLUVDOezF55fIj0y8gp0DBJ-ZiqrmQUWM4kcOgZ2iL3dFEWTpvmCPUYbIU1JF4WJhPDCNOtf9liwLebWwvmqwdDjWqOguQg-eDgUKJK1WxS2nd-pJ_xreU93dzm2Z-s0Cg4QmCWnxl6hkY`
- **Assembled Hypercar Imagery:** `https://lh3.googleusercontent.com/aida/AEtjO1VdxZNrMUBxXWcu--Tu-u6y56ahLA6lbwoDgmyyxWy3AjR2uDhjP0KG6UDf8ZWSt3w-A_KRXWfZzGTLilomz_i_osrqJRnsAY_zeKgOa-khP3qRbWoQidjlLddhMN55IytxiT5kQoJH0gjqp6BflsZ9mFNauhoD9UXtonuiTXFSk-epcZd2gv8oBV7oCy0ODiVNxhIZfIy8mFc4gixVtg889zem2yEcMcJdZVJTvOj2SIavEzTHskgwLX4`
- **Shader Pipeline:** Dedicated WebGL procedural aerodynamic streamlines shader with simplex noise flow vectors and boundary-layer turbulence.

---

## 8. Interaction & Animation Engine

1. **Custom Energy Cursor:**
   - `#cursor-dot` (amber core) + `#cursor-ring` (trailing physics).
   - Disabled automatically on touch devices / `@media (hover: none)`.
2. **Scroll Speed Telemetry:**
   - Computes virtual speed based on scroll velocity; drives HUD speed, hero speed, and cockpit speed counters.
3. **Stacking Cards Mechanism:**
   - GSAP ScrollTrigger pinning with subtle scale (`1 - (total - i) * 0.04`) and opacity transitions.
4. **Spotlight X-Ray Scanner:**
   - Radial gradient mask following mouse coordinates within `#scanner-viewport`.
5. **Magnetic Actuators:**
   - Subtle attraction physics on primary CTA buttons.
6. **Smooth Scrolling:**
   - `@studio-freight/lenis` synchronized with GSAP ScrollTrigger.
7. **Accessibility & Reduced Motion:**
   - `prefers-reduced-motion: reduce` turns off intensive parallax, disables canvas turbulence, and presents instantaneous transitions.

---

## 9. Technical Architecture

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Vanilla CSS tokens in `index.css`
- **Animation:** GSAP 3 + ScrollTrigger + Lenis
- **WebGL:** Modular, self-cleaning WebGL canvas component
- **Component Hierarchy:**
  ```
  src/
  ├── components/
  │   ├── CursorSystem.jsx
  │   ├── HeaderHUD.jsx
  │   ├── AerodynamicStreamlinesShader.jsx
  │   ├── TelemetryChip.jsx
  │   ├── MagneticButton.jsx
  │   ├── GForceMeter.jsx
  │   └── AcousticWaveform.jsx
  ├── sections/
  │   ├── IgnitionSection.jsx
  │   ├── AssemblySection.jsx
  │   ├── VelocityHeroSection.jsx
  │   ├── CockpitSection.jsx
  │   ├── AccelerationLabSection.jsx
  │   ├── MaterialLabSection.jsx
  │   ├── ApexCodeSection.jsx
  │   ├── ScannerSection.jsx
  │   ├── ModelsSection.jsx
  │   ├── DriveJourneySection.jsx
  │   └── ReserveSection.jsx
  ├── hooks/
  │   ├── useScrollVelocity.js
  │   ├── useMagnetic.js
  │   └── useMediaQuery.js
  ├── styles/
  │   └── index.css
  ├── App.jsx
  └── main.jsx
  ```

---

## 10. Performance & Optimization Strategy

- Clean WebGL resource allocation (`deleteBuffer`, `deleteProgram`, `cancelAnimationFrame` on unmount).
- Hardware-accelerated CSS properties (`transform`, `opacity`) without layout thrashing.
- Passive scroll event listeners and throttled requestAnimationFrame loops.
- Strict containment on all containers to ensure zero horizontal overflow (`360px` to `1920px+`).
