import { useEffect, useState } from "react";

export const commonKeys = {
  DOWN: "Down",
  ARROW_DOWN: "ArrowDown",
  UP: "Up",
  ARROW_UP: "ArrowUp",
  LEFT: "Left",
  ARROW_LEFT: "ArrowLeft",
  RIGHT: "Right",
  ARROW_RIGHT: "ArrowRight",
  ENTER: "Enter",
  ESC: "Esc",
  ESCAPE: "Escape",
  TAB: "Tab"
};

export const useKeyPress = (targetKey, callback, options = {}) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
      callback();
    }
  };

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
      callback();
    }
  };

  // Add event listeners
  useEffect(() => {
    const removeEventListeners = () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };

    if (options.disabled) {
      removeEventListeners();
      return;
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return removeEventListeners;
  });

  return keyPressed;
};
