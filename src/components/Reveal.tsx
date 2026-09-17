"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in ms. Applied as a CSS var, not React state. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
};

/**
 * Scroll reveal via IntersectionObserver and a data attribute. No state, no
 * re-render per frame. The resting style in globals.css is the visible one, so
 * reduced-motion and no-JS both land on the finished layout.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.setAttribute("data-reveal", "in");
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.setAttribute("data-reveal", "in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            observer.unobserve(entry.target);
          }
        }
      },
      // Pre-trigger well before the element reaches the viewport, so content is
      // already settled by the time it is scrolled to.
      { rootMargin: "400px 0px 400px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
