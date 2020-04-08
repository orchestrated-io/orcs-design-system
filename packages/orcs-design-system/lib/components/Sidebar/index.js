import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { color } from "styled-system";
import * as systemtheme from "../../oldtheme";

const Sidebar = styled.div`
  ${color}
  background: ${systemtheme.colors.greyDarker};
  max-width: 360px;
  min-height: calc(100vh - 60px);
  height: 100%;
  color: white;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  width: auto;
`;

export const SidebarTabs = styled.div`
  ${color}
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  min-height: calc(100vh - 60px);
  height: 100%;
`;

export const SidebarTab = styled.label`
  position: relative;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: ${variables.defaultTransition};
  color: ${props => (props.active ? colours.primary : colours.greyLightest)};
  background: ${props => (props.active ? colours.greyDarker : "transparent")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  &:hover,
  &:hover {
    background: ${props =>
      props.active ? colours.greyDarker : "rgba(0, 0, 0, 0.15)"};
  }
  ${props =>
    props.badge
      ? css`
        :before {
          content: "${props.badge}";
          position: absolute;
          top: 5px;
          right: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          font-size: 1.1rem;
          font-weight: 600;
          color: ${colours.white};
          background-color: ${colours.danger};
        }
      `
      : css``};
`;

export const SidebarPanels = styled.div`
  position: relative;
`;

export const SidebarPanel = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  min-width: 300px;
  height: calc(100vh - (60px + 72px));
  overflow-y: auto;
  background: ${colours.greyDarker};
`;

export const SidebarClose = styled.label`
  position: absolute;
  right: -10px;
  top: 50%;
  width: 22px;
  height: 22px;
  text-align: center;
  padding-top: 2px;
  border-radius: 100%;
  margin-top: -11px;
  z-index: 2;
  cursor: w-resize;
  background: ${colours.greyDarker};
`;

export const SidebarFooter = styled.footer`
  z-index: 5;
  padding: 10px 20px;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${colours.greyDarker};
  box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.3);
  svg {
    display: block;
    margin-bottom: 10px;
  }
  small {
    display: block;
    font-size: 1.1rem;
  }
  a {
    color: #fff;
  }
`;

/** @component */
export default Sidebar;
