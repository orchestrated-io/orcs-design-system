import * as React from "react";
import { Direction } from "../../hooks";

export type PopoverTextAlign = "left" | "right" | "center";

export type PopoverVariant = "tooltip";

export interface PopoverProps {
  /**
   * The element that requires the popover helper text.
   */
  children?: React.ReactElement<any>;
  /**
   * Specifies the direction of the popover. Defaults to right if not specified
   */
  direction?: Direction;
  /**
   * The text contained in the popover element
   */
  text?: React.ReactNode;
  /**
   * Specifies the alignment of the text inside the popover
   */
  textAlign?: PopoverTextAlign;
  /**
   * Specifies the width of the popover (you need to specify units, e.g. pixels, %). If you use % it will be a percentage of the width of the Popover container
   */
  width?: string;
  /**
   * Sets display property of popover tooltip to inline-block
   */
  inlineBlock?: boolean;
  /**
   * Specifies the variant of the popover.
   */
  variant?: PopoverVariant;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
  /**
   * Specifies whether enable select all behavior
   */
  enableSelectAll?: boolean;
  /**
   * Provide an aria-label if text is not a string
   */
  ariaLabel?: string;
  /**
   * Provide a tab index for accessibility, defaults to 0
   */
  tabIndex?: number;
}

declare const Popover: React.FC<PopoverProps>;

export default Popover;
