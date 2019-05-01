Status dot component is used to specify a true/false, met/not met or on/off state. One, or multiple can be used to represent different things.

The horizontal layout and tooltip functionality comes from other components (Flex and Popover respectively).

```js
  <Layout childChildHorizontalSpacingQuarter>
    <Flex alignCenter>
      <Popover direction="top" text="Team has a dedicated Product Owner. STATUS: Met" textAlign="left" width="250">
        <StatusDot on/>
      </Popover>
      <Popover direction="top" text="Team has a dedicated Engineering Lead. STATUS: Not met" textAlign="left" width="250">
        <StatusDot/>
      </Popover>
      <Popover direction="top" text="Team has less than 13 members. STATUS: Not met" textAlign="left" width="250">
        <StatusDot/>
      </Popover>
      <Popover direction="top" text="Team members should share no more than 4 line managers. STATUS: Met" textAlign="left" width="250">
        <StatusDot on/>
      </Popover>
      <Popover direction="top" text="Team members are in less than 3 locations. STATUS: Not enough data" textAlign="left" width="250">
        <StatusDot warning/>
      </Popover>
    </Flex>
  </Layout>
```
