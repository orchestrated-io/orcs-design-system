import * as React from "react";

export type RadioButtonVariant =
  | "success"
  | "warning"
  | "danger"
  | "primary"
  | "white";

export interface RadioButtonProps {
  /**
   * Sets a name to define the radio button group
   */
  name?: string;
  /**
   * Sets the value of the radio button
   */
  value?: string;
  /**
   * Sets the label of the radio button
   */
  label?: string;
  ariaLabel?: any;
  /**
   * Sets radio button colour. Default is greyDarker. Use white for inverted styling
   */
  variant?: RadioButtonVariant;
  /**
   * Applies disabled attribute and styling
   */
  disabled?: boolean;
  /**
   * Applies checked attribute and styling
   */
  checked?: boolean;
  /**
   * Function to call when checked
   */
  onChange?: (...args: any[]) => any;
  /**
   * Specifies the system design theme
   */
  theme?: Object;
}

declare const RadioButton: React.FC<RadioButtonProps>;

export default RadioButton;
