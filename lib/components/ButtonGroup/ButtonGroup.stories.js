import React from "react";
import Box from "../Box";
import { ButtonGroupContainer, ButtonGroupItem } from ".";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroupContainer
};

export const defaultButtonGroup = () => (
  <Box bg="white" p="r">
    <ButtonGroupContainer controlLabel="View:" labelDark>
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
  </Box>
);

defaultButtonGroup.story = {
  name: "Default button group"
};

export const invertedButtonGroup = () => (
  <Box bg="greyDark" p="r">
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
  </Box>
);

invertedButtonGroup.story = {
  name: "Inverted button group"
};
