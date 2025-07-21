import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H5, H6 } from "../../Typography";
import Avatar from "../../Avatar";
import { NavLink } from "react-router-dom";
import themeGet from "@styled-system/theme-get";
import Flex from "../../Flex";
import Popover from "../../Popover";
import { CurrentViewSectionShape } from "../types/sideNav";

const SubNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => themeGet("space.s")(props)};
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  font-size: ${themeGet("fontSizes.1")};
  border-left: 2px solid transparent;
  padding-left: ${themeGet("space.s")};
  transition: border-left 0.2s ease;

  color: ${themeGet("colors.greyDarkest")};
  text-decoration: none;

  span {
    display: block;
    padding: 2px 0;
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${themeGet("colors.primary")};
  }

  &.active {
    border-left: 2px solid ${themeGet("colors.primary")};
    color: ${themeGet("colors.primary")};
  }
`;

const CurrentViewContent = ({ name, badge, subNav, isExpanded }) => {
  return (
    <Flex flexDirection="column" gap="s" p={isExpanded ? "0" : "s"}>
      <H6 sizing="small" color="greyDark">
        Currently Viewing
      </H6>
      <Flex
        flexWrap="wrap"
        gap="s"
        mt={isExpanded ? "0" : "s"}
        alignItems="center"
      >
        <H5 fontWeight="bold">{name}</H5>
        {badge}
      </Flex>
      <SubNavList>
        {subNav?.map(({ name, link }) => (
          <StyledNavLink key={name} to={link}>
            <span>{name}</span>
          </StyledNavLink>
        ))}
      </SubNavList>
    </Flex>
  );
};

CurrentViewContent.propTypes = {
  ...CurrentViewSectionShape,
  isExpanded: PropTypes.bool
};

const SideNavCurrentViewSection = ({
  name,
  badge,
  subNav,
  isExpanded,
  avatar,
  shape,
  isSmallScreen
}) => {
  const currentViewMarkup = (
    <CurrentViewContent
      name={name}
      badge={badge}
      subNav={subNav}
      isExpanded={isExpanded}
    />
  );

  return (
    <Flex
      isExpanded={isExpanded}
      flexDirection="column"
      gap="s"
      mt={isExpanded ? "s" : "0"}
    >
      {avatar && (!isExpanded || isSmallScreen) && (
        <Popover
          direction={isSmallScreen ? "top" : "right"}
          width="fit-content"
          text={currentViewMarkup}
        >
          <Avatar image={avatar} customSize="30px" shape={shape} />
        </Popover>
      )}
      {isExpanded && !isSmallScreen && currentViewMarkup}
    </Flex>
  );
};

SideNavCurrentViewSection.propTypes = {
  ...CurrentViewSectionShape,
  isExpanded: PropTypes.bool,
  isSmallScreen: PropTypes.bool
};

export default SideNavCurrentViewSection;
