import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";

const Layout = styled.div`
  display: ${props => (props.inlineBlock ? "inline-block" : "block")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  min-height: ${props => (props.minHeight ? props.minHeight : "0")};
  box-shadow: ${props =>
    props.boxShadow ? "0 1px 2px 0 rgba(0, 0, 0, 0.1)" : "none"};
  border-radius: ${props =>
    props.roundedCorners ? variables.borderRadius : "0"};
  text-align: ${props =>
    props.textCenter ? "center" : props.textRight ? "right" : "left"};
  padding: ${props =>
    props.paddingDouble
      ? variables.defaultSpacingDouble
      : props.paddingHalf
      ? variables.defaultSpacingHalf
      : props.padding
      ? variables.defaultSpacing
      : props.verticalPaddingDouble
      ? `${variables.defaultSpacingDouble} 0`
      : props.verticalPaddingHalf
      ? `${variables.defaultSpacingHalf} 0`
      : props.verticalPadding
      ? `${variables.defaultSpacing} 0`
      : props.horizontalPaddingDouble
      ? `0 ${variables.defaultSpacingDouble}`
      : props.horizontalPaddingHalf
      ? `0 ${variables.defaultSpacingHalf}`
      : props.horizontalPadding
      ? `0 ${variables.defaultSpacing}`
      : 0};

  margin: ${props =>
    props.marginDouble
      ? variables.defaultSpacingDouble
      : props.marginHalf
      ? variables.defaultSpacingHalf
      : props.margin
      ? variables.defaultSpacing
      : props.verticalMarginDouble
      ? `${variables.defaultSpacingDouble} 0`
      : props.verticalMarginHalf
      ? `${variables.defaultSpacingHalf} 0`
      : props.verticalMargin
      ? `${variables.defaultSpacing} 0`
      : props.horizontalMarginDouble
      ? `0 ${variables.defaultSpacingDouble}`
      : props.horizontalMarginHalf
      ? `0 ${variables.defaultSpacingHalf}`
      : props.horizontalMargin
      ? `0 ${variables.defaultSpacing}`
      : 0};

  background: ${props =>
    props.background
      ? colours.greyLightest
      : props.backgroundWhite
      ? colours.white
      : props.backgroundDark
      ? colours.greyDarkest
      : `transparent`};

  ${props =>
    props.fluidFlex
      ? css`
          flex: 1 1;
        `
      : props.growFlex
      ? css`
          flex: 1 1 auto;
        `
      : css``}
    ${props =>
      props.border
        ? css`
            border: solid 1px ${colours.greyLighter};
          `
        : css`
            border: none;
          `}
    ${props =>
      props.childVerticalSpacing
        ? css`
            > * + * {
              margin-top: ${variables.defaultSpacing} !important;
            }
          `
        : css``}
  ${props =>
    props.childHorizontalSpacing
      ? css`
          > * + * {
            margin-left: ${variables.defaultSpacing} !important;
          }
        `
      : css``}
      ${props =>
        props.childChildVerticalSpacing
          ? css`
              > * > * + * {
                margin-top: ${variables.defaultSpacing} !important;
              }
            `
          : css``}
    ${props =>
      props.childChildHorizontalSpacing
        ? css`
            > * > * + * {
              margin-left: ${variables.defaultSpacing} !important;
            }
          `
        : css``}
    ${props =>
      props.childVerticalSpacingHalf
        ? css`
            > * + * {
              margin-top: ${variables.defaultSpacingHalf} !important;
            }
          `
        : css``}
    ${props =>
      props.childHorizontalSpacingHalf
        ? css`
            > * + * {
              margin-left: ${variables.defaultSpacingHalf} !important;
            }
          `
        : css``}
    ${props =>
      props.childChildVerticalSpacingHalf
        ? css`
            > * > * + * {
              margin-top: ${variables.defaultSpacingHalf} !important;
            }
          `
        : css``}
    ${props =>
      props.childChildHorizontalSpacingHalf
        ? css`
            > * > * + * {
              margin-left: ${variables.defaultSpacingHalf} !important;
            }
          `
        : css``}
    ${props =>
      props.childVerticalSpacingQuarter
        ? css`
            > * + * {
              margin-top: ${variables.defaultSpacingQuarter} !important;
            }
          `
        : css``}
    ${props =>
      props.childHorizontalSpacingQuarter
        ? css`
            > * + * {
              margin-left: ${variables.defaultSpacingQuarter} !important;
            }
          `
        : css``}
    ${props =>
      props.childChildVerticalSpacingQuarter
        ? css`
            > * > * + * {
              margin-top: ${variables.defaultSpacingQuarter} !important;
            }
          `
        : css``}
    ${props =>
      props.childChildHorizontalSpacingQuarter
        ? css`
            > * > * + * {
              margin-left: ${variables.defaultSpacingQuarter} !important;
            }
          `
        : css``};
  @media only screen and (max-width: 800px) {
    width: ${props =>
      props.mobileWidth
        ? props.mobileWidth
        : props.width
        ? props.width
        : "auto"};
  }
`;

