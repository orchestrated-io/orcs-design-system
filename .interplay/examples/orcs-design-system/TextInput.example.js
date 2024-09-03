import React from "react";
import { TextInput } from "orcs-design-system";

export default {
  title: "TextInput",
  component: TextArea
};

export const Basic = {
  render: () => (
    <TextInput
      key="textInput1"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
    />
  )
};
