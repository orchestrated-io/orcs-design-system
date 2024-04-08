import * as React from "react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type SelectOptions = Array<{ value: string; label: string }> | object;

export type SelectSelectType = "default" | "createable" | "async";

export interface SelectProps {
  /**
   * Points to options object, see example code above
   */
  options?: SelectOptions;
  /**
   * Specifies the label for the `Select`
   */
  label?: string;
  ariaLabel?: any;
  /**
   * Makes label bold
   */
  bold?: boolean;
  /**
   * Makes select disabled
   */
  isDisabled?: boolean;
  /**
   * Specifies the ID for the rendered Select box. If you use the label prop label will automatically point to this ID, so this is required.
   */
  inputId?: any;
  /**
   * Specifies the height of the select box control, make sure to include the unit, e.g. px
   */
  height?: string;
  /**
   * Specifies the padding of the value showed in the select box control, make sure to include the unit, e.g. px
   */
  padding?: string;
  /**
   * Specifies if the `Select` component is multi-select.
   */
  isMulti?: boolean;
  /**
   * Styling for dark backgrounds.
   */
  inverted?: boolean;
  /**
   * Specifies the `data-testid` attribute for testing.
   */
  dataTestId?: string;
  /**
   * Specifies prefix for the `#class` applied to the `Select` structures
   */
  classNamePrefix?: string;
  /**
   * Specifies `data-testid` for testing
   */
  "data-testid"?: string;
  /**
   * Specifies `onChange` function for the input
   */
  onChange?: (...args: any[]) => any;
  /**
   * Specifies the system design theme object
   */
  theme?: Object;
  /**
   * Specify if you want react-select createable option
   */
  selectType?: SelectSelectType;
  /**
   * Specify if you want to overwrite existing customStyles
   */
  updateStyles?: (...args: any[]) => any;
  /**
   * Applies invalid input styles
   */
  invalid?: boolean;
  /**
   * Shows asterisk to denote a mandatory field
   */
  mandatory?: boolean;
  /**
   * Focus on input
   */
  focus?: boolean;
}

declare const Select: ForwardRefExoticComponent<
  SelectProps & RefAttributes<HTMLDivElement>
>;

export default Select;
