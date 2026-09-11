import React, { useState } from 'react';

export function IgnitionSection({ onIgnite, isIgnited }) {
  const [isActivating, setIsActivating] = useState(false);

  const handleIgniteClick = () => {
    if (isIgnited || isActivating) return;
    setIsActivating(true);

    setTimeout(() => {
      onIgnite();
      setIsActivating(false);
      // Smoothly scroll into the drive experience
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }, 600);
  };

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center bg-graphite-deep select-none z-40 overflow-hidden"
      id="ignition-section"
    >
      {/* Subtle background spatial grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />

      {/* Engine laser start effect container */}
      <div
        id="ignition-laser"
        className={`absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-apex to-transparent pointer-events-none z-30 ${
          isActivating ? 'animate-laser' : 'opacity-0 scale-x-0'
        }`}
      />

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-slate-aero mb-2">
          APEX KINETIC SYSTEM
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-titanium mb-4">
          APEX
        </h1>
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-slate-aero/80 uppercase bg-white/5 border border-white/5 px-3.5 py-1 rounded-full mb-16">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              isIgnited ? 'bg-emerald-500 animate-pulse' : 'bg-amber-apex/50'
            }`}
          />
          <span>{isIgnited ? 'SYSTEM ONLINE // DRIVE READY' : 'SYSTEM OFFLINE'}</span>
        </div>

        {/* Tactical Ignition Reactive Node */}
        <div
          id="ignition-trigger-wrap"
          className="relative cursor-pointer group flex flex-col items-center"
          onClick={handleIgniteClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleIgniteClick();
          }}
          aria-label="Ignite APEX Machine"
        >
          {/* Interactive energy ripples */}
          <div
            id="ignition-ripple"
            className="absolute -inset-8 rounded-full border border-amber-apex/10 scale-90 group-hover:scale-125 group-hover:border-amber-apex/40 transition-all duration-700 pointer-events-none"
          />
          <div className="absolute -inset-4 rounded-full border border-amber-apex/20 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

          {/* The core button */}
          <button
            id="ignition-btn"
            type="button"
            className="relative w-20 h-20 rounded-full bg-graphite-card border border-amber-apex/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:border-amber-apex group-hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] transition-all duration-300"
          >
            <div
              id="ignition-core"
              className={`w-4 h-4 rounded-full bg-amber-apex shadow-[0_0_15px_#f59e0b] transition-transform duration-300 ${
                isActivating ? 'scale-150 bg-amber-glow' : 'group-hover:scale-125'
              }`}
            />
          </button>

          <span className="mt-6 font-mono text-xs tracking-[0.3em] uppercase text-titanium-dim group-hover:text-amber-apex transition-colors">
            {isIgnited ? 'MACHINE ENGAGED' : 'TOUCH TO IGNITE'}
          </span>
          <span className="mt-1 font-mono text-[10px] text-slate-aero tracking-widest">
            [ {isIgnited ? 'VELOCITY UNLOCKED' : 'ENGAGE MACHINE'} ]
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 text-center font-mono text-[10px] text-slate-aero/60 tracking-widest">
        COORDINATES // 45.4215° N, 75.6972° W • CHASSIS 001
      </div>
    </section>
  );
}
