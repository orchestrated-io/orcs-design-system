import { rgba, lighten, darken, desaturate, saturate } from "polished";

// FONTS
export const fonts = {
  main: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
};
export const font = fonts.main;
export const fontFamilies = fonts;
export const fontSizes = [
  "1.1rem",
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.2rem",
  "2.6rem",
  "3.0rem",
  "3.4rem",
  "4.6rem",
  "6.2rem"
];
export const fontWeights = [300, 400, 600];
export const lineHeights = [1, 1.5, 2];

// Z-AXIS spec
export const zIndices = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];

// SPACING
export const space = [
  0,
  "1px",
  "2px",
  "6px",
  "12px",
  "16px",
  "24px",
  "40px",
  "100px",
  "150px",
  "300px"
];

space.xxs = space[1];
space.xs = space[2];
space.s = space[3];
space.r = space[4];
space.l = space[5];
space.xl = space[6];
space.xxl = space[7];
space.xxxl = space[8];
space.between = "10px";

// SIZES (for LAYOUT properties)
// Half these values - Done
export const sizes = [
  0,
  "1px",
  "2px",
  "4px",
  "8px",
  "12px",
  "16px",
  "32px",
  "64px",
  "128px",
  "256px"
];

sizes.xxs = sizes[1];
sizes.xs = sizes[2];
sizes.s = sizes[3];
sizes.r = sizes[4];
sizes.l = sizes[5];
sizes.xl = sizes[6];
sizes.xxl = sizes[7];
sizes.xxxl = sizes[8];

// OLD COLOUR PALETTE
// const black = "#000";
// const white = "#fff";
// const grey = "#90979A"; // Base grey - Mainly used for UI elements like backgrounds, muted text, icons, dividers or borders
// const primary = "#30ABD6"; // Potential new colour: #2a5ec1. Base primary brand colour (blue) - Mainly used for buttons, links and selected states
// const secondary = "#8E41F0"; // Change to #7211ED with new colour palette. Potential new purple colour. Introduce new secondary colour maybe purple when we re-design our colour palette
// const success = "#ACD036"; // Base brand success colour (green) - Mainly used to indicate success, status=good, valid, add, or save states
// // const successDesaturated = desaturate(0.1, success); // This is because the lighter versions of success were too saturated and 'minty' coloured.
// const warning = "#EDC652"; // Base brand warning colour - Mainly used to indicate warnings, slipping or near due states
// const danger = "#D42A59"; // Base brand danger/error colour - Mainly used to indicate error, status=bad, at risk or over due states

