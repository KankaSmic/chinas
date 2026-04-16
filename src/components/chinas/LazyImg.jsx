import React, { useEffect, useRef, useState } from 'react';

const PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Defers loading the real `src` until the image is near the viewport.
 * Native `loading="lazy"` still prefetches images within a large distance; this avoids that.
 */
export default function LazyImg({ src, alt, className = '', style, ...rest }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: '120px 0px', threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src, active]);

  return (
    <img
      ref={ref}
      src={active ? src : PLACEHOLDER}
      alt={alt}
      className={className}
      style={style}
      decoding="async"
      {...rest}
    />
  );
}
