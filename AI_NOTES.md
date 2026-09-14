# AI NOTES — APEX Interactive Automotive Experience

## Project Overview
- **Workspace:** `c:/Users/prana_b2roblq/Downloads/Main Projects/Apex Car`
- **Source of Truth:**
  - `stitch_apex_interactive_velocity_experience/DESIGN.md` (Design tokens, colors, typography, brutalist zero-radius guidelines)
  - `stitch_apex_interactive_velocity_experience/code.html` (Complete prototype layout, WebGL shader scripts, interaction logic)
  - `stitch_apex_interactive_velocity_experience/screen.png` (Visual ground-truth screenshot)

## Key References & Line Numbers in `code.html`
- **Tailwind configuration & theme colors:** `code.html:12-40`
  - `graphite`: `#0b0c0e`, `graphite-deep`: `#060708`, `graphite-card`: `#111317`
  - `titanium`: `#eceae5`, `titanium-dim`: `#9e9c96`
  - `amber-apex`: `#f59e0b`, `amber-glow`: `#fbbf24`, `amber-dim`: `#78350f`
  - `slate-aero`: `#475569`, `slate-tech`: `#1e293b`
- **CSS styles & animations:** `code.html:41-112`
  - Custom scrollbar, energy cursor styling, `@keyframes laserShoot`, `.bg-telemetry-grid`, `.scanner-mask`
- **Fixed HUD Header:** `code.html:121-147`
  - APEX Logo URL: `https://lh3.googleusercontent.com/aida/AEtjO1VKjA4zWoe6oxC6V2H_vbdp4EpBAWLimXoMuQk3LPqlbUJGC_LKQaNLHBdIA6_kHZuzel_d6MK4UmLZ4AJOihGAEbiKAn1nTyE2Y4fH1BSBQJLUVDOezF55fIj0y8gp0DBJ-ZiqrmQUWM4kcOgZ2iL3dFEWTpvmCPUYbIU1JF4WJhPDCNOtf9liwLebWwvmqwdDjWqOguQg-eDgUKJK1WxS2nd-pJ_xreU93dzm2Z-s0Cg4QmCWnxl6hkY`
  - Telemetry stats: Aero 0.21 Cd, Torque 1,240 Nm, Lateral G 1.02 G, Velocity counter
- **01 The Ignition Section:** `code.html:151-181`
  - Coordinates: `45.4215° N, 75.6972° W • CHASSIS 001`
  - Interactive tactile core button (`#ignition-btn`, `#ignition-laser`)
- **02 Aerodynamics First Section:** `code.html:187-466`
  - 4 assembly phases (`comp-step-1` to `comp-step-4`)
  - Vehicle image URL: `https://lh3.googleusercontent.com/aida/AEtjO1VdxZNrMUBxXWcu--Tu-u6y56ahLA6lbwoDgmyyxWy3AjR2uDhjP0KG6UDf8ZWSt3w-A_KRXWfZzGTLilomz_i_osrqJRnsAY_zeKgOa-khP3qRbWoQidjlLddhMN55IytxiT5kQoJH0gjqp6BflsZ9mFNauhoD9UXtonuiTXFSk-epcZd2gv8oBV7oCy0ODiVNxhIZfIy8mFc4gixVtg889zem2yEcMcJdZVJTvOj2SIavEzTHskgwLX4`
  - Procedural WebGL Streamline Shader: `code.html:241-421`
- **03 & 04 Velocity Hero Section:** `code.html:470-692`
  - "FIND YOUR LIMIT." large title stretching with velocity
  - Secondary WebGL shader overlay: `code.html:474-654`
- **05 Cockpit Mode Section:** `code.html:696-807`
  - G-force ball `#g-ball`, speedometer `#cockpit-digital-speed`, 16k RPM bar, tactile gear buttons, thermal & regen load bars
- **06 0 to 100 KM/H Acceleration Lab:** `code.html:811-871`
  - Launch speed digits `#launch-counter`, interactive buttons `#trigger-launch-btn`, `#reset-launch-btn`
  - Specs: 1,200 HP, 3.2 SEC, 350+ KM/H, 900V
- **07 & 08 The Material Lab Section:** `code.html:875-994`
  - 4 layers: Carbon Fiber Skin, 900V Silicon-Anode Battery, Dual Axial-Flux Motors, Active Heat Exchangers
- **09 Stacking Cards ("The Apex Code"):** `code.html:998-1057`
  - Cards 01 (Control Over Velocity), 02 (Surgical Precision), 03 (Tactile Intelligence)
- **10 Cursor Scanner ("Look Closer"):** `code.html:1061-1100`
  - Collimated beam radial spotlight mask `#scanner-overlay`
  - 4 telemetry tags: Nose Splitter, Cockpit Canopy, Brake Assembly, Active Rear Wing
- **11 & 12 Models & Specifications:** `code.html:1104-1237`
  - 4-year timeline: 2024 (CFD), 2025 (Thermal), 2026 (Ring), 2027 (Production)
  - 3 Archetypes: APEX V1 (850 HP), APEX GT (1,050 HP Benchmark), APEX X (1,400 HP Track)
- **13 & 14 Continuous Drive & Acoustic Kinetics:** `code.html:1241-1305`
  - St. Gotthard Alpine Sector biome (2,106 M), acoustic waveform animation, 4 sectors
- **15 Final CTA / Reserve Section:** `code.html:1309-1340`
  - "NOW DRIVE IT.", magnetic buttons `#reserve-cta`
