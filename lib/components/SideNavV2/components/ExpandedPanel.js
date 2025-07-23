import React from "react";
import PropTypes from "prop-types";
import { SideNavExpanded, ResizeHandle } from "../styles/SideNavV2.styles";
import PanelControlComponent from "./PanelControl";

const ExpandedPanel = ({
  item,
  expandedItem,
  isExpanded,
  expandedWidth,
  sideNavHeight,
  isSmallScreen,
  expandedRef,
  onResizeStart,
  onItemClick,
  onBlur
}) => {
  if (item.actionType !== "component" || item.hide) {
    return null;
  }

  return (
    <SideNavExpanded
      ref={expandedRef}
      tabIndex="0"
      sideNavHeight={sideNavHeight}
      active={expandedItem}
      large={item.large}
      isExpanded={isExpanded}
      width={expandedWidth}
    >
      <ResizeHandle onMouseDown={onResizeStart} />
      <PanelControlComponent
        isExpanded={true}
        onClick={() => onItemClick(item)}
        ariaLabel="toggle panel"
        tooltipText="Hide panel"
        direction="left"
        position="absolute"
        onBlur={() => onBlur(item)}
        isSmallScreen={isSmallScreen}
        showOnMobile={true}
      />
      {item.component()}
    </SideNavExpanded>
  );
};

ExpandedPanel.propTypes = {
  item: PropTypes.shape({
    actionType: PropTypes.string.isRequired,
    hide: PropTypes.bool,
    large: PropTypes.bool,
    component: PropTypes.func,
    name: PropTypes.string.isRequired
  }).isRequired,
  expandedItem: PropTypes.number,
  isExpanded: PropTypes.bool,
  expandedWidth: PropTypes.number,
  sideNavHeight: PropTypes.string.isRequired,
  isSmallScreen: PropTypes.bool,
  expandedRef: PropTypes.object,
  onResizeStart: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default ExpandedPanel;
