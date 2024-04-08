import * as React from "react";
import { StyledComponent } from "styled-components";

export type StyledLinkTo = React.ReactElement<any> | string | React.ReactNode;

export interface StyledLinkProps {
  /**
   * The content wrapped by the link component
   */
  children?: React.ReactNode;
  /**
   * Designates the active link, eg if in a navigation menu, it is the current screen
   */
  active?: boolean;
  /**
   * Specifies if link is rendered as display:block
   */
  block?: boolean;
  /**
   * Renders a white link (useful for dark backgrounds)
   */
  white?: boolean;
  /**
   * Styles the link text in bold
   */
  bold?: boolean;
  /**
   * Specifies the destination of react-router `Link`
   */
  to?: StyledLinkTo;
  /**
   * Specifies the link target
   */
  target?: string;
  /**
   * Specifies if the `StyledLink` should be visually styled to resemble a button
   */
  button?: boolean;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const StyledLink: React.FC<StyledLinkProps>;

export default StyledLink;

interface LinkProps extends StyledLinkProps {}

export const styleLink: (
  LinkComponent: React.ComponentType<LinkProps>
) => StyledComponent<any, any, StyledLinkProps, never>;
