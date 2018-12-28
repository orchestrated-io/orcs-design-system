This popover component is intended to be used to supplement buttons that require some helper text. It supports customisation of direction and width. This is so that you can ensure that the popover doesn't run off the screen, and that the width suits the amount of text in the popover. 

If you don't specify a width, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. The width is set in pixels within the component, so no need to add px units to your props.

```js

<Layout padding childChildHorizontalSpacing>

  <Flex wrap="true">
  
    <Popover direction="right" text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>
    
    <Popover direction="left"  text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>

    <Popover direction="bottom" text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>

    <Popover direction="top" text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>

  </Flex>

</Layout>
``` 
