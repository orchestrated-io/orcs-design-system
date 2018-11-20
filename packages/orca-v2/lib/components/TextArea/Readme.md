The TextArea component should be used wherever a multi line form entry is required. Some examples of this could be enquiries, descriptions, summaries, questions etc.

Examples include three validation states: default, invalid, valid.

Ensure to use a unique id for each text area.

Specify size using cols and rows like shown in the example. adding fullWidth prop will override the cols value and make the text input 100% width of parent container.

```js
<Flex wrap="true">

  <Layout marginHalf>
    <TextArea id="TextArea1" type="text" label="Message" col="3" />
  </Layout>

  <Layout marginHalf>
    <TextArea id="TextArea2" type="text" label="Message" invalid />
  </Layout>

  <Layout marginHalf>
    <TextArea id="TextArea3" type="text" label="Message" valid />
  </Layout>
  
  <Layout marginHalf>
    <TextArea id="TextArea4" type="text" label="Message" mandatory/>
  </Layout>

</Flex>

<Layout marginHalf>
  <TextArea id="TextArea5" type="text" label="Message" cols="50" rows="5" />
</Layout>

<Layout marginHalf>
  <TextArea id="TextArea5" type="text" label="Message" fullWidth />
</Layout>

```
