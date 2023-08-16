import React from "react";
import { FlexItem } from ".";
import Button from "../Button";
import Icon from "../Icon";

export default {
  title: "Components/FlexItem",
  component: FlexItem
};

export const basicFlexItem = () => (
  <FlexItem mx="s">
    <Button iconRight>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </Button>
  </FlexItem>
);

basicFlexItem.storyName = "Basic Flex Item";
