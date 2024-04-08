import * as React from "react";

export type IconFlip = "horizontal" | "vertical" | "both";

export type IconPull = "left" | "right";

export type IconRotation = "90" | "180" | "270";

export interface IconProps {
  /**
   * Colours the icon using colours from the system colour palette
   */
  color?: string;
  /**
   * Set a border around the icon
   */
  border?: boolean;
  /**
   * Set an icon as a clipping mask around another icon
   */
  mask?: string;
  /**
   * Set icon to display as fixed width
   */
  fixedWidth?: boolean;
  /**
   * Invert the icon for use on dark backgrounds
   */
  inverse?: boolean;
  /**
   * Flip horizontally, vertically, or both
   */
  flip?: IconFlip;
  /**
   * Set the Font Awesome style/weight, and icon
   */
  icon?: any[];
  /**
   * Set icon to render in the style of a list bullet
   */
  listitem?: boolean;
  /**
   * Pull an icon to float to the left or right of the element's other contents
   */
  pull?: IconPull;
  /**
   * Set a slow pulse animation on the icon
   */
  pulse?: boolean;
  /**
   * Rotate the icon by the specified degree
   */
  rotation?: IconRotation;
  /**
   * Set the icon size based on FontAwesome usage for size
   */
  size?: string;
  /**
   * Set an 8-frame spinning animation on the icon
   */
  spin?: boolean;
  /**
   * Set an icon as a symbol to use with the SVG Sprites technique
   */
  symbol?: any;
  /**
   * Power transforms to scale and position the icon
   */
  transform?: any;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
  /**
   * Set an accessibility title for screen readers.
   */
  title?: string;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
