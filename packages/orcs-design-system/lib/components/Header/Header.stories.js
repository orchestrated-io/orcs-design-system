import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "../Header";
import StyledLink from "../StyledLink";
import TextInput from "../TextInput";
import mdx from "./Header.mdx";

export default {
  title: "Components/Header",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Header
};

export const defaultHeader = () => (
  <Header
    appName={`App Name`}
    userName={`John`}
    avatarSource="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    clientInfo={`Tenant: ci2153 Workspace: 20k-v5 [lb5ctx]  UI_Version: 8c315c2 [4412] Backend_Version: dabc261 [3578]`}
    logoutFunction={action("clicked-logout")}
  >
    <StyledLink href="#" white bold active>
      Summary
    </StyledLink>
    <StyledLink href="#" white bold>
      Find
    </StyledLink>
    <StyledLink href="#" white bold>
      Visualisation
    </StyledLink>
  </Header>
);
defaultHeader.storyName = "Default Header";

export const headerWithSearch = () => (
  <Header
    variant="search"
    appName="App Name"
    userName="John"
    avatarSource="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    logoutFunction={action("clicked-logout")}
    searchComponent={
      <TextInput
        fullWidth
        id="search"
        key="search"
        type="text"
        placeholder="Search for..."
        iconRight={["fas", "search"]}
      />
    }
  />
);
headerWithSearch.storyName = "Alternative Header with search";
