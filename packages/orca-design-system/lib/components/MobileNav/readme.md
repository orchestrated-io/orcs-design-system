MobileNav component for app layout should be used in conjunction with Header component. Supports username and avatar as props. And links as children.

The example can be seen by going to header component and making the browser small enough (less than 1100px) so you can see the burger icon button, clicking this will show this MobileNav.

```js
<MobileNav userName="John Smith" avatarSrc="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">

  <StyledLink.Hyperlink white bold block href="styleguide.orchestrated.io">
    Graph
  </StyledLink.Hyperlink>

  <StyledLink.Hyperlink white bold block active href="styleguide.orchestrated.io">
    List
  </StyledLink.Hyperlink>

  <StyledLink.Hyperlink white bold block href="styleguide.orchestrated.io">
    Summary
  </StyledLink.Hyperlink>

</MobileNav>
```
