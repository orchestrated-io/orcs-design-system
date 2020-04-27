import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import variables from "../../variables";
import Avatar from "../Avatar/";
import Icon from "../Icon";
import Spacer from "../Spacer";
import StyledLink from "../StyledLink/";
import Popover from "../Popover/";
import { css } from "@styled-system/css";
import themeGet from "@styled-system/theme-get";
import systemtheme, { mediaQueries } from "../../systemtheme";

const Bar = styled("header")(
  props => ({ height: themeGet("appScale.navBarSize")(props) }),
  css({
    width: "100%",
    zIndex: 4,
    position: "sticky",
    top: "0",
    display: "flex",
    alignItems: "center",
    py: 0,
    px: 4,
    bg: "black",
    "> a": {
      display: ["none", "none", "none", "block", "block"]
    },
    "> div": {
      display: ["none", "none", "none", "flex", "flex"]
    }
  }),
  space
);

const AppName = styled("div")(
  props => ({
    height: themeGet("appScale.navBarSize")(props),
    lineHeight: themeGet("appScale.navBarSize")(props)
  }),
  css({
    display: "flex",
    alignItems: "center",
    fontSize: 3,
    lineHeight: 1,
    pr: 4,
    color: "white",
    borderRightStyle: "solid",
    borderRightColor: "white20",
    borderRightWidth: 1
  }),
  space
);

const RightAlignedChildren = styled("div")(
  css({
    ml: "auto",
    alignItems: "center"
  }),
  space,
  layout
);

const MobileMenuToggle = styled.label`
  z-index: 3;
  cursor: pointer;
  user-select: none;
  background: none;
  border: none;
  padding-bottom: 7px;
  display: block;
  margin-left: auto;

  ${mediaQueries.screenL} {
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

const MobileNavToggle = styled.input`
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
  ~ header,
  ~ div,
  ~ main {
    transition: ${systemtheme.transition.transitionDefault};
  }
  &:checked {
    + div > a {
      opacity: 1;
      transform: translateX(0);
      :nth-of-type(1) { transition-delay: 0.10s; }
      :nth-of-type(2) { transition-delay: 0.20s; }
      :nth-of-type(3) { transition-delay: 0.30s; }
      :nth-of-type(4) { transition-delay: 0.40s; }
      :nth-of-type(5) { transition-delay: 0.50s; }
      :nth-of-type(6) { transition-delay: 0.60s; }
      :nth-of-type(7) { transition-delay: 0.70s; }
      :nth-of-type(8) { transition-delay: 0.80s; }
      :nth-of-type(9) { transition-delay: 0.90s; }
      :nth-of-type(10) { transition-delay: 1.0s; }
      :nth-of-type(11) { transition-delay: 1.1s; }
      }
    /* Mobile menu */
    + div {
      transform: translateX(-250px);
    }
    ~ main {
      transform: translateX(-250px);
    }
    ~ header {
      transform: translateX(-250px);
      /* Hamburger */
      span {
        background-color: transparent !important; /* fade away the middle line */
        &:hover,
        &:focus {
          background-color: transparent !important;
        }
        &:before,
        &:after {
          transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
          top: 0;
          width: 30px;
        }
        &:before {
          transform: rotate3d(0,0,1,45deg) scale(1.1);
        }
        &:after {
          transform: rotate3d(0,0,1,-45deg) scale(1.1);
        }
      }
    }
    /* Overlay */
    ~ label {
      z-index: 4;
      opacity: 1;
    }
  }
}
`;

const MobileNavMenu = styled.div`
  position: fixed;
  height: 100vh;
  right: -250px;
  top: 0;
  width: 250px;
  background: #333;
  z-index: 5;
  transition: ${systemtheme.transition.transitionDefault};

  > div {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: ${systemtheme.space[4]}px;
    margin-bottom: ${systemtheme.space[3]}px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    img {
      display: block;
      height: 40px;
      width: 40px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }

  a {
    display: block;
    padding: ${variables.defaultSpacingHalf} ${variables.defaultSpacing};
    opacity: 0;
    transform: translateX(100px);
    transition: ${systemtheme.transition.transitionDefault};
  }
`;

const Overlay = styled.label`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  transition: ${systemtheme.transition.transitionDefault};
`;

/**
 * Header component for global app navigation.
 *
 * At screen sizes less than 1100px the links are instead moved into a mobile menu toggled by a burger icon button to play nice with smaller devices.
 */
export default function Header({
  appName,
  userName,
  avatarSource,
  children,
  clientInfo,
  logoutFunction,
  rightAlignedLink,
  theme
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Bar theme={theme}>
          <AppName>{appName}</AppName>
          <Spacer ml={4}>{children}</Spacer>
          <RightAlignedChildren>
            <Spacer ml={4}>
              {rightAlignedLink}
              <Popover
                direction="bottom"
                width="160px"
                textAlign="center"
                text={clientInfo}
              >
                <Avatar
                  type="inverted"
                  sizing="small"
                  title={userName}
                  image={avatarSource}
                  theme={theme}
                />
              </Popover>
              {logoutFunction && (
                <StyledLink white bold onClick={logoutFunction}>
                  <Icon icon={["fas", "lock"]} colour="white" />
                  Logout
                </StyledLink>
              )}
            </Spacer>
          </RightAlignedChildren>

          <MobileMenuToggle htmlFor="mobileMenuToggle" theme={theme}>
            <Hamburger />
          </MobileMenuToggle>
        </Bar>
        <MobileNavToggle type="checkbox" id="mobileMenuToggle" />
        <MobileNavMenu>
          <Avatar
            type="inverted"
            sizing="small"
            title={userName}
            image={avatarSource}
            theme={theme}
          />
          {children}
          {rightAlignedLink}
          {logoutFunction && (
            <StyledLink white bold onClick={logoutFunction}>
              <Icon icon={["fas", "lock"]} colour="white" />
              Logout
            </StyledLink>
          )}
        </MobileNavMenu>
        <Overlay htmlFor="mobileMenuToggle" />
      </ThemeProvider>
    </>
  );
}

Header.propTypes = {
  /** Text for app name. Can be a plain text string or an svg logo */
  appName: PropTypes.node,
  /** Text for username. */
  userName: PropTypes.node,
  /** Source path for avatar image. */
  avatarSource: PropTypes.node,
  /** String of text for additional client info. */
  clientInfo: PropTypes.node,
  /** Function for what should happen when logout link is clicked */
  logoutFunction: PropTypes.func,
  /** Can specify a link that will be rendered on the right side of the header */
  rightAlignedLink: PropTypes.node,
  /** Applies the chosen theme to the entire header. */
  theme: PropTypes.object,
  /** Navigation links are rendered as child components. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Header.defaultProps = {
  theme: systemtheme
};
