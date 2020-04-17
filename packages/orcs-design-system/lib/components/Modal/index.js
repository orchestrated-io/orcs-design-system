import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import variables from "../../variables";
import Button from "../Button";
import Flex from "../Flex";
import Box from "../Box";
import Divider from "../Divider";

const Overlay = styled(Flex)`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  opacity: 0;
  transition: all 300ms ease-in-out;
  opacity: 1;
  z-index: 900;
  visibility: visible;
  animation: 300ms fadeIn ease-in-out;
`;

const Container = styled(Box)`
  position: relative;
  z-index: 9001;
  max-height: 90vh;
  overflow-y: auto;
  animation: 300ms fadeIn ease-in-out, 300ms scaleIn ease-in-out;
`;

const Actions = styled(Flex)`
  button + button {
    margin-left: ${variables.defaultSpacingHalf};
  }
`;

const Modal = props => {
  const {
    disabledConfirm,
    disabledCancel,
    children,
    width,
    height,
    confirmText,
    cancelText,
    isDisplayFooter,
    overflowVisible,
    visible,
    onConfirm,
    onCancel,
    ...restProps
  } = props;

  const handleKeypress = useCallback(
    event => {
      var code = event.keyCode || event.which;
      if (code === 13) {
        // 13 is the enter keycode
        onConfirm();
        event.preventDefault();
      } else if (code === 27) {
        // 27 is the escape keycode
        onCancel();
        event.preventDefault();
      }
    },
    [onConfirm, onCancel]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return (
    visible &&
    ReactDOM.createPortal(
      <Overlay alignItems="center" justifyContent="center" {...restProps}>
        <Container
          width={width}
          height={height}
          overflow={overflowVisible ? "visible" : "hidden"}
          borderRadius={variables.borderRadius}
          bg="white"
        >
          <Box p="4">{children}</Box>
          {isDisplayFooter && (
            <>
              <Divider />
              <Actions alignItems="center" p="4">
                <Button disabled={disabledConfirm} onClick={onConfirm}>
                  {confirmText}
                </Button>
                <Button disabled={disabledCancel} ghost onClick={onCancel}>
                  {cancelText}
                </Button>
              </Actions>
            </>
          )}
        </Container>
      </Overlay>,
      document.body
    )
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  /** Specifies the width of the Dialogue in pixels */
  width: PropTypes.string,
  /** Specifies the height of the Dialogue in pixels */
  height: PropTypes.string,
  /** Specifies the visibility of the Dialogue */
  visible: PropTypes.bool,
  /** Specifies the text to use for the confirm button. Recommend using words like OK, Confirm, Yes, Proceed, Add, Save. */
  confirmText: PropTypes.string,
  /** Specifies the function to run on clicking confirm button. Function must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue (see example code) */
  onConfirm: PropTypes.func.isRequired,
  /** Specifies the text to use for the cancel button. Recommend using words like Cancel, Close, No. */
  cancelText: PropTypes.string,
  /** Specifies the function to run on clicking cancel button. (Note, dialogue is closed automatically) */
  onCancel: PropTypes.func.isRequired,
  /** Specifies an action when confirm button is clicked or Enter key pressed. Can return a promise */
  disabledConfirm: PropTypes.bool,
  /** Specifies the button disabled state */
  disabledCancel: PropTypes.bool,
  /** Specifies whether to hide the foot or not. Default: true - Show footer*/
  isDisplayFooter: PropTypes.bool,
  /** Specifies whether the Dialogue overflow is visible or not - Default: false. If height is not enough, verticle scroll bar will be displayed (overflow-y: auto) */
  overflowVisible: PropTypes.bool
};

Modal.defaultProps = {
  disabledConfirm: false,
  disabledCancel: false,
  width: "300px",
  height: "auto",
  confirmText: "OK",
  cancelText: "Cancel",
  isDisplayFooter: true,
  overflowVisible: false
};

/** @component */
export default Modal;
