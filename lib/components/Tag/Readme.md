The top row is an example of how tags should be used when they are selectable/unselectable.

The bottom row is when you want to show tags that aren't editable.

```js
<Flex wrap="true">

  <Tag>devops</Tag>
  <Tag selected>software engineering</Tag>
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
