import * as React from "react";
import {
  TypographyProps,
  SpaceProps,
  LayoutProps,
  ColorProps
} from "styled-system";

type FontWeights = number[];

interface BaseProps
  extends TypographyProps,
    SpaceProps,
    LayoutProps,
    ColorProps {
  uppercase?: boolean;
  breakWord?: boolean;
  weight?: keyof FontWeights | "light" | "bold";
  sizing?: "large" | "small";
}

declare const H1: React.ComponentType<BaseProps>;
declare const H2: React.ComponentType<BaseProps>;
declare const H3: React.ComponentType<BaseProps>;
declare const H4: React.ComponentType<BaseProps>;
declare const H5: React.ComponentType<BaseProps>;
declare const H6: React.ComponentType<BaseProps>;
declare const P: React.ComponentType<BaseProps>;
declare const Small: React.ComponentType<BaseProps>;
declare const Text: React.ComponentType<BaseProps>;
declare const Quote: React.ComponentType<BaseProps>;
declare const Code: React.ComponentType<BaseProps>;

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Small,
  Text,
  Quote,
  Code,
  BaseProps,
  FontWeights
};
