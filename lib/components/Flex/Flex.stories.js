import React from "react";
import Flex from ".";
import Button from "../Button";

export default {
  title: "Components/Flex",
  component: Flex
};

export const basicFlex = () => (
  <Flex gap="r" flexWrap="wrap">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
  </Flex>
);
basicFlex.storyName = "Basic Flex";
