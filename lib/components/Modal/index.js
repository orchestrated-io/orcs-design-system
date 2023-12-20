import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

import { commonKeys, useKeyPress } from "../../hooks/keypress";

import Icon from "../Icon";
import Button from "../Button";
import Flex from "../Flex";
import Box from "../Box";

const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  animation: 300ms ${fadeIn} ease-in-out;
  justify-content: center;
  align-items: center;
`;
const Container = styled(Box)`
  position: relative;
  z-index: 9001;
  animation: 300ms ${fadeIn} ease-in-out, 300ms ${scaleIn} ease-in-out;
  display: flex;
  flex-direction: column;
  resize: both;
  overflow: ${(props) => (props.overflow === "visible" ? "visible" : "hidden")};
`;

const CloseButton = styled(Button)((props) =>
  css({
    position: "absolute",
    top: "s",
    right: "s",
    bg: "transparent",
    color: themeGet("colors.greyDark")(props),
    borderColor: "transparent",
    "&:hover": {
      bg: themeGet("colors.greyLighter")(props),
      borderColor: themeGet("colors.greyLighter")(props)
    },
    "&:focus": {
      outline: "0",
      boxShadow:
        themeGet("shadows.thinOutline")(props) +
        " " +
        themeGet("colors.black20")(props)
    }
  })
);

const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${(props) => themeGet("space.r")(props)};
  border-bottom: solid 1px ${(props) => themeGet("colors.greyLighter")(props)};
  flex: 0 0 auto;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-top: ${(props) => themeGet("space.r")(props)};
  border-top: solid 1px ${(props) => themeGet("colors.greyLighter")(props)};
  flex: 0 0 auto;
`;

const ScrollableContent = styled.div`
  --scrollbar-size: 8px;
  --scrollbar-minlength: 30px; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */
  --scrollbar-ff-width: thin; /* FF-only accepts auto, thin, none */
  --scrollbar-track-color: rgba(0, 0, 0, 0.05);
  --scrollbar-color: rgba(0, 0, 0, 0.2);
  --scrollbar-color-hover: rgba(0, 0, 0, 0.35);
  --scrollbar-color-active: rgba(0, 0, 0, 0.5);
  height: 100%;
  flex: 1 1 auto;
  overflow-y: ${(props) => (props.overflow === "visible" ? "visible" : "auto")};
  margin-top: ${(props) => (props.headerContent ? "0" : "20px")};
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: var(--scrollbar-ff-width);
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);
  &::-webkit-scrollbar {
    height: var(--scrollbar-size);
    width: var(--scrollbar-size);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track-color);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-color-hover);
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: var(--scrollbar-color-active);
  }
  &::-webkit-scrollbar-thumb:vertical {
    min-height: var(--scrollbar-minlength);
  }
  &::-webkit-scrollbar-thumb:horizontal {
    min-width: var(--scrollbar-minlength);
  }
`;

