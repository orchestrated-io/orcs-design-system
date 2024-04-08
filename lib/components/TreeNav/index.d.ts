import * as React from "react";

interface TreeNode {
  name: string;
  checkbox?: boolean;
  checkboxOnChange?: () => void;
  badgeText?: string;
  badgeColour?: string;
}

interface TreeNavProps {
  data: TreeNode[];
}

declare const TreeNav: React.FC<TreeNavProps>;

export default TreeNav;
