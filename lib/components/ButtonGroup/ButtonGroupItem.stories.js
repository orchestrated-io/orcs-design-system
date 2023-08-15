import React from "react";
import Box from "../Box";
import { ButtonGroupItem } from ".";

export default {
  title: "Components/ButtonGroupItem",
  decorators: [
    (storyFn) => (
      <Box bg="greyDark" p="r">
        {storyFn()}
      </Box>
    )
  ],
  component: ButtonGroupItem
};

export const defaultButtonGroupItem = () => (
  <ButtonGroupItem name="viewMode" label="Chapters" value="Chapters view" />
);

defaultButtonGroupItem.story = {
  name: "Default button group item"
};
