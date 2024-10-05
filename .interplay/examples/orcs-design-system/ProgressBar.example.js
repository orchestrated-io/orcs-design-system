import React from "react";
import { ProgressBar } from "orcs-design-system";

export default {
  title: "ProgressBar",
  component: ProgressBar
};

export const Basic = {
  render: () => (
    <ProgressBar
      ariaLabel="Percent Completed"
      containerWidth={100}
      fillWidth={75}
    />
  )
};
