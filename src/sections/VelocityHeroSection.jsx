import React from 'react';
import { AerodynamicStreamlinesShader } from '../components/AerodynamicStreamlinesShader';

export function VelocityHeroSection({ speedKmH, stretchScale }) {
  const currentSpeed = (speedKmH > 0 ? speedKmH : 42).toString().padStart(3, '0');

  return (
    <section
      className="relative min-h-[120vh] bg-graphite-deep py-20 px-6 md:px-16 overflow-hidden flex flex-col justify-center"
      id="velocity-hero"
    >
      {/* Background spatial grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />

      {/* WebGL Streamlines in Hero Section */}
      <AerodynamicStreamlinesShader className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-60 z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Velocity Readout Ribbon */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6 font-mono">
          <div>
            <div className="text-xs text-amber-apex tracking-widest uppercase">
              03 // KINETIC ACCELERATION
            </div>
            <div className="text-slate-aero text-[11px] sm:text-xs mt-1">
              SCROLL SPEED DRIVES ENVIRONMENTAL DISPLACEMENT &amp; STREAMLINE HARMONICS
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-slate-aero text-xs uppercase">CURRENT VELOCITY</span>
            <span
              className="text-5xl md:text-7xl font-bold font-mono text-amber-apex tracking-tighter tabular-nums"
              id="hero-big-speed"
            >
              {currentSpeed}
            </span>
            <span className="text-base sm:text-lg text-slate-aero">KM/H</span>
          </div>
        </div>

        {/* Big Hero Typography Statement */}
        <div className="my-10 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-aero mb-4">
            THE MACHINE DOES NOT HESITATE
          </p>
          <h2
            className="font-display text-5xl sm:text-7xl md:text-9xl font-black uppercase text-titanium tracking-tight leading-none origin-left transition-transform duration-100"
            id="stretching-title"
            style={{ transform: `scaleX(${stretchScale})` }}
          >
            FIND YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-apex via-amber-glow to-titanium">
              LIMIT.
            </span>
          </h2>
        </div>

        {/* Enter Cockpit Virtual Road Action */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber-apex/10 border border-amber-apex/30 flex items-center justify-center font-mono text-amber-apex font-bold text-lg">
              05
            </div>
            <div>
              <h4 className="font-bold text-titanium text-base sm:text-lg">Cockpit Telemetry Mode</h4>
              <p className="text-xs font-mono text-slate-aero">
                Step inside the driver capsule to modulate steering, gears, and thermal channels.
              </p>
            </div>
          </div>
          <a
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs tracking-widest uppercase bg-titanium text-graphite-deep font-bold hover:bg-amber-apex hover:text-black transition-all text-center shadow-lg hover:shadow-amber-apex/20"
            href="#cockpit-section"
          >
            [ ENTER DRIVE CAPSULE ↓ ]
          </a>
        </div>
      </div>
    </section>
  );
}
