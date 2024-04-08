import * as React from "react";

export type AvatarSizing = "small" | "large" | "default";

export type AvatarShape = "square" | "hexagon" | "tag" | "default";

export type AvatarType = "inverted" | "default";

export type AvatarInitials = string | React.ReactElement<any>;

export type AvatarSubtitleContent = React.ReactElement<any> | React.ReactNode;

export type AvatarTitle = string | React.ReactElement<any>;

export type AvatarTitleLevel = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export interface AvatarProps {
  /**
   * Changes the sizing of the Avatar component
   */
  sizing?: AvatarSizing;
  /**
   * Changes the shape of the Avatar component
   */
  shape?: AvatarShape;
  /**
   * Specifies the inverted type for dark backgrounds
   */
  type?: AvatarType;
  /**
   * Specifies a source path for an image
   */
  image?: string;
  /**
   * Specifies the alt text for an image. This must be specified if image prop is used and title prop is not a string.
   */
  imageAlt?: any;
  /**
   * Specifies initials of person if available
   */
  initials?: AvatarInitials;
  /**
   * Specifies custom content for avatar subtitle
   */
  subtitleContent?: AvatarSubtitleContent;
  /**
   * Turns white initials on for custom `Circle` backgrounds
   */
  whiteInitials?: boolean;
  /**
   * Specifies whether to use uppercase for initials
   */
  uppercase?: boolean;
  /**
   * Specifies title / name as just plain text, or an element like a hyperlink or react router link
   */
  title?: AvatarTitle;
  /**
   * Specifies the component to wrap the heading, defaults to H3
   */
  titleLevel?: AvatarTitleLevel;
  /**
   * Specifies subtitle / role
   */
  subtitle?: string;
  /**
   * Specifies local time
   */
  localTime?: string;
  /**
   * Specifies the colour theme
   */
  theme?: Object;
}

declare const Avatar: React.FC<AvatarProps>;

export default Avatar;
