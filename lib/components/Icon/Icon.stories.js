import React from "react";
import Icon from ".";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import mdx from "./Icon.mdx";
import Box from "../Box";
import Flex from "../Flex";
library.add(far, fas);

export default {
  title: "Components/Icon",
  parameters: {
    docs: { page: mdx }
  },
  decorators: [
    (storyFn) => (
      <Box p="3">
        <Flex alignItems="center" justifyContent="space-around">
          {storyFn()}
        </Flex>
      </Box>
    )
  ],
  component: Icon
};

export const defaultIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} />
    <Icon icon={["fas", "plus"]} />
    <Icon icon={["far", "user"]} />
  </>
);

export const colouredIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} color="primaryDark" />
    <Icon icon={["fas", "plus"]} color="successDark" />
    <Icon icon={["far", "user"]} color="dangerDark" />
  </>
);

export const iconSize = () => (
  <>
    <Icon icon={["fas", "plus"]} size="sm" />
    <Icon icon={["fas", "plus"]} size="rg" />
    <Icon icon={["fas", "plus"]} size="lg" />
    <Icon icon={["fas", "plus"]} size="2x" />
  </>
);

export const invertedIcons = () => (
  <Box bg="greyDarker" width="100%">
    <Flex alignItems="center" justifyContent="space-around">
      <Icon icon={["fas", "angle-down"]} inverse />
      <Icon icon={["fas", "plus"]} inverse />
      <Icon icon={["far", "user"]} inverse />
    </Flex>
  </Box>
);

export const animatedIcons = () => (
  <>
    <Icon icon={["fas", "angle-down"]} spin />
    <Icon icon={["fas", "plus"]} pulse />
  </>
);

export const transformsAndRotations = () => (
  <>
    <Icon icon={["fas", "coffee"]} rotation="270" />
    <Icon icon={["fas", "user"]} flip="vertical" />
    <Icon icon={["fas", "certificate"]} transform="grow-8 up-10" />
  </>
);
