import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant } from "styled-system";
import Avatar from "../Avatar";
import Box from "../Box";
import Flex, { FlexItem } from "../Flex";
import Icon from "../Icon";
import Spacer from "../Spacer";
import StyledLink from "../StyledLink/";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import themeGet from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";

const Bar = styled("header")
  .withConfig({
    shouldForwardProp
  })
  .attrs(props => ({
    "data-testid": props.dataTestId
  }))(
  props => ({ height: themeGet("appScale.navBarSize")(props) }),
  css({
    width: "100%",
    zIndex: 12,
    position: "sticky",
    top: "0",
    display: "flex",
    alignItems: "center",
    py: 0,
    px: 4,
    bg: "black",
    "a[class^='StyledLink'], a[class*=' StyledLink'], div[class^='Badge'], div[class*=' Badge']": {
      display: ["none", "none", "none", "none", "block", "block"]
    }
  }),
  variant({
    variants: {
      default: {},
      search: {
        display: "grid",
        gridGap: "r",
        gridTemplateColumns: "1fr 1.5fr 1.5fr 1fr"
      }
    }
  }),
  space
);

const AppName = styled("div")(
  props =>
    css({
      height: themeGet("appScale.navBarSize")(props),
      display: "flex",
      alignItems: "center",
      fontSize: 3,
      pr: 4,
      color: "white",
      borderRightStyle: "solid",
      borderRightColor: "white20",
      borderRightWidth: 1,
      "a[class^='StyledLink'], a[class*=' StyledLink']": {
        display: "flex",
        alignItems: "center"
      }
    }),
  variant({
    variants: {
      default: {},
      search: {
        border: "none",
        pr: "0"
      }
    }
  }),
  space
);

const SearchContainer = styled("div")(
  css({
    gridColumn: "2 / 4",
    "a[class^='StyledLink'], a[class*=' StyledLink']": {
      display: "inline-block"
    }
  }),
  space,
  layout
);

const HeaderAvatar = styled(Avatar)(
  css({
    display: ["none", "none", "none", "none", "flex", "flex"]
  })
);
const MenuAvatarContainer = styled(Box)(
  css({
    display: ["block", "block", "block", "block", "none", "none"]
  })
);

const MobileMenuToggle = styled("label")(
  css({
    zIndex: 4,
    cursor: "pointer",
    userSelect: "none",
    background: "none",
    border: "none",
    pb: 3,
    display: "block",
    "&:hover, &:focus": {
      outline: "0",
      span: {
        bg: "white",
        "&:before, &:after": {
          bg: "white"
        }
      }
    }
  })
);

