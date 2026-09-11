import React from 'react';

export function ApexCodeSection() {
  const cards = [
    {
      num: "01",
      tag: "[ DOCTRINE // VELOCITY ]",
      title: "CONTROL OVER VELOCITY.",
      desc: "Speed without authority is merely panic. APEX does not accelerate into chaos; it bends physics through active aerodynamics and millisecond motor vectoring so the driver experiences complete stillness in the center of violence.",
      specs: [
        "RESPONSE: < 2.4 MS",
        "•",
        "YAW PREDICTION: ACTIVE"
      ],
      bg: "bg-graphite-card",
      topOffset: "top-28 sm:top-36"
    },
    {
      num: "02",
      tag: "[ DOCTRINE // TOLERANCE ]",
      title: "SURGICAL PRECISION.",
      desc: "Every panel gap is calibrated down to 0.4mm. Carbon weave alignment flows unbroken from the front splitter across the roofline down through the active diffuser. There are no decorative lines—only functional air channels.",
      specs: [
        "GAP TOLERANCE: 0.4 MM",
        "•",
        "AERO WEAVE: 3K TWILL"
      ],
      bg: "bg-[#13161c]",
      topOffset: "top-36 sm:top-44"
    },
    {
      num: "03",
      tag: "[ DOCTRINE // SYNAPSE ]",
      title: "TACTILE INTELLIGENCE.",
      desc: "We reject touchscreens that force drivers to look away from the apex. Every primary command is an engineered cold-milled aluminum switch with calibrated haptic resistance. The interface communicates through tactile confirmation.",
      specs: [
        "PHYSICAL SWITCHES: 100%",
        "•",
        "LATENCY: ZERO"
      ],
      bg: "bg-[#161a22]",
      topOffset: "top-44 sm:top-52"
    }
  ];

  return (
    <section
      className="relative py-28 px-6 md:px-16 bg-graphite border-t border-white/5"
      id="apex-code-section"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-mono text-xs text-amber-apex tracking-[0.3em] uppercase">
            09 // PHILOSOPHICAL FOUNDATION
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-titanium mt-2">
            THE APEX CODE.
          </h2>
          <p className="font-mono text-xs text-slate-aero mt-2">
            Physical card stacking: As you scroll, each doctrine anchors the machine.
          </p>
        </div>

        {/* Sticky Physical Stacking Cards Sequence */}
        <div className="space-y-8 sm:space-y-12 pb-24 relative">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`sticky ${c.topOffset} p-8 sm:p-10 md:p-14 rounded-3xl ${c.bg} border border-white/15 shadow-[0_25px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8 font-mono">
                <span className="text-4xl sm:text-5xl font-black text-amber-apex">{c.num}</span>
                <span className="text-[11px] sm:text-xs text-slate-aero uppercase tracking-widest">
                  {c.tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-titanium mb-4">
                {c.title}
              </h3>
              <p className="text-titanium-dim text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-slate-aero">
                {c.specs.map((sp, sIdx) => (
                  <span key={sIdx} className={sp.includes('100%') ? 'text-amber-apex' : ''}>
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
