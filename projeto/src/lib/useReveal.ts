import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  delay?: number;
  duration?: number;
}

/** Fade + slide (opcionalmente x/scale/rotate) de um elemento ao entrar na viewport. */
export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: options.x ?? 0,
          y: options.y ?? 32,
          scale: options.scale ?? 1,
          rotate: options.rotate ?? 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: options.duration ?? 0.9,
          delay: options.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

interface StaggerOptions extends RevealOptions {
  stagger?: number;
}

/** Fade + slide (opcionalmente x/scale/rotate) em stagger para os filhos de um container ao entrar na viewport. */
export function useStaggerReveal<T extends HTMLElement>(
  childSelector: string,
  options: StaggerOptions = {},
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(childSelector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: options.x ?? 0,
          y: options.y ?? 28,
          scale: options.scale ?? 1,
          rotate: options.rotate ?? 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: options.duration ?? 0.7,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childSelector]);

  return ref;
}
