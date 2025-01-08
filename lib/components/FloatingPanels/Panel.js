import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import {
  PanelWrapper,
  PanelHeader,
  HeaderContent,
  Title,
  IconWrapper,
  ChevronWrapper,
  PanelContent
} from "./FloatingPanels.styles";

const Panel = ({ iconName, title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const arrowIcon = isExpanded ? "chevron-up" : "chevron-down";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <PanelWrapper>
      <PanelHeader
        onClick={() => setIsExpanded(!isExpanded)}
        $isExpanded={isExpanded}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <HeaderContent>
          <IconWrapper>
            <Icon size="xs" color="white" icon={["far", iconName]} />
          </IconWrapper>
          <Title>{title}</Title>
        </HeaderContent>
        <ChevronWrapper isHovered={isHovered}>
          <Icon size="sm" icon={["fas", arrowIcon]} color="greyDarker" />
        </ChevronWrapper>
      </PanelHeader>
      <PanelContent $isExpanded={isExpanded}>{children}</PanelContent>
    </PanelWrapper>
  );
};

Panel.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool
};

Panel.defaultProps = {
  defaultExpanded: false
};

export default Panel;
