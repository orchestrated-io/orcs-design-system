import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Popover from "../Popover";
import {
  PanelWrapper,
  PanelHeader,
  HeaderContent,
  Title,
  IconButton,
  PanelContent
} from "./FloatingPanels.styles";

export const Panel = ({
  iconName,
  title,
  containerHeight,
  content,
  isExpanded,
  toggleExpanded
}) => {
  const [isHovered, setIsHovered] = useState(false);
  if (!content) {
    return null;
  }
  return (
    <PanelWrapper containerHeight={containerHeight} isExpanded={isExpanded}>
      <PanelHeader
        onClick={toggleExpanded}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <HeaderContent>
          <Icon size="s" color="greyDarker" icon={["far", iconName]} />
          {isExpanded && <Title>{title}</Title>}
        </HeaderContent>
        {isExpanded && (
          <Popover direction="left" text="Close panel" width="fit-content">
            <Icon
              size="sm"
              icon={["fas", "times"]}
              color={isHovered ? "primary" : "greyDarker"}
            />
          </Popover>
        )}
      </PanelHeader>
      <PanelContent isExpanded={isExpanded}>{content}</PanelContent>
    </PanelWrapper>
  );
};

Panel.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  containerHeight: PropTypes.number,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired
};

Panel.defaultProps = {
  defaultExpanded: false
};

export const PanelBarIcon = ({
  iconName,
  title,
  toggleExpanded,
  isExpanded
}) => {
  return (
    <Popover direction="top" text={title} width="fit-content">
      <IconButton
        aria-label={title}
        onClick={toggleExpanded}
        isExpanded={isExpanded}
      >
        <Icon size="s" color="greyDarker" icon={["far", iconName]} />
      </IconButton>
    </Popover>
  );
};

PanelBarIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
};
