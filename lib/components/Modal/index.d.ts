import * as React from "react";

export type ModalChildren = React.ReactElement<any> | string | React.ReactNode;

export type ModalHeaderContent = React.ReactElement<any> | React.ReactNode;

export type ModalFooterContent = React.ReactElement<any> | React.ReactNode;

export interface ModalProps {
  /**
   * Specifies the children of the Modal
   */
  children?: ModalChildren;
  /**
   * Specifies content for the header of the modal
   */
  headerContent?: ModalHeaderContent;
  /**
   * Specifies content for the header of the modal
   */
  footerContent?: ModalFooterContent;
  /**
   * Specifies the width of the Modal
   */
  width?: string;
  /**
   * Specifies the max width of the Modal
   */
  maxWidth?: string;
  /**
   * Specifies the min width of the Modal
   */
  minWidth?: string;
  /**
   * Specifies the height of the Modal
   */
  height?: string;
  /**
   * Specifies the max height of the Modal
   */
  maxHeight?: string;
  /**
   * Specifies the min height of the Modal
   */
  minHeight?: string;
  /**
   * Specifies the visibility of the Modal
   */
  visible?: boolean;
  /**
   * Specifies the function to run on clicking X icon. Ensure that this function will close Modal through the `visible` prop
   */
  onClose?: (...args: any[]) => any;
  /**
   * Specifies whether the Modal overflow is visible or not, default is `hidden`. If height is not enough, vertical scrollbar will be displayed (`overflow-y: auto`)
   */
  overflow?: string;
  /**
   * Specifies the id of the overlay element for targeting
   */
  overlayID?: string;
  /**
   * Specifies the id of the modal element for targeting
   */
  modalID?: string;
  /**
   * Sets the theme for the Modal
   */
  theme?: Object;
  /**
   * Specifies the aria-label for the modal. Set this if headerContent is not defined as a string.
   */
  ariaLabel?: string;
}

declare const Modal: React.FC<ModalProps>;

export default Modal;
