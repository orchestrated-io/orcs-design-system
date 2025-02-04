import styled from "styled-components";
import { space, layout } from "styled-system";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import Box from "../Box";

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
    bg: "transparent",
    gap: "r",
    p: "r"
  }),
  space
);

export const AppName = styled("div")(
  (props) =>
    css({
      background: themeGet("colors.white")(props),
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: ["0", "0", "0", "s"],
      px: "s",
      height: themeGet("appScale.sideNavSize")(props),
      borderRadius: themeGet("radii.2")(props),
      border: `1px solid ${themeGet("colors.greyLight")(props)}`,
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      color: themeGet("colors.greyDarkest")(props),
      img: {
        height: "100%",
        maxHeight: themeGet("appScale.navBarLogoSize")(props),
        width: "auto"
      },
      svg: {
        height: "100%",
        maxHeight: themeGet("appScale.navBarLogoSize")(props),
        width: "auto"
      },
      a: {
        fontSize: themeGet("fontSizes.1")(props),
        fontWeight: themeGet("fontWeights.2")(props),
        color: themeGet("colors.greyDarkest")(props)
      }
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
    gap: "xs",
    padding: "0",
    cursor: "pointer",
    border: "none",
    appearance: "none",
    bg: "transparent",
    color: themeGet("colors.greyDark")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: themeGet("fontWeights.2")(props),
    "svg path": {
      transition: "fill 300ms ease-in-out"
    },
    "&:focus, &:hover": {
      outline: "none",
      "svg path": {
        fill: themeGet("colors.primary")(props)
      }
    }
  })
);

export const AvatarBorder = styled(Box)(
  css({
    background:
      "linear-gradient(0deg, rgba(155,81,224,1) 0%, rgba(0,145,234,1) 100%)"
  })
);

export const UserMenuContainer = styled(Box)((props) =>
  css({
    borderRadius: `calc(${themeGet("appScale.sideNavSize")(
      props
    )} / 2) ${themeGet("radii.2")(props)} ${themeGet("radii.2")(
      props
    )} calc(${themeGet("appScale.sideNavSize")(props)} / 2)`,
    position: "relative",
    height: themeGet("appScale.sideNavSize")(props)
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
