import { create } from "@storybook/theming/create";
import colours from "../lib/colours";

export default create({
  base: "light",

  colorPrimary: colours.primary,
  colorSecondary: colours.primaryDark,

  // UI
  appBg: colours.greyLightest,
  appContentBg: colours.white,
  appBorderColor: colours.primary,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: colours.black,
  textInverseColor: colours.white,

  // Toolbar default and active colors
  barTextColor: colours.white,
  barSelectedColor: colours.primaryDarkest,
  barBg: colours.primary,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Orca Design System - version Orcs",
  brandUrl: "https://orchestrated-io.github.io/orca-design-system",
  brandImage: "https://orchestrated.io/images/logo__orcsdesignsystem.png"
});
