Modal should be used wisely for creating a contextual action to the user.

```js
const [visible, setVisible] = React.useState(false);
const showModal = () => {
  setVisible(true);
}
const onConfirm = () => {
  setVisible(false);
}
const onCancel = () => {
  setVisible(false);
}

<Layout childVerticalSpacing>
  <Button onClick={showModal}>Show Modal</Button>
  <Modal
      visible={visible}
      width="600px"
      confirmText="Create Team"
      onConfirm={onConfirm}
      cancelText="Cancel"
      onCancel={onCancel}
  >
    <Layout childVerticalSpacing>
      <Typography.P>Modal Dialog Header</Typography.P>
      <Card width="calc(50% - 10px)" center>
        <Layout childVerticalSpacing>
          <Icon icon={["fas", "file"]} size="3x" color={colours.greyLight} />
          <Typography.H1 center>Create new</Typography.H1>
          <Typography.P center>Start with a blank slate and add your own data</Typography.P>
          <Button>
            Start fresh
          </Button>
        </Layout>
      </Card>
    </Layout>
  </Modal>
</Layout>
```
