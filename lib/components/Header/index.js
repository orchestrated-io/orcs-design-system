import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant } from "styled-system";
import Avatar from "../Avatar";
import Box from "../Box";
import Flex, { FlexItem } from "../Flex";
import Icon from "../Icon";
import Spacer from "../Spacer";
import { Small } from "../Typography";
import StyledLink from "../StyledLink/";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { themeGet } from "@styled-system/theme-get";

const Bar = styled("header")
  .withConfig({
    shouldForwardProp
  })
  .attrs((props) => ({
    "data-testid": props.dataTestId
  }))(
  (props) => ({ height: themeGet("appScale.navBarSize")(props) }),
  (props) =>
    css({
      width: "100%",
      zIndex: 12,
      position: "sticky",
      top: "0",
      display: "flex",
      alignItems: "center",
      py: 0,
      px: 4,
      bg: themeGet("colors.black")(props),
      "a[class^='StyledLink'], a[class*=' StyledLink'], div[class^='Badge'], div[class*=' Badge']": {
        display: ["none", "none", "none", "block", "block"]
      }
    }),
  variant({
    variants: {
      default: {},
      search: {
        display: "grid",
        gridGap: "r",
        gridTemplateColumns: [
          "1fr 2fr 2fr 1fr",
          "1fr 2fr 2fr 1fr",
          "1fr 2fr 2fr 1fr",
          "1fr 1.5fr 1.5fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1.5fr 1fr 1fr 1.5fr"
        ]
      }
    }
  }),
  space
);

