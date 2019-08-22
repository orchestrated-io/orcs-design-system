This StyledLink component supports both standard html hyperlinks and react Link components (if using react router for example).

The way to use this as a hyperlink is shown below in the examples and is quite straightforward.

To wrap a react router Link component in these styles, you need to do the following:

Ensure you have imported both the react router link, and the design system link, like so:
```js static
import { Link } from 'react-router-dom';
import { StyledLink } from 'orchestrated-design-system';
```
At the top of your file give a name to the link, for example, lets say we are putting these links in a header component, so we'll call it HeaderLink:
```js static
const HeaderLink = StyledLink.styleLink(Link);
```
Then you can use in your code like so:
```js static
<HeaderLink to={PATHS.DASHBOARD}>
  Dashboard
</HeaderLink>
```

```js
<Typography.P marginBottom>
  This is an example of an <StyledLink.Hyperlink href="#">inline link</StyledLink.Hyperlink> that sits inside a body of text.
</Typography.P>

<Typography.P marginBottom>
  This is an example of a <StyledLink.Hyperlink bold href="#"> bold inline link</StyledLink.Hyperlink> that sits inside a body of text.
</Typography.P>

<Layout childChildHorizontalSpacing backgroundDark padding>

  <Flex wrap="true">

    <StyledLink.Hyperlink href="#" white bold>
      White navigation link on dark background
    </StyledLink.Hyperlink>

    <StyledLink.Hyperlink href="#" white active bold>
      Active/selected navigation link
    </StyledLink.Hyperlink>

    <StyledLink.Hyperlink href="#" white bold>
      Link
    </StyledLink.Hyperlink>

    <StyledLink.Hyperlink href="#" white bold>
      Link
    </StyledLink.Hyperlink>

  </Flex>

</Layout>
```
