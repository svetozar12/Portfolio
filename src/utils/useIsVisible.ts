import { createRef, RefObject, useEffect, useState } from "react";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100,
): [Boolean, RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [isVisible, currentElement];
}
