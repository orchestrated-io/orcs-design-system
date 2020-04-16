import React, { useState } from "react";
import Button from "../Button";
import Modal from ".";

export default {
  title: "Components/Modal",
  component: Modal
};

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnCancel = () => {
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
        onCancel={handleOnCancel}
      >
        <p>Content of the modal</p>
      </Modal>
    </>
  );
};

Basic.story = {
  name: "Basic"
};
