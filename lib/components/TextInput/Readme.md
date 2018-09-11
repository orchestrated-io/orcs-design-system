The TextInput component can be used as default text inputs with separate label and input like top row examples; these should be used most of the time.

For extra flair, a floating prop can be added to display the label floating inside the input which animates on click; these should be used for stand out or important forms such as sign in/sign up, subscribe or contact us forms. 

Examples also include three validation states: default, invalid, valid.

Ensure to use a unique id for each input, and helpful placeholder text which shows an example of what should be input is very useful to users.

```js
<Flex wrap="true">

  <Layout marginHalf>
    <TextInput id="textInput1" type="text" label="Full name" placeholder="E.g. John Smith" />
  </Layout>

  <Layout marginHalf>
    <TextInput id="textInput2" type="text" label="Full name" placeholder="E.g. John Smith" invalid />
  </Layout>

  <Layout marginHalf>
    <TextInput id="textInput3" type="text" label="Full name" placeholder="E.g. John Smith" valid />
  </Layout>
  
  <Layout marginHalf>
      <TextInput id="textInput4" type="text" label="Full name" placeholder="E.g. John Smith" valid mandatory/>
    </Layout>

</Flex>

<Flex wrap="true">

  <Layout marginHalf>
    <TextInput id="textInput5" type="text" label="Full name" placeholder="E.g. John Smith" floating />
  </Layout>

  <Layout marginHalf>
    <TextInput id="textInput6" type="text" label="Full name" placeholder="E.g. John Smith" floating invalid />
  </Layout>

  <Layout marginHalf>
    <TextInput fullWidth id="textInput7" type="text" label="Full name" placeholder="E.g. John Smith" floating valid />
  </Layout>
  
   <Layout marginHalf>
      <TextInput fullWidth id="textInput8" type="text" label="Full name" placeholder="E.g. John Smith" floating valid mandatory/>
    </Layout>
  
</Flex>
```
