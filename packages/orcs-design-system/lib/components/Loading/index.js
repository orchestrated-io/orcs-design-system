import styled, { css, keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { space, layout, compose } from "styled-system";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

const LoadingStyles = compose(space, layout);

const loadingSpin = keyframes`
  to {
      transform: rotate(1turn);
  }
`;

const LoadingWrapper = styled("div")(LoadingStyles);

const Item = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${props => (props.large ? "50px" : "16px")};
  height: ${props => (props.large ? "50px" : "16px")};
  margin: ${props => (props.centered ? "0 auto" : "0")};

  border: ${props => {
    let borderStyle = "2px solid";
    if (props.large) {
      borderStyle = "4px solid";
    }
    return borderStyle;
  }};
  border-color: ${props => {
    let borderColour = themeGet("colors.black30");
    if (props.large) {
      borderColour = themeGet("colors.black20");
    }
    if (props.inverted) {
      borderColour = themeGet("colors.white40");
    }
    return borderColour;
  }};
  border-right-color: ${props => {
    let borderRightColour = themeGet("colors.black70");
    if (props.large) {
      borderRightColour = themeGet("colors.black70");
    }
    if (props.inverted) {
      borderRightColour = themeGet("colors.white90");
    }
    return borderRightColour;
  }};
  ${props =>
    props.large
      ? css`
          animation: ${loadingSpin} 800ms infinite linear;
        `
      : css`
          animation: ${loadingSpin} 500ms infinite linear;
        `};
`;

/**
 * As a general guide, use the large prop for when whole pages or sections are loading, and the default (small) loading for smaller elements.
 */
export default function Loading({
  large,
  centered,
  inverted,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingWrapper {...props}>
        <Item large={large} centered={centered} inverted={inverted} />
      </LoadingWrapper>
    </ThemeProvider>
  );
}

Loading.propTypes = {
  /** Large loading spinner */
  large: PropTypes.bool,
  /** Centered loading spinner */
  centered: PropTypes.bool,
  /** Changes colours to work on dark background */
  inverted: PropTypes.bool,
  /** Specifies the system design theme */
  theme: PropTypes.object
};

Loading.defaultProps = {
  theme: systemtheme
};
