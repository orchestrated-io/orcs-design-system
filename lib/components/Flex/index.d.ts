import * as React from "react";
import { SpaceProps, LayoutProps, FlexboxProps, Theme } from "styled-system";

export interface FlexProps {
  /**
   * Children of `Flex` are taken as node elements
   */
  children?: React.ReactNode;
  theme?: Object;
}

declare const Flex: React.FC<FlexProps>;

export default Flex;

export interface FlexItemProps extends SpaceProps, LayoutProps, FlexboxProps {
  children?: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps>;
