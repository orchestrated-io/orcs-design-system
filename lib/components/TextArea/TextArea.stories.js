import React from "react";
import TextArea from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/TextArea",
  component: TextArea,
  decorators: [(storyFn) => <Box p="r">{storyFn()}</Box>]
};

export const defaultTextArea = () => (
  <TextArea data-testid="Test-id" id="TextArea01" label="Message" autoFocus />
);
defaultTextArea.storyName = "Default";

export const sizeTextArea = () => (
  <TextArea id="TextArea02" label="Message" cols="50" rows="5" />
);
sizeTextArea.storyName = "Size";

export const fullWidthTextArea = () => (
  <TextArea id="TextArea05" label="Message" fullWidth />
);
fullWidthTextArea.storyName = "Full-width";

export const statesTextArea = () => (
  <Spacer my="r">
    <TextArea id="TextArea03" label="Message - invalid message" invalid />
    <TextArea id="TextArea04" label="Message" valid />
  </Spacer>
);
statesTextArea.storyName = "States";

export const boldLabelTextArea = () => (
  <TextArea id="TextAreaBold" label="Message" bold data-testid="test-input" />
);
boldLabelTextArea.storyName = "Bold Label";

export const mandatoryTextArea = () => (
  <TextArea id="TextAreaMandatory" label="Message" mandatory />
);
mandatoryTextArea.storyName = "Mandatory";

export const invertedTextArea = () => (
  <Box bg="greyDarker" p="r">
    <Spacer my="r">
      <TextArea id="TextArea06" label="Message" inverted />
      <TextArea
        id="TextArea07"
        label="Message - invalid message"
        inverted
        invalid
      />
      <TextArea id="TextArea08" label="Message" inverted valid />
    </Spacer>
  </Box>
);
invertedTextArea.storyName = "Inverted";

export const disabledTextArea = () => (
  <TextArea
    data-testid="Test-id"
    id="TextArea01"
    label="Message"
    value="This is uneditable"
    disabled
  />
);
disabledTextArea.storyName = "Disabled";
