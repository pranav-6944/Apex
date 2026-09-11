import React, { useState } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

export function ReserveSection() {
  const magneticBtnRef = useMagnetic(0.28);
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', archetype: 'APEX GT' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', archetype: 'APEX GT' });
    }, 2000);
  };

  return (
    <section
      className="relative min-h-screen py-32 px-6 md:px-16 bg-graphite-deep border-t border-white/5 flex flex-col items-center justify-center text-center select-none"
      id="reserve-section"
    >
      <div className="max-w-3xl mx-auto w-full">
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-slate-aero mb-6">
          YOU'VE SEEN THE MACHINE.
        </p>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-titanium mb-8 tracking-tight">
          NOW DRIVE IT.
        </h2>
        <p className="text-titanium-dim font-mono text-xs sm:text-sm max-w-xl mx-auto mb-12 leading-relaxed">
          Production is strictly limited to 99 numbered chassis globally. Every APEX machine is hand-assembled in our carbon facility with bespoke ergonomic cockpit fitting.
        </p>

        {/* Magnetic Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            ref={magneticBtnRef}
            id="reserve-cta"
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-amber-apex text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-amber-glow shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all"
          >
            [ RESERVE APEX CHASSIS ]
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-white/20 text-titanium font-mono text-xs uppercase tracking-widest font-semibold hover:border-white hover:bg-white/5 transition-all"
          >
            [ SCHEDULE TRACK SIMULATION ]
          </button>
        </div>

        {/* Footer info ribbon */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap items-center justify-between text-slate-aero font-mono text-xs gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-apex animate-pulse" />
            <span>APEX AUTOMOTIVE KINETICS © 2025</span>
          </div>
          <div>
            ALL SPECIFICATIONS SUBJECT TO TRACK HOMOLOGATION
          </div>
        </div>
      </div>

      {/* Interactive Reservation Telemetry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-graphite-card border border-amber-apex/50 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-left font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] text-amber-apex tracking-widest block">CHASSIS ALLOCATION REGISTRATION</span>
                <h3 className="text-xl font-display font-bold text-titanium">APEX RESERVATION PROTOCOL</h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-aero hover:text-white"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center text-emerald-400">
                <span className="text-3xl block mb-2">✓</span>
                <p className="font-bold text-sm">ALLOCATION REQUEST RECORDED</p>
                <p className="text-xs text-titanium-dim mt-2">Chassis engineer will establish direct telemetric contact.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-aero mb-1">PILOT IDENTIFICATION (NAME)</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.G., ALEXANDER VANCE"
                    className="w-full px-4 py-2.5 rounded-xl bg-graphite-deep border border-white/10 text-titanium focus:border-amber-apex focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-aero mb-1">COMMUNICATION LINK (EMAIL)</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="PILOT@APEX-KINETICS.COM"
                    className="w-full px-4 py-2.5 rounded-xl bg-graphite-deep border border-white/10 text-titanium focus:border-amber-apex focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-aero mb-1">TARGET CHASSIS ARCHETYPE</label>
                  <select
                    value={formData.archetype}
                    onChange={(e) => setFormData({ ...formData, archetype: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-graphite-deep border border-white/10 text-titanium focus:border-amber-apex focus:outline-none"
                  >
                    <option value="APEX V1">APEX V1 — ROAD GT (850 HP)</option>
                    <option value="APEX GT">APEX GT — BENCHMARK CIRCUIT (1,050 HP)</option>
                    <option value="APEX X">APEX X — EXPERIMENTAL SUCTION (1,400 HP)</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-apex text-black font-bold uppercase tracking-widest hover:bg-amber-glow transition-all"
                  >
                    TRANSMIT RESERVATION TELEMETRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
