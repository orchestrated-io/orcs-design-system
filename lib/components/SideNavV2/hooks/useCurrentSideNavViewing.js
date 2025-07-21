import { useEffect, useRef } from "react";
import { useSideNavContext } from "../context/SideNavContext";

/**
 * Hook for components to register themselves as the current viewing context
 * Ensures only one component is mounted at a time and manages the viewing state
 * @param {Object} viewingData - The viewing data to set when this component is active
 * @param {boolean} isActive - Whether this component should be the active viewing context
 */
export const useCurrentSideNavViewing = (viewingData, isActive = true) => {
  const { updateCurrentViewState, clearCurrentViewState } = useSideNavContext();
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isActive && viewingData && !isMountedRef.current) {
      updateCurrentViewState(viewingData);
      isMountedRef.current = true;
    }

    return () => {
      if (isMountedRef.current) {
        clearCurrentViewState();
        isMountedRef.current = false;
      }
    };
  }, [isActive, viewingData, updateCurrentViewState, clearCurrentViewState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isMountedRef.current) {
        clearCurrentViewState();
        isMountedRef.current = false;
      }
    };
  }, [clearCurrentViewState]);
};

export default useCurrentSideNavViewing;
