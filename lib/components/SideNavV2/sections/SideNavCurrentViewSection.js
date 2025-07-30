import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H6 } from "../../Typography";
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

const UnstyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${themeGet("colors.greyDarkest")};
  &:hover {
    outline: none;
    color: ${themeGet("colors.primary")};
  }
`;

const ActiveAvatar = styled(Avatar)`
  position: relative;
    &:before {
      content: "";
      position: absolute;
      right: 0;
      transform: translateX(10px);
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 7px 8px 7px 0;
      border-color: transparent ${themeGet(
        "colors.greyLighter"
      )} transparent transparent;
      
      ${(props) =>
        props.isSmallScreen &&
        `
        right: auto;
        top: 0;
        transform: translate(5px, -13px);
        border-width: 8px 7px 0 7px;
        border-color: ${props.theme.colors.greyLighter} transparent transparent transparent;
      `}
    }
  }
`;

const CurrentViewContent = ({
  name,
  badge,
  subNav,
  isExpanded,
  avatar,
  shape
}) => {
  const link = subNav?.[0]?.link;

  return (
    <Flex flexDirection="column" gap="s">
      <H6 sizing="small" color="greyDark" mb={isExpanded ? "s" : "0"}>
        Currently Viewing
      </H6>
      <Flex
        flexWrap="wrap"
        gap="s"
        mt={isExpanded ? "0" : "s"}
        alignItems="center"
      >
        <UnstyledNavLink to={link}>
          <Flex flexWrap="nowrap" gap="s" alignItems="center">
            <Avatar
              image={avatar}
              customSize="24px"
              shape={shape}
              border="1px solid"
            />
            <H6 fontWeight="bold">{name}</H6>
          </Flex>
        </UnstyledNavLink>
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
  // Don't render anything if there's no valid name
  if (!name) {
    return null;
  }

  const currentViewMarkup = (
    <CurrentViewContent
      name={name}
      badge={badge}
      subNav={subNav}
      isExpanded={isExpanded}
      avatar={avatar}
      shape={shape}
    />
  );

  return (
    <Flex
      isExpanded={isExpanded}
      flexDirection="column"
      gap="s"
      mt={isExpanded && !isSmallScreen ? "s" : "0"}
    >
      {(!isExpanded || isSmallScreen) && (
        <Popover
          direction={isSmallScreen ? "top" : "right"}
          width="fit-content"
          text={currentViewMarkup}
        >
          <ActiveAvatar
            image={avatar}
            customSize="24px"
            shape={shape}
            isSmallScreen={isSmallScreen}
          />
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
