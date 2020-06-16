import React from "react";
import Box from "../Box";
import { ButtonGroupContainer, ButtonGroupItem } from ".";

export default {
  title: "Units/ButtonGroup",
  decorators: [
    storyFn => (
      <Box bg="greyDark" p="r">
        {storyFn()}
      </Box>
    )
  ],
  parameters: {
    component: ButtonGroupContainer
  }
};

export const defaultButtonGroup = () => (
  <ButtonGroupContainer controlLabel="View:">
    <ButtonGroupItem name="viewMode" label="Chapters" value="Chapters view" />
    <ButtonGroupItem
      name="viewMode"
      label="Groups"
      value="Groups view"
      checked={true}
    />
    <ButtonGroupItem
      name="viewMode"
      label="Constraints"
      value="Constraints view"
    />
  </ButtonGroupContainer>
);
defaultButtonGroup.story = {
  name: "Default button group"
};
