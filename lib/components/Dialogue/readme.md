Modal description

```js
const testAction = () => {
  console.log("You clicked OK!");
};

<Layout padding childChildHorizontalSpacing>

  <Dialogue width="320px" buttonText="Delete data" colour="danger" confirmAction={testAction}>

    <Typography.P marginBottom bold>This will remove all data from the application.</Typography.P>
    <Typography.P>Do you wish to continue?</Typography.P>

  </Dialogue>

</Layout>;
```
