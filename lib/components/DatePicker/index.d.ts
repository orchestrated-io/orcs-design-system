import * as React from "react";

export type DatePickerDisplayFormat = string | ((...args: any[]) => any);

export interface DatePickerProps {
  /**
   * Specifies a single date picker
   */
  single?: boolean;
  /**
   * Specifies a range date picker
   */
  range?: boolean;
  /**
   * For Single DatePicker Date
   */
  date?: any;
  /**
   * For Single DatePicker date change
   */
  onDateChange?: (...args: any[]) => any;
  /**
   * For Single DatePicker input placeholder
   */
  placeholder?: string;
  /**
   * For Range DatePicker Start Date
   */
  startDate?: any;
  /**
   * For Range DatePicker End Date
   */
  endDate?: any;
  /**
   * For Range DatePicker dates change
   */
  onDatesChange?: (...args: any[]) => any;
  /**
   * For focus state change
   */
  onFocusChange?: (...args: any[]) => any;
  /**
   * Input focused state
   */
  focusedInput?: boolean;
  /**
   * Date format
   */
  displayFormat?: DatePickerDisplayFormat;
  /**
   * For specifying width of input (specify units)
   */
  width?: string;
  /**
   * For specifying height of input (specify units)
   */
  height?: string;
  /**
   * Applies invalid input styles
   */
  invalid?: boolean;
  /**
   * Should not be visible
   * @ignore
   */
  autoFocus?: boolean;
  autoFocusEndDate?: boolean;
  stateDateWrapper?: (...args: any[]) => any;
  initialStartDate?: any;
  initialEndDate?: any;
}

export default class DatePicker extends React.Component<DatePickerProps, any> {
  render(): JSX.Element;
}
