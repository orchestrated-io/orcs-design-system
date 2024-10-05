import React from "react";
import { Select } from "orcs-design-system";

export default {
  title: "Select",
  component: Select
};

export const Basic = {
  render: () => (
    <Select
      options={[{ value: "option1", label: "Option 1" }]}
      label="Select label"
      inputId="defaultSelect"
    />
  )
};
