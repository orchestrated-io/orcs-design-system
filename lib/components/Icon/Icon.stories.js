import React from "react";
import Icon from ".";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Box from "../Box";
import Flex from "../Flex";
library.add(far, fas);

export default {
  title: "Components/Icon",
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
    <Icon icon={["fas", "angle-down"]} title="Down" />
    <Icon icon={["fas", "plus"]} title="Plus" />
    <Icon icon={["far", "user"]} title="User" />
  </>
);

export const colouredIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} color="primaryDark" title="Down" />
    <Icon icon={["fas", "plus"]} color="successDark" title="Plus" />
    <Icon icon={["far", "user"]} color="dangerDark" title="User" />
  </>
);

export const iconSize = () => (
  <>
    <Icon icon={["fas", "plus"]} size="sm" title="Plus" />
    <Icon icon={["fas", "plus"]} size="rg" title="Plus" />
    <Icon icon={["fas", "plus"]} size="lg" title="Plus" />
    <Icon icon={["fas", "plus"]} size="2x" title="Plus" />
  </>
);

export const invertedIcons = () => (
  <Box bg="greyDarker" width="100%">
    <Flex alignItems="center" justifyContent="space-around">
      <Icon icon={["fas", "angle-down"]} inverse title="Down" />
      <Icon icon={["fas", "plus"]} inverse title="Plus" />
      <Icon icon={["far", "user"]} inverse title="User" />
    </Flex>
  </Box>
);

export const animatedIcons = () => (
  <>
    <Icon icon={["fas", "angle-down"]} spin title="Spinning arrow" />
    <Icon icon={["fas", "plus"]} pulse title="Spinning plus" />
  </>
);

export const transformsAndRotations = () => (
  <>
    <Icon icon={["fas", "coffee"]} rotation="270" title="Coffee" />
    <Icon icon={["fas", "user"]} flip="vertical" title="User" />
    <Icon
      icon={["fas", "certificate"]}
      transform="grow-8 up-10"
      title="Certificate"
    />
  </>
);
