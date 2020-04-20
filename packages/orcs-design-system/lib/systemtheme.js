import { rgba, lighten, darken } from "polished";

// FONTS
export const fonts = {
  main: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
};
export const font = fonts.main;
export const fontFamilies = fonts;
export const fontSizes = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "48px",
  "64px"
];
export const fontWeights = [300, 400, 600];
export const lineHeights = [1, 1.5, 2];

// Z-AXIS spec
export const zIndex = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// SPACING
export const space = [
  0,
  "2px",
  "4px",
  "8px",
  "16px",
  "24px",
  "32px",
  "64px",
  "128px",
  "256px",
  "512px"
];

// COLOUR PALETTE
const black = "#000";
const white = "#fff";
const grey = "#90979A"; // Base grey - Mainly used for UI elements like backgrounds, muted text, icons, dividers or borders
const primary = "#30ABD6"; // Base primary brand colour (blue) - Mainly used for buttons, links and selected states
// const secondary = "purple"; Introduce new secondary colour maybe purple when we re-design our colour palette
// const tertiary = "orange"; Introduce new tertiary colour maybe orange when we re-design our colour palette
const success = "#ACD036"; // Base brand success colour (green) - Mainly used to indicate success, status=good, valid, add, or save states
const warning = "#EDC652"; // Base brand warning colour - Mainly used to indicate warnings, slipping or near due states
const danger = "#D42A59"; // Base brand danger/error colour - Mainly used to indicate error, status=bad, at risk or over due states

export const colors = {
  /* Greyscale */
  black,
  black90: rgba(black, 0.9),
  black80: rgba(black, 0.8),
  black70: rgba(black, 0.7),
  black60: rgba(black, 0.6),
  black50: rgba(black, 0.5),
  black40: rgba(black, 0.4),
  black30: rgba(black, 0.3),
  black20: rgba(black, 0.2),
  black10: rgba(black, 0.1),
  white,
  white90: rgba(white, 0.9),
  white80: rgba(white, 0.8),
  white70: rgba(white, 0.7),
  white60: rgba(white, 0.6),
  white50: rgba(white, 0.5),
  white40: rgba(white, 0.4),
  white30: rgba(white, 0.3),
  white20: rgba(white, 0.2),
  white10: rgba(white, 0.1),
  grey,
  greyLight: lighten(0.15, grey),
  greyLighter: lighten(0.25, grey),
  greyLightest: lighten(0.35, grey),
  greyDark: darken(0.15, grey),
  greyDarker: darken(0.25, grey),
  greyDarkest: darken(0.35, grey),
  /* Colours */
  primary,
  primaryLight: lighten(0.15, primary),
  primaryLighter: lighten(0.25, primary),
  primaryLightest: lighten(0.4, primary),
  primaryDark: darken(0.1, primary),
  primaryDarker: darken(0.25, primary),
  primaryDarkest: darken(0.35, primary),
  success,
  successLight: lighten(0.15, success),
  successLighter: lighten(0.25, success),
  successLightest: lighten(0.4, success),
  successDark: darken(0.1, success),
  successDarker: darken(0.25, success),
  successDarkest: darken(0.35, success),
  warning,
  warningLight: lighten(0.15, warning),
  warningLighter: lighten(0.25, warning),
  warningLightest: lighten(0.3, warning),
  warningDark: darken(0.1, warning),
  warningDarker: darken(0.25, warning),
  warningDarkest: darken(0.35, warning),
  danger,
  dangerLight: lighten(0.15, danger),
  dangerLighter: lighten(0.25, danger),
  dangerLightest: lighten(0.4, danger),
  dangerDark: darken(0.1, danger),
  dangerDarker: darken(0.25, danger),
  dangerDarkest: darken(0.35, danger)
};

// BORDERS
export const radii = [0, "2px", "6px"];
export const borderWidths = [0, "1px", "2px", "3px"];

// SHADOWS
export const shadows = { boxDefault: `0 2px 5px 0 ${colors.black10}` };

// ANIMATION
export const transition = "all 200ms ease-in-out";

// RESPONSIVE MEDIA BREAKPOINTS
export const breakpoints = ["450px", "675px", "900px", "1100px", "1400px"];
export const mediaQueries = {
  screenXS: `@media screen and (min-width: ${breakpoints[0]})`,
  screenS: `@media screen and (min-width: ${breakpoints[1]})`,
  screenM: `@media screen and (min-width: ${breakpoints[2]})`,
  screenL: `@media screen and (min-width: ${breakpoints[3]})`,
  screenXL: `@media screen and (min-width: ${breakpoints[4]})`
};

export default {
  fonts,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  shadows,
  colors,
  transition
};
