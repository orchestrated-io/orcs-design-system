Avatars can come in a few different options. Firstly regular or small size (using a H2 or H5 respectively).

Next, depending on what is available it can preferably contain an image file/source, if no image, then show initials as fall back, if no name/initials, then fall back to an icon.

Thirdly the name can be a link or just text.

Follow example code below to achieve desired option.

_Note: If you are specifying src for profile image, initials do not need to be specified._

```js
<Layout childVerticalSpacing>

  <Avatar>
    <Typography.H2>Ayden Lundgren</Typography.H2>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>

  <Avatar initials="AL">
    <Typography.H2>Ayden Lundgren</Typography.H2>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>
  
  <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">
    <Typography.H2>Ayden Lundgren</Typography.H2>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>

  <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">
    <Typography.H2><StyledLink.Hyperlink href="#">Ayden Lundgren</StyledLink.Hyperlink></Typography.H2>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>
  
  <Avatar small>
    <Typography.H5>Ayden Lundgren</Typography.H5>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>

  <Avatar small initials="AL">
    <Typography.H5>Ayden Lundgren</Typography.H5>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>
  
  <Avatar small src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">
    <Typography.H5>Ayden Lundgren</Typography.H5>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>

  <Avatar small src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">
    <Typography.H5><StyledLink.Hyperlink href="#">Ayden Lundgren</StyledLink.Hyperlink></Typography.H5>
    <Typography.Small grey>Senior Business Analyst</Typography.Small>
  </Avatar>

</Layout>
```
