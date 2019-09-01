import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import Button from "../Button";

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: 0;
  transition: all 300ms ease-in-out;

  ${props =>
    props.visible
      ? css`
          opacity: 1;
          z-index: 900;
          visibility: visible;
        `
      : css`
          opacity: 0;
          z-index: -900;
          visibility: hidden;
        `};
`;

const Container = styled.div`
  position: relative;
  z-index: 9001;
  background: ${colours.white};
  width: ${props => (props.width ? props.width : "300px")};
  border-radius: ${variables.borderRadius};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: ${variables.defaultSpacing};
  border-top: solid 1px ${colours.greyLighter};
  button + button {
    margin-left: ${variables.defaultSpacingHalf};
  }
`;

const Content = styled.div`
  padding: ${variables.defaultSpacing};
`;

class Modal extends React.Component {
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeypress);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeypress);
  };

  handleKeypress = event => {
    const { visible } = this.props;

    if (!visible) {
      return;
    }

    var code = event.keyCode || event.which;
    if (code === 13) {
      // 13 is the enter keycode
      this.handleOk();
      event.preventDefault();
    } else if (code === 27) {
      // 27 is the escape keycode
      this.handleCancel();
      event.preventDefault();
    }
  };

  handleOk = () => {
    const { confirmAction } = this.props;
    const result = confirmAction();
    if (result && result.then) {
      // we have been given a promise
      result.then(result => {
        if (result) {
          this.closeDialogue();
        }
      });
    } else if (result) {
      this.closeDialogue();
    }
  };

  handleCancel = () => {
    const { cancelAction } = this.props;
    this.closeDialogue();
    cancelAction && cancelAction();
  };

  render() {
    const {
      children,
      width,
      confirmText,
      cancelText,
      visible,
      onConfirm,
      onCancel
    } = this.props;

    return (
      <Overlay visible={visible}>
        <Container width={width}>
          <Content>{children}</Content>
          <Actions>
            <Button onClick={onConfirm}>{confirmText}</Button>
            <Button ghost onClick={onCancel}>
              {cancelText}
            </Button>
          </Actions>
        </Container>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  /** Specifies the width of the Dialogue in pixels */
  width: PropTypes.string,
  /** Specifies the visibility of the Dialogue */
  visible: PropTypes.bool,
  /** Specifies the text to use for the confirm button. Recommend using words like OK, Confirm, Yes, Proceed, Add, Save. */
  confirmText: PropTypes.string,
  /** Specifies the function to run on clicking confirm button. Function must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue (see example code) */
  onConfirm: PropTypes.func,
  /** Specifies the text to use for the cancel button. Recommend using words like Cancel, Close, No. */
  cancelText: PropTypes.string,
  /** Specifies the function to run on clicking cancel button. (Note, dialogue is closed automatically) */
  onCancel: PropTypes.func
};

/** @component */
export default Modal;
