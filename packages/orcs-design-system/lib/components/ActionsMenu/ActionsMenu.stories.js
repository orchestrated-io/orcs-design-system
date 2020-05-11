import React from "react";
import ActionsMenu from ".";
import Box from "../Box";
import Flex from "../Flex";

export default {
  title: "Components/ActionsMenu",
  includeStories: []
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <a href="#">Open details in new tab</a>
    <a href="#">Edit</a>
    <a href="#">Remove</a>
  </ActionsMenu>
);
defaultActionsMenu.story = {
  name: "Default actions menu"
};

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu direction="left">
      <a href="#">Open details in new tab</a>
      <a href="#">Edit</a>
      <a href="#">Remove</a>
    </ActionsMenu>
  </Flex>
);
leftOffsetActionsMenu.story = {
  name: "Left offset actions menu"
};
