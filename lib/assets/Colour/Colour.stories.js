import React from "react";

import { Colour } from ".";
import Flex from "../../components/Flex";
import Box from "../../components/Box";

export default {
  title: "System/Colour" // Title of your story section
};

export const BlackOpacityScale = () => (
  <Flex justifyContent="center">
    <Colour bg="black" />
    <Colour bg="black90" />
    <Colour bg="black80" />
    <Colour bg="black70" />
    <Colour bg="black60" />
    <Colour bg="black50" />
    <Colour bg="black40" />
    <Colour bg="black30" />
    <Colour bg="black20" />
    <Colour bg="black10" />
  </Flex>
);

export const WhiteOpacityScale = () => (
  <Box bg="greyDarkest" padding="6">
    <Flex justifyContent="center">
      <Colour bg="white" />
      <Colour bg="white90" />
      <Colour bg="white80" />
      <Colour bg="white70" />
      <Colour bg="white60" />
      <Colour bg="white50" />
      <Colour bg="white40" />
      <Colour bg="white30" />
      <Colour bg="white20" />
      <Colour bg="white10" />
    </Flex>
  </Box>
);

export const PrimaryOpacityScale = {
  render: () => (
    <Flex justifyContent="center">
      <Colour bg="primary" />
      <Colour bg="primary90" />
      <Colour bg="primary80" />
      <Colour bg="primary70" />
      <Colour bg="primary60" />
      <Colour bg="primary50" />
      <Colour bg="primary40" />
      <Colour bg="primary30" />
      <Colour bg="primary20" />
      <Colour bg="primary10" />
    </Flex>
  ),
  name: "Primary Opacity Scale"
};

export const SecondaryOpacityScale = {
  render: () => (
    <Flex justifyContent="center">
      <Colour bg="secondary" />
      <Colour bg="secondary90" />
      <Colour bg="secondary80" />
      <Colour bg="secondary70" />
      <Colour bg="secondary60" />
      <Colour bg="secondary50" />
      <Colour bg="secondary40" />
      <Colour bg="secondary30" />
      <Colour bg="secondary20" />
      <Colour bg="secondary10" />
    </Flex>
  ),
  name: "Secondary Opacity Scale"
};

export const SuccessOpacityScale = () => (
  <Flex justifyContent="center">
    <Colour bg="success" />
    <Colour bg="success90" />
    <Colour bg="success80" />
    <Colour bg="success70" />
    <Colour bg="success60" />
    <Colour bg="success50" />
    <Colour bg="success40" />
    <Colour bg="success30" />
    <Colour bg="success20" />
    <Colour bg="success10" />
  </Flex>
);

export const WarningOpacityScale = () => (
  <Flex justifyContent="center">
    <Colour bg="warning" />
    <Colour bg="warning90" />
    <Colour bg="warning80" />
    <Colour bg="warning70" />
    <Colour bg="warning60" />
    <Colour bg="warning50" />
    <Colour bg="warning40" />
    <Colour bg="warning30" />
    <Colour bg="warning20" />
    <Colour bg="warning10" />
  </Flex>
);

export const DangerOpacityScale = () => (
  <Flex justifyContent="center">
    <Colour bg="danger" />
    <Colour bg="danger90" />
    <Colour bg="danger80" />
    <Colour bg="danger70" />
    <Colour bg="danger60" />
    <Colour bg="danger50" />
    <Colour bg="danger40" />
    <Colour bg="danger30" />
    <Colour bg="danger20" />
    <Colour bg="danger10" />
  </Flex>
);
