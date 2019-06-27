Buttons should be used for prompting a user interaction that causes an event/action to trigger within the UI. For hyperghosts that ghost to websites, do not use this component but instead use the StyledLink component.

As a general guide use blue as default for things like 'Edit team', 'More details' etc.

Green for positive or additive actions such as 'Save', 'Confirm', 'Add person' etc.

Red for irreversible things like 'Delete' or 'Remove'.

Ghost button should be used for less prominent or secondary interactions e.g. 'Cancel', 'Exit', 'Back' etc.

Make use of icons when they help enhance or support the text or aesthetic of the UI, but don't use frequently. Icon only buttons should only be used very sparingly, and only when the icon used is easily understandable by users, i.e. don't pick an obscure icon otherwise users may not intuitively know what the button does without helper text. 

```js
<Layout childVerticalSpacing childChildHorizontalSpacing>

  <Flex>
    <Button small>Button small</Button>
    <Button ghost small>Ghost button small</Button>
  </Flex>
  
  <Flex>
    <Button>Button regular</Button>
    <Button ghost>Ghost button regular</Button>
  </Flex>

  <Flex>
    <Button large>Button large</Button>
    <Button ghost large>Ghost button large</Button>
  </Flex>

  <Button fullWidth>Full width button</Button>
  
  <Button disabled>Disabled button</Button>
  
  <Button isLoading>isLoading button</Button>
  
  <Button iconLeft><Icon icon={["fas", "user-plus"]} />Left icon</Button>
  
  <Button iconRight>Right icon<Icon icon={["fas", "cloud-download"]} /></Button>
  
  <Flex alignStart>
    <Button large iconOnly><Icon icon={["far", "calendar-alt"]} /></Button>
    <Button iconOnly><Icon icon={["far", "calendar-alt"]} /></Button>
    <Button small iconOnly><Icon icon={["far", "calendar-alt"]} /></Button>
  </Flex>

  <Flex>
    <Button colour="successDark">Green button</Button>
    <Button colour="danger">Red button</Button>
  </Flex>
  
</Layout>
```
