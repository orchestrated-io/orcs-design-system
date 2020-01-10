import { create } from "@storybook/theming/create";
import colours from "../lib/colours";
import orcsLogo from '../lib/assets/Images/orcs.png';

export default create({
  base: "light",

  colorPrimary: colours.primary,
  colorSecondary: colours.primaryDark,

  // UI
  appBg: colours.greyLightest,
  appContentBg: colours.white,
  appBorderColor: colours.primaryLightest,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: colours.black,
  textInverseColor: "colours.white,

  // Toolbar default and active colors
  barTextColor: colours.white,
  barSelectedColor: colours.primaryDarkest,
  barBg: colours.primary,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Orcs Design System",
  brandUrl: "#",
  brandImage: orcsLogo
});
