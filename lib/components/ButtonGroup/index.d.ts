import * as React from "react";

export interface ButtonGroupContainerProps {
  children?: React.ReactNode;
  controlLabel?: string;
  labelDark?: boolean;
  theme?: Object;
}

export const ButtonGroupContainer: React.FC<ButtonGroupContainerProps>;

export interface ButtonGroupItemProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (...args: any[]) => any;
  theme?: Object;
}

export const ButtonGroupItem: React.FC<ButtonGroupItemProps>;
