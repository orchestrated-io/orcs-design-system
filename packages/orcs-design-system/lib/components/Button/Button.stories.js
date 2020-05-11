import React from "react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Button from ".";

export default {
  title: "Components/Button",
  parameters: {
    component: Button
  },
  includeStories: []
};

export const defaultButton = () => <Button>Default button</Button>;
defaultButton.story = {
  name: "Default button"
};

export const alternateSize = () => (
  <Spacer my="3">
    <Button small onClick={action("clicked")}>
      Small button
    </Button>
    <Button large onClick={action("clicked")}>
      Large button
    </Button>
  </Spacer>
);
alternateSize.story = {
  name: "Alternate sizes"
};

export const alternateColours = () => (
  <Spacer my="3">
    <Button variant="success" onClick={action("clicked")}>
      Success/green button
    </Button>
    <Button variant="danger" onClick={action("clicked")}>
      Danger/red button
    </Button>
  </Spacer>
);
alternateColours.story = {
  name: "Alternate colours"
};

export const ghost = () => (
  <Spacer my="3">
    <Button small variant="ghost" onClick={action("clicked")}>
      Small ghost button
    </Button>
    <Button variant="ghost" onClick={action("clicked")}>
      Regular ghost button
    </Button>
    <Button large variant="ghost" onClick={action("clicked")}>
      Large ghost button
    </Button>
  </Spacer>
);
ghost.story = {
  name: "Ghost style"
};

export const fullWidth = () => <Button fullWidth>Full width button</Button>;
fullWidth.story = {
  name: "Full width"
};

export const disabled = () => (
  <Button variant="disabled" disabled>
    Disabled button
  </Button>
);
disabled.story = {
  name: "Disabled state"
};

export const loading = () => (
  <Spacer my="3">
    <Button isLoading>Loading...</Button>
    <Button isLoading variant="success">
      Saving...
    </Button>
    <Button isLoading variant="danger">
      Deleting...
    </Button>
  </Spacer>
);
loading.story = {
  name: "Loading state"
};

export const withIcon = () => (
  <Spacer my="3">
    <Button iconLeft>
      <Icon icon={["fas", "user-plus"]} />
      Left aligned icon
    </Button>
    <Button iconRight>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </Button>
  </Spacer>
);
withIcon.story = {
  name: "With icon"
};

export const iconOnly = () => (
  <Spacer my="3">
    <Button small iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button large iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
  </Spacer>
);
iconOnly.story = {
  name: "Icon only"
};
