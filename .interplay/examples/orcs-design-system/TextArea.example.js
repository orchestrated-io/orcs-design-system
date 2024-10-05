import React from "react";
import { TextArea } from "orcs-design-system";

export default {
  title: "TextArea",
  component: TextArea
};

export const Basic = {
  render: () => <TextArea label="Message" placeholder="Enter your message" />
};
