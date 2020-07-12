import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import Button from "../Button";
import Icon from "../Icon";
import Divider from "../Divider";
import Flex from "../Flex";
import Spacer from "../Spacer";

const CustomModal = ({
  confirmText,
  cancelText,
  children,
  handleConfirm,
  handleCancel,
  visible,
  handleOnClose,
  iconConfirm,
  iconCancel,
  ...props
}) => {
  return (
    <Modal visible={visible} onClose={handleOnClose} {...props}>
      <Spacer p="s">
        {children}
        <Divider light />
        <Flex>
          <Spacer mr="s">
            <Button onClick={handleConfirm} iconLeft>
              {iconConfirm ? <Icon icon={iconConfirm} /> : null}
              {confirmText}
            </Button>
            <Button onClick={handleCancel} variant="ghost" iconLeft>
              {iconCancel ? <Icon icon={iconCancel} /> : null}
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
  buttonText,
  width,
  icon,
  confirmText,
  cancelText,
  confirmAction,
  cancelAction,
  iconConfirm,
  iconCancel,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const handleOnClose = () => {
    setVisible(false);
  };

  const handleConfirm = useCallback(() => {
    if (confirmAction) {
      const result = confirmAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then(r => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [confirmAction, setVisible]);

  const handleCancel = useCallback(() => {
    if (cancelAction) {
      const result = cancelAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then(r => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [cancelAction, setVisible]);
  return (
    <>
      <Button {...props} iconLeft onClick={handleOnButtonClick}>
        {icon && <Icon icon={icon} />}
        {buttonText}
      </Button>
      <CustomModal
        visible={visible}
        width={width}
        confirmText={confirmText}
        cancelText={cancelText}
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        onClose={handleOnClose}
        iconConfirm={iconConfirm}
        iconCancel={iconCancel}
      >
        {children}
      </CustomModal>
    </>
  );
};

Dialogue.propTypes = {
  children: PropTypes.element,
  buttonText: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.array,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  confirmAction: PropTypes.func,
  cancelAction: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  /** Set the Font Awesome style/weight and icon for Confirm button */
  iconConfirm: PropTypes.array,
  /** Set the Font Awesome style/weight and icon for Cancel button */
  iconCancel: PropTypes.array
};

Dialogue.defaultProps = {
  confirmText: "OK",
  cancelText: "Cancel"
};

CustomModal.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  handleConfirm: PropTypes.func,
  handleCancel: PropTypes.func,
  visible: PropTypes.bool,
  handleOnClose: PropTypes.func,
  /** Set the Font Awesome style/weight and icon for Confirm button */
  iconConfirm: PropTypes.array,
  /** Set the Font Awesome style/weight and icon for Cancel button */
  iconCancel: PropTypes.array
};

export default Dialogue;
