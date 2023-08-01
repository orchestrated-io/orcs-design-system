import React from "react";
import HeaderSimple from ".";
import TextInput from "../TextInput";
import mdx from "./HeaderSimple.mdx";

export default {
  title: "Components/HeaderSimple",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: HeaderSimple
};

export const defaultHeader = () => (
  <HeaderSimple
    appName={`App Name`}
    userName={`Michael`}
    avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
    currentWorskapce="Org Design Workspace"
  />
);
defaultHeader.storyName = "Default Header";

export const headerWithSearch = () => (
  <HeaderSimple
    variant="search"
    appName="App Name"
    userName="Michael"
    avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
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
