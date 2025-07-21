import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from "react";
import PropTypes from "prop-types";

const SideNavStateContext = createContext();

export const useSideNavStateContext = () => {
  const context = useContext(SideNavStateContext);
  if (!context) {
    throw new Error(
      "useSideNavStateContext must be used within a SideNavStateProvider"
    );
  }
  return context;
};

export const SideNavStateProvider = ({ children, initialViewing = null }) => {
  const [currentViewState, setCurrentViewState] = useState(initialViewing);
  const [expandedItem, setExpandedItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedWidth, setExpandedWidth] = useState(null);

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
      isViewing: currentViewState !== null,
      expandedItem,
      setExpandedItem,
      isExpanded,
      setIsExpanded,
      expandedWidth,
      setExpandedWidth
    }),
    [
      currentViewState,
      updateCurrentViewState,
      clearCurrentViewState,
      expandedItem,
      isExpanded,
      expandedWidth
    ]
  );

  return (
    <SideNavStateContext.Provider value={value}>
      {children}
    </SideNavStateContext.Provider>
  );
};

SideNavStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialViewing: PropTypes.any
};

export default SideNavStateContext;
