import React from "react";
import Button from "../Button";
import Modal from ".";
import StyledLink from "../StyledLink";
import Divider from "../Divider";
import { H2, P } from "../Typography";
import Box from "../Box";
import Spacer from "../Spacer";
import mdx from "./Modal.mdx";

export default {
  title: "Components/Modal",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Modal
};

export const Basic = () => {
  const [visible, setVisible] = React.useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnClose = () => {
    setVisible(false);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  return (
    <>
      <Button onClick={handleOnButtonClick}>Open Modal</Button>
      <Modal
        visible={visible}
        onConfirm={handleOnConfirm}
        onClose={handleOnClose}
      >
        Content of the modal
      </Modal>
    </>
  );
};

export const LinkModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnClose = () => {
    setVisible(false);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  return (
    <>
      <StyledLink onClick={handleOnButtonClick}>
        Function Name Lorem Ipsum &gt; Agile Group &gt; Breadcrumb
      </StyledLink>
      <Modal
        visible={visible}
        onConfirm={handleOnConfirm}
        onClose={handleOnClose}
        width="50%"
      >
        <Spacer my="r">
          <H2>Agile Group Information</H2>
          <Divider light />
          <Box bg="greyLightest" p="r">
            <P>Lorem ipsum dolor sit amet</P>
          </Box>
        </Spacer>
      </Modal>
    </>
  );
};
LinkModal.storyName = "Using Link";
