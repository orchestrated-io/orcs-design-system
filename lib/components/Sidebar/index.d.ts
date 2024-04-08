import * as React from "react";

export interface SidebarTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories
   */
  SidebarStyles?: Object;
}

export const SidebarTabs: React.FC<SidebarTabsProps>;

export interface SidebarTabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies the open/active tab
   */
  active?: boolean;
  /**
   * Sets last sidebar tab position to bottom of sidebar
   */
  bottomAligned?: boolean;
  /**
   * Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories
   */
  SidebarStyles?: Object;
  /**
   * Set the ariaLabel
   */
  ariaLabel?: string;
}

export const SidebarTab: React.FC<SidebarTabProps>;

export interface SidebarPanelsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories
   */
  SidebarStyles?: Object;
}

export const SidebarPanels: React.FC<SidebarPanelsProps>;

export interface SidebarPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories
   */
  SidebarStyles?: Object;
}

export const SidebarPanel: React.FC<SidebarPanelProps>;

export interface SidebarCloseProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  SidebarStyles?: object;
}

export const SidebarClose: React.FC<SidebarCloseProps>;

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the colour theme
   */
  theme?: Object;
}

declare const Sidebar: React.FC<SidebarProps>;

export default Sidebar;
