import React from "react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Quote,
  Small,
  Code
} from "orcs-design-system";

export default {
  title: "Typography",
  component: Typography
};

export const H1 = {
  render: () => <H1>Standard H1</H1>
};

export const H2 = {
  render: () => <H2>Standard H2</H2>
};

export const H3 = {
  render: () => <H3>Standard H3</H3>
};

export const H4 = {
  render: () => <H4>Standard H4</H4>
};

export const H5 = {
  render: () => <H5>Standard H5</H5>
};

export const H6 = {
  render: () => <H6>Standard H6</H6>
};

export const BodyTextParagraph = {
  render: () => (
    <P>
      Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed aliquet at elit sit amet iaculis. Cras eget sapien et ligula
      mollis placerat non venenatis dolor. Fusce id mi risus. Ut sit amet diam
      in dui maximus sagittis a at dolor. Cras volutpat est nec arcu interdum
      pulvinar in vitae erat.
    </P>
  )
};

export const SmallText = {
  render: () => <Small>Small text</Small>
};

export const Blockquote = {
  render: () => (
    <Quote>
      &quot;Used to display block quotes lorem ipsum dolor sit amet&quot;
      <em> - Adam, 2018</em>
    </Quote>
  )
};

export const Code = {
  render: () => (
    <Code>
      &lt;html&gt; &lt;head&gt; &lt;body&gt; Hello I am a code block
      &lt;/body&gt; &lt;/head&gt; &lt;/html&gt;
    </Code>
  )
};
