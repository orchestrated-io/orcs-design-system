import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

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
  background: ${theme.greyDarkest};

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
  color: ${theme.white};
  border-right: solid 1px ${theme.white.fade(0.8)};
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
  color: ${theme.white};
`;

const Tenant = styled.small`
  display: block;
  color: ${theme.white};
`;

const LogoutLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: ${variables.defaultTransition};
  font-weight: 600;
  color: ${theme.white};

  &:hover,
  &:focus {
    outline: none;
    color: ${theme.warning};
  }
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

class Navbar extends React.Component {
  render() {
    const {
      appName,
      children,
      rightAlignedChildren
    } = this.props;
    return (
      <Bar>
        <AppName>{appName}</AppName>
        {children}
        <RightAlignedChildren>
          {rightAlignedChildren}
        </RightAlignedChildren>
        <MobileMenuToggle htmlFor="mobileMenuToggle">
          <Hamburger />
        </MobileMenuToggle>
      </Bar>
    );
  }
}

/** @component */
export default { Navbar, Avatar, LoggedInAs, UserName, Tenant, LogoutLink };
