import React from "react";
import FloatingPanels from ".";
import Box from "../Box";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import TextInput from "../TextInput";
import Toggle from "../Toggle";
import Spacer from "../Spacer";
import Badge from "../Badge";
import { P } from "../Typography";

library.add(far);

export default {
  title: "Components/FloatingPanels",
  decorators: [(storyFn) => <Box minHeight="600px">{storyFn()}</Box>],
  component: FloatingPanels
};
const Properties = () => {
  return (
    <>
      <Spacer mb="r">
        <Badge variant="secondary">Blah</Badge>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
        <Toggle id="toggle1" label="Group items" small />
        <Toggle id="toggle2" label="Show teams" small />
      </Spacer>
      <TextInput
        id="textInput1"
        key="textInput1"
        type="text"
        label="Full name"
        placeholder="E.g. John Smith"
        my="20px"
      />
    </>
  );
};
const panels = [
  {
    id: "view-options",
    iconName: "eye",
    title: "View Options",
    defaultExpanded: true,
    content: <Properties />
  },
  {
    id: "properties",
    iconName: "sun",
    title: "Properties",
    content: <Properties />
  },
  {
    id: "person-details",
    iconName: "user",
    title: "Person Details",
    content: <Properties />
  }
];

export const defaultFloatingPanels = () => {
  return (
    <FloatingPanels
      panels={panels}
      containerHeight={500}
      position={{ right: 20, top: 20 }}
    />
  );
};

defaultFloatingPanels.storyName = "Default Floating Panels";
