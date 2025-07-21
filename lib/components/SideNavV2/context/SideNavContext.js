import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from "react";
import PropTypes from "prop-types";

const SideNavContext = createContext();

export const useSideNavContext = () => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error("useSideNavContext must be used within a SideNavProvider");
  }
  return context;
};

export const SideNavProvider = ({ children, initialViewing = null }) => {
  const [currentViewState, setCurrentViewState] = useState(initialViewing);

  const updateCurrentViewState = useCallback((newViewing) => {
    if (newViewing === null) {
      // Clear viewing state
      setCurrentViewState(null);
    } else {
      // Add to stack and set as current
      setCurrentViewState(newViewing);
    }
  }, []);

  const clearCurrentViewState = useCallback(() => {
    setCurrentViewState(null);
  }, []);

  const value = useMemo(
    () => ({
      currentViewState,
      updateCurrentViewState,
      clearCurrentViewState,
      isViewing: currentViewState !== null
    }),
    [currentViewState, updateCurrentViewState, clearCurrentViewState]
  );

  return (
    <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
  );
};

SideNavProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialViewing: PropTypes.any
};

export default SideNavContext;
