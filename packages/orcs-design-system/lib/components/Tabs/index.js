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
  margin-right: ${themeGet("space.3")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  a {
    border-radius: ${themeGet("radii.2")}px;
    background: ${props =>
      props.active ? themeGet("colors.white") : themeGet("colors.greyLighter")};
    transition: ${themeGet("transition")};
    padding: ${themeGet("space.3")} ${themeGet("space.4")};
    transition: ${themeGet("transition")};
    font-size: ${themeGet("fontSizes.1")};
    font-weight: ${themeGet("fontWeights.2")};
    color: ${props =>
      props.active ? themeGet("colors.primary") : themeGet("colors.grey")};
    display: block;
    position: relative;
    cursor: ${props => (props.active ? "default" : "pointer")};
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25px;
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
    width: ${themeGet("space.5")};
    height: ${themeGet("space.5")};
    font-size: ${themeGet("fontSizes.0")};
    font-weight: ${themeGet("fontWeights.2")};
    color: ${themeGet("colors.white")};
    background-color: ${themeGet("colors.danger")};
    content: "${notification}";
    position: absolute;
    top: -8px;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border-radius: 100%;
  }
`;
