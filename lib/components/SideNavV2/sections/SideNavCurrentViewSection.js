import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H5, H6 } from "../../Typography";
import Avatar from "../../Avatar";
import { Link, useLocation, matchPath } from "react-router-dom";
import themeGet from "@styled-system/theme-get";
import Flex from "../../Flex";
import Popover from "../../Popover";

const SubNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => themeGet("space.s")(props)};
  width: 100%;
`;
const SubNavItem = styled.li`
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
  border-left: ${(props) =>
    props.active
      ? `2px solid ${themeGet("colors.primary")(props)}`
      : "2px solid transparent"};
  padding-left: ${(props) => themeGet("space.s")(props)};
  transition: border-left 0.2s ease;
  a {
    display: block;
    padding: 2px 0;
    color: ${(props) =>
      props.active
        ? themeGet("colors.primary")(props)
        : themeGet("colors.greyDarkest")(props)};
    text-decoration: none;
    &:hover,
    &:focus {
      outline: none;
      color: ${(props) => themeGet("colors.primary")(props)};
    }
  }
`;

const CurrentViewContent = ({ name, badge, subNav, location, isExpanded }) => (
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
      {subNav?.map(({ name, link }) => {
        const isActive = matchPath(location.pathname, {
          path: link,
          exact: true
        });

        return (
          <SubNavItem key={name} active={isActive}>
            <Link to={link}>{name}</Link>
          </SubNavItem>
        );
      })}
    </SubNavList>
  </Flex>
);

CurrentViewContent.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.node,
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  location: PropTypes.object.isRequired,
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
  const location = useLocation();

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
          text={
            <CurrentViewContent
              name={name}
              badge={badge}
              subNav={subNav}
              location={location}
              isExpanded={isExpanded}
            />
          }
        >
          <Avatar image={avatar} customSize="30px" shape={shape} />
        </Popover>
      )}
      {isExpanded && !isSmallScreen && (
        <CurrentViewContent
          name={name}
          badge={badge}
          subNav={subNav}
          location={location}
          isExpanded={isExpanded}
        />
      )}
    </Flex>
  );
};

SideNavCurrentViewSection.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.node,
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  isExpanded: PropTypes.bool,
  avatar: PropTypes.string,
  shape: PropTypes.string,
  isSmallScreen: PropTypes.bool
};

export default SideNavCurrentViewSection;
