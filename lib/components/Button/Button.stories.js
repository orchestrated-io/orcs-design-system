import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|Button",
  decorators: [
    storyFn => (
      <Layout padding childVerticalSpacing>
        {storyFn()}
      </Layout>
    )
  ]
};

export const size = () => [
  <Button small onClick={action("clicked")}>
    Small button
  </Button>,
  <Button onClick={action("clicked")}>Regular button</Button>,
  <Button large onClick={action("clicked")}>
    Large button
  </Button>
];
size.story = {
  name: "Size"
};
export const alternateColours = () => [
  <Button colour="success" onClick={action("clicked")}>
    Green button
  </Button>,
  <Button colour="danger" onClick={action("clicked")}>
    Red button
  </Button>
];
alternateColours.story = {
  name: "Alternate colours"
};
export const alternateStyle = () => [
  <Button small ghost onClick={action("clicked")}>
    Small ghost button
  </Button>,
  <Button ghost onClick={action("clicked")}>
    Regular ghost button
  </Button>,
  <Button large ghost onClick={action("clicked")}>
    Large ghost button
  </Button>
];
alternateStyle.story = {
  name: "Alternate style"
};
