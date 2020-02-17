import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import variables from "../../variables";
import Button from "../Button";
import Icon from "../Icon";
import Modal from "../Modal";

const CustomIcon = styled(Icon)`
  margin-right: ${variables.defaultSpacingHalf} !important;
`;

class Dialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showDialogue = this.showDialogue.bind(this);
    this.closeDialogue = this.closeDialogue.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showDialogue() {
    this.setState({
      visible: true
    });
  }

  closeDialogue() {
    this.setState({
      visible: false
    });
  }

  handleOk() {
    const { confirmAction } = this.props;
    const confirmationResponse = confirmAction();
    const isPromise = confirmationResponse && confirmationResponse.then;
    if (isPromise) {
      confirmationResponse.then(result => {
        if (result) {
          this.closeDialogue();
        }
      });
    } else if (confirmationResponse) {
      this.closeDialogue();
    }
  }

  handleCancel() {
    const { cancelAction } = this.props;
    if (cancelAction) {
      cancelAction();
    }

    this.closeDialogue();
  }

  render() {
    const {
      children,
      buttonText,
      width,
      icon,
      confirmText,
      cancelText,
      ...props
    } = this.props;

    const { visible } = this.state;

    return (
      <>
        <Button {...props} onClick={this.showDialogue}>
          {icon ? <CustomIcon icon={icon} /> : null}
          {buttonText}
        </Button>
        <Modal
          visible={visible}
          width={width}
          confirmText={confirmText}
          cancelText={cancelText}
          onConfirm={this.handleOk}
          onCancel={this.handleCancel}
        >
          {children}
        </Modal>
      </>
    );
  }
}

Dialogue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies the width of the Dialogue in pixels */
  width: PropTypes.string,
  /** Specifies the text for the button that triggers the dialogue */
  buttonText: PropTypes.string,
  /** Specifies an icon for the button if required */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(String)]),
  /** Specifies the text to use for the confirm button. Recommend using words like OK, Confirm, Yes, Proceed, Add, Save. */
  confirmText: PropTypes.string,
  /** Specifies the function to run on clicking confirm button. Function must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue (see example code) */
  confirmAction: PropTypes.func,
  /** Specifies the text to use for the cancel button. Recommend using words like Cancel, Close, No. */
  cancelText: PropTypes.string,
  /** Specifies the function to run on clicking cancel button. (Note, dialogue is closed automatically) */
  cancelAction: PropTypes.func
  /** Specifies the function to decide should show the dialogue or not, executing confirmAction immediately if falsy value returned */
};

/** @component */
export default Dialogue;
