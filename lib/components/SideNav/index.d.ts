import * as React from "react";

export interface SideNavItems {
  iconName: string;
  name: string;
  badgeNumber?: string;
  badgeDot?: boolean;
  large?: boolean;
  bottomAligned?: boolean;
  actionType: "component" | "link" | "button";
  component?: any;
  link?: string;
  onClick?: (...args: any[]) => any;
}

export interface SideNavProps {
  sideNavHeight: string;
  items: SideNavItems[];
  LinkComponent?: any;
}

declare const SideNav: React.FC<SideNavProps>;

export default SideNav;
