import * as React from "react";

export interface TextInputProps {
  /**
   * Must be used to specify a unique ID.
   */
  id: string;
  /**
   * Can be used to set a specific height.
   */
  height?: string;
  /**
   * Specifies the text for the label.
   */
  label?: string;
  /**
   * Specifies aria-label for TextArea. This is only required if not using the label prop.
   */
  ariaLabel: any;
  /**
   * Makes label text bold
   */
  bold?: boolean;
  /**
   * Specifies the helper/example text for the placeholder.
   */
  placeholder?: string;
  /**
   * Specifies the type of text input, e.g. text, email, password, number
   */
  type?: string;
  /**
   * Applies different styling for a floating animated label aesthetic
   */
  floating?: boolean;
  /**
   * Makes text box take up full width of parent
   */
  fullWidth?: boolean;
  /**
   * Applies invalid input styles
   */
  invalid?: boolean;
  /**
   * Applies valid input styles
   */
  valid?: boolean;
  /**
   * Shows asterisk to denote a mandatory field
   */
  mandatory?: boolean;
  /**
   * Applies an icon to the left of the text box with specified name.
   */
  iconLeft?: any[];
  /**
   * Applies an icon to the right of the text box with specified name.
   */
  iconRight?: any[];
  /**
   * Number format props, to render a number input textbox
   */
  numberProps?: Object;
  /**
   * Set inverted styling for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Specifies the `data-testid` attribute for testing.
   */
  "data-testid"?: string;
  /**
   * Specifies any additional `space` and `layout` props for the entire component
   */
  InputStyles?: Object;
  /**
   * Focus on input
   */
  focus?: boolean;
}

declare const TextInput: React.FC<TextInputProps>;

export default TextInput;
