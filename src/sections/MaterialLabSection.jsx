import React from 'react';

export function MaterialLabSection() {
  const strata = [
    {
      num: "01",
      tag: "OUTER STRATUM",
      title: "Pre-Preg Carbon Fiber Aerodynamic Skin",
      desc: "Molded in high-pressure nitrogen autoclaves at 180°C. 42% lighter than aluminum with 3x torsional stiffness.",
      m1Label: "MASS",
      m1Val: "148 KG",
      m2Label: "RIGIDITY",
      m2Val: "54,000 NM/DEG",
      badge: "LAYER EXPOSED"
    },
    {
      num: "02",
      tag: "ENERGY SPINE",
      title: "Structural 900V Silicon-Anode Battery Cell",
      desc: "Cell-to-chassis structural pack with immersed dielectric fluid cooling capable of continuous 400 kW discharge.",
      m1Label: "CAPACITY",
      m1Val: "112 KWH",
      m2Label: "DISCHARGE C-RATE",
      m2Val: "6.5C PEAK",
      badge: "CHASSIS CORE"
    },
    {
      num: "03",
      tag: "KINETIC PROPULSION",
      title: "Dual Axial-Flux Carbon-Sleeved Motors",
      desc: "Extreme power-density rotors operating up to 20,000 RPM with instant sub-millisecond torque vectoring.",
      m1Label: "DENSITY",
      m1Val: "15 KW/KG",
      m2Label: "MAX TORQUE",
      m2Val: "1,240 NM",
      badge: "SUB-FRAME"
    },
    {
      num: "04",
      tag: "THERMODYNAMICS",
      title: "Micro-Channel Active Thermal Heat Exchangers",
      desc: "Laser-sintered titanium heat pipes venting heat directly through the rear venturi diffuser wake.",
      m1Label: "HEAT REJECTION",
      m1Val: "85 KW",
      m2Label: "COOLANT FLUX",
      m2Val: "OPTIMAL",
      badge: "THERMAL GRID"
    }
  ];

  return (
    <section
      className="relative py-28 px-6 md:px-16 bg-graphite-deep border-t border-white/5"
      id="material-lab"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              08 // EXPLODED ENGINEERING DISASSEMBLY
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-titanium mt-2">
              THE MATERIAL LAB.
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-aero max-w-md mt-4 md:mt-0 leading-relaxed">
            Hover over or scroll past the engineering strata to physically separate the hypercar into its constituent mechanical layers.
          </p>
        </div>

        {/* Exploded Strata Layers Stack */}
        <div className="space-y-6">
          {strata.map((s, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-8 rounded-2xl bg-graphite-card border border-white/10 hover:border-amber-apex/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className="font-mono text-3xl font-black text-amber-apex/40 group-hover:text-amber-apex transition-colors">
                    {s.num}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] text-slate-aero uppercase tracking-wider block mb-0.5">
                      {s.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-titanium">{s.title}</h3>
                    <p className="text-xs font-mono text-titanium-dim mt-1 max-w-xl leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs border-t lg:border-t-0 pt-4 lg:pt-0 border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-aero block">{s.m1Label}</span>
                    <span className="font-bold text-titanium">{s.m1Val}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-aero block">{s.m2Label}</span>
                    <span className="font-bold text-amber-apex">{s.m2Val}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-titanium-dim text-[11px]">
                    {s.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
