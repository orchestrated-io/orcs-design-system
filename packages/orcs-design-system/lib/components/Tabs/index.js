import styled, { css } from "styled-components";
import * as systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";

export const TabsContainer = styled.div`
  ${space}
  ${layout}
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
`;

export const Tab = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  position: relative;
  padding: ${systemtheme.space[3]}px ${systemtheme.space[4]}px;
  border-radius: ${systemtheme.radii[2]}px ${systemtheme.radii[2]}px 0 0;

  background: ${props =>
    props.active
      ? systemtheme.colors.greyDark
      : systemtheme.colors.greyLighter};
  margin-left: ${systemtheme.space[2]}px;
  a {
    transition: ${systemtheme.transition};
    cursor: ${props => (props.active ? "default" : "pointer")};
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    &:focus {
      outline: 0;
    }
    color: ${props =>
      props.active ? systemtheme.colors.white : systemtheme.colors.greyDark};
  }
  ${props => !props.active && inactiveStyle}
  ${props => props.notification && notificationStyle(props.notification)}
`;

const inactiveStyle = css`
  &:hover,
  &:focus {
    color: ${systemtheme.colors.greyDarker};
    background: ${systemtheme.colors.greyLighter};
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
    width: ${systemtheme.space[5]}px;
    height: ${systemtheme.space[5]}px;
    border-radius: 100%;
    font-size: ${systemtheme.fontSizes[0]};
    font-weight: ${systemtheme.fontWeights[2]};
    color: ${systemtheme.colors.white};
    background-color: ${systemtheme.colors.danger};
  }
`;
