import { create } from "@storybook/theming/create";
import { colors } from "../lib/systemtheme";

export default create({
  base: "light",

  colorPrimary: colors.primary,
  colorSecondary: colors.primaryDark,

  // UI
  appBg: colors.greyLightest,
  appContentBg: colors.white,
  appBorderColor: colors.primary,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
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
  inputBorderRadius: 4,

  brandTitle: "Orca Design System - version Orcs",
  brandUrl: "https://orchestrated-io.github.io/orca-design-system",
  brandImage: "https://orchestrated.io/images/logo__orcsdesignsystem.png"
});
