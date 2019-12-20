This tooltip component supports customisation of direction and width. This is so that you can ensure that the tooltip doesn't run off the screen, and that the width suits the amount of text in the tooltip.

If you don't specify a width, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. The width is set in pixels within the component, so no need to add px units to your props.

```js
<Layout padding childVerticalSpacing>

    <Tooltip direction="top">
      Top tooltip example description
    </Tooltip>

    <Tooltip direction="right" width="210">
      Right tooltip example description
    </Tooltip>

    <Tooltip direction="bottom" width="220">
      Bottom tooltip example description
    </Tooltip>

    <Tooltip direction="left">
      Left tooltip example description
    </Tooltip>

</Layout>

<Layout backgroundDark padding childVerticalSpacing>

    <Tooltip direction="top" width="170" inverted>
      Top longer tooltip content that wraps onto next line
    </Tooltip>

    <Tooltip direction="right" width="160" inverted>
      Right really long tooltip description example that wraps to three lines
    </Tooltip>

    <Tooltip direction="bottom" width="190" inverted>
      Bottom longer tooltip content that wraps onto next line
    </Tooltip>

    <Tooltip direction="left" width="180" inverted>
      Left longer tooltip content that wraps onto next line
    </Tooltip>

</Layout>
```
