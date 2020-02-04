import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import Icon from "../Icon";
import Layout from "../Layout";

export default {
  title: "Button",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: Button
  }
};

export const defaultButton = () => <Button>Default Button</Button>;
defaultButton.story = {
  name: "Default"
};

export const size = () => (
  <>
    <Button small onClick={action("clicked")}>
      Small button
    </Button>
    <Button large onClick={action("clicked")}>
      Large button
    </Button>
  </>
);

export const alternateColours = () => (
  <>
    <Button colour="successDark" onClick={action("clicked")}>
      Success/green button
    </Button>
    <Button colour="danger" onClick={action("clicked")}>
      Danger/red button
    </Button>
  </>
);

export const ghostStyle = () => (
  <>
    <Button small ghost onClick={action("clicked")}>
      Small ghost button
    </Button>
    <Button ghost onClick={action("clicked")}>
      Regular ghost button
    </Button>
    <Button large ghost onClick={action("clicked")}>
      Large ghost button
    </Button>
  </>
);

export const fullWidth = () => <Button fullWidth>Full width button</Button>;

export const disabled = () => <Button disabled>Disabled buttons</Button>;

export const loadingState = () => (
  <>
    <Button isLoading>Loading...</Button>
    <Button isLoading colour="successDark">
      Saving...
    </Button>
    <Button isLoading colour="danger">
      Deleting...
    </Button>
  </>
);

export const withIcon = () => (
  <>
    <Button iconLeft>
      <Icon icon={["fas", "user-plus"]} />
      Left aligned icon
    </Button>
    <Button iconRight>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </Button>
  </>
);

export const iconOnly = () => (
  <>
    <Button small iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button large iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
  </>
);
