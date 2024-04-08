import * as React from "react";

export type ActionsMenuBodyChildren = React.ReactNode | React.ReactNode[];

export interface ActionsMenuBodyProps {
  onTriggerFocus?: (...args: any[]) => any;
  onToggle: (...args: any[]) => any;
  closeMenu: (...args: any[]) => any;
  toggleState: boolean;
  closeOnClick?: boolean;
  direction?: string;
  menuTopPosition?: string;
  menuLeftPosition?: string;
  menuRightPosition?: string;
  menuWidth?: string;
  customTriggerComponent?: React.ReactNode;
  children?: ActionsMenuBodyChildren;
  theme?: Object;
  ariaLabel?: string;
}

export const ActionsMenuHeading: React.FC<ActionsMenuBodyProps>;

export const ActionsMenuItem: React.FC<ActionsMenuBodyProps>;

export const ActionsMenuBody: React.FC<ActionsMenuBodyProps>;

export type ActionsMenuChildren = React.ReactNode | React.ReactNode[];

export interface ActionsMenuProps {
  isOpen?: boolean;
  direction?: string;
  customTriggerComponent?: React.ReactNode;
  closeOnClick?: boolean;
  children?: ActionsMenuChildren;
  /**
   * Specifies the colour theme
   */
  theme?: Object;
  /**
   * Specifies the aria-label for the button
   */
  ariaLabel?: Object;
}

declare const ActionsMenu: React.FC<ActionsMenuProps>;

export default ActionsMenu;
