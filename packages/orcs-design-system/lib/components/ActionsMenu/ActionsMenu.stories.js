import React from "react";
import ActionsMenu from ".";
import Flex from "../Flex";
import Box from "../Box";

export default {
  title: "Units/ActionsMenu",
  decorators: [storyFn => <Box pb="xxl">{storyFn()}</Box>],
  parameters: {
    component: ActionsMenu
  }
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <a href="https://orchestrated.io/">Open details page</a>
    <button type="button">Edit</button>
    <button type="button">Remove</button>
  </ActionsMenu>
);
defaultActionsMenu.story = {
  name: "Default actions menu"
};

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu direction="left">
      <a href="https://orchestrated.io/">Open details page</a>
      <button type="button">Edit</button>
      <button type="button">Remove</button>
    </ActionsMenu>
  </Flex>
);
leftOffsetActionsMenu.story = {
  name: "Left offset actions menu"
};
