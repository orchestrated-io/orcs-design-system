import * as React from "react";

export type NotificationChildren = React.ReactNode | React.ReactNode[];

export type NotificationColor = "success" | "warning" | "danger" | "primary";

export interface NotificationProps {
  children?: NotificationChildren;
  /**
   * Applies an icon to notification with specified name.
   */
  icon?: any[];
  /**
   * Specifies the props of the icon -- see `Icon` component for accepted props
   */
  iconProps?: Object;
  /**
   * Specifies notification colour
   */
  colour?: NotificationColor;
  /**
   * Specifies if the `Icon` should show the loading style.
   */
  loading?: boolean;
  /**
   * Positions notification floating over content, instead of inline. Must be combined with top, right, bottom, left or centered props to correctly position in your desired location
   */
  floating?: boolean;
  /**
   * Specifies the position of a floating notification from top of browser window (units must be specified)
   */
  top?: string;
  /**
   * Specifies the position of a floating notification from right of browser window (units must be specified)
   */
  right?: string;
  /**
   * Specifies the position of a floating notification from bottom of browser window (units must be specified)
   */
  bottom?: string;
  /**
   * Specifies the position of a floating notification from left of browser window (units must be specified)
   */
  left?: string;
  /**
   * Horizontally centers a floating notification. If you use this, you don't need to specify left or right props, only top or bottom depending on if you want the notification to sit at the top or bottom of the screen
   */
  centered?: boolean;
  /**
   * A callback function for the dismiss operation.
   */
  onDismiss?: (...args: any[]) => any;
  /**
   * Showing the close button, default to true.
   */
  closable?: boolean;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Notification: React.FC<NotificationProps>;

export default Notification;
