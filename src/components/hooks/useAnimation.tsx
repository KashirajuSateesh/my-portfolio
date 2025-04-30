import { useEffect } from "react";
import gsap from "gsap";

export function useCarouselAnimation(
  ref: React.RefObject<HTMLDivElement>,
  options: { duration: number; ease: string; repeat: number }
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const totalWidth = el.scrollWidth;

    const animation = gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth / 2, // Half if you duplicate content for seamless scroll
        duration: options.duration,
        ease: options.ease,
        repeat: options.repeat,
      }
    );

    return () => animation.kill(); // Clean up on unmount
  }, [ref, options]);
}