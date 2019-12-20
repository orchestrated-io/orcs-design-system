The TextArea component should be used wherever a multi line form entry is required. Some examples of this could be enquiries, descriptions, summaries, questions etc.

Examples include three validation states: default, invalid, valid.

Ensure to use a unique id for each text area.

Specify size using cols and rows like shown in the example. adding fullWidth prop will override the cols value and make the text input 100% width of parent container.

```js
<Flex wrap="true">

  <Layout marginHalf>
    <TextArea id="TextArea1" label="Message" col="3" />
  </Layout>

  <Layout marginHalf>
    <TextArea id="TextArea2" label="Message" invalid />
  </Layout>

  <Layout marginHalf>
    <TextArea id="TextArea3" label="Message" valid />
  </Layout>
  
  <Layout marginHalf>
    <TextArea id="TextArea4" label="Message" mandatory/>
  </Layout>

</Flex>

<Layout marginHalf>
  <TextArea id="TextArea5" label="Message" cols="50" rows="5" />
</Layout>

<Layout marginHalf>
  <TextArea id="TextArea6" label="Message" fullWidth />
</Layout>

```
