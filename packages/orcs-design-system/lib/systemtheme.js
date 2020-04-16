import { createGlobalStyle } from "styled-components";
import { rgba, lighten, darken } from "polished";

// FONTS
export const fonts = {
  main: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
};
export const font = fonts.main;
export const fontFamilies = fonts;
export const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64];
export const fontWeights = [300, 400, 600];
export const lineHeights = [1, 1.5, 2];

// Z-AXIS spec
export const zIndex = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const spaceScale = [0, 2, 4, 8, 16, 24, 32, 64, 128, 256, 512];

export const space = {
  ...spaceScale,
  xxs: spaceScale[1],
  xs: spaceScale[2],
  sm: spaceScale[3],
  md: spaceScale[4],
  lg: spaceScale[5],
  xl: spaceScale[6],
  xxl: spaceScale[7]
};

// BORDERS
export const radii = [0, 2, 6];

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
  primaryLightest: lighten(0.35, primary),
  primaryDark: darken(0.15, primary),
  primaryDarker: darken(0.25, primary),
  primaryDarkest: darken(0.35, primary),
  success,
  successLight: lighten(0.15, success),
  successLighter: lighten(0.25, success),
  successLightest: lighten(0.35, success),
  successDark: darken(0.15, success),
  successDarker: darken(0.25, success),
  successDarkest: darken(0.35, success),
  warning,
  warningLight: lighten(0.15, warning),
  warningLighter: lighten(0.25, warning),
  warningLightest: lighten(0.3, warning),
  warningDark: darken(0.15, warning),
  warningDarker: darken(0.25, warning),
  warningDarkest: darken(0.35, warning),
  danger,
  dangerLight: lighten(0.15, danger),
  dangerLighter: lighten(0.25, danger),
  dangerLightest: lighten(0.35, danger),
  dangerDark: darken(0.15, danger),
  dangerDarker: darken(0.25, danger),
  dangerDarkest: darken(0.35, danger)
};

// GLOBAL STYLES
// For browser reset, setting global box sizing and font sizing etc.

export const GlobalStyles = createGlobalStyle`

/* apply a natural box layout model to all elements, but allowing components to change */
html {
    box-sizing: border-box;
    line-height: 1.15; /* 1 */
}
*, *:before, *:after {
    box-sizing: inherit;
}

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
}

/* Import custom fonts */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i');

body {
    font-family: ${fonts.main};
    color: ${colors.greyDarkest};
}

/* set rem text size and styling */
html { font-size: 62.5%; }
body { font-size: 16px; font-size: 1.6rem; }

main {
  display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
}

section {
    height: calc(100vh - 60px);
    width: 100%;
	overflow-y: scroll;
}

img {
    border-style: none;
}

small {
    font-size: 80%;
}

p {
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: ${fontWeights[1]};
  font-family: ${fonts.main};
  margin: 0;
}

h1 {
  font-size: ${fontSizes[6]}px
}

h2 {
  font-size: ${fontSizes[5]}px
}

h3 {
  font-size: ${fontSizes[4]}px
}

h4 {
  font-size: ${fontSizes[3]}px
}

h5 {
  font-size: ${fontSizes[2]}px
}

h6 {
  font-size: ${fontSizes[1]}px
}

/* Animations */
@keyframes checkboxOn {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
}
@keyframes checkboxOff {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }

  25% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -4px;
    margin-left: 6px;
    width: 0px;
    height: 0px;
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px,
      0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 0px inset;
  }
}
@keyframes rippleOn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
@keyframes rippleOff {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
@keyframes loadingSpin {
  to {
      transform: rotate(1turn);
  }
}
@keyframes expandWidth {
   0% { width: 0; }
}
`;

export default {
  fonts,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  colors,
  transition
};
