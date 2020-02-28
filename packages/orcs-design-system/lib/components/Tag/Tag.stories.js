import React from "react";
import Tag from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "Components/Tag",
  component: Tag,
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basic = () => <Tag>Basic Tag</Tag>;

export const selected = () => (
  <>
    <Tag selected>devops</Tag>
    <Tag selected>software engineering</Tag>
    <Tag>product design</Tag>
    <Tag>digital transformation</Tag>
  </>
);

export const noCross = () => (
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

export const disabled = () => (
  <>
    <Tag disabled>devops</Tag>
    <Tag disabled>software engineering</Tag>
    <Tag disabled>product design</Tag>
    <Tag disabled>digital transformation</Tag>
  </>
);
