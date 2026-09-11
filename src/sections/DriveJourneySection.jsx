import React from 'react';
import { AcousticWaveform } from '../components/AcousticWaveform';

export function DriveJourneySection() {
  const sectors = [
    { num: "SECTOR 01", title: "TUNNEL FLUX (180 KM/H)", active: true },
    { num: "SECTOR 02", title: "ALPINE SWITCHBACKS", active: false },
    { num: "SECTOR 03", title: "PACIFIC COASTAL CLIFF", active: false },
    { num: "SECTOR 04", title: "SALT FLAT TERMINAL RUN", active: false }
  ];

  return (
    <section
      className="relative py-28 px-6 md:px-16 bg-graphite-deep border-t border-white/5 overflow-hidden"
      id="drive-journey"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              13 // SEAMLESS EXPEDITION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-titanium mt-2">
              ONE CONTINUOUS ROAD.
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-aero max-w-sm mt-4 md:mt-0 leading-relaxed">
            Tunnel → Mountain Pass → Megacity → Coastal Cliff. The environment shifts seamlessly with velocity.
          </p>
        </div>

        {/* Continuous Environment Canvas Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black p-6 sm:p-8 md:p-12 min-h-[440px] sm:min-h-[480px] flex flex-col justify-between shadow-2xl">
          {/* Environment Background Visual with Shifting Light */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527] via-[#111c19] to-[#1f160b] opacity-70" />
          <div className="absolute inset-0 bg-telemetry-grid opacity-25" />

          {/* Top telemetry badges */}
          <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 font-mono text-xs">
            <div className="bg-black/75 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
              <span className="text-slate-aero block text-[10px]">ACTIVE BIOME</span>
              <span className="text-amber-apex font-bold text-xs sm:text-sm">
                ST. GOTTHARD ALPINE SECTOR
              </span>
            </div>
            <div className="bg-black/75 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md text-right">
              <span className="text-slate-aero block text-[10px]">ELEVATION</span>
              <span className="text-titanium font-bold text-xs sm:text-sm">2,106 M</span>
            </div>
          </div>

          {/* Stylized acoustic kinetics frequency waveform */}
          <div className="relative z-10 my-12 sm:my-16 text-center">
            <AcousticWaveform />
            <p className="font-mono text-[11px] sm:text-xs tracking-widest text-titanium mt-5 uppercase">
              ACOUSTIC FREQUENCY // HIGH-VOLTAGE HARMONIC VIBRATION
            </p>
          </div>

          {/* Bottom checkpoints ribbon */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-[11px] sm:text-xs">
            {sectors.map((sec, idx) => (
              <div key={idx} className={sec.active ? 'text-amber-apex' : 'text-slate-aero'}>
                <span className="block text-[10px] text-slate-aero/70">{sec.num}</span>
                <span className="font-semibold">{sec.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
