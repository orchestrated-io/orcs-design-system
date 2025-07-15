import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H5, H6 } from "../Typography";
import Badge from "../Badge";
import { Link, useLocation, matchPath } from "react-router-dom";
import themeGet from "@styled-system/theme-get";
import Flex from "../Flex";

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

const SideNavViewingSection = ({
  teamName,
  teamType,
  badgeVariant,
  subNav,
  isExpanded
}) => {
  const location = useLocation();

  return (
    <Flex isExpanded={isExpanded} flexDirection="column" gap="s" mt="s">
      {isExpanded && (
        <H6 sizing="small" color="greyDark">
          Currently Viewing
        </H6>
      )}
      <Flex flexWrap="wrap" gap="s" mt="s" alignItems="center">
        {isExpanded && <H5 fontWeight="bold">{teamName}</H5>}
        {isExpanded && teamType && (
          <Badge variant={badgeVariant}>{teamType}</Badge>
        )}
      </Flex>
      {isExpanded && (
        <SubNavList>
          {subNav.map(({ name, link }) => {
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
      )}
    </Flex>
  );
};

SideNavViewingSection.propTypes = {
  teamName: PropTypes.string.isRequired,
  teamLink: PropTypes.string.isRequired,
  teamType: PropTypes.string,
  badgeVariant: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primary",
    "primaryDark",
    "secondary"
  ]),
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  isExpanded: PropTypes.bool
};

export default SideNavViewingSection;
