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
      defaultSelectedPanelId="view-options"
      panels={[
        {
          id: "view-options",
          title: "View Options",
          iconName: "eye",
          content: <PanelContent />
        },
        {
          id: "properties",
          title: "Properties",
          iconName: "sun",
          content: <PanelContent />
        },
        {
          id: "person-details",
          title: "Person Details",
          iconName: "user",
          content: <PanelContent />
        }
      ]}
    />
  </Box>
);

defaultFloatingPanels.storyName = "Default Floating Panels";

export const alignedFloatingPanels = () => (
  <Box minHeight="160px">
    {/* LEFT */}
    <FloatingPanels
      alignPanels="left"
      position={{ top: 0, left: 0 }}
      defaultSelectedPanelId="view-options"
      panels={[
        {
          id: "view-options",
          title: "View Options",
          iconName: "eye",
          content: <p>left</p>
        },
        {
          id: "properties",
          title: "Properties",
          iconName: "sun",
          content: <p>center</p>
        },
        {
          id: "person-details",
          title: "Person Details",
          iconName: "user",
          content: <p>right</p>
        }
      ]}
    />
    {/* CENTER */}
    <FloatingPanels
      alignPanels="center"
      centered={true}
      defaultSelectedPanelId="properties"
      panels={[
        {
          id: "view-options",
          title: "View Options",
          iconName: "eye",
          content: <p>left</p>
        },
        {
          id: "properties",
          title: "Properties",
          iconName: "sun",
          content: <p>center</p>
        },
        {
          id: "person-details",
          title: "Person Details",
          iconName: "user",
          content: <p>right</p>
        }
      ]}
    />
    {/* RIGHT */}
    <FloatingPanels
      alignPanels="right"
      position={{ top: 0, right: 0 }}
      defaultSelectedPanelId="person-details"
      panels={[
        {
          id: "view-options",
          title: "View Options",
          iconName: "eye",
          content: <p>left</p>
        },
        {
          id: "properties",
          title: "Properties",
          iconName: "sun",
          content: <p>center</p>
        },
        {
          id: "person-details",
          title: "Person Details",
          iconName: "user",
          content: <p>right</p>
        }
      ]}
    />
  </Box>
);

alignedFloatingPanels.storyName = "Aligned Floating Panels";

export const buttonFloatingPanels = () => (
  <Box minHeight="60px">
    <FloatingPanels
      onClick={(panelId) => alert(`Panel ${panelId} clicked`)}
      panels={[
        {
          id: "view-options",
          title: "View Options",
          iconName: "eye"
        },
        {
          id: "properties",
          title: "Properties",
          iconName: "sun"
        },
        {
          id: "person-details",
          title: "Person Details",
          iconName: "user"
        }
      ]}
    />
  </Box>
);

buttonFloatingPanels.storyName = "Button Floating Panels";

export const unselectableFloatingPanels = () => (
  <Box minHeight="160px">
    <FloatingPanels
      disablePanelSelect={true}
      defaultSelectedPanelId="selected"
      panels={[
        {
          id: "selected",
          title: "Selected",
          iconName: "smile",
          content: (
            <span>
              You cannot change this selection due to{" "}
              <code>disablePanelSelect</code>
            </span>
          )
        },
        {
          id: "unselectable",
          title: "Unselectable",
          iconName: "frown",
          content: "You cannot select this panel due to disablePanelSelect"
        }
      ]}
    />
  </Box>
);

unselectableFloatingPanels.storyName = "Unselectable Floating Panels";

export const highlightedFloatingPanels = () => (
  <Box minHeight="60px">
    <FloatingPanels
      panels={[
        {
          id: "1",
          title: "Smiling",
          iconName: "smile",
          forceHighlight: true
        },
        {
          id: "2",
          title: "Frowning",
          iconName: "frown",
          forceHighlight: true
        },
        {
          id: "3",
          title: "Laughing",
          iconName: "laugh",
          forceHighlight: true
        }
      ]}
    />
  </Box>
);

highlightedFloatingPanels.storyName = "Highlighted Floating Panels";

export const groupedFloatingPanels = () => (
  <Box minHeight="60px">
    <FloatingPanels
      panels={[
        {
          id: "1",
          title: "Laughing",
          iconName: "user",
          grouping: undefined
        },
        {
          id: "1",
          title: "Laughing",
          iconName: "laugh",
          grouping: "happy"
        },
        {
          id: "2",
          title: "Smiling",
          iconName: "smile",
          grouping: "happy"
        },
        {
          id: "3",
          title: "Frowning",
          iconName: "frown",
          grouping: "sad"
        }
      ]}
    />
  </Box>
);

groupedFloatingPanels.storyName = "Grouped Floating Panels";
