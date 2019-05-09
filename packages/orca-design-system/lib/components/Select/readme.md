We need a lot of flexibility/functionality from our select component, like the ability to support autocomplete and multiple values, so instead of writing our own, which would take considerable time and effort, we are making use of https://jedwatson.github.io/react-select/.

Following are some examples, but for the complete list of examples please visit the link above. For more documentation on use see here: https://github.com/JedWatson/react-select.

```js
<Layout marginHalf>
  <Select
    id="select1"
    label="Label text"
    disabled
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    value="vanilla"
  />
</Layout>
<Layout marginHalf>
  <Select
    isLoading
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    value="vanilla"
  />
</Layout>
<Layout marginHalf>
  <Select
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    value="vanilla"
  />
</Layout>
<Layout marginHalf>
  <Select
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    placeholder="Select flavour"
  />
</Layout>
<Layout marginHalf>
  <Select
    multi
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    value={["vanilla", "caramel", "peppermint", "cookiescream", "strawberry" ]}
    placeholder="Select your favourite(s)"
  />
</Layout>
<Layout marginHalf>
  <Select
    multi
    disabled
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    value={["vanilla", "caramel", "peppermint", "cookiescream", "strawberry" ]}
    placeholder="Select your favourite(s)"
  />
</Layout>
<Layout padding marginHalf backgroundDark>
  <Layout marginHalf>
    <Select
      label="Label text"
      inverted
      disabled
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      value="vanilla"
    />
  </Layout>
  <Layout marginHalf>
    <Select
      inverted
      isLoading
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      value="vanilla"
    />
  </Layout>
  <Layout marginHalf>
    <Select
      inverted
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      value="vanilla"
    />
  </Layout>
  <Layout marginHalf>
    <Select
      inverted
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      placeholder="Select flavour"
    />
  </Layout>
  <Layout marginHalf>
    <Select
      inverted
      multi
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      value={["vanilla", "caramel", "peppermint", "cookiescream", "strawberry" ]}
      placeholder="Select your favourite(s)"
    />
  </Layout>
  <Layout marginHalf>
    <Select
      inverted
      multi
      disabled
      options={[
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ]}
      value={["vanilla", "caramel", "peppermint", "cookiescream", "strawberry" ]}
      placeholder="Select your favourite(s)"
    />
  </Layout>
</Layout>
<Layout marginHalf>
  <Select
    large
    id="select2"
    label="Large select box"
    options={[
      { label: "Chocolate", value: "chocolate" },
      { label: "Vanilla", value: "vanilla" },
      { label: "Strawberry", value: "strawberry" },
      { label: "Caramel", value: "caramel" },
      { label: "Cookies and Cream", value: "cookiescream" },
      { label: "Peppermint", value: "peppermint" }
    ]}
    placeholder="Select flavour"
  />
</Layout>
```
