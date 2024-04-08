import * as React from "react";
import {
  SpaceProps,
  LayoutProps,
  FlexProps,
  ColorProps,
  GridProps,
  Theme
} from "styled-system";

export type GridGridAutoFlow =
  | "row"
  | "column"
  | "row dense"
  | "column dense"
  | "inherit"
  | "initial"
  | "unset";

export type GridGridGap = number | string;

interface GridGridProps
  extends SpaceProps,
    LayoutProps,
    FlexProps,
    ColorProps,
    GridProps {
  children?: React.ReactNode;
  theme?: Object;
  dataTestId?: string;
  gridAutoFlow?: GridGridAutoFlow;
  gridGap?: GridGridGap;
}

declare const Grid: React.FC<GridGridProps>;

export default Grid;

export interface GridItemProps
  extends SpaceProps,
    LayoutProps,
    FlexProps,
    ColorProps {
  children?: React.ReactNode;
  dataTestId?: string;
}

export const GridItem: React.FC<GridItemProps>;
