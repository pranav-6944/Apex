import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CursorSystem } from './components/CursorSystem';
import { HeaderHUD } from './components/HeaderHUD';
import { IgnitionSection } from './sections/IgnitionSection';
import { AssemblySection } from './sections/AssemblySection';
import { VelocityHeroSection } from './sections/VelocityHeroSection';
import { CockpitSection } from './sections/CockpitSection';
import { AccelerationLabSection } from './sections/AccelerationLabSection';
import { MaterialLabSection } from './sections/MaterialLabSection';
import { ApexCodeSection } from './sections/ApexCodeSection';
import { ScannerSection } from './sections/ScannerSection';
import { ModelsSection } from './sections/ModelsSection';
import { DriveJourneySection } from './sections/DriveJourneySection';
import { ReserveSection } from './sections/ReserveSection';

import { useScrollVelocity } from './hooks/useScrollVelocity';
import { usePrefersReducedMotion } from './hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isIgnited, setIsIgnited] = useState(false);
  const [lateralG, setLateralG] = useState('1.02');
  const { speedKmH, stretchScale } = useScrollVelocity();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Lenis Smooth Scroll + GSAP ScrollTrigger Synchronization
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [prefersReducedMotion]);

  const handleIgnite = () => {
    setIsIgnited(true);
  };

  return (
    <div className="relative min-h-screen bg-graphite-deep text-titanium selection:bg-amber-apex selection:text-black">
      {/* Precision Energy Cursor */}
      <CursorSystem />

      {/* Top Telemetry HUD Header */}
      <HeaderHUD isIgnited={isIgnited} speedKmH={speedKmH} lateralG={lateralG} />

      {/* 01 — THE IGNITION: INITIAL COLD STATE */}
      <IgnitionSection onIgnite={handleIgnite} isIgnited={isIgnited} />

      {/* UNLOCKED DRIVE EXPERIENCE (Post-Ignition) */}
      <main
        id="drive-experience"
        className={`transition-all duration-1000 ${
          isIgnited
            ? 'opacity-100 filter-none pointer-events-auto'
            : 'opacity-30 filter blur-[2px] pointer-events-none'
        }`}
      >
        {/* 02 — AERODYNAMICS FIRST */}
        <AssemblySection />

        {/* 03 & 04 — FIND YOUR LIMIT */}
        <VelocityHeroSection speedKmH={speedKmH} stretchScale={stretchScale} />

        {/* 05 — YOU ARE IN COMMAND */}
        <CockpitSection onGForceChange={setLateralG} speedKmH={speedKmH} />

        {/* 06 — 0 TO 100 KM/H IN 3.2 SEC */}
        <AccelerationLabSection />

        {/* 07 & 08 — THE MATERIAL LAB */}
        <MaterialLabSection />

        {/* 09 — THE APEX CODE */}
        <ApexCodeSection />

        {/* 10 — LOOK CLOSER */}
        <ScannerSection />

        {/* 11 & 12 — FLEET SPECIFICATION & TIMELINE */}
        <ModelsSection />

        {/* 13 & 14 — ONE CONTINUOUS ROAD & ACOUSTIC KINETICS */}
        <DriveJourneySection />

        {/* 15 — CALM & RESERVE CHASSIS */}
        <ReserveSection />
      </main>
    </div>
  );
}
