import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const panelWidth = "300px";
export const ComponentContainer = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  max-height: ${({ containerHeight }) =>
    containerHeight ? `${containerHeight}px` : "100%"};
  ${({ position }) =>
    Object.entries(position)
      .filter(([, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${key}: ${typeof value === "number" ? `${value}px` : value};`
      )
      .join("\n")}
  ${({ centered }) =>
    centered
      ? `
      margin-left: 50%;
      transform: translateX(-50%);
      right: auto;
    `
      : ""}
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  gap: 8px;
  border-radius: calc(${themeGet("radii.2")} + 1px);
  overflow: hidden;
  background: transparent;
  width: ${panelWidth};
  max-height: ${({ containerHeight }) =>
    containerHeight ? `${containerHeight}px` : "100%"};
`;

export const PanelWrapper = styled.div`
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  background: white;
  width: ${panelWidth};
  border: 1px solid ${themeGet("colors.greyLighter")};
  border-radius: 8px;
  border-radius: 0 0 8px 8px;
  overflow-y: auto;
  padding: "0 12px 12px 12px";
  margin-top: 37px;
  transition: max-height 0.3s ease-in-out;
`;

export const PanelHeader = styled.button`
  font-family: ${themeGet("fonts.main")};
  color: ${themeGet("colors.greyDarkest")};
  margin-left: -1px;
  margin-top: -37px;
  border-radius: 8px 8px 0 0;
  appearance: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 37px;
  position: absolute;
  width: ${panelWidth};
  border: solid 1px ${themeGet("colors.greyLighter")};
  z-index: 1;
  cursor: pointer;
  user-select: none;
  transition: padding 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const PanelBar = styled.div`
  display: flex;
  background: white;
  border: 1px solid ${themeGet("colors.greyLighter")};
  border-radius: ${themeGet("radii.2")};
  padding: 2px;
  gap: 2px;
  height: fit-content;
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 1);
`;

export const IconButton = styled.button`
  font-family: ${themeGet("fonts.main")};
  appearance: none;
  background-color: ${({ isExpanded }) =>
    isExpanded ? themeGet("colors.primaryLightest") : themeGet("colors.white")};
  border: none;
  width: 36px;
  cursor: pointer;
  height: 36px;
  display: flex;
  border-radius: ${themeGet("radii.2")};
  align-items: center;
  justify-content: center;
  transition: ${themeGet("transition.transitionDefault")};
  &:hover {
    background-color: ${themeGet("colors.primaryLightest")};
  }
`;

export const PanelContent = styled.div`
  padding: 8px;
  width: inerhit;
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  height: ${({ isExpanded }) => (isExpanded ? "100%" : "0")};
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
`;
