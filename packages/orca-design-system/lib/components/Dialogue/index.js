import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import Button from "../Button";
import Icon from "../Icon";

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

const CustomIcon = styled(Icon)`
  margin-right: ${variables.defaultSpacingHalf};
`

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

class Dialogue extends React.Component {
  state = { visible: false };

  showDialogue = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = confirmAction => {
    const result = confirmAction();
    if(result && result.then) {
      // we have been given a promise
      result.then((result) => {
        if(result) {
          this.setState({
            visible: false
          });
        }
      })
    }
    else if(result) {
      this.setState({
        visible: false
      });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { children, buttonText, confirmAction, width, icon, confirmText, ...props } = this.props;
    return (
      <Fragment>
        <Button {...props} onClick={this.showDialogue}>
          {icon ? <CustomIcon icon={icon} /> : null}
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
              <Button onClick={() => this.handleOk(confirmAction)}>{confirmText}</Button>
              <Button ghost onClick={this.handleCancel}>
                Cancel
              </Button>
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
  /** Specifies an icon for the button if required */
  icon: PropTypes.string,
  /** Specifies the function to run on clicking OK. Function must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue (see example code) */
  confirmAction: PropTypes.func,
  /** Specifies the text to use for the confirm button */
  confirmText: PropTypes.string
};

/** @component */
export default Dialogue;
