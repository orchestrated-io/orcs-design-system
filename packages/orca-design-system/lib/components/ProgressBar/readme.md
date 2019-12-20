Progress bar is not intended to be used for loading (that's what the Loading component is for). The intended use is for indicating progress through steps or progress towards a goal.

A percentage width of the container (grey background) can be specified using the containerWidth prop, in most cases this should be 100.

A percentage width of the fill (coloured element) can be specified using the fillWidth prop. On page load the fill will animate from 0 to set value, and on change of the fillWidth prop value the fill will automatically animate to the new width value.

```js
<Layout childVerticalSpacing>

  <ProgressBar containerWidth={50} fillWidth={40} />

  <ProgressBar containerWidth={50} fillWidth={70} gradient />

</Layout>
<Layout margin />
<Layout childVerticalSpacing padding backgroundDark>

  <ProgressBar containerWidth={50} fillWidth={40} inverted />

  <ProgressBar containerWidth={50} fillWidth={70} gradient inverted />

</Layout>
```
