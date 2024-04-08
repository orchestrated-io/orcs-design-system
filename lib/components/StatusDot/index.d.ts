import * as React from "react";

export type StatusDotVariant = "success" | "warning" | "danger";

export interface StatusDotProps {
  /**
   * Specifies StatusDot colour. Colours are taken from the standard design system colours.
   */
  variant?: StatusDotVariant;
  /**
   * Specifies that this StatusDot contains an icon
   */
  icon?: boolean;
  /**
   * Can specify an Icon componet as a child item
   */
  children?: React.ReactNode;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const StatusDot: React.FC<StatusDotProps>;

export default StatusDot;
