import * as React from "react";

export type BoxDisplay =
  | "inline"
  | "block"
  | "contents"
  | "inline-block"
  | "none"
  | "initial"
  | "inherit";

export type BoxOverflow = "visible" | "hidden" | "scroll" | "auto";

export type BoxP = number | string;

export type BoxM = number | string;

export type BoxWidth = any[] | string;

export type BoxHeight = any[] | string;

export interface BoxProps {
  /**
   * Children of `Box` are taken as node elements
   */
  children?: React.ReactNode;
  /**
   * Sets `Box` display mode. Default is `block`.
   */
  display?: BoxDisplay;
  /**
   * Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.
   */
  overflow?: BoxOverflow;
  /**
   * Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.
   */
  p?: BoxP;
  /**
   * Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.
   */
  m?: BoxM;
  /**
   * Sets the background colour of the box.
   */
  bg?: string;
  /**
   * Sets the width of the box.
   */
  width?: BoxWidth;
  /**
   * Sets the height of the box. Default is `auto`.
   */
  height?: BoxHeight;
  /**
   * Specifies the `data-testid` attribute for testing.
   */
  dataTestId?: string;
  /**
   * Specifies the colour theme
   */
  theme?: Object;
}

declare const Box: React.FC<BoxProps>;

export default Box;
