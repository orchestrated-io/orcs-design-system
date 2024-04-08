import * as React from "react";
import { SpaceProps, LayoutProps } from "styled-system";

export interface SpacerProps extends SpaceProps, LayoutProps {
  theme?: object;
}

declare const Spacer: React.FC<SpacerProps>;

export default Spacer;
