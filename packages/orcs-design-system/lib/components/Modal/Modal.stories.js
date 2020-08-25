import React, { useState, useEffect } from "react";
import Button from "../Button";
import Modal from ".";
import { H3, P } from "../Typography";
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

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (!visible) {
      return;
    }
    const handleClicked = () => {
      setVisible(false);
    };
    // handle click to hide menu
    document
      .getElementById("modal-overlay")
      .addEventListener("click", handleClicked);
    document
      .getElementById("modal-container")
      .addEventListener("click", e => e.stopPropagation());
    return () => {
      // If menu closed, unregister event listener to prevent memory leaks
      document.removeEventListener("click", handleClicked);
    };
  }, [visible]);

  return (
    <>
      <Button onClick={handleOnButtonClick}>Open Modal</Button>
      <Modal
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        onClose={onClose}
      >
        <Spacer mb="r">
          <H3>Modal Title</H3>
          <P>
            Content of the modal. Modal accepts any child components or content.
          </P>
        </Spacer>
      </Modal>
    </>
  );
};
export const basicModal = () => <Basic />;
basicModal.parameters = {
  docs: {
    source: {
      code: `const [visible, setVisible] = useState(false);
      const handleOnButtonClick = () => {
        setVisible(true);
      };
      const onClose = () => {
        setVisible(false);
      };
      const handleOnConfirm = () => {
        setVisible(false);
      };
      useEffect(() => {
        if (!visible) {
          return;
        }
        const handleClicked = () => {
          setVisible(false);
        };

        // handle click outside to close Modal
        document.addEventListener("click", handleClicked);

        return () => {
          // If Modal closed, unregister event listener to prevent memory leaks
          document.removeEventListener("click", handleClicked);
        };
      }, [visible]);
      return (
        <>
          <Button onClick={handleOnButtonClick}>Open Modal</Button>
          <Modal
            visible={visible}
            handleOnConfirm={handleOnConfirm}
            onClose={onClose}
          >
            <Spacer mb="r">
              <H3>Modal Title</H3>
              <P>
                Content of the modal. Modal accepts any child components or content.
              </P>
            </Spacer>
          </Modal>
        </>
      );`
    }
  }
};
