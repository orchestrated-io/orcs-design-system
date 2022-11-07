import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// GLOBAL STYLES
// For browser reset, setting global box sizing and font sizing etc.

const GlobalStyles = createGlobalStyle`
/* apply a natural box layout model to all elements, but allowing components to change */
html {
    box-sizing: border-box;
    line-height: 1.15;
    line-height: calc(2px + 2ex + 2px);
}
html * {
  line-height: calc(2px + 2ex + 2px);
}
*, *:before, *:after {
    box-sizing: inherit;
}
html,
body {
    height: 100%;
    width: 100%;
    margin: ${themeGet("space.0")};
}
body {
    font-family: ${themeGet("fonts.main")};
    color: ${themeGet("colors.greyDarkest")};
}
/* set rem text size and styling */
html { font-size: 62.5%; }
body {
  font-size: ${themeGet(
    "fontSizes.2"
  )}; // equivalent to 16px (or 14px with collapsed theme) because of % change to html font size above
}
main {
  display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
}
section {
  height: calc(100vh - 56px);
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
    margin: ${themeGet("space.0")};
}
h1, h2, h3, h4, h5, h6 {
  font-weight: ${themeGet("fontWeights.1")};
  font-family: ${themeGet("fonts.main")};
  margin: ${themeGet("space.0")};
}
h1 {
  font-size: ${themeGet("fontSizes.6")}px
}
h2 {
  font-size: ${themeGet("fontSizes.5")}px
}
h3 {
  font-size: ${themeGet("fontSizes.4")}px
}
h4 {
  font-size: ${themeGet("fontSizes.3")}px
}
h5 {
  font-size: ${themeGet("fontSizes.2")}px
}
h6 {
  font-size: ${themeGet("fontSizes.1")}px
}
a,
p,
small,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  word-break: break-word;
}
`;

export default GlobalStyles;
