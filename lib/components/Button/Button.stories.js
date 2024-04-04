import React from "react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Flex from "../Flex";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button
};

export const defaultButton = () => <Button>Default button</Button>;
defaultButton.storyName = "Default button";

export const alternateSize = () => (
  <Spacer my="3">
    <Button small onClick={action("clicked")}>
      Small button
    </Button>
    <Button large onClick={action("clicked")}>
      Large button
    </Button>
    <Button height="xxxl" onClick={action("clicked")}>
      Specified height button
    </Button>
    <Button onClick={action("clicked")} width="100px">
      A multiple-line button with specified width
    </Button>
  </Spacer>
);
alternateSize.storyName = "Alternate sizes";

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
alternateColours.storyName = "Alternate colours";

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
ghost.storyName = "Ghost style";

export const fullWidth = () => <Button fullWidth>Full width button</Button>;
fullWidth.storyName = "Full width";

export const disabled = () => (
  <Spacer my="r">
    <Button disabled>Disabled button</Button>
    <Button variant="disabled">Alternate way of making button disabled</Button>
  </Spacer>
);
disabled.storyName = "Disabled state";

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
loading.storyName = "Loading state";

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
    <Button leftIcon={["fas", "star"]}>Left icon magic!</Button>
  </Spacer>
);
withIcon.storyName = "With icon";

export const iconOnly = () => (
  <Spacer my="3">
    <Button
      small
      iconOnly
      p="s"
      ariaLabel={<Icon icon={["fas", "download"]} />}
    >
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button iconOnly p="s" ariaLabel="Show calendar">
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button large iconOnly p="s" ariaLabel="Show calendar">
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Flex alignItems="center" mt="r">
      <Spacer mr="r">
        <Button
          iconOnly
          variant="success"
          onClick={action("clicked")}
          width="33px"
          height="32px"
          ariaLabel="Confirm"
        >
          <Icon icon={["fas", "check"]} />
        </Button>
        <Button
          iconOnly
          variant="successAlternate"
          onClick={action("clicked")}
          width="33px"
          height="32px"
          ariaLabel="Confirm"
        >
          <Icon icon={["fas", "check"]} />
        </Button>
        <Button
          iconOnly
          variant="danger"
          onClick={action("clicked")}
          width="33px"
          height="32px"
          ariaLabel="Cancel"
        >
          <Icon icon={["fas", "times"]} />
        </Button>
        <Button
          iconOnly
          variant="dangerAlternate"
          onClick={action("clicked")}
          width="33px"
          height="32px"
          ariaLabel="Cancel"
        >
          <Icon icon={["fas", "times"]} />
        </Button>
      </Spacer>
    </Flex>
  </Spacer>
);
iconOnly.storyName = "Icon only";
