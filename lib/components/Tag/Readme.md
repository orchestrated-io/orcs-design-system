The top two rows are an example of how tags should be used when they are selectable/unselectable. There is the option to display the cross icon or not.

The bottom row is when you want to show tags that aren't editable.

```js
<Flex wrap="true">

  <Tag selected>devops</Tag>
  <Tag selected>software engineering</Tag>
  <Tag>product design</Tag>
  <Tag>digital transformation</Tag>

</Flex>

<Flex wrap="true">

  <Tag selected hideCross>devops</Tag>
  <Tag selected hideCross>software engineering</Tag>
  <Tag>product design</Tag>
  <Tag>digital transformation</Tag>

</Flex>

<Flex wrap="true">

  <Tag disabled>devops</Tag>
  <Tag disabled>software engineering</Tag>
  <Tag disabled>product design</Tag>
  <Tag disabled>digital transformation</Tag>
  
</Flex>
```
