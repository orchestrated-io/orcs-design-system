import * as React from "react";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "primaryLight"
  | "primary"
  | "primaryDark"
  | "secondary";

export interface BadgeProps {
  /**
   * Specifies badge colour. Colours are taken from the standard design system colours.
   */
  variant?: BadgeVariant;
  /**
   * Specified whether the badge text should be able to wrap or not
   */
  noWrap?: boolean;
  /**
   * The label text on the badge is passed as a child element.
   */
  children?: React.ReactNode;
  /**
   * Specifies the system theme.
   */
  theme?: Object;
}

declare const Badge: React.FC<BadgeProps>;

export default Badge;
