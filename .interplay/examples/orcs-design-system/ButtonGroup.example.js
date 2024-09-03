import React from "react";
import { ButtonGroupContainer, ButtonGroupItem } from "orcs-design-system";

export default {
  title: "ButtonGroup",
  component: ButtonGroup
};

export const Basic = {
  render: () => (
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
  )
};
