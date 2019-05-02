Avatars can come in a few different options. Firstly regular or small size (using a H2 or H5 respectively).

Next, depending on what is available it can preferably contain an image file/source, if no image, then show initials as fall back, if no name/initials, then fall back to an icon.

Thirdly the title/name can be a link or just plain text.

Lastly you can specify whether it is being rendered on a dark background and the colours will change to suit this case.

Also, if no title/subtitle is specified then it will only show the circle avatar part.

Follow example code below to achieve desired option.

```js
<Layout childVerticalSpacing>
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst"/>
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL"/>
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  <Avatar title={<StyledLink.Hyperlink href="#">Ayden Lundgre</StyledLink.Hyperlink>} subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  <Layout backgroundDark paddingHalf roundedCorners>
    <Avatar inverted title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  </Layout>
  <Layout backgroundDark paddingHalf roundedCorners>
    <Avatar inverted title={<StyledLink.Hyperlink href="#">Ayden Lundgre</StyledLink.Hyperlink>} subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  </Layout>
  <Avatar small title="Ayden Lundgre" subtitle="Senior Business Analyst"/>
  <Avatar small title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL"/>
  <Avatar small title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  <Avatar small title={<StyledLink.Hyperlink href="#">Ayden Lundgre</StyledLink.Hyperlink>} subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  <Layout backgroundDark paddingHalf roundedCorners>
    <Avatar inverted small title="Ayden Lundgre" subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  </Layout>
  <Layout backgroundDark paddingHalf roundedCorners>
    <Avatar inverted small title={<StyledLink.Hyperlink href="#">Ayden Lundgre</StyledLink.Hyperlink>} subtitle="Senior Business Analyst" initials="AL" image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
  </Layout>

</Layout>
```
