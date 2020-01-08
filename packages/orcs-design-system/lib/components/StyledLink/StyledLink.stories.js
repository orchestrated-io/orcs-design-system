import React from "react";
import { StyledLink, HeaderLink } from ".";
import Layout from "../Layout";
import Flex from "../Flex";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "StyledLink",
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

export const basic = () => <StyledLink href="#">Styled Link</StyledLink>;

export const active = () => (
  <StyledLink href="#" active>
    Active Link
  </StyledLink>
);

export const bold = () => (
  <StyledLink href="#" bold>
    Active Link
  </StyledLink>
);

export const onDarkBackground = () => (
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

export const customLink = () => (
  <>
    <BrowserRouter>
      <HeaderLink to="about">Custom Link</HeaderLink>
    </BrowserRouter>
  </>
);
customLink.story = {
  name: "Using Router",
  parameters: {
    docs: {
      storyDescription:
        "Custom react-router link using the `HeaderLink` example above"
    }
  }
};
