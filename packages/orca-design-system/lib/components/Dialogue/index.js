import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";
import Flex from "../Flex";
import Button from "../Button";
import Layout from "../Layout";

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
  background: ${theme.white};
  width: ${props => (props.width ? props.width : "300px")};
  border-radius: ${variables.borderRadius};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${variables.defaultSpacingHalf};
  border-top: solid 1px ${theme.greyLighter};
  button + button {
    margin-left: ${variables.defaultSpacingQuarter};
  }
`;

const Content = styled.div`
  padding: ${variables.defaultSpacing};
`;

class Dialogue extends React.Component {
  state = { visible: false };

  showDialogue = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = confirmAction => {
    this.setState({
      visible: false
    });
    confirmAction();
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { children, buttonText, confirmAction, width, ...props } = this.props;
    return (
      <Fragment>
        <Button {...props} onClick={this.showDialogue}>
          {buttonText}
        </Button>
        <Overlay
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Container width={width}>
            <Content>{children}</Content>
            <Actions>
              <Button ghost onClick={this.handleCancel}>
                Cancel
              </Button>
              <Button onClick={() => this.handleOk(confirmAction)}>OK</Button>
            </Actions>
          </Container>
        </Overlay>
      </Fragment>
    );
  }
}

Dialogue.propTypes = {
  /** Specifies the width of the Dialogue in pixels */
  width: PropTypes.string,
  /** Specifies the text for the button that triggers the dialogue */
  buttonText: PropTypes.string,
  /** Specifies the fucntion to run on clicking OK */
  confirmAction: PropTypes.func
};

/** @component */
export default Dialogue;
