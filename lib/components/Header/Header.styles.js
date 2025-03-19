import styled from "styled-components";
import { space, layout } from "styled-system";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import Box from "../Box";
import Flex from "../Flex";

export const Bar = styled("header").attrs((props) => ({
  "data-testid": props.dataTestId
}))(
  (props) => ({ height: themeGet("appScale.newNavBarSize")(props) }),
  css({
    width: "100%",
    zIndex: 12,
    position: "sticky",
    top: "0",
    display: "flex",
    alignItems: "center",
    bg: "white",
    gap: "r",
    px: "r"
  }),
  space
);

export const AppName = styled("div")(
  (props) =>
    css({
      background: "transparent",
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: ["0", "0", "0", "r"],
      height: themeGet("appScale.sideNavSize")(props),
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      color: themeGet("colors.greyDarkest")(props),
      img: {
        display: "block",
        height: themeGet("appScale.navBarLogoSize")(props),
        maxHeight: themeGet("appScale.navBarLogoSize")(props),
        width: "auto"
      },
      svg: {
        display: "block",
        height: themeGet("appScale.navBarLogoSize")(props),
        maxHeight: themeGet("appScale.navBarLogoSize")(props),
        width: "auto"
      },
      a: {
        display: "block",
        fontSize: themeGet("fontSizes.1")(props),
        fontWeight: themeGet("fontWeights.2")(props),
        color: themeGet("colors.greyDarkest")(props)
      }
    }),
  space
);

export const Separator = styled(Box)(
  (props) =>
    css({
      width: "1px",
      height: "75%",
      bg: themeGet("colors.greyLight")(props)
    }),
  space
);

export const SearchContainer = styled("div")(
  (props) =>
    css({
      maxWidth: "550px",
      marginLeft: "auto",
      height: themeGet("appScale.sideNavSize")(props),
      flex: "1 1 auto",
      borderRadius: themeGet("radii.2")(props)
    }),
  space,
  layout
);

export const UserMenuToggle = styled("button")((props) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    cursor: "pointer",
    border: "none",
    appearance: "none",
    bg: "transparent",
    color: themeGet("colors.greyDark")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: themeGet("fontWeights.2")(props),
    "&:focus, &:hover": {
      outline: "none"
    }
  })
);

export const AvatarBorder = styled(Box)(
  css({
    background:
      "linear-gradient(135deg, rgba(0,145,234,1) 0%, rgba(155,81,224,1) 100%)"
  })
);

export const UserMenuContainer = styled(Box)(
  css({
    position: "relative"
  })
);

export const IconContainer = styled(Flex)(
  css({
    position: "absolute",
    bottom: "0",
    right: "0",
    height: "15px",
    width: "15px",
    background:
      "linear-gradient(135deg, rgba(0,145,234,1) 0%, rgba(155,81,224,1) 100%)"
  })
);

export const UserMenuContent = styled(Box)((props) =>
  css({
    position: "absolute",
    gap: "s",
    top: "calc(100% + 8px)",
    right: "0",
    zIndex: themeGet("zIndices.2")(props),
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? "translateY(0)" : "translateY(-10px)",
    pointerEvents: props.isOpen ? "all" : "none",
    transition: "opacity 0.3s ease, transform 0.3s ease"
  })
);
