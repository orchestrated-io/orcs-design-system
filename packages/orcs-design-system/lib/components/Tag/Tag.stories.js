import React from "react";
import Tag from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "Tag",
  component: Tag,
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basicTag = () => <Tag>Basic Tag</Tag>;
basicTag.story = {
  name: "Basic"
};

export const selectedTag = () => (
  <>
    <Tag selected>devops</Tag>
    <Tag selected>software engineering</Tag>
    <Tag>product design</Tag>
    <Tag>digital transformation</Tag>
  </>
);
selectedTag.story = {
  name: "Selected"
};

export const hideCrossTag = () => (
  <>
    <Tag selected hideCross>
      devops
    </Tag>
    <Tag selected hideCross>
      software engineering
    </Tag>
    <Tag>product design</Tag>
    <Tag>digital transformation</Tag>
  </>
);
hideCrossTag.story = {
  name: "No Cross"
};

export const disabledTag = () => (
  <>
    <Tag disabled>devops</Tag>
    <Tag disabled>software engineering</Tag>
    <Tag disabled>product design</Tag>
    <Tag disabled>digital transformation</Tag>
  </>
);
disabledTag.story = {
  name: "Disabled"
};
