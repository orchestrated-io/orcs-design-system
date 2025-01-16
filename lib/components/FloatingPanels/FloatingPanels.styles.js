import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
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
`;

export const PanelWrapper = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0 12px;
  min-height: 48px;
`;

export const PanelHeader = styled.button`
  font-family: ${themeGet("fonts.main")};
  color: ${themeGet("colors.greyDarkest")};
  width: 100%;
  border: none;
  appearance: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  padding: ${({ isExpanded }) => (isExpanded ? "12px 0 0 0" : "12px 0")};
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

export const IconWrapper = styled.div`
  background-color: ${themeGet("colors.primary")};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChevronWrapper = styled(IconWrapper)`
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ isHovered }) =>
    isHovered ? themeGet("colors.greyLighter") : "white"};
`;

export const PanelContent = styled.div`
  padding: ${({ isExpanded }) => (isExpanded ? "16px 0 12px 0" : "0")};
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
  overflow-y: ${({ isExpanded }) =>
    isExpanded
      ? "auto"
      : "hidden"}; // note: this is showing briefly on transition, how do I hide this? Animation delay on this one maybe?
  max-height: ${({ isExpanded, containerHeight, panelCount }) =>
    isExpanded
      ? `${containerHeight / panelCount - 55}px`
      : "0"}; // Evenly distribute the Panel max-height according to the containerHeight
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out,
    padding 0.3s ease-in-out;
`;
