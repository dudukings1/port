import MouseFollower from "mouse-follower";
import gsap from "gsap";

let cursor: MouseFollower | null = null;

export function initCursor() {
  if (cursor) return cursor;
  if (typeof window === "undefined") return null;
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  MouseFollower.registerGSAP(gsap);

  cursor = new MouseFollower({
    speed: 0.5,
    ease: "expo.out",
    skewing: 1.5,
    stateDetection: {
      "-pointer": "a, button",
    },
  });

  return cursor;
}

export function destroyCursor() {
  cursor?.destroy();
  cursor = null;
}
