import * as React from "react";

export interface DividerProps {
  /**
   * Divider will use a lighter grey colour
   */
  light?: boolean;
  /**
   * Divider will be 3px instead of 1px
   */
  thick?: boolean;
  /**
   * Divider will have a dashed line instead of solid line
   */
  dash?: boolean;
  /**
   * Divider will be a darker colour more suited for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Divider will span all columns when in a grid so it can be used as a row divider
   */
  spanGrid?: boolean;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Divider: React.FC<DividerProps>;

export default Divider;
