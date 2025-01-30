import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import Flex from "../Flex";
import Badge from ".";

export default {
  title: "Components/Badge",
  component: Badge
};

export const defaultBadge = () => <Badge>Default</Badge>;
defaultBadge.storyName = "Default";

// eslint-disable-next-line react/prop-types
export const ColourVariants = ({ altStyle = false } = {}) => (
  <>
    <Box p="r">
      <Flex flexWrap="wrap">
        <Spacer m="1">
          <Badge altStyle={altStyle}>Default</Badge>
          <Badge altStyle={altStyle} variant="success">
            Success
          </Badge>
          <Badge altStyle={altStyle} variant="warning">
            Warning
          </Badge>
          <Badge altStyle={altStyle} variant="danger">
            Danger
          </Badge>
          <Badge altStyle={altStyle} variant="primaryLight">
            Low priority
          </Badge>
          <Badge altStyle={altStyle} variant="primary">
            Medium priority
          </Badge>
          <Badge altStyle={altStyle} variant="primaryDark">
            High priority
          </Badge>
          <Badge altStyle={altStyle} variant="secondary">
            Secondary
          </Badge>
        </Spacer>
      </Flex>
    </Box>
    {!altStyle && (
      <Box p="r" bg="greyDarkest">
        <Flex flexWrap="wrap">
          <Spacer m="1">
            <Badge altStyle={altStyle}>Default</Badge>
            <Badge altStyle={altStyle} variant="success">
              Success
            </Badge>
            <Badge altStyle={altStyle} variant="warning">
              Warning
            </Badge>
            <Badge altStyle={altStyle} variant="danger">
              Danger
            </Badge>
            <Badge altStyle={altStyle} variant="primaryLight">
              Low priority
            </Badge>
            <Badge altStyle={altStyle} variant="primary">
              Medium priority
            </Badge>
            <Badge altStyle={altStyle} variant="primaryDark">
              High priority
            </Badge>
            <Badge altStyle={altStyle} variant="secondary">
              Secondary
            </Badge>
          </Spacer>
        </Flex>
      </Box>
    )}
  </>
);

// eslint-disable-next-line react/no-unknown-property
export const altStyleColourVariants = () => <ColourVariants altStyle={true} />;
altStyleColourVariants.storyName = "Alt Style Colour variants";

ColourVariants.storyName = "Colour variants";
