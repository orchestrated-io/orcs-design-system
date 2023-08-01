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
    margin: ${(props) => themeGet("space.0")(props)};
}
body {
    font-family: ${(props) => themeGet("fonts.main")(props)};
    color: ${(props) => themeGet("colors.greyDarkest")(props)};
}
/* set rem text size and styling */
html { font-size: 62.5%; }
body {
  font-size: ${(props) =>
    themeGet("fontSizes.2")(
      props
    )}; // equivalent to 16px (or 14px with collapsed theme) because of % change to html font size above
}
main {
  display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
}
section {
  height: ${(props) => themeGet("appScale.navBarSize")(props)};
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
    margin: ${(props) => themeGet("space.0")(props)};
}
h1, h2, h3, h4, h5, h6 {
  font-weight: ${(props) => themeGet("fontWeights.1")(props)};
  font-family: ${(props) => themeGet("fonts.main")(props)};
  margin: ${(props) => themeGet("space.0")(props)};
}
h1 {
  font-size: ${(props) => themeGet("fontSizes.6")(props)}
}
h2 {
  font-size: ${(props) => themeGet("fontSizes.5")(props)}
}
h3 {
  font-size: ${(props) => themeGet("fontSizes.4")(props)}
}
h4 {
  font-size: ${(props) => themeGet("fontSizes.3")(props)}
}
h5 {
  font-size: ${(props) => themeGet("fontSizes.2")(props)}
}
h6 {
  font-size: ${(props) => themeGet("fontSizes.1")(props)}
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
