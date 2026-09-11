import { useState, useEffect, useRef } from 'react';

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const [speedKmH, setSpeedKmH] = useState(0);
  const [stretchScale, setStretchScale] = useState(1);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(performance.now());
  const decayTimeout = useRef(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    lastScrollTime.current = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      const deltaTime = Math.max(1, now - lastScrollTime.current);

      const rawSpeed = (deltaY / deltaTime) * 120;
      const calculatedSpeed = Math.min(350, Math.max(24, Math.round(rawSpeed + 35)));
      const scaleX = 1 + calculatedSpeed / 1200;

      setVelocity(rawSpeed);
      setSpeedKmH(calculatedSpeed);
      setStretchScale(scaleX);

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = now;

      // Smooth decay when scrolling stops
      clearTimeout(decayTimeout.current);
      decayTimeout.current = setTimeout(() => {
        setSpeedKmH(0);
        setVelocity(0);
        setStretchScale(1);
      }, 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(decayTimeout.current);
    };
  }, []);

  return { velocity, speedKmH, stretchScale };
}
