import React from "react";
import { H1, H2, H3, H4, H5, H6, P, Text, Quote, Small, Code } from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "System/Typography"
};

export const HeadingsH1ToH6 = {
  render: () => (
    <Spacer my={4}>
      <Box>
        <H1>Standard H1</H1>
        <H1 weight="light">Light version</H1>
        <H1 weight="bold">Bold version</H1>
      </Box>
      <Box>
        <H2>Standard H2</H2>
        <H2 weight="light">Light version</H2>
        <H2 weight="bold">Bold version</H2>
      </Box>
      <Box>
        <H3>Standard H3</H3>
        <H3 weight="light">Light version</H3>
        <H3 weight="bold">Bold version</H3>
      </Box>
      <Box>
        <H4>Standard H4</H4>
        <H4 weight="light">Light version</H4>
        <H4 weight="bold">Bold version</H4>
      </Box>
      <Box>
        <H5>Standard H5</H5>
        <H5 weight="light">Light version</H5>
        <H5 weight="bold">Bold version</H5>
      </Box>
      <Box>
        <H6>Standard H6</H6>
        <H6 weight="light">Light version</H6>
        <H6 weight="bold">Bold version</H6>
      </Box>
    </Spacer>
  )
};

export const BodyTextParagraph = {
  render: () => (
    <Spacer my={3}>
      <P>
        Regular paragraph text. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed aliquet at elit sit amet iaculis. Cras eget sapien
        et ligula mollis placerat non venenatis dolor. Fusce id mi risus. Ut sit
        amet diam in dui maximus sagittis a at dolor. Cras volutpat est nec arcu
        interdum pulvinar in vitae erat.
      </P>
      <P textAlign="center">Centered paragraph text.</P>
      <P textAlign="right">Right-aligned paragraph text.</P>
      <P weight="light">Light paragraph text</P>
      <P sizing="small">Small paragraph text</P>
    </Spacer>
  )
};

export const BodyTextText = {
  render: () => <Text>Hello world</Text>
};

export const StylingSizing = {
  render: () => (
    <Spacer my={3}>
      <H5 sizing="small">Small variant of H5</H5>
      <H5 sizing="large">Large variant of H5</H5>
      <H5 fontSize={2}>
        Even smaller H5, scaled down two steps in the fontSize array
      </H5>
      <P fontSize="10px">Very small text using a specific fontSize value</P>
      <Small>Small text using the Small component</Small>
    </Spacer>
  )
};

export const StylingEmphasis = {
  render: () => (
    <Spacer my={3}>
      <P weight="bold">Bold paragraph text lorem ipsum dolor sit amet</P>
      <P>
        Only <strong>partially bolded</strong> paragraph
      </P>
    </Spacer>
  )
};

export const StylingColours = {
  render: () => (
    <Spacer my={2}>
      <P color="greyDark">Grey-coloured text</P>
      <P color="success">Success-coloured text</P>
      <P color="danger">Danger-coloured text</P>
      <Box bg="greyDarker" p="r">
        <P color="white">White text for dark backgrounds</P>
      </Box>
    </Spacer>
  )
};

export const MiscellaneousBlockquote = {
  render: () => (
    <Quote>
      &quot;Used to display block quotes lorem ipsum dolor sit amet&quot;
      <em> - Adam, 2018</em>
    </Quote>
  )
};

export const MiscellaneousCode = {
  render: () => (
    <Code>
      &lt;html&gt; &lt;head&gt; &lt;body&gt; Hello I am a code block
      &lt;/body&gt; &lt;/head&gt; &lt;/html&gt;
    </Code>
  )
};
