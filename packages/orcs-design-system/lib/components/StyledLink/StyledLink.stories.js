import React from "react";
import StyledLink from ".";
import Box from "../Box";
import Flex from "../Flex";
import Spacer from "../Spacer";
import mdx from "./StyledLink.mdx";

export default {
  title: "Components/StyledLink",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: StyledLink,
  decorators: [storyFn => <Box p="r">{storyFn()}</Box>]
};

export const defaultStyledLink = () => (
  <StyledLink href="#">Styled Link</StyledLink>
);
defaultStyledLink.storyName = "Default";

export const activeStyledLink = () => (
  <StyledLink href="#" active>
    Active Link
  </StyledLink>
);
activeStyledLink.storyName = "Active";

export const boldStyledLink = () => (
  <StyledLink href="#" bold>
    Active Link
  </StyledLink>
);
boldStyledLink.storyName = "Bold";

export const invertedStyledLink = () => (
  <Box bg="greyDarker" p="r">
    <Flex justifyContent="center">
      <Spacer mx="r">
        <StyledLink href="#" white>
          White navigation link on dark background
        </StyledLink>

        <StyledLink href="#" white active bold>
          Active/selected bold navigation link
        </StyledLink>

        <StyledLink href="#" white bold>
          Bold inverted link
        </StyledLink>
      </Spacer>
    </Flex>
  </Box>
);
invertedStyledLink.storyName = "Inverted";

export const reactLink = () => <StyledLink to="about">Custom Link</StyledLink>;
reactLink.storyName = "Using react-router";