// NEW COLOUR PALETTE
const black = "#000";
const white = "#fff";
const grey = "#90979A"; // Base grey - Mainly used for UI elements like backgrounds, muted text, icons, dividers or borders
const primary = "#0091EA"; // Potential new colour: #2a5ec1. Base primary brand colour (blue) - Mainly used for buttons, links and selected states
const secondary = "#9B51E0"; // Change to #7211ED with new colour palette. Potential new purple colour. Introduce new secondary colour maybe purple when we re-design our colour palette
//const tertiary = "#FF9E44"; // A tertiary colour for limited use. Not sure if needed.
const success = "#1BC363"; // Base brand success colour (green) - Mainly used to indicate success, status=good, valid, add, or save states
const successDesaturated = desaturate(0.1, success); // This is because the lighter versions of success were too saturated and 'minty' coloured.
const warning = "#ffbc00"; // Base brand warning colour - Mainly used to indicate warnings, slipping or near due states
const warningSaturated = saturate(0.2, warning); // This is because the darker versions of warning were too under saturated and mustard looking.
const danger = "#EC465A"; // Base brand danger/error colour - Mainly used to indicate error, status=bad, at risk or over due states

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
  greyLight: lighten(0.2, grey),
  greyLighter: lighten(0.3, grey),
  greyLightest: lighten(0.35, grey),
  greyDark: darken(0.15, grey),
  greyDarker: darken(0.3, grey),
  greyDarkest: darken(0.4, grey),
  /* Colours */
  primary,
  primaryLight: lighten(0.2, primary),
  primaryLighter: lighten(0.35, primary),
  primaryLightest: lighten(0.45, primary),
  primaryDark: darken(0.1, primary),
  primaryDarker: darken(0.25, primary),
  primaryDarkest: darken(0.35, primary),
  primary10: rgba(primary, 0.1),
  primary20: rgba(primary, 0.2),
  primary30: rgba(primary, 0.3),
  primary40: rgba(primary, 0.4),
  primary50: rgba(primary, 0.5),
  primary60: rgba(primary, 0.6),
  primary70: rgba(primary, 0.7),
  primary80: rgba(primary, 0.8),
  primary90: rgba(primary, 0.9),
  secondary,
  secondaryLight: lighten(0.1, secondary),
  secondaryLighter: lighten(0.2, secondary),
  secondaryLightest: lighten(0.3, secondary),
  secondaryEvenLighter: lighten(0.35, secondary),
  secondaryDark: darken(0.1, secondary),
  secondaryDarker: darken(0.2, secondary),
  secondaryDarkest: darken(0.3, secondary),
  secondary10: rgba(secondary, 0.1),
  secondary20: rgba(secondary, 0.2),
  secondary30: rgba(secondary, 0.3),
  secondary40: rgba(secondary, 0.4),
  secondary50: rgba(secondary, 0.5),
  secondary60: rgba(secondary, 0.6),
  secondary70: rgba(secondary, 0.7),
  secondary80: rgba(secondary, 0.8),
  secondary90: rgba(secondary, 0.9),
  // tertiary,
  // tertiaryLight: lighten(0.1, tertiary),
  // tertiaryLighter: lighten(0.2, tertiary),
  // tertiaryLightest: lighten(0.3, tertiary),
  // tertiaryDark: darken(0.1, tertiary),
  // tertiaryDarker: darken(0.2, tertiary),
  // tertiaryDarkest: darken(0.3, tertiary),
  // tertiary10: rgba(tertiary, 0.1),
  // tertiary20: rgba(tertiary, 0.2),
  // tertiary30: rgba(tertiary, 0.3),
  // tertiary40: rgba(tertiary, 0.4),
  // tertiary50: rgba(tertiary, 0.5),
  // tertiary60: rgba(tertiary, 0.6),
  // tertiary70: rgba(tertiary, 0.7),
  // tertiary80: rgba(tertiary, 0.8),
  // tertiary90: rgba(tertiary, 0.9),
  success,
  // successLight: lighten(0.11, success),
  // successLighter: lighten(0.25, success),
  // successLightest: lighten(0.35, success),
  successLight: lighten(0.11, successDesaturated),
  successLighter: lighten(0.25, successDesaturated),
  successLightest: lighten(0.3, successDesaturated),
  successEvenLighter: lighten(0.45, successDesaturated),
  successDark: darken(0.1, success),
  successDarker: darken(0.2, success),
  successDarkest: darken(0.3, success),
  success10: rgba(success, 0.1),
  success20: rgba(success, 0.2),
  success30: rgba(success, 0.3),
  success40: rgba(success, 0.4),
  success50: rgba(success, 0.5),
  success60: rgba(success, 0.6),
  success70: rgba(success, 0.7),
  success80: rgba(success, 0.8),
  success90: rgba(success, 0.9),
  warning,
  warningLight: lighten(0.15, warning),
  warningLighter: lighten(0.25, warning),
  warningLightest: lighten(0.3, warning),
  warningDark: darken(0.05, warningSaturated),
  warningDarker: darken(0.2, warningSaturated),
  warningDarkest: darken(0.3, warningSaturated),
  warning10: rgba(warning, 0.1),
  warning20: rgba(warning, 0.2),
  warning30: rgba(warning, 0.3),
  warning40: rgba(warning, 0.4),
  warning50: rgba(warning, 0.5),
  warning60: rgba(warning, 0.6),
  warning70: rgba(warning, 0.7),
  warning80: rgba(warning, 0.8),
  warning90: rgba(warning, 0.9),
  danger,
  dangerLight: lighten(0.1, danger),
  dangerLighter: lighten(0.2, danger),
  dangerLightest: lighten(0.25, danger),
  dangerDark: darken(0.1, danger),
  dangerDarker: darken(0.25, danger),
  dangerDarkest: darken(0.35, danger),
  danger10: rgba(danger, 0.1),
  danger20: rgba(danger, 0.2),
  danger30: rgba(danger, 0.3),
  danger40: rgba(danger, 0.4),
  danger50: rgba(danger, 0.5),
  danger60: rgba(danger, 0.6),
  danger70: rgba(danger, 0.7),
  danger80: rgba(danger, 0.8),
  danger90: rgba(danger, 0.9)
};

// BORDERS
export const radii = [0, "2px", "6px"];
export const borderWidths = [0, "1px", "2px", "3px"];

// SHADOWS
export const shadows = {
  boxDefault: `0 2px 5px 0 ${colors.black10}`,
  thinOutline: `0 0 0 3px`
};

// ANIMATION
export const transition = { transitionDefault: "all 200ms ease-in-out" };

// RESPONSIVE MEDIA BREAKPOINTS
export const breakpoints = [
  "450px",
  "675px",
  "900px",
  "1100px",
  "1400px",
  "1900px"
];

export const mediaQueries = {
  screenXS: `@media screen and (min-width: ${breakpoints[0]})`,
  screenS: `@media screen and (min-width: ${breakpoints[1]})`,
  screenM: `@media screen and (min-width: ${breakpoints[2]})`,
  screenL: `@media screen and (min-width: ${breakpoints[3]})`,
  screenXL: `@media screen and (min-width: ${breakpoints[4]})`,
  screenXXL: `@media screen and (min-width: ${breakpoints[5]})`
};

// APP-SPECIFIC DIMENSIONS

export const appScale = {
  navBarSize: "54px",
  sidebarMaxWidth: "360px",
  sidebarMaxWidthLarge: "450px",
  sidebarMobileHeight: "50vh",
  mobileNavMenuWidth: "250px"
};

export default {
  fonts,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  borderWidths,
  space,
  sizes,
  shadows,
  colors,
  breakpoints,
  transition,
  zIndices,
  appScale
};
