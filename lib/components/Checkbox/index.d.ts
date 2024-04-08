import * as React from "react";

export type CheckboxColour =
  | "success"
  | "warning"
  | "danger"
  | "primary"
  | "white";

export interface CheckboxProps {
  /**
   * Sets the colour of the checkbox. Colours used are the design system standard colours.
   */
  colour?: CheckboxColour;
  /**
   * Applies disabled attribute and styling
   */
  disabled?: boolean;
  /**
   * Applies checked attribute and styling
   */
  checked?: boolean;
  /**
   * Input name attribute (should be unique id)
   */
  name?: string;
  /**
   * On checkbox input change handler
   */
  onChange?: (...args: any[]) => any;
  /**
   * On checkbox click handler
   */
  onClick?: string;
  /**
   * Text label to display beside the checkbox
   */
  label?: string;
  ariaLabel?: any;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
