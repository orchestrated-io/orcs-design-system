import React from "react";
import TextArea from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "TextArea",
  component: TextArea,
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basic = () => <TextArea id="TextArea01" label="Message" />;

export const size = () => (
  <TextArea id="TextArea02" label="Message" cols="50" rows="5" />
);

export const invalid = () => (
  <TextArea id="TextArea03" label="Message" invalid />
);

export const valid = () => <TextArea id="TextArea04" label="Message" valid />;

export const fullWidth = () => (
  <TextArea id="TextArea05" label="Message" fullWidth />
);

export const onDarkBackground = () => (
  <>
    <Layout backgroundDark paddingDouble width="100%">
      <TextArea id="TextArea05" label="Message" inverted />
    </Layout>
  </>
);
