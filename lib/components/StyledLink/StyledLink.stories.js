import React from "react";
import StyledLink from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|StyledLink",
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ],
  parameters: {
    component: StyledLink
  }
};

export const basicLink = () => <StyledLink href="#">Styled Link</StyledLink>;
basicLink.story = {
  name: "Basic"
};

export const activeLink = () => (
  <StyledLink href="#" active>
    Active Link
  </StyledLink>
);
activeLink.story = {
  name: "Active"
};

export const boldLink = () => (
  <StyledLink href="#" bold>
    Active Link
  </StyledLink>
);
boldLink.story = {
  name: "Bold"
};

export const invertedLink = () => (
  <>
    <Layout backgroundDark paddingDouble childChildHorizontalSpacing>
      <Flex center>
        <StyledLink href="#" white>
          White navigation link on dark background
        </StyledLink>

        <StyledLink href="#" white active bold>
          Active/selected navigation link
        </StyledLink>

        <StyledLink href="#" white bold>
          Bold inverted link
        </StyledLink>
      </Flex>
    </Layout>
  </>
);
invertedLink.story = {
  name: "Inverted"
};
