import * as React from "react";

export interface LoadingProps {
  /**
   * Large loading spinner
   */
  large?: boolean;
  /**
   * Centered loading spinner
   */
  centered?: boolean;
  /**
   * Changes colours to work on dark background
   */
  inverted?: boolean;
  /**
   * Changes colours to primary branding colour
   */
  primary?: boolean;
  /**
   * Specifies the system design theme
   */
  theme?: Object;
  /**
   * Specifies the aria-label for loading image
   */
  ariaLabel?: string;
}

declare const Loading: React.FC<LoadingProps>;

export default Loading;
