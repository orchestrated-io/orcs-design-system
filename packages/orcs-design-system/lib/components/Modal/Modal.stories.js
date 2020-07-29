import React, { useState } from "react";
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
  window.addEventListener("load", setup);
  const get = document.getElementById.bind(document);
  const query = document.querySelector.bind(document);

  const [visible, setVisible] = useState(false);
  function setup() {
    let modalRoot = get("modal-overlay");
    let modal = query(".modal-container");

    // handle click to hide menu
    modalRoot.addEventListener("click", rootClick);
    modal.addEventListener("click", modalClick);

    return () => {
      // If menu closed, unregister event listener to prevent memory leaks
      modalRoot.removeEventListener("click", rootClick);
      modal.removeEventListener("click", modalClick);
    };
    function rootClick() {
      setVisible(false);
    }
    function modalClick(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  }
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const onClose = () => {
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
