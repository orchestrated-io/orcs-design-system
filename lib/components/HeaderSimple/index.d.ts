import * as React from "react";

export type HeaderSimpleVariant = "search";

export interface HeaderSimpleProps {
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
   * Alt text for avatar image.
   */
  avatarAlt?: string;
  /**
   * Can specify a component to be used for searching
   */
  searchComponent?: React.ReactNode;
  /**
   * Applies the chosen theme to the entire header.
   */
  theme?: Object;
  /**
   * Specifies alternate versions of the header
   */
  variant?: HeaderSimpleVariant;
  /**
   * Allows for use of the `data-testid` attribute for testing.
   */
  dataTestId?: string;
}

declare const HeaderSimple: React.FC<HeaderSimpleProps>;

export default HeaderSimple;
