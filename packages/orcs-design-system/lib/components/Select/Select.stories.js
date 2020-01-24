import Select from ".";
import React from "react";
import Layout from "../Layout";

export default {
  title: "Select",
  decorators: [storyFn => <Layout height="250px">{storyFn()}</Layout>],
  parameters: {
    component: Select
  }
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "hazelnut", label: "Hazelnut" },
  { value: "rocky road", label: "Rocky Road" }
];

export const simpleSelect = () => <Select options={options} />;

export const multiSelect = () => <Select options={options} isMulti />;

export const invertedMultiSelect = () => (
  <>
    <Layout backgroundDark width="100%" height="100%" padding>
      <Select options={options} inverted isMulti />
    </Layout>
  </>
);
