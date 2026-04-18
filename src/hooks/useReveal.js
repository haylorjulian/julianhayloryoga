import { useState, useEffect, useRef } from 'react';

/**
 * useReveal
 * A small hook that attaches an IntersectionObserver to a ref and
 * returns className props for a scroll-triggered fade-in reveal.
 *
 * Usage:
 *   const r = useReveal();
 *   <h2 ref={r.ref} className={`foo ${r.className}`}>...</h2>
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    className: visible ? 'reveal visible' : 'reveal',
  };
}
