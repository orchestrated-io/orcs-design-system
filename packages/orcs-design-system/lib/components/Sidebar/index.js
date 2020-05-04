import styled, { css } from "styled-components";
import { color } from "styled-system";
import { colors, transition, appScale } from "../../systemtheme";

const Sidebar = styled.div`
  ${color}
  background: ${colors.greyDarkest};
  max-width: 360px;
  min-height: calc(100vh - ${appScale.navBarSize});
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
  min-height: calc(100vh - ${appScale.navBarSize});
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
  transition: ${transition.transitionDefault};
  color: ${props => (props.active ? colors.primary : colors.greyLightest)};
  background: ${props => (props.active ? colors.greyDarker : "transparent")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  &:hover,
  &:hover {
    background: ${props =>
      props.active ? colors.greyDarker : "rgba(0, 0, 0, 0.15)"};
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
          color: ${colors.white};
          background-color: ${colors.danger};
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
  height: calc(100vh - (${appScale.navBarSize} + 72px));
  overflow-y: auto;
  background: ${colors.greyDarker};
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
  background: ${colors.greyDarker};
`;

export const SidebarFooter = styled.footer`
  z-index: 5;
  padding: 10px 20px;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${colors.greyDarker};
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
