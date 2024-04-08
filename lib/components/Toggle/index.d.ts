import * as React from "react";

export interface ToggleProps {
  /**
   * Must be used to specify a unique ID.
   */
  id: string;
  /**
   * Specifies the text for the label.
   */
  label: string;
  /**
   * Specifies whether the `checkbox` for Toggle is on or not.
   */
  checked?: boolean;
  /**
   * Changes appearance to suit a dark background.
   */
  inverted?: boolean;
  /**
   * Applies disabled attribute and styles
   */
  disabled?: boolean;
  /**
   * Makes toggle and label smaller.
   */
  small?: boolean;
  /**
   * Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional.
   */
  srHide?: boolean;
  /**
   * Specifies the theme for component design
   */
  theme?: Object;
}

declare const Toggle: React.FC<ToggleProps>;

export default Toggle;
