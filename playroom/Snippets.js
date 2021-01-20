export default [
  {
    group: "Text with badges",
    name: "Link text",
    code: `
        <Flex alignItems="center" flexWrap="wrap">
          <StyledLink href="/" mr="s">Item name</StyledLink>
          <Spacer m="1">
            <Badge>89 children</Badge>
            <Badge variant="secondary">Item type</Badge>
            <Badge variant="success">Status: ONLINE</Badge>
          </Spacer>
        </Flex>
    `
  },
  {
    group: "Text with badges",
    name: "Page title",
    code: `
        <Flex alignItems="center" flexWrap="wrap">
            <H1 mr="s" weight="light">Item name</H1>
            <Spacer m="1">
            <Badge>89 children</Badge>
            <Badge variant="secondary">Item type</Badge>
            <Badge variant="success">Status: ONLINE</Badge>
            </Spacer>
        </Flex>
`
  },
  {
    group: "Text with badges",
    name: "Plain text title in page",
    code: `
        <Flex alignItems="center" flexWrap="wrap">
            <H5 mr="s">Item name</H5>
            <Spacer m="1">
            <Badge>89 children</Badge>
            <Badge variant="secondary">Item type</Badge>
            <Badge variant="success">Status: ONLINE</Badge>
            </Spacer>
        </Flex>
    `
  }
];
