import React from "react";
import FloatingPanels from ".";
import Box from "../Box";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import TextInput from "../TextInput";
import Toggle from "../Toggle";
import Spacer from "../Spacer";

library.add(far);

export default {
  title: "Components/FloatingPanels",
  decorators: [(storyFn) => <Box minHeight="450px">{storyFn()}</Box>],
  component: FloatingPanels
};
const Properties = () => {
  return (
    <Spacer mb="r">
      <Toggle id="toggle1" label="Group items" small />
      <Toggle id="toggle2" label="Show teams" small />
      <TextInput
        id="textInput1"
        key="textInput1"
        type="text"
        label="Full name"
        placeholder="E.g. John Smith"
        my="20px"
      />
    </Spacer>
  );
};
const panels = [
  {
    id: "view-options",
    iconName: "eye",
    title: "View Options",
    defaultExpanded: true,
    children: <div>View options content goes here</div>
  },
  {
    id: "properties",
    iconName: "sun",
    title: "Properties",
    children: <Properties />
  },
  {
    id: "person-details",
    iconName: "user",
    title: "Person Details",
    children: <div>Person details content goes here</div>
  }
];

export const defaultFloatingPanels = () => {
  return (
    <FloatingPanels
      panels={panels}
      containerHeight={600}
      position={{ right: 20, top: 20 }}
    />
  );
};

defaultFloatingPanels.storyName = "Default Floating Panels";
