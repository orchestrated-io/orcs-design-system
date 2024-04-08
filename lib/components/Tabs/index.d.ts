import * as React from "react";

export interface TabProps {
  /**
   * Specifies whether the tab is the active tab
   */
  active?: boolean;
  /**
   * Specifies any notifications attached to the Tab
   */
  notification?: string;
  /**
   * Specifies the colour theme
   */
  theme?: Object;
  /**
   * The content of the Tab is passed as a child.
   */
  children?: React.ReactNode;
}

export const Tab: React.FC<TabProps>;

export interface TabsContainerProps {
  /**
   * The contents of the TabsContainer are passed as a child.
   */
  children?: React.ReactNode;
  /**
   * Specifies the colour theme of the container
   */
  theme?: Object;
}

export const TabsContainer: React.FC<TabsContainerProps>;
