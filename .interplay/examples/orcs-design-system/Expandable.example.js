import React from "react";
import { Expandable } from "orcs-design-system";

export default {
  title: "Expandable",
  component: Expandable
};

export const Basic = {
  render: () => (
    <Expandable title="Click to expand">Expanded content goes here</Expandable>
  )
};
