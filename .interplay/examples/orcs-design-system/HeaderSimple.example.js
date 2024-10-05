import React from "react";
import { HeaderSimple } from "orcs-design-system";

export default {
  title: "HeaderSimple",
  component: HeaderSimple
};

export const Basic = {
  render: () => (
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
  )
};
