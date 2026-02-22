import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp
 * Animates a number from 0 to `target` when `triggered` becomes true.
 *
 * @param {number}  target    - Final numeric value
 * @param {number}  duration  - Animation duration in ms (default 1500)
 * @param {boolean} triggered - Start animation when this becomes true
 * @returns {number} current display value
 */
export function useCountUp(target, duration = 1500, triggered = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, target, duration]);

  return value;
}
