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
  isSmallScreen
}) => {
  const icon = useMemo(() => {
    if (isSmallScreen) {
      return "chevron-down";
    }

    return isExpanded ? "chevron-left" : "chevron-right";
  }, [isExpanded, isSmallScreen]);

  return (
    <PanelControlTooltip
      display={["inline-block"]}
      width="fit-content"
      direction={direction}
      tabIndex={tabIndex}
      text={tooltipText}
      position={position}
      isSmallScreen={isSmallScreen}
      id="panel-control-tooltip"
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
  isSmallScreen: PropTypes.bool
};

export default PanelControlComponent;
