import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Bar = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 ${variables.defaultSpacing};
  background: ${colours.greyDarkest};

  > a {
    display: none;
    @media (min-width: ${variables.screenMedium}) {
      display: block;
    }
  }

  > div {
    display: none;
    @media (min-width: ${variables.screenMedium}) {
      display: flex;
    }
  }

  > * + * {
    margin-left: ${variables.defaultSpacing};
  }
`;

const AppName = styled.div`
  display: flex !important;
  align-items: center;
  font-size: 2rem;
  line-height: 60px;
  height: 60px;
  padding-right: ${variables.defaultSpacing};
  color: ${colours.white};
  border-right: solid 1px ${rgba(colours.white, 0.2)};
`;

const RightAlignedChildren = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  > * + * {
    margin-left: ${variables.defaultSpacing};
  }
`;

const Avatar = styled.img`
  display: block;
  height: 42px;
  width: 42px;
  border-radius: 100%;
`;

const LoggedInAs = styled.div`
  text-align: left;
`;

const UserName = styled.div`
  color: ${colours.white};
`;

const Tenant = styled.small`
  display: block;
  color: ${colours.white};
`;

const MobileMenuToggle = styled.label`
  z-index: 3;
  cursor: pointer;
  user-select: none;
  background: none;
  border: none;
  padding-bottom: 7px;
  display: block;
  margin-left: auto;

  @media (min-width: ${variables.screenMedium}) {
    display: none;
  }

  &:hover,
  &:focus {
    outline: 0;
    span {
      background-color: white;
      &:before,
      &:after {
        background-color: white;
      }
    }
  }
`;

const Hamburger = styled.span`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease;
  width: 30px;
  height: 4px;
  border-radius: 4px;
  background-color: white;
  position: relative;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    background-color: white;
    position: absolute;
    left: 0;
    transform-origin: 50% 50%;
    transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:before {
    top: 9px;
  }
  &:after {
    top: -9px;
  }
`;

/**
 * Header component for app layout. Supports app name, username and avatar as props. Add links as children.
 *
 * At screen sizes less than 1100px the links are moved into a mobile menu toggled by a burger icon button to play nice with smaller devices.
 */
class Header extends React.Component {
  render() {
    const { appName, children, rightAlignedChildren } = this.props;
    return (
      <Bar>
        <AppName>{appName}</AppName>
        {children}
        <RightAlignedChildren>{rightAlignedChildren}</RightAlignedChildren>
        <MobileMenuToggle htmlFor="mobileMenuToggle">
          <Hamburger />
        </MobileMenuToggle>
      </Bar>
    );
  }
}

Header.propTypes = {
  /** Text for page title or app name. */
  appName: PropTypes.node,
  /** Navigation elements to be rendered after the app name. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Right aligned elements that are not navigation menu items, eg Account or Settings elements. */
  rightAlignedChildren: PropTypes.node
};

export { Avatar, LoggedInAs, UserName, Tenant };

/** @component */
export default Header;
