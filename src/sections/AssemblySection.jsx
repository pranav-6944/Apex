import React, { useState } from 'react';
import { AerodynamicStreamlinesShader } from '../components/AerodynamicStreamlinesShader';
import apexCarImg from '../assets/apex-hypercar.jpg';

export function AssemblySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: "PHASE 01",
      metric: "DRAG: 0.08 Cd",
      title: "Carbon-Fiber Aero Monocoque",
      desc: "Single-piece dry autoclave weave with inverted ground-effect venturis."
    },
    {
      phase: "PHASE 02",
      metric: "21\" TURBINE",
      title: "Aero-Forged Centerlock Wheels",
      desc: "Centrifugal air evacuation blades pulling heat out of carbon-silicon brakes."
    },
    {
      phase: "PHASE 03",
      metric: "SURGICAL PHOTONS",
      title: "Surgical Amber Matrix Blades",
      desc: "Ultra-thin laser diodes slicing through atmospheric fog and high-speed vapor."
    },
    {
      phase: "PHASE 04",
      metric: "DOWNFORCE: 680 KG",
      title: "Active Dual Venturi Diffuser",
      desc: "Dynamic flaps modulating ground vacuum at speeds beyond 200 km/h."
    }
  ];

  return (
    <section
      className="relative min-h-screen py-24 px-6 md:px-16 border-t border-white/5 bg-graphite flex flex-col justify-center"
      id="assembly-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              STAGE 01 // DECONSTRUCTION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-titanium mt-2">
              AERODYNAMICS FIRST.
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-aero max-w-sm mt-4 md:mt-0 leading-relaxed">
            The vehicle does not precede the physics. Scroll down to assemble each structural node into an aerodynamic silhouette.
          </p>
        </div>

        {/* Scroll Assembly Visualizer Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Step indicators */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-amber-apex/50 bg-white/[0.03] shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                      : 'border-white/5 bg-white/[0.01] opacity-60 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-1">
                    <span className={isActive ? 'text-amber-apex font-bold' : 'text-slate-aero'}>
                      {step.phase}
                    </span>
                    <span className={isActive ? 'text-amber-apex' : 'text-slate-aero'}>
                      {step.metric}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-titanium">{step.title}</h3>
                  <p className="text-xs text-titanium-dim mt-2 font-mono leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dynamic Vehicle Component Viewport with Embedded WebGL Air Streamlines */}
          <div className="lg:col-span-8 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-graphite-deep shadow-2xl flex items-center justify-center p-4 sm:p-8 group">
            <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

            {/* Hypercar photograph */}
            <img
              alt="APEX Assembled Hypercar"
              className="w-full h-full object-cover rounded-lg filter contrast-125 transition-all duration-700 select-none pointer-events-none"
              id="assembled-car-img"
              src={apexCarImg}
            />

            {/* WebGL Air Streamline Shader Layer */}
            <AerodynamicStreamlinesShader className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90 z-10" />

            {/* Wind Tunnel Telemetry Live Ribbon */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] sm:text-xs z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-apex animate-ping" />
                <span className="text-slate-aero">WIND TUNNEL FLUX:</span>
                <span className="text-amber-apex font-bold">280 KM/H</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-titanium-dim">
                <span>LAMINAR BOUNDARY: <strong className="text-emerald-400">STABLE</strong></span>
                <span>DOWNFORCE: <strong className="text-titanium">680 KG</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
