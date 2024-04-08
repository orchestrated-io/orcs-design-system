import * as React from "react";

export interface ProgressBarProps {
  /**
   * Sets the percentage width of the parent container
   */
  containerWidth?: number;
  /**
   * Sets the percentage width of the fill
   */
  fillWidth?: number;
  /**
   * Changes fill to have a gradient
   */
  gradient?: boolean;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
  /**
   * Specifies the aria-label for the progress bar
   */
  ariaLabel?: Object;
}

declare const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;
