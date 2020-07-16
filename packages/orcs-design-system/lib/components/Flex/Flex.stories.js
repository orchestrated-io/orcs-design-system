import React from "react";
import Flex, { FlexItem } from ".";
import Button from "../Button";
import Icon from "../Icon";
import Spacer from "../Spacer";
import mdx from "./Flex.mdx";

export default {
  title: "Components/Flex",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Flex
};

export const basicFlex = () => (
  <Flex>
    <Spacer mx="s">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
    </Spacer>
  </Flex>
);
basicFlex.storyName = "Basic Flex";

export const usingFlexItem = () => (
  <Flex height="200px">
    <FlexItem mx="s">
      <Button iconRight>
        Right aligned icon
        <Icon icon={["fas", "download"]} />
      </Button>
    </FlexItem>
    <FlexItem mx="s">
      <Button>Default button</Button>
    </FlexItem>
    <FlexItem mx="s">
      <Button ghost>Ghost button</Button>
    </FlexItem>
    <FlexItem alignSelf="flex-start">
      <Button disabled>Disabled button</Button>
    </FlexItem>
  </Flex>
);
