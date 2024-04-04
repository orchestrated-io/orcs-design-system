import React from "react";
import HeaderSimple from ".";
import TextInput from "../TextInput";

export default {
  title: "Components/HeaderSimple",
  component: HeaderSimple
};

export const defaultHeader = () => (
  <HeaderSimple
    appName={`App Name`}
    userName={`Michael`}
    avatarSource="https://api.dicebear.com/7.x/personas/svg?seed=mike"
    avatarAlt="Avatar for Michael"
    currentWorskapce="Org Design Workspace"
  />
);
defaultHeader.storyName = "Default Header";

export const headerWithSearch = () => (
  <HeaderSimple
    variant="search"
    appName="App Name"
    userName="Michael"
    avatarSource="https://api.dicebear.com/7.x/personas/svg?seed=mike"
    avatarAlt="Avatar for Michael"
    currentWorskapce="Org Design Workspace"
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
headerWithSearch.storyName = "Header with search";
