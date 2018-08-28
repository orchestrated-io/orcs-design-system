The divider component should be used as a horizontal rule to break up content into meaningful sections.

As a general rule, the default divider with no props set should be used in most cases, however a thicker one can be used to emphasize a greater separation between content sections, and a light divider can be used to separate similar repeating items within a section, like a list of people/teams etc.

```js
<Layout padding childVerticalSpacing>

  <Divider />

  <Divider light />

  <Divider thick />

  <Divider light thick />

</Layout>

<Layout margin padding backgroundDark childVerticalSpacing>

  <Divider inverted />

  <Divider inverted thick />

</Layout>
```
