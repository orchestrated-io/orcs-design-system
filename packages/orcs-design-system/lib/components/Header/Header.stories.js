import React from "react";
import Header from ".";
import StyledLink from "../StyledLink";
import { Avatar, LoggedInAs, Tenant, UserName } from ".";

export default {
  title: "Header",
  parameters: {
    component: Header
  }
};

export const standard = () => (
  <>
    <Header
      appName="My App"
      rightAlignedChildren={
        <>
          <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" />
          <LoggedInAs>
            <UserName>John Smith</UserName>
            <Tenant>orchestrated</Tenant>
          </LoggedInAs>
        </>
      }
    >
      <StyledLink href="#" white bold active>
        Test 1
      </StyledLink>
      <StyledLink href="#" white bold>
        Test 2
      </StyledLink>
      <StyledLink href="#" white bold>
        Test 3
      </StyledLink>
    </Header>
  </>
);
