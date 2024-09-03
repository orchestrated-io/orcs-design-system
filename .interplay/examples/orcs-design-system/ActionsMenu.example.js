import React from "react";
import ActionsMenu, { ActionsMenuItem } from "orcs-design-system";

export default {
  title: "ActionsMenu",
  component: ActionsMenu
};

export const Basic = {
  render: () => (
    <ActionsMenu>
      <ActionsMenuItem href="https://teamform.co/">
        Open website
      </ActionsMenuItem>
    </ActionsMenu>
  )
};
