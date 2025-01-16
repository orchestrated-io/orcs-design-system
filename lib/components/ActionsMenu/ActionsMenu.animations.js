import { keyframes } from "styled-components";

export const crossFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const beforeDotCollapsing = keyframes`
  0% {
    transform: translate(0, -6px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const beforeDotExpanding = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -6px);
  }
`;

export const afterDotCollapsing = keyframes`
  0% {
    transform: translate(0, 6px);
  }
  50% {
   transform: translate(0, 0);
  }
  100% {
   transform: translate(0, 0);
  }
`;

export const afterDotExpanding = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 6px);
  }
`;

export const beforeCrossExpanding = keyframes`
  0% {
    height: 4px;
    transform: rotate(-45deg);
  }
  50% {
    height: 4px;
    transform: rotate(-45deg);
  }
  100% {
    height: 18px;
    transform: translate(0, -7px) rotate(-45deg);
  }
`;

export const beforeCrossCollapsing = keyframes`
  0% {
    height: 18px;
    transform: translate(0, -7px) rotate(-45deg);
  }
  50% {
    height: 4px;
    transform: rotate(-45deg);
  }
  100% {
    height: 4px;
    transform: rotate(-45deg);
  }
`;

export const afterCrossExpanding = keyframes`
  0% {
    height: 4px;
    transform: rotate(45deg);
  }
  50% {
    height: 4px;
    transform: rotate(45deg);
  }
  100% {
    height: 18px;
    transform: translate(0, -7px) rotate(45deg);
  }
`;

export const afterCrossCollapsing = keyframes`
  0% {
    height: 18px;
    transform: translate(0, -7px) rotate(45deg);
  }
  50% {
    height: 4px;
    transform: rotate(45deg);
  }
  100% {
    height: 4px;
    transform: rotate(45deg);
  }
`;