const Modal = ({
  children,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  overflow,
  onClose,
  triggerRef,
  theme,
  visible,
  overlayID,
  modalID,
  headerContent,
  footerContent,
  ...restProps
}) => {
  const options = {
    disabled: !visible
  };

  const modalRef = useOnclickOutside(() => {
    onClose();
  }, options);

  const ariaLabel = useMemo(() => {
    if (restProps.ariaLabel) {
      return restProps.ariaLabel;
    } else if (typeof headerContent === "string") {
      return headerContent;
    }
  }, [restProps.ariaLabel, headerContent]);

  useKeyPress(commonKeys.ESCAPE, onClose, options);
  useKeyPress(commonKeys.ESC, onClose, options);

  // Initial focus point for keyboard navigation
  const top = useRef();

  // If bottom becomes focused then re-focus the close button
  const bottom = useRef();

  // Ref to close button
  const button = useRef();

  // Keep trak on whether its been visible
  const [hasOpened, setHasOpened] = useState(visible);

  // On becoming visible focus the top
  useEffect(() => {
    if (visible) {
      top.current.focus();
      setHasOpened(true);
    } else if (hasOpened) {
      triggerRef && triggerRef.current.focus();
    }
  }, [visible, hasOpened, top, triggerRef]);

  const component = (
    <Overlay
      alignItems="center"
      justifyContent="center"
      id={overlayID}
      {...restProps}
    >
      <span
        tabIndex="0"
        ref={top}
        onFocus={() => bottom.current.focus()}
      ></span>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex="-1"
      >
        <Container
          width={width}
          height={height}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          minWidth={minWidth}
          minHeight={minHeight}
          overflow={overflow}
          borderRadius="2"
          bg="white"
          p="r"
          id={modalID}
        >
          {headerContent ? (
            <HeaderContent>
              <Box mr="xl" width="100%">
                {headerContent}
              </Box>
              <CloseButton
                ref={button}
                onClick={onClose}
                className="modal-close"
                small
                px="6px"
                aria-label="Close dialog"
              >
                <Icon icon={["fas", "times"]} color="greyDark" size="lg" />
              </CloseButton>
            </HeaderContent>
          ) : (
            <CloseButton
              ref={button}
              onClick={onClose}
              className="modal-close"
              small
              px="6px"
              aria-label="Close dialog"
            >
              <Icon icon={["fas", "times"]} color="greyDark" size="lg" />
            </CloseButton>
          )}
          <ScrollableContent headerContent={headerContent} overflow={overflow}>
            {children}
          </ScrollableContent>
          {footerContent && <FooterContent>{footerContent}</FooterContent>}
        </Container>
      </div>
      <span ref={bottom} tabIndex="-1"></span>
      <span tabIndex="0" onFocus={() => button.current.focus()}></span>
    </Overlay>
  );

  const wrapper =
    visible &&
    ReactDOM.createPortal(
      theme ? (
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      ) : (
        component
      ),
      document.body
    );

  return theme ? (
    <ThemeProvider theme={theme}>{wrapper}</ThemeProvider>
  ) : (
    wrapper
  );
};

Modal.propTypes = {
  /** Specifies the children of the Modal */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  /** Specifies content for the header of the modal */
  headerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  /** Specifies content for the header of the modal */
  footerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  /** Specifies the width of the Modal */
  width: PropTypes.string,
  /** Specifies the max width of the Modal */
  maxWidth: PropTypes.string,
  /** Specifies the min width of the Modal */
  minWidth: PropTypes.string,
  /** Specifies the height of the Modal */
  height: PropTypes.string,
  /** Specifies the max height of the Modal */
  maxHeight: PropTypes.string,
  /** Specifies the min height of the Modal */
  minHeight: PropTypes.string,
  /** Specifies the visibility of the Modal */
  visible: PropTypes.bool,
  /** Specifies the function to run on clicking X icon. Ensure that this function will close Modal through the `visible` prop */
  onClose: PropTypes.func,
  /** Required to re-focus keyboard navigation after closing a modal, generally a ref to the button */
  triggerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  /** Specifies whether the Modal overflow is visible or not, default is `hidden`. If height is not enough, vertical scrollbar will be displayed (`overflow-y: auto`) */
  overflow: PropTypes.string,
  /** Specifies the id of the overlay element for targeting */
  overlayID: PropTypes.string,
  /** Specifies the id of the modal element for targeting */
  modalID: PropTypes.string,
  /** Sets the theme for the Modal */
  theme: PropTypes.object,
  /** Specifies the aria-label for the modal. Set this if headerContent is not defined as a string. */
  ariaLabel: PropTypes.string
};

Modal.defaultProps = {
  width: "350px",
  height: "auto",
  maxHeight: "90vh",
  maxWidth: "90vw",
  overlayID: "modal-overlay",
  modalID: "modal-container"
};

export default Modal;
