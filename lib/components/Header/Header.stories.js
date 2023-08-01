import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Header from "../Header";
import StyledLink from "../StyledLink";
import Icon from "../Icon";
import { Small } from "../Typography";
import TextInput from "../TextInput";
import mdx from "./Header.mdx";
import Select from "../Select";
import Box from "../Box";

export default {
  title: "Components/Header",
  parameters: {
    docs: {
      page: mdx
    }
  },
  decorators: [(storyFn) => <Box height="500px">{storyFn()}</Box>],
  component: Header
};

export const defaultHeader = () => (
  <Header
    appName={`App Name`}
    userName={`Michael`}
    avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
    clientInfo={`Tenant: ci2153 Workspace: 20k-v5 [lb5ctx]  UI_Version: 8c315c2 [4412] Backend_Version: dabc261 [3578]`}
    logoutFunction={action("clicked-logout")}
    sideMenuContent={
      <StyledLink href="#">
        <Icon icon={["fas", "cog"]} mr="s" />
        Settings
      </StyledLink>
    }
    navToggleId="defaultHeader"
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
    userName="Michael"
    avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
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
    navToggleId="headerWithSearch"
  />
);
headerWithSearch.storyName = "Alternative Header with search";

export const headerWithSearchAndLinks = () => (
  <Header
    variant="searchAndLinks"
    appName="App Name"
    userName="Michael"
    avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
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
    navToggleId="headerWithSearchAndLinks"
  >
    <StyledLink href="#" white bold>
      Summary
    </StyledLink>
    <StyledLink href="#" white bold>
      Teams
    </StyledLink>
    <StyledLink href="#" white bold>
      People
    </StyledLink>
    <StyledLink href="#" white bold>
      Reports
    </StyledLink>
  </Header>
);
headerWithSearch.storyName = "Alternative Header with search";

export const headerWithWorkspaceSwitching = () => {
  const options = [{ label: "Workspace A" }, { label: "Workspace B" }];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState([{ label: "Workspace A" }]);

  const onChange = (value) => {
    setSelected(value);
  };

  const currentWorkspace = "Workspace A";

  const select = (
    <Select
      id="WorkspaceSelect"
      data-testid="select-workspace-dropdown"
      placeholder="Select a workspace"
      options={options}
      value={selected}
      onChange={onChange}
      height="30px"
      padding="0 8px"
      inverted
    />
  );

  const internalAppLinks = (
    <>
      <StyledLink href="#" target="_blank">
        App 1 Name
        <Small>This is a description of other app in suite</Small>
      </StyledLink>
      <StyledLink href="#" target="_blank">
        App 2 Name
        <Small>This is a description of other app in suite</Small>
      </StyledLink>
    </>
  );
  const externalAppLinks = (
    <StyledLink href="#" target="_blank">
      External App Name
      <Small>This is a description of external 3rd party app</Small>
    </StyledLink>
  );

  return (
    <Header
      appName={`App Name`}
      currentWorkspace={currentWorkspace}
      userName={`Michael`}
      avatarSource="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/62f1f587bc47b25676f9ed1d_bw_avatar_adam.png"
      clientInfo={`Tenant: ci2153 Workspace: 20k-v5 [lb5ctx]  UI_Version: 8c315c2 [4412] Backend_Version: dabc261 [3578]`}
      logoutFunction={action("clicked-logout")}
      workspaceSwitcherContent={select}
      navToggleId="headerWithWorkspaceSwitching"
      appSwitcher
      internalAppSwitcherContent={internalAppLinks}
      externalAppSwitcherContent={externalAppLinks}
    ></Header>
  );
};
headerWithWorkspaceSwitching.storyName = "Header with workspace switching";
