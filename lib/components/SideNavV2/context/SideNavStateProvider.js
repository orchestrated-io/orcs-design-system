import React, { createContext, useContext, useState, useMemo } from "react";
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

export const SideNavStateProvider = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedWidth, setExpandedWidth] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const value = useMemo(
    () => ({
      expandedItem,
      setExpandedItem,
      isExpanded,
      setIsExpanded,
      expandedWidth,
      setExpandedWidth,
      isLocked,
      setIsLocked
    }),
    [expandedItem, isExpanded, expandedWidth, isLocked]
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
