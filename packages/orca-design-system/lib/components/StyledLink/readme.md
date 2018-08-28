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

<StyledLink.Hyperlink href="#" marginBottom block>
  Block link
</StyledLink.Hyperlink>

<Typography.P marginBottom>
  This is an example of a <StyledLink.Hyperlink bold href="#"> bold inline link</StyledLink.Hyperlink> that sits inside a body of text.
</Typography.P>

<StyledLink.Hyperlink href="#" bold block marginBottom>
  Bold block link
</StyledLink.Hyperlink>

<Layout childHorizontalSpacing backgroundDark>

  <Flex wrap="true">

    <Layout margin>
      <StyledLink.Hyperlink href="#" white bold block>
        White navigation link on dark background
      </StyledLink.Hyperlink>
    </Layout>

    <Layout margin>
      <StyledLink.Hyperlink href="#" white active bold block>
        Active/selected navigation link
      </StyledLink.Hyperlink>
    </Layout>

    <Layout margin>
      <StyledLink.Hyperlink href="#" white bold block>
        Link
      </StyledLink.Hyperlink>
    </Layout>

    <Layout margin>
      <StyledLink.Hyperlink href="#" white bold block>
        Link
      </StyledLink.Hyperlink>
    </Layout>

  </Flex>

</Layout>
```
