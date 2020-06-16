import React from "react";
import { StyledLink, HeaderLink } from ".";
import Box from "../Box";
import Flex from "../Flex";
import Spacer from "../Spacer";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Units/StyledLink",
  parameters: {
    component: StyledLink
  }
};

export const defaultStyledLink = () => (
  <StyledLink href="#">Styled Link</StyledLink>
);
defaultStyledLink.story = {
  name: "Default"
};

export const activeStyledLink = () => (
  <StyledLink href="#" active>
    Active Link
  </StyledLink>
);
activeStyledLink.story = {
  name: "Active"
};

export const boldStyledLink = () => (
  <StyledLink href="#" bold>
    Active Link
  </StyledLink>
);
boldStyledLink.story = {
  name: "Bold"
};

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
invertedStyledLink.story = {
  name: "Inverted"
};

export const customLink = () => (
  <BrowserRouter>
    <HeaderLink to="about">Custom Link</HeaderLink>
  </BrowserRouter>
);
customLink.story = {
  name: "Using Router"
};
