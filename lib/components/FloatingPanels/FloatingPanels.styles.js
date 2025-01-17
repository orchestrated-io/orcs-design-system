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
  border: ${({ isExpanded, theme }) =>
    isExpanded ? `1px solid ${theme.colors.greyLighter}` : "1px solid white"};
  border-radius: 8px;
  border-radius: 0 0 8px 8px;
  box-shadow: ${({ isExpanded }) =>
    isExpanded ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none"};
  overflow-y: ${({ isExpanded }) => (isExpanded ? "auto" : "hidden")};
  // min-height: 48px;
  padding: ${({ isExpanded }) => (isExpanded ? "0 12px 12px 12px" : "0 12px")};
  margin-top: 46px;
  max-height: ${({ isExpanded }) => (isExpanded ? "none" : "0")};
  transition: max-height 0.3s ease-in-out;
`;

export const PanelHeader = styled.button`
  font-family: ${themeGet("fonts.main")};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  color: ${themeGet("colors.greyDarkest")};
  width: 100%;
  margin-left: -13px;
  margin-top: -46px;
  border-radius: ${({ isExpanded }) => (isExpanded ? "8px 8px 0 0" : "8px")};
  appearance: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 12px 12px;
  height: 46px;
  position: fixed;
  width: 300px;
  border-bottom: ${({ isExpanded, theme }) =>
    isExpanded ? `1px solid ${theme.colors.greyLighter}` : "none"};
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
  padding-top: 12px;
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  height: ${({ isExpanded }) => (isExpanded ? "100%" : "0")};
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
`;
