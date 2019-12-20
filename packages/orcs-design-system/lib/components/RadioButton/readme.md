The default radio button (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones should be used sparingly if required to indicate a particular state or meaning, e.g. If you had two radio buttons for upvote or downvote they could be coloured green and red.

```js
<Layout childVerticalSpacing>

  <RadioButton name="RadioButtons" label="Default radio" />

  <RadioButton name="RadioButtons" label="Disabled unchecked radio" disabled />

  <RadioButton name="RadioButtons2" label="Disabled checked radio" disabled checked />

  <RadioButton name="RadioButtons" label="Primary colour radio" colour="primary" />

  <RadioButton name="RadioButtons" label="Success colour radio" colour="success" />

  <RadioButton name="RadioButtons" label="Warning colour radio" colour="warning" />

  <RadioButton name="RadioButtons" label="Danger colour radio" colour="danger" />

  <Layout verticalMargin padding backgroundDark>

    <RadioButton name="RadioButtons" label="Inverted radio" colour="white" />

  </Layout>

</Layout>
```
