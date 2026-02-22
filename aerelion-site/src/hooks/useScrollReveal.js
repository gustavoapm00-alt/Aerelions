import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it gains the `visible` class,
 * triggering the CSS transition defined in index.css (.reveal.visible).
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0–1 (default 0.15)
 * @param {string} options.rootMargin - rootMargin string (default '0px')
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * useScrollRevealAll
 * Attaches observers to all `.reveal` children inside the returned container ref.
 * Handles stagger automatically via CSS delay classes already on children.
 */
export function useScrollRevealAll({ threshold = 0.1, rootMargin = '0px' } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');
    const observers = [];

    elements.forEach((el) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.unobserve(el);
          }
        },
        { threshold, rootMargin }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [threshold, rootMargin]);

  return containerRef;
}
