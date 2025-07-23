import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";
import { PanelControlTooltip, PanelControl } from "../styles/SideNavV2.styles";

const PanelControlComponent = ({
  isExpanded,
  onClick,
  ariaLabel,
  tooltipText,
  direction = "right",
  position,
  tabIndex = "-1",
  onBlur,
  isSmallScreen = false,
  showOnMobile = false,
  mt = 0,
  mb = 0
}) => {
  // Determine display based on mobile settings
  const display = showOnMobile ? "block" : ["none", "none", "none", "block"];

  // Determine icon based on mobile context
  const icon = useMemo(() => {
    if (isSmallScreen && showOnMobile) {
      return "chevron-down";
    }

    return isExpanded ? "chevron-left" : "chevron-right";
  }, [isExpanded, isSmallScreen, showOnMobile]);

  return (
    <PanelControlTooltip
      display={display}
      width="fit-content"
      direction={direction}
      tabIndex={tabIndex}
      text={tooltipText}
      position={position}
      showOnMobile={showOnMobile}
      isSmallScreen={isSmallScreen}
      id="panel-control-tooltip"
      pl={isExpanded ? "xs" : "0"}
      mt={mt}
      mb={mb}
    >
      <PanelControl onClick={onClick} aria-label={ariaLabel} onBlur={onBlur}>
        <Icon icon={["fas", icon]} />
      </PanelControl>
    </PanelControlTooltip>
  );
};

PanelControlComponent.propTypes = {
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  position: PropTypes.string,
  tabIndex: PropTypes.string,
  onBlur: PropTypes.func,
  isSmallScreen: PropTypes.bool,
  showOnMobile: PropTypes.bool,
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
};

export default PanelControlComponent;
