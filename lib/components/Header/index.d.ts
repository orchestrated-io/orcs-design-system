import * as React from "react";

export type HeaderChildren = React.ReactNode | React.ReactNode[];

export type HeaderSideMenuContent = React.ReactNode | React.ReactNode[];

export type HeaderInternalAppSwitcherContent =
  | React.ReactNode
  | React.ReactNode[];

export type HeaderExternalAppSwitcherContent =
  | React.ReactNode
  | React.ReactNode[];

export type HeaderRightAlignedContent = React.ReactNode | React.ReactNode[];

export type HeaderVariant = "search" | "searchAndLinks";

export type HeaderThemeSwitcherContent = React.ReactNode | React.ReactNode[];

export type HeaderWorkspaceSwitcherContent =
  | React.ReactNode
  | React.ReactNode[];

export interface HeaderProps {
  /**
   * Logo for app. Preferably an svg logo
   */
  logo?: React.ReactNode;
  /**
   * Text for app name. Can be a plain text string or an svg logo
   */
  appName?: React.ReactNode;
  /**
   * Current active workspace name. Can be a plain text string or a component
   */
  currentWorkspace?: React.ReactNode;
  /**
   * Text for username.
   */
  userName?: React.ReactNode;
  /**
   * Source path for avatar image.
   */
  avatarSource?: React.ReactNode;
  /**
   * String of text for additional client info.
   */
  clientInfo?: React.ReactNode;
  /**
   * Function for what should happen when logout link is clicked
   */
  logoutFunction?: (...args: any[]) => any;
  /**
   * Can specify a link that will be rendered on the right side of the header
   */
  rightAlignedLink?: React.ReactNode;
  /**
   * Can specify a component to be used for searching
   */
  searchComponent?: React.ReactNode;
  /**
   * Applies the chosen theme to the entire header.
   */
  theme?: Object;
  /**
   * Specifies whether the app switcher should exist or not
   */
  appSwitcher?: boolean;
  /**
   * Changes the app switcher to light theme
   */
  lightAppSwitcher?: boolean;
  /**
   * Navigation links are rendered as child components.
   */
  children?: HeaderChildren;
  /**
   * sideMenuContent are links or other content that can be specified and will appear only in the slide out side menu
   */
  sideMenuContent?: HeaderSideMenuContent;
  /**
   * InternalAppSwitcherContent are links or other content that can be specified and will appear only in the slide out side menu
   */
  internalAppSwitcherContent?: HeaderInternalAppSwitcherContent;
  /**
   * ExternalAppSwitcherContent are links or other content that can be specified and will appear only in the slide out side menu
   */
  externalAppSwitcherContent?: HeaderExternalAppSwitcherContent;
  /**
   * RightAlignedContent are links or other content that can be specified and will be positioned on the right side of the header
   */
  rightAlignedContent?: HeaderRightAlignedContent;
  /**
   * Specifies alternate versions of the header
   */
  variant?: HeaderVariant;
  /**
   * Allows for use of the `data-testid` attribute for testing.
   */
  dataTestId?: string;
  /**
   * Theme related props *
   */
  themeSwitcherContent?: HeaderThemeSwitcherContent;
  workspaceSwitcherContent?: HeaderWorkspaceSwitcherContent;
  navToggleId?: string;
}

declare const Header: React.FC<HeaderProps>;

export default Header;
