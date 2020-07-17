import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import Button from "../Button";
import Divider from "../Divider";
import Flex from "../Flex";
import Spacer from "../Spacer";
import { ThemeProvider } from "styled-components";
import systemtheme from "../../systemtheme";

const CustomModal = ({
  confirmText,
  cancelText,
  children,
  handleConfirm,
  handleCancel,
  visible,
  onClose,
  cancelProps,
  confirmProps,
  ...props
}) => {
  return (
    <Modal visible={visible} onClose={onClose} {...props}>
      <Spacer p="s">
        {children}
        <Divider light />
        <Flex>
          <Spacer mr="s">
            <Button onClick={handleConfirm} {...confirmProps}>
              {confirmText}
            </Button>
            <Button onClick={handleCancel} {...cancelProps}>
              {cancelText}
            </Button>
          </Spacer>
        </Flex>
      </Spacer>
    </Modal>
  );
};

const Dialogue = ({
  children,
  width,
  confirmText,
  cancelText,
  confirmAction,
  cancelAction,
  confirmProps,
  cancelProps,
  handleConfirm,
  handleCancel,
  onClose,
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomModal
        width={width}
        confirmText={confirmText}
        cancelText={cancelText}
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        onClose={onClose}
        cancelProps={cancelProps}
        confirmProps={confirmProps}
        {...props}
      >
        {children}
      </CustomModal>
    </ThemeProvider>
  );
};

Dialogue.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Function to handle onClick for Confirm button  */
  handleConfirm: PropTypes.func,
  /** Sets the additional function to run for handleConfirm  */
  confirmAction: PropTypes.func,
  /** Function to handle onClick for Cancel button  */
  handleCancel: PropTypes.func,
  /** Sets the additional function to run for handleCancel  */
  cancelAction: PropTypes.func,
  /** Sets the function to run on clicking the `X` button on the top right corner */
  onClose: PropTypes.func,
  /** Set the text for the Confirm button. */
  confirmText: PropTypes.string,
  /** Set the text for the Cancel button. */
  cancelText: PropTypes.string,
  /** Set the properties for the Confirm button. See `Button` for accepted props. */
  confirmProps: PropTypes.object,
  /** Set the properties for the Cancel button. See `Button` for accepted props. */
  cancelProps: PropTypes.object,
  /** Sets the theme object for `Dialogue`. */
  theme: PropTypes.object
};

Dialogue.defaultProps = {
  confirmText: "OK",
  cancelText: "Cancel",
  theme: systemtheme,
  cancelProps: { variant: "ghost" }
};

CustomModal.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  handleConfirm: PropTypes.func,
  handleCancel: PropTypes.func,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  handleOnClose: PropTypes.func,
  /** Set the properties for the Cancel button. See `Button` for accepted props. */
  cancelProps: PropTypes.object,
  /** Set the properties for the Confirm button. See `Button` for accepted props. */
  confirmProps: PropTypes.object
};

export default Dialogue;
