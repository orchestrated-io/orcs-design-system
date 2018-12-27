This popover component is intended to be used to suplement buttons that require some helper text. It supports customisation of direction and width. This is so that you can ensure that the popover doesn't run off the screen, and that the width suits the amount of text in the popover. 

If you don't specify a width, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. The width is set in pixels within the component, so no need to add px units to your props.

For on press interaction, you can pass in a function on confirm, as shown by testAction.

```js
const testAction = () => {
  console.log("You clicked YES!");
};

<Layout padding childChildHorizontalSpacing>

  <Flex wrap="true">
  
    <Popover direction="right" trigger="hover" text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>
    
    <Popover direction="left" trigger="hover" text="Description of what this button does">
      <Button>Hover me</Button>
    </Popover>

    <Popover direction="bottom" trigger="press" text="Are you sure you want to delete?" confirmAction={testAction}>
      <Button>Click me</Button>
    </Popover>

    <Popover direction="top" trigger="press" text="Are you sure you want to delete?" confirmAction={testAction}>
      <Button>Click me</Button>
    </Popover>

  </Flex>

</Layout>
``` 
