import { createGlobalStyle } from "styled-components";
import colours from "./colours";

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
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${colours.greyDarkest};
}

body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    font-weight: 300;
    margin: 0;
}

h1 {
    font-size: 2.6rem;
}

h2 {
    font-size: 2.2rem;
}

h3 {
    font-size: 2rem;
}

h4 {
    font-size: 1.8rem;
}

h5 {
    font-size: 1.6rem;
}

h6 {
    font-size: 1.6rem;
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

export const fonts = {
  main: '"Open Sans", -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
};

export const font = fonts.main;
export const fontFamilies = fonts;

export const fontSizes = [12, 14, 16, 20, 24, 28, 32, 36, 48, 64];

export const lineHeights = [1, 1.5, 2];

export const fontWeights = [300, 400, 600];

export const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];

export const spacepx = {
  px0: "0",
  px1: "2px",
  px2: "4px",
  px3: "8px",
  px4: "16px",
  px5: "32px",
  px6: "64px",
  px7: "128px",
  px8: "256px",
  px9: "512px"
};

export const radii = [0, 2, 6];

export const radiipx = {
  px0: "0",
  px1: "2px",
  px2: "6px"
};

export const colors = {
  /* Greyscale */
  black: "#000000" /* Base black */,
  greyDarkest:
    "#111212" /* Usually used for main body text or dark backgrounds */,
  greyDarker:
    "#2F3234" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  greyDark:
    "#52595D" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  grey:
    "#90979A" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  greyLight:
    "#B5BBBE" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  greyLighter:
    "#D7DDDF" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  greyLightest:
    "#F2F5F5" /* Usually used for UI elements like backgrounds, muted text, icons, dividers or borders */,
  white: "#FFFFFF" /* Base white */,
  /* Blue */
  primaryDarkest:
    "#0A6889" /* Darkest version of main brand colour - Mainly used for status/priority/icon indicators */,
  primaryDark:
    "#1A89B0" /* Darker version of main brand colour - Mainly used for status/priority/icon indicators */,
  primary:
    "#30ABD6" /* Main brand colour - Mainly used for buttons, links and selected states */,
  primaryLight:
    "#55BCE1" /* Lighter version of main brand colour - Mainly used for status/priority/icon indicators */,
  primaryLightest:
    "#9CE0F8" /* Lightest version of main brand colour - Mainly used for status/priority/icon indicators */,
  /* Green */
  successDarkest:
    "#7EA012" /* Darkest version of secondary brand colour - Mainly used to indicate success, valid, add, or save states */,
  successDark:
    "#96B922" /* Darker version of secondary brand colour - Mainly used to indicate success, valid, add, or save states */,
  success:
    "#ACD036" /* secondary brand colour - Mainly used to indicate success, valid, add, or save states */,
  successLight:
    "#C0E152" /* Lighter version of secondary brand colour - Mainly used to indicate success, valid, add, or save states */,
  successLightest:
    "#D7F37C" /* Lightest version of secondary brand colour - Mainly used to indicate success, valid, add, or save states */,
  /* Amber */
  warningDarkest:
    "#CEA219" /* Darkest version of brand warning colour - Mainly used to indicate warnings, slipping or near due states */,
  warningDark:
    "#E3B937" /* Darker version of brand warning colour - Mainly used to indicate warnings, slipping or near due states */,
  warning:
    "#EDC652" /* brand warning colour - Mainly used to indicate warnings, slipping or near due states */,
  warningLight:
    "#F3D373" /* Lighter version of brand warning colour - Mainly used to indicate warnings, slipping or near due states */,
  warningLightest:
    "#F9E197" /* Lightest version of brand warning colour - Mainly used to indicate warnings, slipping or near due states */,
  /* Crimson */
  dangerDarkest:
    "#9A052E" /* Darkest version of brand danger/error colour - Mainly used to indicate error, at risk or over due states */,
  dangerDark:
    "#BF1A47" /* Darker version of brand danger/error colour - Mainly used to indicate error, at risk or over due states */,
  danger:
    "#D42A59" /* brand danger/error colour - Mainly used to indicate error, at risk or over due states */,
  dangerLight:
    "#E5547C" /* Lighter version of brand danger/error colour - Mainly used to indicate error, at risk or over due states */,
  dangerLightest:
    "#F2ABBE" /* Lightest version of brand danger/error colour - Mainly used to indicate error, at risk or over due states */
};

export default {
  GlobalStyles,
  fonts,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  radiipx,
  spacepx,
  space,
  colors
};
