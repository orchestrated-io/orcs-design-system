import styled, { css, keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { space, layout, compose } from "styled-system";

const LoadingStyles = compose(space, layout);

const loadingSpin = keyframes`
  to {
      transform: rotate(1turn);
  }
`;

const LoadingWrapper = styled("div")(
  (props) =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: props.centered ? "center" : "flex-start"
    }),
  LoadingStyles
);

const LoadingIcon = styled.svg`
  position: relative;
  width: ${(props) => (props.large ? "50px" : "16px")};
  height: ${(props) => (props.large ? "50px" : "16px")};
  ${(props) =>
    props.large
      ? css`
          animation: ${loadingSpin} 800ms infinite linear;
        `
      : css`
          animation: ${loadingSpin} 600ms infinite linear;
        `};
  ${(props) =>
    props.inverted
      ? css`
          fill: white;
        `
      : props.primary
      ? css`
          fill: #0091ea;
        `
      : css`
          fill: black;
        `};
`;

/**
 * As a general guide, use the large prop for when whole pages or sections are loading, and the default (small) loading for smaller elements.
 */
export default function Loading({
  large,
  centered,
  inverted,
  primary,
  theme,
  ariaLabel = "Loading",
  ...props
}) {
  const component = (
    <LoadingWrapper {...props} centered={centered}>
      <LoadingIcon
        role="image"
        aria-label={ariaLabel}
        large={large}
        inverted={inverted}
        primary={primary}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          opacity="0.8"
          d="M283.2 65.92C267.6 63.69 256 50.32 256 34.52c0-19.38 17.19-34.69 36.38-31.95C416.4 20.29 512 127.2 512 256c0 33.38-6.544 65.26-18.27 94.49c-7.162 17.86-28.85 24.87-45.56 15.32c-13.74-7.854-19.62-24.53-13.75-39.23C443.2 304.7 448 280.9 448 256C448 159.4 376.3 79.18 283.2 65.92z"
        />
        <path
          opacity="0.2"
          d="M493.7 350.5C456 444.9 363.7 512 256 512c-141.2 0-256-114.8-256-256s114.8-256 256-256c11.91 0 23.54 1.104 35.03 2.686C272.4 .8672 256 15.62 256 34.52c0 15.8 11.58 29.17 27.23 31.4c.9648 .1367 1.844 .5116 2.805 .6639C276.2 65.04 266.2 64 256 64C150.1 64 64 150.1 64 256s86.13 192 192 192c81.67 0 151.4-51.34 179.1-123.4c-.248 .6406-.4215 1.317-.6754 1.954c-5.869 14.7 .0045 31.38 13.75 39.23C464.8 375.3 486.5 368.2 493.7 350.5z"
        />
      </LoadingIcon>
    </LoadingWrapper>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Loading.propTypes = {
  /** Large loading spinner */
  large: PropTypes.bool,
  /** Centered loading spinner */
  centered: PropTypes.bool,
  /** Changes colours to work on dark background */
  inverted: PropTypes.bool,
  /** Changes colours to primary branding colour */
  primary: PropTypes.bool,
  /** Specifies the system design theme */
  theme: PropTypes.object,
  /** Specifies the aria-label for loading image */
  ariaLabel: PropTypes.string
};
