import React, { useRef, useState } from 'react';
import apexCarImg from '../assets/apex-hypercar.jpg';

export function ScannerSection() {
  const viewportRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setSpotlightPos((prev) => ({ ...prev, active: false }));
  };

  const handleTouchMove = (e) => {
    if (!viewportRef.current || !e.touches[0]) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    setSpotlightPos({ x, y, active: true });
  };

  const maskBackground = spotlightPos.active
    ? `radial-gradient(circle 240px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(245,158,11,0.24) 0%, rgba(11,12,14,0.92) 65%, #060708 100%)`
    : `radial-gradient(circle 240px at 50% 50%, rgba(245,158,11,0.15) 0%, rgba(11,12,14,0.95) 75%, #060708 100%)`;

  return (
    <section
      className="relative min-h-screen py-28 px-6 md:px-16 bg-graphite-deep border-t border-white/5 flex flex-col justify-center overflow-hidden"
      id="scanner-section"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              10 // X-RAY PHOTON SCANNER
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-titanium mt-2">
              LOOK CLOSER.
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-aero max-w-sm mt-4 md:mt-0 leading-relaxed">
            Move your cursor across the chassis viewport. The cursor acts as a surgical collimated beam revealing concealed telemetry specifications.
          </p>
        </div>

        {/* Scanner Viewport Frame */}
        <div
          ref={viewportRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          className="relative h-[480px] sm:h-[550px] w-full rounded-3xl overflow-hidden border border-white/15 bg-black cursor-crosshair select-none"
          id="scanner-viewport"
        >
          {/* Background image: Car silhouette */}
          <img
            alt="APEX Scanner View"
            className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 select-none pointer-events-none"
            src={apexCarImg}
          />

          {/* Collimated beam radial spotlight overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-75"
            style={{ background: maskBackground }}
            id="scanner-overlay"
          />

          {/* Hidden technical HUD inspection readouts */}
          <div className="absolute top-[28%] left-[8%] sm:left-[22%] font-mono text-[11px] sm:text-xs bg-black/90 px-3.5 py-2 rounded-lg border border-amber-apex/60 text-titanium shadow-xl pointer-events-none">
            <span className="text-amber-apex font-bold block text-[9px] sm:text-[10px]">
              SCAN: NOSE SPLITTER
            </span>
            <span>GROUND EFFECT FLUX: 420 KG</span>
          </div>

          <div className="absolute top-[48%] left-[30%] sm:left-[54%] font-mono text-[11px] sm:text-xs bg-black/90 px-3.5 py-2 rounded-lg border border-amber-apex/60 text-titanium shadow-xl pointer-events-none">
            <span className="text-amber-apex font-bold block text-[9px] sm:text-[10px]">
              SCAN: COCKPIT CANOPY
            </span>
            <span>AERO COEFFICIENT: 0.21 Cd</span>
          </div>

          <div className="absolute bottom-[24%] left-[10%] sm:left-[34%] font-mono text-[11px] sm:text-xs bg-black/90 px-3.5 py-2 rounded-lg border border-amber-apex/60 text-titanium shadow-xl pointer-events-none">
            <span className="text-amber-apex font-bold block text-[9px] sm:text-[10px]">
              SCAN: BRAKE ASSEMBLY
            </span>
            <span>410MM CARBON CERAMIC ROTORS</span>
          </div>

          <div className="absolute bottom-[28%] right-[6%] sm:right-[18%] font-mono text-[11px] sm:text-xs bg-black/90 px-3.5 py-2 rounded-lg border border-amber-apex/60 text-titanium shadow-xl pointer-events-none">
            <span className="text-amber-apex font-bold block text-[9px] sm:text-[10px]">
              SCAN: ACTIVE REAR WING
            </span>
            <span>DUAL STABILIZER FLAPS: ±15°</span>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 font-mono text-[10px] sm:text-[11px] text-slate-aero bg-black/80 px-3 py-1.5 rounded border border-white/10">
            [ SENSOR STATUS // COLLIMATED BEAM 632NM ]
          </div>
        </div>
      </div>
    </section>
  );
}
