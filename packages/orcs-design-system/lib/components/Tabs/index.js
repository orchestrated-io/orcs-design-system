import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${themeGet("space.3")}px;
  position: relative;
  a {
    display: block;
    position: relative;
    border-radius: ${themeGet("radii.2")}px;
    background: ${props =>
      props.active ? themeGet("colors.white") : themeGet("colors.greyLighter")};
    transition: ${themeGet("transition")};
    padding: ${themeGet("space.3")}px ${themeGet("space.4")}px;
    transition: ${themeGet("transition")};
    cursor: ${props => (props.active ? "default" : "pointer")};
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${themeGet("fontSizes.1")}px;
    letter-spacing: 0.25px;
    font-weight: ${themeGet("fontWeights.2")};
    color: ${props =>
      props.active ? themeGet("colors.primary") : themeGet("colors.grey")};
    ${props => !props.active && inactiveStyle}
    ${props =>
      props.notification && notificationStyle(props.notification)}
    &:focus {
      outline: 0;
    }
  }
`;

const inactiveStyle = css`
  &:hover,
  &:focus {
    background: ${themeGet("colors.greyLight")};
    color: ${themeGet("colors.greyDark")};
    outline: 0;
    }
  }
`;

const notificationStyle = notification => css`
  :after {
    content: "${notification}";
    position: absolute;
    top: -8px;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: ${themeGet("space.5")}px;
    height: ${themeGet("space.5")}px;
    border-radius: 100%;
    font-size: ${themeGet("fontSizes.0")}px;
    font-weight: ${themeGet("fontWeights.2")};
    color: ${themeGet("colors.white")};
    background-color: ${themeGet("colors.danger")};
  }
`;
