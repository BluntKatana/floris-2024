import React, { useCallback, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";

// UPDATE this path to your copy of the hook!
// Source here: https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = useCallback(() => {
    setIsBooped(true);
  }, []);

  const appliedStyle = prefersReducedMotion ? {} : style;

  return [appliedStyle, trigger];
}

export default useBoop;
