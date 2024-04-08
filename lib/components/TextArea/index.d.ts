import * as React from "react";

export interface TextAreaProps {
  /**
   * Must be used to specify a unique ID.
   */
  id: string;
  /**
   * Use value to specify text in text area.
   */
  value?: string;
  /**
   * Specifies the text for the TextArea label.
   */
  label?: string;
  /**
   * Specifies aria-label for TextArea. This is only required if not using the label prop.
   */
  ariaLabel?: any;
  /**
   * Set the label text to bold font-weight.
   */
  bold?: boolean;
  /**
   * Sets disabled attribute and styling
   */
  disabled?: boolean;
  /**
   * Makes text box take up full width of parent
   */
  fullWidth?: boolean;
  /**
   * Sets specified width of input area in columns
   */
  cols?: string;
  /**
   * Sets specified height of input area in rows
   */
  rows?: string;
  /**
   * Applies invalid styles (coloured with "warning" colour from design system)
   */
  invalid?: boolean;
  /**
   * Applies valid styles (coloured with "success" colour from design system)
   */
  valid?: boolean;
  /**
   * Shows asterisk to denote a mandatory field
   */
  mandatory?: boolean;
  /**
   * Set inverted styling for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Set additional styles for the `Wrapper` if needed
   */
  WrapperStyles?: Object;
  /**
   * Set additional styles for the `Label` if needed
   */
  LabelStyles?: Object;
  /**
   * Set additional styles for the `Input` textarea if needed
   */
  InputStyles?: Object;
  /**
   * Specifies `data-testid` for testing
   */
  "data-testid"?: string;
  /**
   * Specifies whether TextArea should automatically get focus
   */
  autoFocus?: boolean;
  /**
   * Specifies `onChange` function
   */
  onChange?: (...args: any[]) => any;
  /**
   * Specifies `textarea` default value (different from placeholder)
   */
  defaultValue?: string;
  /**
   * Specifies the design theme object
   */
  theme?: Object;
}

declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;
