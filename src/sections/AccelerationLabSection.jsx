import React, { useState, useRef, useEffect } from 'react';

export function AccelerationLabSection() {
  const [speed, setSpeed] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef(null);

  const startLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setIsCompleted(false);
    clearInterval(intervalRef.current);

    let currentSpeed = 0;
    intervalRef.current = setInterval(() => {
      currentSpeed += Math.floor(Math.random() * 6) + 4;
      if (currentSpeed >= 100) {
        currentSpeed = 100;
        clearInterval(intervalRef.current);
        setSpeed(100);
        setIsLaunching(false);
        setIsCompleted(true);
      } else {
        setSpeed(currentSpeed);
      }
    }, 70);
  };

  const resetLaunch = () => {
    clearInterval(intervalRef.current);
    setIsLaunching(false);
    setIsCompleted(false);
    setSpeed(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section
      className="relative py-28 px-6 md:px-16 bg-graphite flex flex-col justify-center border-t border-white/5 overflow-hidden"
      id="acceleration-lab"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-amber-apex tracking-widest uppercase">
              06 // LINEAR LAUNCH DYNAMICS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-titanium mt-2">
              0 TO 100 KM/H IN 3.2 SEC.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-aero">
            PHYSICAL DISPLACEMENT LAUNCH TEST
          </div>
        </div>

        {/* Big interactive launch controller box */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-graphite-deep border border-white/10 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-telemetry-grid opacity-25 pointer-events-none" />

          <span className="font-mono text-xs text-slate-aero uppercase tracking-widest mb-2">
            DRAG STRIP TELEMETRY
          </span>

          {/* Massive Launch Speed Digits */}
          <div className="flex items-baseline justify-center gap-3 sm:gap-6 my-4 sm:my-6">
            <div
              className={`font-mono text-7xl sm:text-9xl md:text-[13rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-titanium via-titanium-dim to-white/20 select-none tabular-nums transition-transform duration-200 ${
                isCompleted ? 'scale-105 drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]' : ''
              }`}
              id="launch-counter"
            >
              {speed.toString().padStart(2, '0')}
            </div>
            <span className="font-mono text-xl sm:text-3xl md:text-4xl text-amber-apex font-bold">
              KM/H
            </span>
          </div>

          {/* Launch Status Banner */}
          <div
            className={`font-mono text-xs sm:text-sm tracking-widest uppercase py-2 px-6 rounded-full border transition-all ${
              isCompleted
                ? 'text-emerald-400 border-emerald-400 bg-emerald-500/10'
                : isLaunching
                ? 'text-amber-apex border-amber-apex bg-amber-apex/10 animate-pulse'
                : 'text-slate-aero border-white/10 bg-white/[0.02]'
            }`}
            id="launch-banner"
          >
            {isCompleted
              ? 'LAUNCH COMPLETE // 3.2 SECONDS VERIFIED'
              : isLaunching
              ? 'TORQUE APPLIED // 1,240 NM DISCHARGE'
              : 'PRESS [ LAUNCH PEDAL ] TO RELEASE TORQUE'}
          </div>

          {/* Interactive Launch Button Trigger */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
            <button
              id="trigger-launch-btn"
              type="button"
              onClick={startLaunch}
              disabled={isLaunching}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-mono text-xs uppercase tracking-widest bg-amber-apex text-black font-bold hover:bg-amber-glow shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            >
              ⚡ INITIATE FULL POWER LAUNCH
            </button>
            <button
              id="reset-launch-btn"
              type="button"
              onClick={resetLaunch}
              className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-mono text-xs uppercase tracking-widest border border-white/10 text-titanium-dim hover:text-white hover:border-white/30 transition-all hover:bg-white/5"
            >
              RESET LAUNCH PAD
            </button>
          </div>

          {/* Benchmark Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 font-mono text-left">
            <div>
              <span className="text-[10px] text-slate-aero uppercase block">POWER</span>
              <span className="text-xl sm:text-2xl font-bold text-titanium">1,200 HP</span>
              <span className="text-[10px] text-amber-apex block mt-0.5">Tri-Motor Vectoring</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-aero uppercase block">0-100 KM/H</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-apex">3.2 SEC</span>
              <span className="text-[10px] text-slate-aero block mt-0.5">Dry asphalt surface</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-aero uppercase block">TOP VELOCITY</span>
              <span className="text-xl sm:text-2xl font-bold text-titanium">350+ KM/H</span>
              <span className="text-[10px] text-slate-aero block mt-0.5">Electronically governed</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-aero uppercase block">BATTERY ARCH</span>
              <span className="text-xl sm:text-2xl font-bold text-titanium">900V</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">10-80% in 14 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
