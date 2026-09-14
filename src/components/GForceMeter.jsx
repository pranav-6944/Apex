import React, { useEffect, useRef, useState } from 'react';

export function GForceMeter({ onGForceChange }) {
  const ballRef = useRef(null);
  const lastTotalG = useRef('1.02');
  const [gMetrics, setGMetrics] = useState({ left: '1.28', right: '1.14', total: '1.02' });

  useEffect(() => {
    let animId = null;

    const handleMouseMove = (e) => {
      if (animId) return;

      animId = requestAnimationFrame(() => {
        animId = null;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * 28;
        const dy = ((e.clientY - cy) / cy) * 28;

        if (ballRef.current) {
          ballRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }

        const dist = Math.hypot(dx, dy);
        const totalG = (1.0 + dist * 0.03).toFixed(2);
        const leftG = (1.1 + Math.max(0, -dx) * 0.04).toFixed(2);
        const rightG = (1.1 + Math.max(0, dx) * 0.04).toFixed(2);

        setGMetrics({ left: leftG, right: rightG, total: totalG });
        if (onGForceChange && lastTotalG.current !== totalG) {
          lastTotalG.current = totalG;
          onGForceChange(totalG);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [onGForceChange]);

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
      <span className="font-mono text-[10px] text-slate-aero tracking-widest uppercase mb-4">
        LATERAL ACCELEROMETER
      </span>
      <div className="relative w-32 h-32 rounded-full border border-white/15 flex items-center justify-center">
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-amber-apex/30" />
        <div
          ref={ballRef}
          id="g-ball"
          className="w-4 h-4 rounded-full bg-amber-apex shadow-[0_0_12px_#f59e0b] transition-transform duration-75"
        />
      </div>
      <div className="mt-4 font-mono text-xs text-titanium flex justify-between w-full px-4">
        <span>L: {gMetrics.left}G</span>
        <span>R: {gMetrics.right}G</span>
      </div>
    </div>
  );
}
