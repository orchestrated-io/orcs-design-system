import React from "react";
import ActionsMenu from ".";
import Flex from "../Flex";
import Box from "../Box";
import mdx from "./ActionsMenu.mdx";

export default {
  title: "Components/ActionsMenu",
  decorators: [(storyFn) => <Box pb="xxl">{storyFn()}</Box>],
  parameters: {
    docs: { page: mdx }
  },
  component: ActionsMenu
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <a href="https://orchestrated.io/">Open details page</a>
    <button type="button">Edit</button>
    <button type="button">Remove</button>
  </ActionsMenu>
);
defaultActionsMenu.storyName = "Default";

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu direction="left">
      <a href="https://orchestrated.io/">Open details page</a>
      <button type="button">Edit</button>
      <button type="button">Remove</button>
    </ActionsMenu>
  </Flex>
);
leftOffsetActionsMenu.storyName = "Left offset";
