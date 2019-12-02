import React from "react";
import Header from ".";
import StyledLink from "../StyledLink";
import { Avatar, LoggedInAs, Tenant, UserName } from ".";

export default {
  title: "Design System|Header",
  parameters: {
    component: Header
  }
};

export const exampleHeader = () => (
  <>
    <Header
      appName="My App"
      rightAlignedChildren={
        <React.Fragment>
          <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" />
          <LoggedInAs>
            <UserName>John Smith</UserName>
            <Tenant>orchestrated</Tenant>
          </LoggedInAs>
        </React.Fragment>
      }
    >
      <StyledLink.Hyperlink href="#">Test 1</StyledLink.Hyperlink>
      <StyledLink.Hyperlink href="#">Test 2</StyledLink.Hyperlink>
      <StyledLink.Hyperlink href="#">Test 3</StyledLink.Hyperlink>
    </Header>
  </>
);
exampleHeader.story = {
  name: "Standard"
};
