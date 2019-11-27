import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import Flex from "../Flex";
import Icon from "../Icon";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|Button",
  decorators: [
    storyFn => (
      <Layout padding childVerticalSpacing childChildHorizontalSpacing>
        {storyFn()}
      </Layout>
    )
  ],
  parameters: {
    component: Button
  }
};

export const defaultButton = () => [
  <Button key="button-default">Default Button</Button>
];
defaultButton.story = {
  name: "Default"
};

export const size = () => [
  <Button key="button-small" small onClick={action("clicked")}>
    Small button
  </Button>,
  <Button key="button-large" large onClick={action("clicked")}>
    Large button
  </Button>
];
size.story = {
  name: "Size"
};
export const alternateColours = () => [
  <Button key="button-success" colour="success" onClick={action("clicked")}>
    Success/green button
  </Button>,
  <Button key="button-danger" colour="danger" onClick={action("clicked")}>
    Danger/red button
  </Button>
];
alternateColours.story = {
  name: "Alternate colours"
};
export const alternateStyle = () => [
  <Button key="button-ghost-small" small ghost onClick={action("clicked")}>
    Small ghost button
  </Button>,
  <Button key="button-ghost" ghost onClick={action("clicked")}>
    Regular ghost button
  </Button>,
  <Button key="button-ghost-large" large ghost onClick={action("clicked")}>
    Large ghost button
  </Button>
];
alternateStyle.story = {
  name: "Ghost style"
};

export const fullWidthButton = () => [
  <Button key="full-width" fullWidth>
    Full width button
  </Button>
];
fullWidthButton.story = {
  name: "Full-width"
};

export const disabledButton = () => [
  <Button key="disabled" disabled>
    Disabled buttons
  </Button>
];
disabledButton.story = {
  name: "Disabled"
};

export const loadingButton = () => [
  <Button key="loading" isLoading>
    Loading . . .
  </Button>
];
loadingButton.story = {
  name: "Loading"
};

export const iconButton = () => [
  <>
    <Button key="icon-left" iconLeft>
      <Icon icon={["fas", "user-plus"]} />
      Left aligned icon
    </Button>
    <Button key="icon-right" iconRight>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </Button>
  </>
];
iconButton.story = {
  name: "With Icons"
};

export const iconOnlyButton = () => [
  <>
    <Flex alignStart>
      <Button key="button-icon-small" small iconOnly>
        <Icon icon={["far", "calendar-alt"]} />
      </Button>
      <Button key="button-icon" iconOnly>
        <Icon icon={["far", "calendar-alt"]} />
      </Button>
      <Button key="button-icon-large" large iconOnly>
        <Icon icon={["far", "calendar-alt"]} />
      </Button>
    </Flex>
  </>
];
iconOnlyButton.story = {
  name: "Icon Only"
};
