import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import Button from "../Button";
import Icon from "../Icon";

const Dialogue = ({
  children,
  buttonText,
  width,
  icon,
  confirmText,
  cancelText,
  confirmAction,
  cancelAction,
  ...props
}) => {
  const [visible, setvisible] = useState(false);
  const handleOnButtonClick = useCallback(() => {
    setvisible(true);
  }, [setvisible]);

  const handleConfirm = useCallback(() => {
    if (confirmAction) {
      const result = confirmAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then(r => {
          if (r) {
            setvisible(false);
          }
        });
      }
    }
    setvisible(false);
  }, [confirmAction, setvisible]);

  const handleCancel = useCallback(() => {
    if (cancelAction) {
      const result = cancelAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then(r => {
          if (r) {
            setvisible(false);
          }
        });
      }
    }
    setvisible(false);
  }, [cancelAction, setvisible]);

  return (
    <>
      <Button {...props} iconLeft onClick={handleOnButtonClick}>
        {icon && <Icon icon={icon} />}
        {buttonText}
      </Button>
      <Modal
        visible={visible}
        width={width}
        confirmText={confirmText}
        cancelText={cancelText}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
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
  onCancel: PropTypes.func
};

export default Dialogue;