const Hamburger = styled("span")(props =>
  css({
    "::before": {
      top: "calc( " + themeGet("space.3")(props) + " * 1.25)",
      position: "absolute",
      content: "''",
      display: "inline-block",
      width: 6,
      height: 2,
      borderRadius: 2,
      bg: "white",
      left: 0,
      transformOrigin: "50% 50%",
      transition:
        "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    "::after": {
      position: "absolute",
      top: "calc( " + themeGet("space.3")(props) + " * (-1.25))",
      content: "''",
      display: "inline-block",
      width: 6,
      height: 2,
      borderRadius: 2,
      bg: "white",
      left: 0,
      transformOrigin: "50% 50%",
      transition:
        "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    display: "inline-block",
    cursor: "pointer",
    userSelect: "none",
    transition: "transitionDefault",
    width: 6,
    height: 2,
    borderRadius: 2,
    bg: "white",
    position: "relative"
  })
);

const MobileNavToggle = styled("input")(props =>
  css({
    opacity: "0",
    position: "absolute",
    margin: 0,
    zIndex: 0,
    width: 0,
    height: 0,
    overflow: "hidden",
    pointerEvents: "none",
    "~ header, ~ div, ~ main": {
      transition: "transitionDefault"
    },
    "&:checked": {
      "~ [class^='Header__MobileNavMenu'], ~ [class*=' Header__MobileNavMenu']": {
        "[class^='Spacer'], [class*=' Spacer']": {
          ":nth-of-type(1)": { transitionDelay: "0.10s" },
          ":nth-of-type(2)": { transitionDelay: "0.20s" },
          ":nth-of-type(3)": { transitionDelay: "0.30s" },
          ":nth-of-type(4)": { transitionDelay: "0.40s" },
          ":nth-of-type(5)": { transitionDelay: "0.50s" },
          ":nth-of-type(6)": { transitionDelay: "0.60s" },
          ":nth-of-type(7)": { transitionDelay: "0.70s" },
          ":nth-of-type(8)": { transitionDelay: "0.80s" },
          ":nth-of-type(9)": { transitionDelay: "0.90s" },
          ":nth-of-type(10)": { transitionDelay: "1s" },
          ":nth-of-type(11)": { transitionDelay: "1.10s" },
          opacity: "1",
          transform: "translateX(0px)"
        },
        transform:
          "translateX(-" + themeGet("appScale.mobileNavMenuWidth")(props) + ")"
      },
      "~ main": {
        transform:
          "translateX(-" + themeGet("appScale.mobileNavMenuWidth")(props) + ")"
      },
      "~ header": {
        transform:
          "translateX(-" + themeGet("appScale.mobileNavMenuWidth")(props) + ")"
      },
      /* Hamburger */
      "~ [class^='Header__Bar'], ~ [class*=' Header__Bar']": {
        "[class^='Header__Hamburger'], [class*=' Header__Hamburger']": {
          bg: "transparent" /* fade away the middle line */,
          "&:hover,&:focus": {
            bg: "transparent"
          },
          "::before": {
            transition:
              "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)",
            top: 0,
            width: 5,
            transform: "rotate3d(0,0,1,45deg) scale(1.1)"
          },
          "::after": {
            transition:
              "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)",
            top: 0,
            width: 5,
            transform: "rotate3d(0,0,1,-45deg) scale(1.1)"
          }
        }
      },
      /* Overlay */
      "~ label": {
        zIndex: 5,
        opacity: "1"
      }
    }
  })
);

const MobileNavMenu = styled("div")(props =>
  css({
    position: "fixed",
    height: "100vh",
    right: "-" + themeGet("appScale.mobileNavMenuWidth")(props),
    top: 0,
    width: themeGet("appScale.mobileNavMenuWidth")(props),
    bg: "#333",
    zIndex: 6,
    transition: "transitionDefault",
    "[class^='Spacer'], [class*=' Spacer']": {
      transform: "translateX(100px)",
      display: "block",
      px: 4,
      transition: "transitionDefault",
      opacity: "0"
    }
  })
);

const Overlay = styled("label")(
  css({
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    bg: "black50",
    zIndex: 0,
    opacity: "0",
    overflow: "hidden",
    transition: "transitionDefault"
  })
);

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
  logoutFunction,
  searchComponent,
  dataTestId,
  theme,
  variant
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MobileNavToggle type="checkbox" id="mobileMenuToggle" />
        <Bar theme={theme} dataTestId={dataTestId} variant={variant}>
          <AppName variant={variant}>{appName}</AppName>
          <Spacer ml={4}>{children}</Spacer>
          {searchComponent && (
            <SearchContainer>{searchComponent}</SearchContainer>
          )}
          <Flex alignItems="center" ml="auto">
            <FlexItem flex="1 0 auto" mr="r">
              <HeaderAvatar
                type="inverted"
                sizing="small"
                title={userName}
                image={avatarSource}
                theme={theme}
              />
            </FlexItem>
            <MobileMenuToggle htmlFor="mobileMenuToggle" theme={theme}>
              <Hamburger />
            </MobileMenuToggle>
          </Flex>
        </Bar>
        <MobileNavMenu>
          <Spacer p="s" display="block">
            <MenuAvatarContainer
              borderBottomWidth={1}
              borderBottomStyle="solid"
              borderBottomColor="white20"
              pt="s"
              pb="r"
            >
              <Avatar
                type="inverted"
                sizing="small"
                title={userName}
                image={avatarSource}
                theme={theme}
              />
            </MenuAvatarContainer>
            {children}
            {logoutFunction && (
              <StyledLink white bold onClick={logoutFunction}>
                <Icon icon={["fas", "lock"]} colour="white" />
                Logout
              </StyledLink>
            )}
          </Spacer>
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
  /** Can specify a component to be used for searching */
  searchComponent: PropTypes.node,
  /** Applies the chosen theme to the entire header. */
  theme: PropTypes.object,
  /** Navigation links are rendered as child components. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies alternate versions of the header */
  variant: PropTypes.oneOf(["search"]),
  /** Allows for use of the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string
};

Header.defaultProps = {
  theme: systemtheme
};
