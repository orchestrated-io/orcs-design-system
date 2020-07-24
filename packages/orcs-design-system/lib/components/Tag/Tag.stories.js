import React from "react";
import Tag from ".";
import Flex from "../Flex";
import Spacer from "../Spacer";
import mdx from "./Tag.mdx";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: { docs: { page: mdx } },
  decorators: [storyFn => <Flex center>{storyFn()}</Flex>]
};

export const defaultTag = () => <Tag>Default Tag</Tag>;
defaultTag.storyName = "Default";

export const selected = () => (
  <Spacer mr="s">
    <Tag selected>devops</Tag>
    <Tag selected>software engineering</Tag>
    <Tag>product design</Tag>
    <Tag>digital transformation</Tag>
  </Spacer>
);

export const noCross = () => (
  <Spacer mr="s">
    <Tag selected hideCross>
      devops
    </Tag>
    <Tag selected hideCross>
      software engineering
    </Tag>
    <Tag>product design</Tag>
    <Tag>digital transformation</Tag>
  </Spacer>
);

export const disabled = () => (
  <Spacer mr="s">
    <Tag disabled>devops</Tag>
    <Tag disabled>software engineering</Tag>
    <Tag disabled>product design</Tag>
    <Tag disabled>digital transformation</Tag>
  </Spacer>
);
