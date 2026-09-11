import React, { useState } from 'react';
import { GForceMeter } from '../components/GForceMeter';

export function CockpitSection({ onGForceChange, speedKmH }) {
  const [selectedGear, setSelectedGear] = useState('S+');
  const gears = ['P', 'R', 'N', 'D', 'S+'];
  const displaySpeed = speedKmH > 0 ? speedKmH : 142;

  return (
    <section
      className="relative min-h-screen bg-[#07090c] py-24 px-6 md:px-16 flex flex-col justify-center border-t border-white/5"
      id="cockpit-section"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-amber-apex tracking-[0.3em] uppercase">
            05 // TELEMETRY COCKPIT
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-titanium mt-2">
            YOU ARE IN COMMAND.
          </h2>
          <p className="font-mono text-xs text-slate-aero mt-2">
            Move your cursor to dynamically alter vehicle yaw and HUD parallax.
          </p>
        </div>

        {/* Cockpit Cluster Dashboard Display Box */}
        <div
          className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-graphite-card border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden"
          id="cockpit-hud-frame"
        >
          {/* Glass reflection lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-apex/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

          {/* Top HUD Header Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-aero border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-apex animate-ping" />
              <span className="text-titanium font-semibold text-[11px] sm:text-xs">
                TRACK MODE: NURBURGRING NORDSCHLEIFE
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
              <span>BATTERY PACK: <strong className="text-emerald-400">92% (620 KM)</strong></span>
              <span>INVERTER TEMP: <strong className="text-amber-apex">84°C</strong></span>
            </div>
          </div>

          {/* Center Instrument Cluster */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-6">
            {/* Left Dial: G-Force & Yaw */}
            <GForceMeter onGForceChange={onGForceChange} />

            {/* Central Speedometer & Digital Gear Selector */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="font-mono text-[10px] text-amber-apex tracking-[0.4em] uppercase mb-1">
                DRIVE TELEMETRY
              </div>
              <div
                className="font-mono text-7xl md:text-8xl font-black text-titanium tracking-tighter leading-none tabular-nums"
                id="cockpit-digital-speed"
              >
                {displaySpeed}
              </div>
              <div className="font-mono text-sm text-slate-aero tracking-widest mt-1">KM / H</div>

              {/* RPM Arc Meter */}
              <div className="w-full max-w-xs mt-6">
                <div className="flex justify-between font-mono text-[10px] text-slate-aero mb-1">
                  <span>0 RPM</span>
                  <span className="text-amber-apex font-bold">12,400 RPM</span>
                  <span>16,000</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[78%] h-full bg-gradient-to-r from-amber-dim via-amber-apex to-red-500 rounded-full" />
                </div>
              </div>

              {/* Gear selector pills */}
              <div className="flex items-center gap-2 sm:gap-3 mt-6 font-mono text-xs">
                {gears.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGear(g)}
                    className={`w-8 h-8 rounded border font-bold transition-all ${
                      selectedGear === g
                        ? 'border-amber-apex bg-amber-apex text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'border-white/10 text-slate-aero hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dial: Thermal & Regenerative Braking */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="font-mono text-[10px] text-slate-aero tracking-widest uppercase mb-4">
                REGEN &amp; FLUX LOAD
              </span>
              <div className="w-full space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-titanium mb-1">
                    <span>FRONT AXLE MOTOR</span>
                    <span className="text-amber-apex">410 HP</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[82%] h-full bg-amber-apex" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-titanium mb-1">
                    <span>REAR TWIN MOTORS</span>
                    <span className="text-amber-apex">790 HP</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-amber-apex" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-titanium mb-1">
                    <span>REGEN BRAKING LOAD</span>
                    <span className="text-emerald-400">220 kW</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tactile switches */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-aero">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-titanium">TORQUE VECTORING:</span>
              <span className="text-emerald-400 font-bold">QUAD-INDEPENDENT</span>
            </div>
            <div className="flex items-center gap-4">
              <span>SUSPENSION: <span className="text-titanium">ACTIVE MAGNETORHEOLOGICAL</span></span>
              <span>DIFF: <span className="text-amber-apex">E-LOCKED</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
