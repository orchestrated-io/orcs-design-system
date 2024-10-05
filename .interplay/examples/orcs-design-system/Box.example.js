import React from "react";
import { Box } from "orcs-design-system";

export default {
  title: "Box",
  component: Box
};

export const Basic = {
  render: () => (
    <Box
      borderRadius={2}
      height="100px"
      width="200px"
      boxBorder="default"
      shadow="default"
      p="r"
    ></Box>
  )
};
