import React from "react";
import FloatingPanels from ".";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Box from "../Box";
import TextInput from "../TextInput";
import Toggle from "../Toggle";
import Spacer from "../Spacer";
import Badge from "../Badge";
import { P } from "../Typography";

library.add(far);

export default {
  title: "Components/FloatingPanels",
  component: FloatingPanels
};

const PanelContent = () => (
  <>
    <Spacer mb="r">
      <Badge variant="secondary">Blah</Badge>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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

export const defaultFloatingPanels = () => (
  <Box minHeight="600px">
    <FloatingPanels
      containerHeight="500px"
      defaultExpandedPanelId="view-options"
      panels={[
        {
          id: "view-options",
          iconName: "eye",
          title: "View Options",
          content: <PanelContent />
        },
        {
          id: "properties",
          iconName: "sun",
          title: "Properties",
          content: <PanelContent />
        },
        {
          id: "person-details",
          iconName: "user",
          title: "Person Details",
          content: <PanelContent />
        }
      ]}
    />
  </Box>
);

defaultFloatingPanels.storyName = "Default Floating Panels";

export const buttonFloatingPanels = () => (
  <Box minHeight="60px">
    <FloatingPanels
      centered={true}
      alignPanels="center"
      onClick={(panelId) => alert(`Panel ${panelId} clicked`)}
      panels={[
        {
          id: "view-options",
          iconName: "eye",
          title: "View Options"
        },
        {
          id: "properties",
          iconName: "sun",
          title: "Properties"
        },
        {
          id: "person-details",
          iconName: "user",
          title: "Person Details"
        }
      ]}
    />
  </Box>
);

buttonFloatingPanels.storyName = "Button Floating Panels";

export const unselectableFloatingPanels = () => (
  <Box minHeight="200px">
    <FloatingPanels
      position={{ top: 0, left: 0 }}
      alignPanels="left"
      disablePanelSelect={true}
      defaultExpandedPanelId="selected"
      panels={[
        {
          id: "selected",
          iconName: "smile",
          title: "Selected",
          content: (
            <span>
              You cannot change this selection due to{" "}
              <code>disablePanelSelect</code>
            </span>
          )
        },
        {
          id: "unselectable",
          iconName: "frown",
          title: "Unselectable",
          content: "You cannot select this panel due to disablePanelSelect"
        }
      ]}
    />
  </Box>
);

unselectableFloatingPanels.storyName = "Unselectable Floating Panels";
