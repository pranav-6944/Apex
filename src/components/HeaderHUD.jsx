import React from 'react';

const APEX_LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VKjA4zWoe6oxC6V2H_vbdp4EpBAWLimXoMuQk3LPqlbUJGC_LKQaNLHBdIA6_kHZuzel_d6MK4UmLZ4AJOihGAEbiKAn1nTyE2Y4fH1BSBQJLUVDOezF55fIj0y8gp0DBJ-ZiqrmQUWM4kcOgZ2iL3dFEWTpvmCPUYbIU1JF4WJhPDCNOtf9liwLebWwvmqwdDjWqOguQg-eDgUKJK1WxS2nd-pJ_xreU93dzm2Z-s0Cg4QmCWnxl6hkY";

export function HeaderHUD({ isIgnited, speedKmH, lateralG = "1.02" }) {
  const displaySpeed = Math.max(0, speedKmH || 0).toString().padStart(3, '0');

  return (
    <header
      id="apex-nav"
      className={`fixed top-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between z-50 transition-all duration-700 backdrop-blur-md bg-graphite/60 border-b border-white/5 ${
        isIgnited ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <a href="#ignition-section" className="flex items-center">
          <img
            alt="APEX"
            className="h-5 sm:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
            src={APEX_LOGO_URL}
          />
        </a>
        <div className="hidden md:flex items-center gap-3 pl-6 border-l border-white/10 font-mono text-[11px] text-slate-aero">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-widest uppercase">TELEMETRY_LINK // ACTIVE</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400 font-mono" id="nav-mode-readout">
            DRIVE_READY // SPORT+
          </span>
        </div>
      </div>

      {/* Dynamic Velocity Meter in Nav */}
      <div className="flex items-center gap-4 sm:gap-8 font-mono text-xs">
        <div className="hidden lg:flex items-center gap-6 text-[11px] text-titanium-dim">
          <span>AERO: <strong className="text-titanium">0.21 Cd</strong></span>
          <span>TORQUE: <strong className="text-titanium">1,240 Nm</strong></span>
          <span>LATERAL G: <span className="text-amber-apex font-bold" id="hud-g-force">{lateralG} G</span></span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-aero">VELOCITY</span>
          <span className="text-xs sm:text-sm font-bold text-amber-apex tabular-nums" id="nav-speed-val">
            {displaySpeed}
          </span>
          <span className="text-[9px] sm:text-[10px] text-slate-aero">KM/H</span>
        </div>

        <a
          className="relative group overflow-hidden px-3.5 py-1.5 sm:px-5 sm:py-1.5 rounded text-[11px] sm:text-xs font-mono tracking-wider uppercase border border-amber-apex/50 bg-amber-apex/10 text-amber-apex hover:bg-amber-apex hover:text-black transition-all duration-300"
          href="#reserve-section"
        >
          <span className="relative z-10 font-semibold">RESERVE CHASSIS</span>
        </a>
      </div>
    </header>
  );
}