const AppName = styled("div")(
  (props) =>
    css({
      height: themeGet("appScale.navBarSize")(props),
      display: "flex",
      alignItems: "center",
      fontSize: themeGet("fontSizes.3")(props),
      pr: 4,
      color: themeGet("colors.white")(props),
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

const MobileMenuToggle = styled("label")((props) =>
  css({
    zIndex: 4,
    cursor: "pointer",
    userSelect: "none",
    background: "none",
    border: "none",
    position: "relative",
    paddingBottom: "7px",
    display: "block",
    "&:hover, &:focus": {
      outline: "0",
      span: {
        bg: themeGet("colors.white")(props),
        "&:before, &:after": {
          bg: themeGet("colors.white")(props)
        }
      }
    }
  })
);

const Hamburger = styled("span")((props) =>
  css({
    "::before": {
      top: "calc(8px * 1.25)",
      position: "absolute",
      content: "''",
      display: "inline-block",
      width: "30px",
      height: "4px",
      borderRadius: themeGet("radii.2")(props),
      bg: themeGet("colors.white")(props),
      left: 0,
      transformOrigin: "50% 50%",
      transition:
        "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    "::after": {
      position: "absolute",
      top: "calc(8px * -1.25)",
      content: "''",
      display: "inline-block",
      width: "30px",
      height: "4px",
      borderRadius: themeGet("radii.2")(props),
      bg: themeGet("colors.white")(props),
      left: 0,
      transformOrigin: "50% 50%",
      transition:
        "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    display: "inline-block",
    cursor: "pointer",
    userSelect: "none",
    transition: themeGet("transition.transitionDefault")(props),
    width: "30px",
    height: "4px",
    borderRadius: themeGet("radii.2")(props),
    bg: themeGet("colors.white")(props),
    position: "relative"
  })
);

const MobileNavToggle = styled("input")((props) =>
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
      transition: themeGet("transition.transitionDefault")(props)
    },
    "&:checked": {
      "~ [class^='Header__MobileNavMenu'], ~ [class*=' Header__MobileNavMenu']": {
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
            width: "24px",
            transform: "rotate3d(0,0,1,45deg) scale(1.1)"
          },
          "::after": {
            transition:
              "top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)",
            top: 0,
            width: "24px",
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

const MobileNavMenu = styled("div")((props) =>
  css({
    position: "fixed",
    overflowY: "auto",
    height: "100vh",
    right: "-" + themeGet("appScale.mobileNavMenuWidth")(props),
    top: 0,
    width: themeGet("appScale.mobileNavMenuWidth")(props),
    bg: themeGet("colors.greyDarkest")(props),
    zIndex: 6,
    transition: themeGet("transition.transitionDefault")(props),
    "[class^='StyledLink'], [class*=' StyledLink']": {
      color: themeGet("colors.white")(props),
      display: "block",
      fontWeight: themeGet("fontWeights.2")(props),
      padding: "r",
      borderRadius: themeGet("radii.2")(props),
      "&:hover, &:focus": {
        textDecoration: "none",
        backgroundColor: themeGet("colors.primary")(props)
      }
    }
  })
);

const InternalAppSwitcher = styled("div")((props) =>
  css({
    borderTop: "solid 1px rgba(255,255,255,0.3)",
    paddingTop: "s",
    marginTop: "s",
    "[class^='Small'], [class*=' Small']": {
      display: "block",
      fontWeight: themeGet("fontWeights.1")(props),
      marginTop: "xs"
    }
  })
);

const ExternalAppSwitcher = styled("div")((props) =>
  css({
    borderTop: "solid 1px rgba(255,255,255,0.3)",
    paddingTop: "s",
    marginTop: "s",
    "[class^='Small'], [class*=' Small']": {
      display: "block",
      fontWeight: themeGet("fontWeights.1")(props),
      marginTop: "xs"
    }
  })
);

const Theme = styled("div")((props) =>
  css({
    borderTop: "solid 1px rgba(255,255,255,0.3)",
    padding: "r",
    paddingTop: "s",
    marginTop: "s",
    "[class^='Small'], [class*=' Small']": {
      display: "block",
      fontWeight: themeGet("fontWeights.1")(props),
      marginTop: "xs"
    }
  })
);

const RightAligned = styled("div")(
  css({
    marginLeft: "auto",
    marginRight: "r"
  })
);

const Overlay = styled("label")((props) =>
  css({
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    bg: themeGet("colors.black50")(props),
    zIndex: 0,
    opacity: "0",
    overflow: "hidden",
    transition: themeGet("transition.transitionDefault")(props)
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
  sideMenuContent,
  internalAppSwitcherContent,
  externalAppSwitcherContent,
  rightAlignedContent,
  logoutFunction,
  searchComponent,
  dataTestId,
  theme,
  variant,
  themeSwitcherContent
}) {
  const component = (
    <>
      <MobileNavToggle type="checkbox" id="mobileMenuToggle" />
      <Bar theme={theme} dataTestId={dataTestId} variant={variant}>
        <AppName variant={variant}>{appName}</AppName>
        <Spacer ml={4}>{children}</Spacer>
        {searchComponent && (
          <SearchContainer>{searchComponent}</SearchContainer>
        )}
        <Flex alignItems="center" ml="auto">
          {rightAlignedContent && (
            <RightAligned>{rightAlignedContent}</RightAligned>
          )}
          <FlexItem
            flex="1 0 auto"
            mr="r"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <Avatar
              type="inverted"
              sizing="small"
              title={userName}
              image={avatarSource}
              theme={theme}
            />
          </FlexItem>
          <MobileMenuToggle htmlFor="mobileMenuToggle" theme={theme}>
            <Hamburger id="hamburger-menu-icon" />
          </MobileMenuToggle>
        </Flex>
      </Bar>
      <MobileNavMenu>
        <Box m="s">
          <Box
            borderBottomWidth={1}
            borderBottomStyle="solid"
            borderBottomColor="white20"
            pt="s"
            pb="r"
            mb="s"
            display={["block", "block", "block", "none", "none"]}
          >
            <Avatar
              type="inverted"
              sizing="small"
              title={userName}
              image={avatarSource}
              theme={theme}
            />
          </Box>
          <Box display={["block", "block", "block", "none", "none"]}>
            {children}
          </Box>
          {sideMenuContent}
          {logoutFunction && (
            <StyledLink id="logoutButton" white bold onClick={logoutFunction}>
              <Icon icon={["fas", "lock"]} colour="white" mr="s" />
              Logout
            </StyledLink>
          )}
          {internalAppSwitcherContent && (
            <InternalAppSwitcher>
              <Small color="white60" px="r" py="s" display="block">
                Switch to:
              </Small>
              {internalAppSwitcherContent}
            </InternalAppSwitcher>
          )}
          {externalAppSwitcherContent && (
            <ExternalAppSwitcher>
              <Small color="white60" px="r" py="s" display="block">
                External apps:
              </Small>
              {externalAppSwitcherContent}
            </ExternalAppSwitcher>
          )}
          {themeSwitcherContent && (
            <Theme>
              <Small color="white60" pt="s" pb="r" display="block">
                Switch theme:
              </Small>
              {themeSwitcherContent}
            </Theme>
          )}
        </Box>
      </MobileNavMenu>
      <Overlay htmlFor="mobileMenuToggle" />
    </>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
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
  /** sideMenuContent are links or other content that can be specified and will appear only in the slide out side menu */
  sideMenuContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** InternalAppSwitcherContent are links or other content that can be specified and will appear only in the slide out side menu */
  internalAppSwitcherContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** ExternalAppSwitcherContent are links or other content that can be specified and will appear only in the slide out side menu */
  externalAppSwitcherContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** RightAlignedContent are links or other content that can be specified and will be positioned on the right side of the header */
  rightAlignedContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies alternate versions of the header */
  variant: PropTypes.oneOf(["search"]),
  /** Allows for use of the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Theme related props **/
  themeSwitcherContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
