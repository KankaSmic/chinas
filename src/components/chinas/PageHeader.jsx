import React from 'react';

/**
 * Inner page hero: fixed min-height so all routes (except Home) align visually.
 */
export default function PageHeader({ className = '', sectionStyle, decorations, children }) {
  return (
    <section
      className={`relative flex min-h-[22rem] items-center justify-center px-6 py-10 sm:py-12 overflow-hidden ${className}`}
      style={sectionStyle}
    >
      {decorations}
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center text-white">
        {children}
      </div>
    </section>
  );
}
