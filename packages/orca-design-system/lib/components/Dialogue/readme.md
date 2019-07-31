This Dialogue component should be used for confirmation of certain actions. You can pass in a function on confirm, as shown by testAction, and the dialogue takes any of the button props and will pass them through to the button component, in this example we have used `colour="danger"` to make the button red.

You can add any child content as you wish, using other components, e.g. Typography. But as a rough guide, try and keep this content minimal. This is not intended to be used to display large amounts of content like a modal.

Width is also configurable, units must be specified (px, %, vw, etc.).

```js
const testConfirmAction = () => {
  alert("You clicked OK");
  // Must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue
  //return true;
  return Promise.resolve(true);
};
const testCancelAction = () => {
  alert("You clicked Cancel");
};

<Layout padding childChildHorizontalSpacing>
  <Dialogue
    width="320px"
    buttonText="Delete data"
    colour="danger"
    confirmAction={testConfirmAction}
    confirmText="OK"
    cancelAction={testCancelAction}
    cancelText="Cancel"
  >
    <Typography.P marginBottom bold>
      This will remove all data from the application.
    </Typography.P>
    <Typography.P>Do you wish to continue?</Typography.P>
  </Dialogue>
</Layout>;
```

You could conditionally skip confirmation dialog and call confirmAction on button click

```js
const testConfirmAction = () => {
  alert("You clicked OK");
  return Promise.resolve(true);
};

<Layout padding childChildHorizontalSpacing>
  <Dialogue
    buttonText="No confirmation"
    colour="primary"
    confirmAction={testConfirmAction}
    shouldShowDialogue={() => false}
  >
    <Typography.P marginBottom bold>
      You should not see this message
    </Typography.P>
  </Dialogue>
</Layout>;
```