Layout.propTypes = {
  /** Can specify a width in pixels or percentages (make sure you specify units) */
  width: PropTypes.string,
  /** Can specify a height in pixels or percentages (make sure you specify units) */
  height: PropTypes.string,
  /** Can specify a minimum height in pixels or percentages (make sure you specify units) */
  minHeight: PropTypes.string,
  /** Can specify a width in pixels or percentages (make sure you specify units) for devices/browsers less than 800px wide */
  mobileWidth: PropTypes.string,
  /** Adds a light grey background */
  background: PropTypes.bool,
  /** Adds a slight drop shadow */
  boxShadow: PropTypes.bool,
  /** Adds a border radius for rounded corners */
  roundedCorners: PropTypes.bool,
  /** Adds a white background */
  backgroundWhite: PropTypes.bool,
  /** Adds a dark grey background */
  backgroundDark: PropTypes.bool,
  /** Adds a light grey border */
  border: PropTypes.bool,
  /** Makes text align to center of layout box */
  textCenter: PropTypes.bool,
  /** Makes text align to right of layout box */
  textRight: PropTypes.bool,
  /** Adds vertical and horizontal padding of 20px */
  padding: PropTypes.bool,
  /** Adds vertical padding of 20px */
  verticalPadding: PropTypes.bool,
  /** Adds horizontal padding of 20px */
  horizontalPadding: PropTypes.bool,
  /** Adds vertical and horizontal padding of 10px */
  paddingHalf: PropTypes.bool,
  /** Adds vertical padding of 10px */
  verticalPaddingHalf: PropTypes.bool,
  /** Adds horizontal padding of 10px */
  horizontalPaddingHalf: PropTypes.bool,
  /** Adds vertical and horizontal padding of 40px */
  paddingDouble: PropTypes.bool,
  /** Adds vertical padding of 40px */
  verticalPaddingDouble: PropTypes.bool,
  /** Adds horizontal padding of 40px */
  horizontalPaddingDouble: PropTypes.bool,
  /** Adds vertical and horizontal padding of 20px */
  margin: PropTypes.bool,
  /** Adds vertical margin of 20px */
  verticalMargin: PropTypes.bool,
  /** Adds horizontal margin of 20px */
  horizontalMargin: PropTypes.bool,
  /** Adds vertical and horizontal margin of 10px */
  marginHalf: PropTypes.bool,
  /** Adds vertical margin of 10px */
  verticalMarginHalf: PropTypes.bool,
  /** Adds horizontal margin of 10px */
  horizontalMarginHalf: PropTypes.bool,
  /** Adds vertical and horizontal margin of 40px */
  marginDouble: PropTypes.bool,
  /** Adds vertical margin of 40px */
  verticalMarginDouble: PropTypes.bool,
  /** Adds horizontal margin of 40px */
  horizontalMarginDouble: PropTypes.bool,
  /** Adds vertical margin of 20px between all direct children elements */
  childVerticalSpacing: PropTypes.bool,
  /** Adds vertical margin of 10px between all direct children elements */
  childVerticalSpacingHalf: PropTypes.bool,
  /** Adds vertical margin of 5px between all direct children elements */
  childVerticalSpacingQuarter: PropTypes.bool,
  /** Adds vertical margin of 20px between all direct childrens elements direct children */
  childChildVerticalSpacing: PropTypes.bool,
  /** Adds vertical margin of 10px between all direct childrens elements direct children */
  childChildVerticalSpacingHalf: PropTypes.bool,
  /** Adds vertical margin of 5px between all direct childrens elements direct children */
  childChildVerticalSpacingQuarter: PropTypes.bool,
  /** Adds horizontal margin of 20px between all direct children elements */
  childHorizontalSpacing: PropTypes.bool,
  /** Adds horizontal margin of 10px between all direct children elements */
  childHorizontalSpacingHalf: PropTypes.bool,
  /** Adds horizontal margin of 5px between all direct children elements */
  childHorizontalSpacingQuarter: PropTypes.bool,
  /** Adds horizontal margin of 20px between all direct childrens elements direct children */
  childChildHorizontalSpacing: PropTypes.bool,
  /** Adds horizontal margin of 10px between all direct childrens elements direct children */
  childChildHorizontalSpacingHalf: PropTypes.bool,
  /** Adds horizontal margin of 5px between all direct childrens elements direct children */
  childChildHorizontalSpacingQuarter: PropTypes.bool
};

/** @component */
export default Layout;
