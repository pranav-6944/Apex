import React from 'react';

export function ModelsSection() {
  const timeline = [
    {
      year: "2024",
      title: "PROJECT ZERO: WIND TUNNEL",
      desc: "Scale CFD virtual modeling defining the 0.21 Cd teardrop capsule.",
      active: false
    },
    {
      year: "2025",
      title: "MULE 01: THERMAL TESTING",
      desc: "Arctic cold-soak and desert battery discharge validation.",
      active: false
    },
    {
      year: "2026",
      title: "RING LAP RECORD ATTEMPT",
      desc: "Sub-6:30 target lap time at Nürburgring Nordschleife.",
      active: false
    },
    {
      year: "2027",
      title: "APEX ROAD PRODUCTION",
      desc: "Bespoke delivery of 99 chassis numbers worldwide.",
      active: true
    }
  ];

  const models = [
    {
      archetype: "ARCHETYPE 01",
      category: "ROAD GT",
      name: "APEX V1",
      desc: "Long-distance grand touring envelope with adaptive active suspension and acoustic isolation.",
      featured: false,
      specs: [
        { label: "OUTPUT:", value: "850 HP" },
        { label: "RANGE:", value: "680 KM" },
        { label: "WEIGHT:", value: "1,620 KG" }
      ],
      btnText: "CONFIGURE V1"
    },
    {
      archetype: "ARCHETYPE 02",
      category: "CIRCUIT COMPETITION",
      name: "APEX GT",
      desc: "Aggressive downforce tuning with active carbon aero channels and dual axial-flux motors.",
      featured: true,
      badge: "BENCHMARK SPEC",
      specs: [
        { label: "OUTPUT:", value: "1,050 HP", highlight: true },
        { label: "0-100 KM/H:", value: "2.8 SEC", highlight: true },
        { label: "DOWNFORCE:", value: "850 KG" }
      ],
      btnText: "CONFIGURE GT"
    },
    {
      archetype: "ARCHETYPE 03",
      category: "EXPERIMENTAL PROTOTYPE",
      name: "APEX X",
      desc: "Track-only homologation with ground-effect suction fan and 900V unconstrained architecture.",
      featured: false,
      specs: [
        { label: "OUTPUT:", value: "1,400 HP" },
        { label: "MAX G:", value: "2.85 LATERAL G" },
        { label: "CHASSIS:", value: "30 ALLOCATIONS" }
      ],
      btnText: "INQUIRE APEX X"
    }
  ];

  return (
    <section
      className="relative py-28 px-6 md:px-16 bg-graphite border-t border-white/5"
      id="models-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Evolution Timeline Horizontal Track */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              11 // THE MACHINE EVOLVES
            </span>
            <span className="font-mono text-xs text-slate-aero">CHRONOLOGY // 2024 — 2027</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  item.active
                    ? 'bg-amber-apex/10 border-amber-apex/40 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                    : 'bg-white/[0.02] border-white/10'
                }`}
              >
                <span className="text-amber-apex font-bold text-lg block mb-1">{item.year}</span>
                <span className="text-titanium font-semibold block mb-2">{item.title}</span>
                <p className="text-slate-aero text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12 — Choose Your Machine: 3 Distinct Archetypes */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-amber-apex tracking-[0.3em] uppercase">
            12 // FLEET SPECIFICATION
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-titanium mt-2">
            CHOOSE YOUR MACHINE.
          </h2>
          <p className="font-mono text-xs text-slate-aero mt-2">
            Three variants engineered for distinct velocity objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((m, idx) => (
            <div
              key={idx}
              className={`model-card group relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                m.featured
                  ? 'bg-[#12151c] border-2 border-amber-apex shadow-[0_0_40px_rgba(245,158,11,0.15)]'
                  : 'bg-graphite-card border border-white/10 hover:border-amber-apex'
              }`}
            >
              {m.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-apex text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                  {m.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-slate-aero mb-6 mt-1">
                  <span>{m.archetype}</span>
                  <span className="text-amber-apex font-bold">{m.category}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-titanium mb-2">{m.name}</h3>
                <p className="text-xs font-mono text-titanium-dim leading-relaxed mb-6">
                  {m.desc}
                </p>

                <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-6">
                  {m.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex justify-between">
                      <span className="text-slate-aero">{sp.label}</span>
                      <span className={`font-bold ${sp.highlight ? 'text-amber-apex' : 'text-titanium'}`}>
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  className={`block w-full py-3.5 rounded-xl text-center font-mono text-xs uppercase tracking-wider transition-all ${
                    m.featured
                      ? 'bg-amber-apex text-black font-bold hover:bg-amber-glow shadow-lg'
                      : 'border border-white/20 text-titanium hover:bg-white hover:text-black'
                  }`}
                  href="#reserve-section"
                >
                  {m.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
