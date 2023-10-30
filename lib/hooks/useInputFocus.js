import React, { useEffect } from "react";

const useInputFocus = (ref = null, focus) => {
  const inputRef = ref || React.createRef();
  useEffect(() => {
    if (focus && inputRef && inputRef.current && inputRef.current.focus) {
      inputRef.current.focus();
    }
  }, [inputRef, focus]);

  return inputRef;
};

export default useInputFocus;
