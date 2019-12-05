import React from "react";
import TextArea from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|TextArea",
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ],
  parameters: {
    component: TextArea
  }
};

export const basicTextArea = () => <TextArea id="TextArea01" label="Message" />;
basicTextArea.story = {
  name: "Basic"
};

export const sizeTextArea = () => (
  <TextArea id="TextArea02" label="Message" cols="50" rows="5" />
);
sizeTextArea.story = {
  name: "Size"
};

export const invalidTextArea = () => (
  <TextArea id="TextArea03" label="Message" invalid />
);
invalidTextArea.story = {
  name: "Invalid"
};

export const validTextArea = () => (
  <TextArea id="TextArea04" label="Message" valid />
);
validTextArea.story = {
  name: "Valid"
};

export const fullWidthTextArea = () => (
  <TextArea id="TextArea05" label="Message" fullWidth />
);
fullWidthTextArea.story = {
  name: "Full-Width"
};

export const invertedTextArea = () => (
  <>
    <Layout backgroundDark paddingDouble width="100%">
      <TextArea id="TextArea05" label="Message" inverted />
    </Layout>
  </>
);
invertedTextArea.story = {
  name: "inverted"
};
