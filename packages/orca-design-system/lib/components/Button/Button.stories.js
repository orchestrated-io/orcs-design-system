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
  <Button key="button-size-1" small onClick={action("clicked")}>
    Small button
  </Button>,
  <Button key="button-size-2" onClick={action("clicked")}>
    Regular button
  </Button>,
  <Button key="button-size-3" large onClick={action("clicked")}>
    Large button
  </Button>
];
size.story = {
  name: "Size"
};
export const alternateColours = () => [
  <Button key="button-altcolour-1" colour="success" onClick={action("clicked")}>
    Green button
  </Button>,
  <Button key="button-altcolour-2" colour="danger" onClick={action("clicked")}>
    Red button
  </Button>
];
alternateColours.story = {
  name: "Alternate colours"
};
export const alternateStyle = () => [
  <Button key="button-altstyle-1" small ghost onClick={action("clicked")}>
    Small ghost button
  </Button>,
  <Button key="button-altstyle-2" ghost onClick={action("clicked")}>
    Regular ghost button
  </Button>,
  <Button key="button-altstyle-3" large ghost onClick={action("clicked")}>
    Large ghost button
  </Button>
];
alternateStyle.story = {
  name: "Alternate style"
};
