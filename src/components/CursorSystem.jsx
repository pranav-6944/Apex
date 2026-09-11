import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';

export function CursorSystem() {
  const isMobile = useIsMobile();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Check for hoverable elements
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        className={`fixed w-2 h-2 rounded-full bg-amber-apex shadow-[0_0_12px_#f59e0b] -translate-x-1/2 -translate-y-1/2 left-0 top-0 pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className={`fixed rounded-full border border-amber-apex/40 -translate-x-1/2 -translate-y-1/2 left-0 top-0 pointer-events-none flex items-center justify-center transition-all duration-200 ${
          isHovered ? 'w-14 h-14 border-amber-apex bg-amber-apex/10' : 'w-10 h-10 border-amber-apex/30'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className={`rounded-full bg-white/40 transition-all duration-200 ${isHovered ? 'w-1.5 h-1.5 bg-amber-apex' : 'w-1 h-1'}`} />
      </div>
    </>
  );
}
