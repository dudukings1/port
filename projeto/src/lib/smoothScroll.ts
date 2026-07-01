import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let rafCallback: ((time: number) => void) | null = null;

const HEADER_OFFSET = 72;

function handleAnchorClick(event: MouseEvent) {
  const target = (event.target as HTMLElement)?.closest('a[href^="#"]');
  if (!target) return;

  const href = target.getAttribute("href");
  if (!href || href === "#") return;

  const el = document.querySelector(href);
  if (!el || !lenis) return;

  event.preventDefault();
  lenis.scrollTo(el as HTMLElement, { offset: -HEADER_OFFSET });
}

export function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on("scroll", ScrollTrigger.update);

  rafCallback = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(rafCallback);
  gsap.ticker.lagSmoothing(0);

  document.addEventListener("click", handleAnchorClick);

  return lenis;
}

export function destroySmoothScroll() {
  document.removeEventListener("click", handleAnchorClick);
  if (rafCallback) gsap.ticker.remove(rafCallback);
  lenis?.destroy();
  lenis = null;
  rafCallback = null;
}
