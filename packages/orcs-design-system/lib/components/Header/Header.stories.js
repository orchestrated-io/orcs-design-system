import React from "react";
import { action } from "@storybook/addon-actions";
import Header from ".";
import Icon from "../Icon";
import StyledLink from "../StyledLink";

export default {
  title: "Components/Header",
  parameters: {
    component: Header
  }
};

export const defaultHeader = () => {
  return (
    <>
      <Header
        appName={`My App`}
        userName={`John Smith`}
        avatarSource="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
        clientInfo={`Tenant: ci2153 Workspace: 20k-v5 [lb5ctx]  UI_Version: 8c315c2 [4412] Backend_Version: dabc261 [3578]`}
        logoutFunction={action("clicked-logout")}
        rightAlignedLink={
          <StyledLink href="#" white bold>
            <Icon icon={["fas", "cog"]} colour="white" />
            Settings
          </StyledLink>
        }
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
    </>
  );
};
