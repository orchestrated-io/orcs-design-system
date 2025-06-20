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

const dotAnimation = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
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

const AILoadingIcon = styled.svg`
  position: relative;
  width: ${(props) => (props.large ? "50px" : "24px")};
  height: ${(props) => (props.large ? "46px" : "22px")};
  ${(props) =>
    props.large
      ? css`
          animation: ${loadingSpin} 1000ms infinite linear;
        `
      : css`
          animation: ${loadingSpin} 800ms infinite linear;
        `};
`;

const AIChatLoadingIcon = styled.svg`
  position: relative;
  width: ${(props) => (props.large ? "56px" : "28px")};
  height: ${(props) => (props.large ? "12px" : "6px")};
`;

const Dot = styled.circle`
  animation: ${dotAnimation} 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay}s;
  transform-origin: center;
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
  variant,
  ...props
}) {
  const component = (
    <LoadingWrapper {...props} centered={centered}>
      {variant === "AI" ? (
        <AILoadingIcon
          role="img"
          aria-label={ariaLabel}
          large={large}
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="pathGradient"
              x1="21"
              y1="5"
              x2="17"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#42B7FF" />
              <stop offset="100%" stopColor="#B667FF" />
            </linearGradient>
          </defs>

          <mask id="path-1-inside-1_1516_12666" fill="white">
            <path d="M16.9413 19.678C17.2158 20.1574 17.0512 20.7731 16.5489 21.0029C14.8729 21.7697 13.0258 22.1053 11.1771 21.9712C8.99467 21.8129 6.90907 21.0074 5.18691 19.6576C3.46475 18.3078 2.18429 16.475 1.50923 14.3936C0.834172 12.3122 0.795197 10.0768 1.39729 7.97319C1.99938 5.86954 3.21518 3.99326 4.88923 2.58423C6.56329 1.1752 8.61954 0.297456 10.7951 0.0632129C12.9706 -0.17103 15.1666 0.248877 17.1022 1.26925C18.742 2.13365 20.1318 3.3957 21.1483 4.93302C21.453 5.39384 21.2669 6.0034 20.7803 6.26498V6.26498C20.2937 6.52657 19.6916 6.34025 19.3777 5.88569C18.5561 4.69612 17.4569 3.7177 16.1693 3.03896C14.5857 2.20416 12.7891 1.86062 11.0092 2.05226C9.22936 2.2439 7.54708 2.96202 6.17748 4.11479C4.80788 5.26756 3.8132 6.80261 3.32061 8.52367C2.82802 10.2447 2.8599 12.0736 3.41219 13.7764C3.96448 15.4793 5.01207 16.9787 6.42102 18.083C7.82998 19.1874 9.53627 19.8464 11.3217 19.9759C12.7734 20.0812 14.2239 19.8325 15.5504 19.2577C16.0573 19.0381 16.6668 19.1986 16.9413 19.678V19.678Z" />
          </mask>
          <path
            d="M16.9413 19.678C17.2158 20.1574 17.0512 20.7731 16.5489 21.0029C14.8729 21.7697 13.0258 22.1053 11.1771 21.9712C8.99467 21.8129 6.90907 21.0074 5.18691 19.6576C3.46475 18.3078 2.18429 16.475 1.50923 14.3936C0.834172 12.3122 0.795197 10.0768 1.39729 7.97319C1.99938 5.86954 3.21518 3.99326 4.88923 2.58423C6.56329 1.1752 8.61954 0.297456 10.7951 0.0632129C12.9706 -0.17103 15.1666 0.248877 17.1022 1.26925C18.742 2.13365 20.1318 3.3957 21.1483 4.93302C21.453 5.39384 21.2669 6.0034 20.7803 6.26498V6.26498C20.2937 6.52657 19.6916 6.34025 19.3777 5.88569C18.5561 4.69612 17.4569 3.7177 16.1693 3.03896C14.5857 2.20416 12.7891 1.86062 11.0092 2.05226C9.22936 2.2439 7.54708 2.96202 6.17748 4.11479C4.80788 5.26756 3.8132 6.80261 3.32061 8.52367C2.82802 10.2447 2.8599 12.0736 3.41219 13.7764C3.96448 15.4793 5.01207 16.9787 6.42102 18.083C7.82998 19.1874 9.53627 19.8464 11.3217 19.9759C12.7734 20.0812 14.2239 19.8325 15.5504 19.2577C16.0573 19.0381 16.6668 19.1986 16.9413 19.678V19.678Z"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeLinejoin="round"
            mask="url(#path-1-inside-1_1516_12666)"
          />
          <circle cx="21.9727" cy="12.7734" r="1.5" fill="#6D74FE" />
          <circle cx="21.7012" cy="8.81641" r="1" fill="#42B7FF" />
          <path
            d="M18.9019 15.0489C19.0419 14.5181 19.7952 14.5181 19.9352 15.0489V15.0489C20.1648 15.9194 20.8384 16.6031 21.7054 16.8458L21.7938 16.8705C22.3137 17.016 22.2985 17.7582 21.7731 17.8822V17.8822C20.8715 18.0951 20.1615 18.8003 19.9348 19.6985V19.6985C19.8002 20.2316 19.0369 20.2316 18.9024 19.6985V19.6985C18.6756 18.8003 17.9656 18.0951 17.0641 17.8822V17.8822C16.5387 17.7582 16.5235 17.016 17.0433 16.8705L17.1318 16.8458C17.9988 16.6031 18.6723 15.9194 18.9019 15.0489V15.0489Z"
            fill="#B667FF"
          />
        </AILoadingIcon>
      ) : variant === "AIchat" ? (
        <AIChatLoadingIcon
          role="img"
          aria-label={ariaLabel}
          large={large}
          viewBox="0 0 28 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="paint0_linear_723_3706"
              x1="0"
              y1="3"
              x2="28"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42B7FF" />
              <stop offset="1" stopColor="#B667FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_723_3706"
              x1="0"
              y1="3"
              x2="28"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42B7FF" />
              <stop offset="1" stopColor="#B667FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_723_3706"
              x1="0"
              y1="3"
              x2="28"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42B7FF" />
              <stop offset="1" stopColor="#B667FF" />
            </linearGradient>
          </defs>
          <Dot
            cx="3"
            cy="3"
            r="3"
            fill="url(#paint0_linear_723_3706)"
            delay={0}
          />
          <Dot
            cx="14"
            cy="3"
            r="3"
            fill="url(#paint1_linear_723_3706)"
            delay={0.2}
          />
          <Dot
            cx="25"
            cy="3"
            r="3"
            fill="url(#paint2_linear_723_3706)"
            delay={0.4}
          />
        </AIChatLoadingIcon>
      ) : (
        <LoadingIcon
          role="img"
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
      )}
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
  ariaLabel: PropTypes.string,
  /** Specifies the variant of loading icon to display */
  variant: PropTypes.oneOf(["AI", "AIchat"])
};
