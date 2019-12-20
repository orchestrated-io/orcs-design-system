Badges should be used for things like status, indicators, or other additional information that you want to highlight but not make interactive/clickable.

```js
<Layout childVerticalSpacing>

  <Flex wrap="true">
    <Badge>Default</Badge>
    <Badge colour="success">Success</Badge>
    <Badge colour="warning">Warning</Badge>
    <Badge colour="danger">Danger</Badge>
    <Badge colour="primaryLight">Low priority</Badge>
    <Badge colour="primaryDark">Medium priority</Badge>
    <Badge colour="primaryDarkest">High priority</Badge>
  </Flex>

  <Layout padding backgroundDark>
    <Flex wrap="true">
      <Badge inverted>Default</Badge>
      <Badge colour="success" inverted>Success</Badge>
      <Badge colour="warning" inverted>Warning</Badge>
      <Badge colour="danger" inverted>Danger</Badge>
      <Badge colour="primaryLight" inverted>Low priority</Badge>
      <Badge colour="primaryDark" inverted>Medium priority</Badge>
      <Badge colour="primaryDarkest" inverted>High priority</Badge>
    </Flex>
  </Layout>

</Layout>
```
