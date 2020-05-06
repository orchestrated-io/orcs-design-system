import React from "react";
import ActionsMenu from ".";
import Box from "../Box";

export default {
  title: "Components/ActionsMenu",
  decorators: [storyFn => <Box p="20px 20px 80px 20px">{storyFn()}</Box>],
  parameters: {
    component: ActionsMenu
  }
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <a href="#">Open details in new tab</a>
    <a href="#">Edit</a>
    <a href="#">Remove</a>
  </ActionsMenu>
);
defaultActionsMenu.story = {
  name: "Default ActionsMenu"
};
