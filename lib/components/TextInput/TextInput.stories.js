import React from 'react';
import { action } from '@storybook/addon-actions';
import TextInput from '.';
import Layout from '../Layout';

export default {
  title: 'TextInput',
  decorators: [storyFn => <Layout padding childVerticalSpacing>{storyFn()}</Layout>]
};

export const standard = ()  => [
  <TextInput id="textInput1" type="text" label="Full name" placeholder="E.g. John Smith" />,
  <TextInput id="textInput2" type="text" label="Full name" placeholder="E.g. John Smith" invalid />,
  <TextInput id="textInput3" type="text" label="Full name" placeholder="E.g. John Smith" valid />,
  <TextInput id="textInput4" type="text" label="Full name" placeholder="E.g. John Smith" mandatory/>
];
standard.story = {
  name: "Standard"
}

export const floatingLabel = ()  => [
  <TextInput id="textInput5" type="text" label="Full name" placeholder="E.g. John Smith" floating />,
  <TextInput id="textInput6" type="text" label="Full name" placeholder="E.g. John Smith" floating invalid />,
  <TextInput id="textInput7" type="text" label="Full name" placeholder="E.g. John Smith" floating valid />,
  <TextInput id="textInput8" type="text" label="Full name" placeholder="E.g. John Smith" floating mandatory/>
  ];
  floatingLabel.story = {
  name: "Floating label"
}

export const withIcons = ()  => [
  <TextInput id="textInput9" type="text" label="Phone number" placeholder="E.g. (03) 9451 1786" iconLeft={["fas", "phone"]} />,
  <TextInput id="textInput12" type="text" label="Phone number" placeholder="E.g. (03) 9451 1786" floating iconLeft={["fas", "phone"]} />,
  <TextInput fullWidth id="textInput11" type="text" label="What are you looking for?" placeholder="E.g. agile teams" iconRight={["fas", "search"]} />,
  <TextInput fullWidth id="textInput10" type="text" label="What are you looking for?" placeholder="E.g. agile teams" floating iconRight={["fas", "search"]} />
  ];
  withIcons.story = {
  name: "With icons"
}


