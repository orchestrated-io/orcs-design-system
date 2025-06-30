import React, { useState } from "react";
import Box from "../Box";
import Button from "../Button";
import Popover from "../Popover";
import Icon from "../Icon";
import Flex from "../Flex";
import ColorPicker from "./index";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component:
          "A reusable color picker component that can be triggered by any element passed as children."
      }
    }
  }
};

export const Default = () => {
  const [color, setColor] = useState(
    "linear-gradient(90deg,rgb(56, 136, 255) 0%,rgb(148, 81, 255) 100%)"
  );

  return (
    <Box p="l" position="relative">
      <Flex
        width="100%"
        height="150px"
        justifyContent="flex-end"
        alignItems="flex-start"
        background={color}
        borderRadius="2"
        p="r"
      >
        <ColorPicker value={color} onChange={setColor} position="bottom-start">
          {({ toggleColorPicker }) => (
            <Popover
              direction="left"
              height="35px"
              width="fit-content"
              text="Change background colour"
              ml="auto"
            >
              <Button
                height="35px"
                width="35px"
                borderRadius="35px"
                borderColor="white30"
                bg="white30"
                ariaLabel="Change background colour"
                onClick={toggleColorPicker}
              >
                <Icon icon={["fas", "palette"]} color="white" />
              </Button>
            </Popover>
          )}
        </ColorPicker>
      </Flex>
    </Box>
  );
};
