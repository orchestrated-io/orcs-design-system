import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { css } from "@styled-system/css";
import Icon from "../Icon";
import Button from "../Button";
import Flex from "../Flex";
import Box from "../Box";
import systemtheme from "../../systemtheme";

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
`;

const Container = styled(Box)`
  position: relative;
  z-index: 9001;
  max-height: 90vh;
  overflow-y: auto;
  animation: 300ms ${fadeIn} ease-in-out, 300ms ${scaleIn} ease-in-out;
`;

const CloseButton = styled(Button)(
  css({
    position: "absolute",
    top: "r",
    right: "r"
  })
);

const Modal = ({
  children,
  width,
  height,
  overflowVisible,
  onClose,
  theme,
  visible,
  ...restProps
}) => {
  const handleKeypress = useCallback(
    event => {
      var code = event.keyCode || event.which;
      if (code === 27) {
        // 27 is the escape keycode
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return (
    <ThemeProvider theme={theme}>
      {visible &&
        ReactDOM.createPortal(
          <ThemeProvider theme={theme}>
            <Overlay alignItems="center" justifyContent="center" {...restProps}>
              <Container
                width={width}
                height={height}
                overflow={overflowVisible ? "visible" : "hidden"}
                borderRadius="2"
                bg="white"
              >
                <ThemeProvider theme={theme}>
                  <Box p="r">
                    <CloseButton
                      onClick={onClose}
                      small
                      variant="transparent"
                      px="6px"
                      position="absolute"
                      top="0"
                      right="0"
                    >
                      <Icon
                        icon={["fas", "times"]}
                        color="greyDark"
                        size="lg"
                      />
                    </CloseButton>
                    {children}
                  </Box>
                </ThemeProvider>
              </Container>
            </Overlay>
          </ThemeProvider>,
          document.body
        )}
    </ThemeProvider>
  );
};

Modal.propTypes = {
  /** Specifies the children of the Modal */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  /** Specifies the width of the Modal in pixels */
  width: PropTypes.string,
  /** Specifies the height of the Modal in pixels */
  height: PropTypes.string,
  /** Specifies the visibility of the Modal */
  visible: PropTypes.bool,
  /** Specifies the function to run on clicking X icon. Ensure that this function will close Modal through the `visible` prop */
  onClose: PropTypes.func,
  /** Specifies whether the Modal overflow is visible or not. If height is not enough, vertical scrollbar will be displayed (`overflow-y: auto`) */
  overflowVisible: PropTypes.bool,
  /** Sets the theme for the Modal */
  theme: PropTypes.object
};

Modal.defaultProps = {
  width: "300px",
  height: "auto",
  overflowVisible: false,
  theme: systemtheme
};

export default Modal;
