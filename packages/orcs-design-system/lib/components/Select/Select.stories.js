import Select from ".";
import React from "react";
import Layout from "../Layout";

export default {
  title: "Select",
  decorators: [storyFn => <Layout height="200px">{storyFn()}</Layout>],
  parameters: {
    component: Select
  }
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export const simpleSelect = () => <Select options={options} />;
