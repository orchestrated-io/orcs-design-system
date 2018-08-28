Example of basic and alternative cards. Child elements can be anything, plain text, graphs, or other components. Subtitles and icons are optional, not mandatory.

If your UI is split into different areas or sections you can also choose to colour code your cards to match, by applying a colour prop which adds the corresponding colour as a top border.

```js
<Layout background padding childVerticalSpacing>

  <Card title="Card title" subtitle="Sub title">
    <Typography.P marginBottom>
      Card content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Typography.P>
    <StyledLink.Hyperlink href="#" bold>
      Learn more
    </StyledLink.Hyperlink>
  </Card>

  <Card alternate icon={["far", "building"]} title="Works for" subtitle="18">
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

  <Card
    alternate
    icon={["far", "location-arrow"]}
    title="Locations"
    subtitle="57"
    colour="primary"
  >
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

  <Card
    alternate
    icon={["far", "address-card"]}
    title="Roles"
    subtitle="31"
    colour="success"
  >
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

  <Card
    alternate
    icon={["far", "user"]}
    title="People"
    subtitle="4,539"
    colour="warning"
  >
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

  <Card
    alternate
    icon={["far", "chart-pie"]}
    title="Divisions"
    subtitle="12"
    colour="danger"
  >
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

  <Card
    alternate
    icon={["far", "users"]}
    title="Teams"
    subtitle="289"
    colour="greyDark"
  >
    <Typography.P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </Typography.P>
  </Card>

</Layout>
```
