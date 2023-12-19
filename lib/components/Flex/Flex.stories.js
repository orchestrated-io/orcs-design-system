import React from "react";
import Flex from ".";
import Button from "../Button";
import Spacer from "../Spacer";

export default {
  title: "Components/Flex",
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
