To aid in the layout of components you can use this with any combination of
the following props: margins, paddings, backgrounds and borders.

See the props & methods for this component to see a full list as the examples don't cover all combinations.

Of particular note should be the child... props as these will provide equal spacing between child elements without having to wrap each child element in their own layouts.

Try not to nest layouts in the UI as this will then create too much duplicate spacing between components.

```js
<Layout padding margin border>
  <Typography.P>
    This is an example of a layout box that has a border.
  </Typography.P>
</Layout>

<Layout padding margin background>
  <Typography.P>
    This is an example of a layout box that has a background.
  </Typography.P>
</Layout>

<Layout padding margin border background>
  <Typography.P>
    This is an example of a layout box that has both border and background.
  </Typography.P>
</Layout>

<Layout padding margin backgroundDark>
  <Typography.P white>
    This is an example of a layout box that has a dark background.
  </Typography.P>
</Layout>

<Layout paddingHalf marginHalf>
  <Typography.P>
    This is an example of a layout without visible box that has padding and
    margin equal to the half the default spacing.
  </Typography.P>
</Layout>

<Layout padding margin>
  <Typography.P>
    This is an example of a layout without visible box that has padding and
    margin equal to the default spacing.
  </Typography.P>
</Layout>

<Layout paddingDouble marginDouble>
  <Typography.P>
    This is an example of a layout without visible box that has padding and
    margin equal to double the default spacing.
  </Typography.P>
</Layout>
```
