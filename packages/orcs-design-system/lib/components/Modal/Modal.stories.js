import React, { useState } from "react";
import Button from "../Button";
import Modal from ".";

export default {
  title: "Components/Modal",
  component: Modal
};

export const BasicModal = () => {
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
        Content of the modal
      </Modal>
    </>
  );
};

BasicModal.story = {
  name: "Default"
};
