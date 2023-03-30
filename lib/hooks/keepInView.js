import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/**
 * An explicit mapping of directions to their opposites
 * This is used in oppositeDirection() to move the Popover when it leaves the viewPort
 */
export const directions = {
  top: "bottom",
  topRight: "bottomLeft",
  right: "left",
  bottomRight: "topLeft",
  bottom: "top",
  bottomLeft: "topRight",
  left: "right",
  topLeft: "bottomRight"
};

export const oppositeDirection = (direction) => {
  if (!direction || !directions[direction]) return "left";
  return directions[direction];
};

/**
 * This hook keeps track of the in view status of a component that has a direction setting, like a Popover or ActionsMenu.
 *
 * It does this by tracking the "in view" status of a component that has a direction property and then calling a specified
 * callback with the exact opposite direction setting when it falls out of the view port.
 *
 * The hook returns a `ref` (see https://www.npmjs.com/package/react-intersection-observer) which must be set on the
 * component that is beinbg tracked. It also returns a callback to be called when the component is made visible to the
 * user. This is useful for Popovers where the direction must only be set on hover or on a mouse click for example. For
 * components that are always visible set the default visibility prop to `true`.
 *
 * To use this hook pass in:
 * - the initial direction setting
 * - the default visibility of the component
 * - the `useInView` options (see https://www.npmjs.com/package/react-intersection-observer)
 * - a callback to change the direction of the component when it leaves the view port
 *
 */
export const useKeepInView = ({
  direction,
  shown = false,
  inViewOptions = { threshold: 1, initialInView: true, fallbackInView: true },
  callback
}) => {
  const [lastDirection] = useState({ direction });
  const [isShown, setIsShown] = useState(shown);
  const { ref, inView } = useInView(inViewOptions);
  useEffect(() => {
    if (!inView && isShown) {
      const newDirection = oppositeDirection(lastDirection.direction);
      callback(newDirection);
      lastDirection.direction = newDirection;
    }
  }, [inView, direction, isShown, callback, lastDirection]);

  return [ref, setIsShown];
};
