import React from "react";
import Box from "../Box";
import { P } from "../Typography";

export default {
  title: "Components/Box",
  parameters: {
    component: Box
  }
};

export const basicBox = () => (
  <Box>
    <P>This is an example of the basic Box with no properties applied to it.</P>
  </Box>
);
basicBox.story = {
  name: "Default Box"
};

export const borderBox = () => (
  <Box boxBorder="default" p="r">
    <P>This is a variant of a Box with a border.</P>
  </Box>
);
borderBox.story = {
  name: "Border Box"
};

export const shadow = () => (
  <Box shadow="default" p="r">
    <P>This is a variant of a Box with a slight drop shadow.</P>
  </Box>
);
shadow.story = {
  name: "Drop shadow"
};

export const backgroundColour = () => (
  <Box bg="greyLightest" p="r">
    <P>
      This is a Box that has background colour set to <code>greyLightest</code>.
    </P>
  </Box>
);
backgroundColour.story = {
  name: "Background colour"
};

export const padding = () => (
  <Box boxBorder="default" p={6}>
    <P>
      This is a bordered Box variant with specified padding that overrides the
      default padding value.
    </P>
  </Box>
);
padding.story = {
  name: "Padding"
};

export const borderRadius = () => (
  <Box
    boxborder="default"
    borderRadius={2}
    boxBorder="default"
    shadow="default"
    p="r"
  >
    <P>
      This is a bordered Box variant with rounded corners.{" "}
      <code>borderRadius</code> is taken from the <code>radii</code> array in{" "}
      <code>systemtheme.js</code>.
    </P>
  </Box>
);
borderRadius.story = {
  name: "Rounded corners"
};
