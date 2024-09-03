import React from "react";
import { Range } from "orcs-design-system";

export default {
  title: "Range",
  component: Range
};

export const Basic = {
  render: () => (
    <Range
      min={0}
      max={20}
      defaultValue={10}
      ariaLabel="Default range slider"
    />
  )
};
