Header component for app layout. Supports app name, username and avatar as props. And links as children.

At screen sizes less than 1100px the links are instead moved into a mobile menu toggled by a burger icon button to play nice with smaller devices.

```js
<Header.Navbar
  appName="My App"
  rightAlignedChildren={
      <React.Fragment>
        <Header.Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" />
        <Header.LoggedInAs>
          <Header.UserName>John Smith</Header.UserName>
          <Header.Tenant>orchestrated</Header.Tenant>
        </Header.LoggedInAs>
        <Header.LogoutLink>Logout</Header.LogoutLink>
      </React.Fragment>
    }
>

  <StyledLink.Hyperlink white bold href="#">
    Graph
  </StyledLink.Hyperlink>

  <StyledLink.Hyperlink white bold active href="#">
    List
  </StyledLink.Hyperlink>

  <StyledLink.Hyperlink white bold href="#">
    Summary
  </StyledLink.Hyperlink>

</Header.Navbar>
```
