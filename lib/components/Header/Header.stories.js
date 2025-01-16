import React from "react";
import Header from ".";
import TextInput from "../TextInput";
import Box from "../Box";
import styled from "styled-components";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (storyFn) => (
      <Box height="350px" bg="greyLightest" p="r">
        {storyFn()}
      </Box>
    )
  ]
};

const AltSearch = styled(TextInput)`
  height: 42px;
  border-radius: 21px;
`;

export const defaultHeader = () => (
  <Header
    appName={`App Name`}
    userName={`Michael`}
    avatarSource="https://api.dicebear.com/7.x/personas/svg?seed=mike"
    avatarAlt="Avatar for Michael"
    currentWorskapce="Org Design Workspace"
  />
);
defaultHeader.storyName = "Default Header";

export const headerWithSearch = () => (
  <Header
    variant="search"
    appName="App Name"
    userName="Michael"
    avatarSource="https://api.dicebear.com/7.x/personas/svg?seed=mike"
    avatarAlt="Avatar for Michael"
    currentWorskapce="Org Design Workspace"
    searchComponent={
      <AltSearch
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
headerWithSearch.storyName = "Header with search";
