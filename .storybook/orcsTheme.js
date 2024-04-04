import { create } from "@storybook/theming/create";
import { colors } from "../lib/systemtheme";

export default create({
  base: "light",
  brandTitle: "Orcs Design System",
  brandUrl: "https://orchestrated-io.github.io/orcs-design-system",
  brandImage:
    "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/60f7c55ecbc1d945a25c93ec_logo__orcsdesignsystem.png",
  brandTarget: "_self",
  colorPrimary: colors.primary,
  colorSecondary: colors.primaryDark,

  // UI
  appBg: colors.greyLightest,
  appContentBg: colors.white,
  appPreviewBg: colors.white,
  appBorderColor: colors.primary,
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: colors.black,
  textInverseColor: colors.white,

  // Toolbar default and active colors
  barTextColor: colors.white,
  barSelectedColor: colors.primaryDarkest,
  barBg: colors.primary,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4
});