- **Prototype Engine Logic:** `code.html:1344-1509`
  - Cursor tracking, ignition timeline, scroll velocity calculations, launch simulation, magnetic button attraction

## Technical Stack & Architecture
- React 18 + Vite
- Tailwind CSS with exact Stitch color palette & zero-radius styling
- GSAP + ScrollTrigger + Lenis smooth scrolling
- Standalone reusable WebGL Aerodynamic Streamlines Shader component (`src/components/AerodynamicStreamlinesShader.jsx`)
- Modular section architecture with clean lifecycle cleanup

## Verification & Browser QA Results
- **Build Status:** `npm run build` executed with exit code 0; clean production bundle (`dist/index.html`, `dist/assets/index-*.css`, `dist/assets/index-*.js`).
- **Dev Server:** Running on `http://localhost:5173/`.
- **GitHub Pages Deployment Config:**
  - Base Path: `command === 'build' ? '/Apex/' : '/'` configured in `vite.config.js`
  - GitHub Actions Workflow: `.github/workflows/deploy.yml` upgraded to Node 22, dual-deploying to both GitHub Pages and `gh-pages` branch.
  - Dedicated `gh-pages` branch: Published with built `dist/` bundle including `.nojekyll` and `404.html`.
  - Live Target URL: `https://pranav-6944.github.io/Apex/`
  - Open Graph / Twitter Cards: Updated in `index.html` with absolute production URL `https://pranav-6944.github.io/Apex/Apex-logo.png`
- **Vercel Deployment Architecture:**
  - Base Path Detection: Dynamic base in `vite.config.js` detects `process.env.VERCEL` to use root `/`, while detecting `GITHUB_ACTIONS`/`DEPLOY_TARGET=gh-pages` to use `/Apex/`.
  - Configuration File: `vercel.json` added with framework `vite`, build command `npm run build`, output directory `dist`, and client-side wildcard rewrites (`/(.*) -> /index.html`).
  - Predeploy script: `npm run predeploy` sets `DEPLOY_TARGET=gh-pages` for local gh-pages deployments.
- **White Screen Root Cause & Remediation:**
  - Root cause: GitHub Pages was set to "Deploy from a branch" (branch `main`, root `/`), which executed Jekyll on the raw source repo rather than Vite's compiled `dist/`. Raw `index.html` requested `/src/main.jsx` (which returned 404), causing React to fail to boot and presenting a blank white screen.
  - Fixes applied:
    1. Created `.nojekyll` in `public/` and `dist/` to bypass Jekyll processing completely.
    2. Added automatic generation of `404.html` from `index.html` for client-side routing fallback.
    3. Created and published the compiled production bundle to the `gh-pages` branch.
    4. Updated GitHub Actions workflow with Node 22 to eliminate runner deprecation warning and dual-deploy to `gh-pages`.
    5. Optimized `GForceMeter.jsx` with `requestAnimationFrame` and change-detection to prevent mouse-movement re-render spikes.
- **Image Assets Audit & Resolution:**
  - Root cause: The temporary Google AIDA / Stitch usercontent URLs (`https://lh3.googleusercontent.com/aida/...`) for the logo and hypercar expired, returning HTTP 403 Forbidden.
  - Fixes applied:
    1. Cropped the official brand logo from transparent canvas padding into `src/assets/Apex-logo.png` and `public/Apex-logo.png`.
    2. Replaced expired external logo URL in `HeaderHUD.jsx` with direct local asset import `import apexLogo from '../assets/Apex-logo.png'`.
    3. Generated high-resolution 16:9 aerodynamic APEX hypercar studio photograph in wind tunnel lighting matching `DESIGN.md` specifications (`src/assets/apex-hypercar.jpg` and `public/apex-hypercar.jpg`).
    4. Replaced expired car image URLs in `AssemblySection.jsx` and `ScannerSection.jsx` with direct asset imports (`import apexCarImg from '../assets/apex-hypercar.jpg'`).
    5. Both assets are now bundled with hash fingerprints into `dist/assets/` (`Apex-logo-*.png` and `apex-hypercar-*.jpg`), eliminating all external network dependencies and 403 errors.
- **Browser Automation Subagent:**
  - Tested initial cold boot ignition screen (`SYSTEM OFFLINE`).
  - Tested tactile core click and laser beam ignition sequence.
  - Verified fixed Top HUD appearance with live telemetry, velocity counter, and mode indicator.
  - Verified Aerodynamics First section with active WebGL airflow streamlines.
  - Tested 0 to 100 KM/H acceleration lab (clicked `⚡ INITIATE FULL POWER LAUNCH`, verified count up from 00 to 100, verified `LAUNCH COMPLETE // 3.2 SECONDS VERIFIED`).
  - Verified Material Lab strata panels (Carbon fiber skin, 900V battery, dual axial-flux motors, active thermal heat exchangers).
  - Verified The Apex Code physical stacking cards.
  - Verified Look Closer X-ray photon scanner with 4 chassis telemetry tags.
  - Verified 2024-2027 development chronology and 3 vehicle archetypes (APEX V1, APEX GT Benchmark, APEX X Experimental).
  - Verified One Continuous Road biome telemetry and acoustic harmonic waveform.
  - Verified Reserve Chassis section with magnetic CTAs and reservation protocol modal.
  - **Console Audit:** 0 runtime errors, 0 warnings.
  - **Session Recording:** `apex_experience_test_1789066192053.webp`

