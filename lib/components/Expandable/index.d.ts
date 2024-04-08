import * as React from "react";

export type ExpandableTitle = string | ((...args: any[]) => any) | Object;

export type ExpandableSubtitle = string | ((...args: any[]) => any) | Object;

export type ExpandableBadgeColour =
  | "success"
  | "warning"
  | "danger"
  | "primaryLight"
  | "primaryDark"
  | "primaryDarkest";

export interface ExpandableProps {
  /**
   * Sets expandable to open state by default
   */
  isOpen?: boolean;
  /**
   * Sets the styling to be a smaller version of the expandable
   */
  small?: boolean;
  /**
   * Expandable title
   */
  title?: ExpandableTitle;
  /**
   * Expandable subtitle
   */
  subtitle?: ExpandableSubtitle;
  /**
   * Adds a badge with text as string
   */
  badge?: string;
  /**
   * Specifies badge colour
   */
  badgeColour?: ExpandableBadgeColour;
  /**
   * Contents of expandable are rendered as a child element.
   */
  children?: React.ReactElement<any>;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Expandable: React.FC<ExpandableProps>;

export default Expandable;
