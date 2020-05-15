import React from "react";
import TextArea from ".";
import Box from "../Box";

export default {
  title: "Components/TextArea",
  component: TextArea
};

export const defaultTextArea = () => (
  <TextArea id="TextArea01" label="Message" />
);
defaultTextArea.story = {
  name: "Default"
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
  name: "Full-width"
};

export const invertedTextArea = () => (
  <Box bg="greyDarker" p="r">
    <TextArea id="TextArea06" label="Message" inverted />
  </Box>
);
invertedTextArea.story = {
  name: "Inverted"
};
