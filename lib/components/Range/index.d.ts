import * as React from "react";

export interface RangeProps {
  /**
   * Sets the minimum value for the range
   */
  min?: number;
  /**
   * Sets the maximum value for the range
   */
  max?: number;
  /**
   * Sets the default value for the range
   */
  defaultValue?: number;
  /**
   * Sets the aria-label for accessibility
   */
  ariaLabel: string;
  /**
   * Changes appearance to suit dark backgrounds
   */
  inverted?: boolean;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Range: React.FC<RangeProps>;

export default Range;
