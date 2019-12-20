ContentTabs are intended to provide a way to navigate between distinct sections of content within a page without leaving the page or triggering a page refresh.

Any child content is supported including text, elements or other components.

```js
<ContentTabs.Container>
  <ContentTabs.Tab active>Details</ContentTabs.Tab>
  <ContentTabs.Tab>Additional information</ContentTabs.Tab>
  <ContentTabs.Tab>Location</ContentTabs.Tab>
</ContentTabs.Container>

<ContentTabs.Content active>
  <Layout verticalPadding>
    <Typography.P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </Typography.P>
  </Layout>
</ContentTabs.Content>

<ContentTabs.Content>
  <Layout verticalPadding>
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </Typography.P>
  </Layout>
</ContentTabs.Content>

<ContentTabs.Content>
  <Layout verticalPadding>
    <Typography.P>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
      voluptas nulla pariatur?
    </Typography.P>
  </Layout>
</ContentTabs.Content>
```
