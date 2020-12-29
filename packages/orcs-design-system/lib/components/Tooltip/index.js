import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

const Container = styled.button`
  ${space}
  ${layout}
  position: relative;
  cursor: help;
  width: 20px;
  height: 20px;
  border: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 10px;
  color: ${(props) =>
    props.inverted ? themeGet("colors.greyDarkest") : themeGet("colors.white")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${themeGet("transition.transitionDefault")};
  background: ${(props) =>
    props.inverted ? themeGet("colors.white") : themeGet("colors.greyDarkest")};

  &:hover,
  &:focus {
    outline: 0;
    background: ${themeGet("colors.primary")};

    > div {
      outline: 0;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px) translateX(0px);
    }
  }
`;

const QuestionMark = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  font-size: 1.4rem;
  font-weight: 600;
  text-indent: 1px;
  line-height: 18px;
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
  outline: 0;
  opacity: 0;
  padding: 8px 10px;
  pointer-events: none;
  border-radius: ${themeGet("radii[1]")};
  transition: ${themeGet("transition.transitionDefault")};
  width: ${(props) => (props.width ? props.width : "200px")};
  background: ${(props) =>
    props.inverted ? themeGet("colors.white") : themeGet("colors.greyDarkest")};

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 8px 6px 0;
    border-color: transparent;
    border-right-color: ${(props) =>
      props.inverted
        ? themeGet("colors.white")
        : themeGet("colors.greyDarkest")};
    position: absolute;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
  }

  ${({ direction }) =>
    direction === "top"
      ? css`
          left: auto;
          bottom: 34px;
          transform: translateX(0) translateY(-10px);
          &:before {
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -10px;
            margin-left: -4px;
            transform: rotate(-90deg);
          }
          &:after {
            left: 0;
            height: calc(100% + 15px);
          }
        `
      : direction === "right"
      ? css`
          left: 34px;
          transform: translateX(10px);
          &:before {
            left: -8px;
            top: 50%;
            margin-top: -6px;
          }
          &:after {
            content: "";
            left: -34px;
            height: 100%;
            top: 0;
          }
        `
      : direction === "bottom"
      ? css`
          left: auto;
          top: 34px;
          transform: translateX(0) translateY(10px);
          &:before {
            left: 50%;
            top: -10px;
            margin-top: 0;
            margin-left: -4px;
            transform: rotate(90deg);
          }
          &:after {
            left: 0;
            top: auto;
            bottom: 0;
            height: calc(100% + 15px);
          }
        `
      : direction === "left"
      ? css`
          left: auto;
          right: 34px;
          transform: translateX(-10px);
          &:before {
            left: auto;
            right: -8px;
            top: 50%;
            margin-top: -6px;
            transform: rotate(180deg);
          }
          &:after {
            left: auto;
            height: 100%;
            top: 0;
            right: -34px;
          }
        `
      : css`
          left: auto;
          bottom: 34px;
          transform: translateX(0) translateY(-10px);
          &:before {
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -10px;
            margin-left: -4px;
            transform: rotate(-90deg);
          }
          &:after {
            left: 0;
            height: calc(100% + 15px);
          }
        `};
`;

/**
 * This tooltip component supports customisation of direction and width. This is so that you can ensure that the tooltip doesn't run off the screen, and that the width suits the amount of text in the tooltip.
 *
 * Tooltips should only contain text or hyperlinks.
 *
 * If you don't specify a `width`, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. The width is set in pixels within the component, so no need to add px units to your props.
 *
 */

export default function Tooltip({
  children,
  direction,
  width,
  inverted,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container inverted={inverted} {...props}>
        <QuestionMark>?</QuestionMark>
        <Text direction={direction} width={width} inverted={inverted}>
          {children}
        </Text>
      </Container>
    </ThemeProvider>
  );
}

Tooltip.propTypes = {
  /** Tooltip text is passed down as a child element. */
  children: PropTypes.node,
  /** Specifies the direction of the tooltip */
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Specifies the width of the tooltip (include unit) */
  width: PropTypes.string,
  /** Changes appearance to suit a dark background. */
  inverted: PropTypes.bool,
  /** Specifies the theme for component design */
  theme: PropTypes.object
};

Tooltip.defaultProps = {
  width: "200px",
  theme: systemtheme
};
