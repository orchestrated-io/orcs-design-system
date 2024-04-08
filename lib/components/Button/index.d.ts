import * as React from "react";

export type ButtonVariant =
  | "success"
  | "successAlternate"
  | "danger"
  | "dangerAlternate"
  | "ghost"
  | "disabled"
  | "default";

export interface ButtonProps {
  /**
   * Large button
   */
  large?: boolean;
  /**
   * Small button
   */
  small?: boolean;
  /**
   * Specifies alternate button colours/styles.
   */
  variant?: ButtonVariant;
  /**
   * Full width button that takes up all available space of parent
   */
  fullWidth?: boolean;
  /**
   * Adds a spinner animation to indicate loading or processing
   */
  isLoading?: boolean;
  /**
   * Styles button to fit an icon on the left of text. Uses Icon component.
   */
  iconLeft?: boolean;
  /**
   * Styles button to fit an icon on the right of text. Uses Icon component.
   */
  iconRight?: boolean;
  /**
   * New functionality to specify an `Icon` on the left side without having to include it as a child.
   */
  leftIcon?: any[];
  /**
   * New functionality to specify an `Icon` on the right side without having to include it as a child.
   */
  rightIcon?: any[];
  /**
   * Styles button to suit having only an icon. Uses Icon component.
   */
  iconOnly?: boolean;
  /**
   * Specifies whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * Function to run when the `Button` is clicked
   */
  onClick?: (...args: any[]) => any;
  /**
   * The text label on the button is passed as a child. Keep this text short and descriptive. Use an action word or confirmation if possible.
   */
  children?: React.ReactNode;
  /**
   * Adds additional styling to the rendered `<button>` using `space`, `layout`, `color` and `border` prop categories
   */
  ButtonStyles?: Object;
  /**
   * Specifies the `data-testid` attribute for testing.
   */
  dataTestId?: string;
  /**
   * Specifies aria-label for iconOnly buttons. This is only required if the iconOnly button is used, as it doesn't have supporting text for accessibility.
   */
  ariaLabel?: any;
  /**
   * Specifies the color theme object.
   */
  theme?: Object;
}

declare const Button: React.FC<ButtonProps>;

export default Button;
