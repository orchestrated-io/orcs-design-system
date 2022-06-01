import React from "react";
import TextInput from ".";
import Spacer from "../Spacer";
import mdx from "./TextInput.mdx";

export default {
  title: "Components/TextInput",
  parameters: { docs: { page: mdx } },
  component: TextInput
};

export const defaultTextInput = () => (
  <Spacer m="r">
    <TextInput
      id="textInput1"
      key="textInput1"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      my="20px"
    />
    <TextInput
      id="textInput2"
      key="textInput2"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      invalid
    />
    <TextInput
      id="textInput3"
      key="textInput3"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      valid
    />
    <TextInput
      id="textInput4"
      key="textInput4"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      mandatory
    />
  </Spacer>
);
defaultTextInput.story = {
  name: "Default"
};

const numberProps = {
  decimalScale: 2,
  prefix: "$"
};

export const number = () => [
  <TextInput
    id="numInput1"
    key="numInput1"
    numberProps={numberProps}
    label="Currency"
    value="345345.55"
  />
];

export const floatingLabel = () => (
  <Spacer m="r">
    <TextInput
      id="textInput5"
      key="textInput5"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      floating
    />
    <TextInput
      id="textInput6"
      key="textInput6"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      floating
      invalid
    />
    <TextInput
      id="textInput7"
      key="textInput7"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      floating
      valid
    />
    <TextInput
      id="textInput8"
      key="textInput8"
      type="text"
      label="Full name"
      placeholder="E.g. John Smith"
      floating
      mandatory
    />
  </Spacer>
);

export const withIcons = () => (
  <Spacer m="r">
    <TextInput
      id="textInput9"
      key="textInput9"
      type="text"
      label="Phone number"
      placeholder="E.g. (03) 9451 1786"
      iconLeft={["fas", "phone"]}
      aria-hidden-by="test"
      data-testid="test-id"
    />

    <TextInput
      id="textInput10"
      key="textInput10"
      type="text"
      label="Phone number"
      placeholder="E.g. (03) 9451 1786"
      floating
      iconLeft={["fas", "phone"]}
    />

    <TextInput
      fullWidth
      id="textInput11"
      key="textInput11"
      type="text"
      label="What are you looking for?"
      placeholder="E.g. agile teams"
      iconRight={["fas", "search"]}
    />

    <TextInput
      fullWidth
      id="textInput12"
      key="textInput12"
      type="text"
      label="What are you looking for?"
      placeholder="E.g. agile teams"
      floating
      iconRight={["fas", "search"]}
    />
  </Spacer>
);

export const disabled = () => (
  <TextInput
    id="textInput13"
    key="textInput13"
    type="text"
    label="Full name"
    placeholder="E.g. John Smith"
    my="20px"
    value="This is uneditable"
    disabled
  />
);
