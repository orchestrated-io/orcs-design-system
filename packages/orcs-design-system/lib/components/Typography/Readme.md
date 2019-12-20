This component supports a range of typographical sub components, as illustrated below.

Where possible try and use these rather than plain html tags like `<h1>`, `<small>`, `<p>` etc.

```js
  <Layout childVerticalSpacing>

    <Typography.H1>Heading 1</Typography.H1>

    <Typography.H1 bold>Heading 1 bold</Typography.H1>

    <Typography.H2>Heading 2</Typography.H2>

    <Typography.H2 bold>Heading 2 bold</Typography.H2>

    <Typography.H3>Heading 3</Typography.H3>

    <Typography.H3 bold>Heading 3 bold</Typography.H3>

    <Typography.H4>Heading 4</Typography.H4>

    <Typography.H4 bold>Heading 4 bold</Typography.H4>

    <Typography.H5>Heading 5</Typography.H5>

    <Typography.H5 bold>Heading 5 bold</Typography.H5>

    <Typography.H6>Heading 6</Typography.H6>

    <Typography.H6 bold>Heading 6 bold</Typography.H6>

    <Typography.P>Paragraph text lorem ipsum dolor sit amet</Typography.P>

    <Typography.P center>Centered paragraph text lorem ipsum dolor sit amet</Typography.P>

    <Typography.P right>Right aligned paragraph text lorem ipsum dolor sit amet</Typography.P>

    <Typography.P bold>Bold paragraph text lorem ipsum dolor sit amet</Typography.P>

    <Typography.P bold grey>Makes text grey/muted colour</Typography.P>

    <Typography.P bold success>Makes text success coloured</Typography.P>

    <Typography.P bold warning>Makes text warning coloured</Typography.P>

    <Typography.P bold danger>Makes text danger coloured</Typography.P>

    <Layout verticalMargin paddingHalf backgroundDark>

      <Typography.P bold white>Makes text white so it is visible on dark background.</Typography.P>

    </Layout>

    <Typography.Small>Small text default</Typography.Small>

    <Typography.Small bold>Small text bold</Typography.Small>

    <Typography.Small grey>Small text muted</Typography.Small>

    <Typography.Small uppercase>Small text uppercase</Typography.Small>

    <Typography.Large>Large text</Typography.Large>

    <Typography.Large bold>Large text bold</Typography.Large>

    <Typography.Quote>"Used to display block quotes lorem ipsum dolor sit amet" <em> - Adam, 2018</em></Typography.Quote>

    <Typography.Code>Used to display code snippets</Typography.Code>

  </Layout>
```
