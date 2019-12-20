The default checkbox (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones can be used in situations where the colour corresponds with some indication of status, e.g. in a task list, green could denote task completed, red could denote task overdue.

```js
<Layout childVerticalSpacing>

  <Checkbox label="Default checkbox" />

  <Checkbox label="Disabled checkbox" disabled />

  <Checkbox label="Disabled checked checkbox" disabled checked />

  <Checkbox label="Primary colour checkbox" colour="primary" />

  <Checkbox label="Success colour checkbox" colour="success" />

  <Checkbox label="Warning colour checkbox" colour="warning" />

  <Checkbox label="Danger colour checkbox" colour="danger" />

  <Layout verticalMargin padding backgroundDark>

    <Checkbox label="Inverted checkbox" colour="white" />

  </Layout>

</Layout>
```
