import { useEffect, useRef, useState } from "react";

export default function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const interval = window.setInterval(() => {
      if (ref.current) {
        const currentIsVisible =
          window.getComputedStyle(ref.current).visibility === "visible";

        if (isVisible !== currentIsVisible) {
          setIsVisible(currentIsVisible);
        }
      }
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [ref, isVisible]);

  return [isVisible, ref];
}
