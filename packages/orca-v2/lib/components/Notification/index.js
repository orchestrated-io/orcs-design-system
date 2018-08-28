import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import theme from "../../theme";
import variables from "../../variables";

const Item = styled.div`
  position: relative;
  font-size: 1.4rem;
  position: relative;
  padding: 10px 12px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.white};
  border-radius: 2px;
  background: ${props => {
    const colour =
      props.colour && theme[`${props.colour}Dark`]
        ? `${props.colour}Dark`
        : "primaryDark";
    return theme[colour].fade(0.1);
  }};

  ${props =>
    props.floating
      ? css`
          z-index: 100;
          position: fixed;
          bottom: ${variables.defaultSpacing};
          right: ${variables.defaultSpacing};
        `
      : css``};

  span {
    margin-right: 12px;
  }
  svg:first-of-type {
    margin-right: 12px;
  }
  svg:last-of-type {
    margin-left: auto;
    cursor: pointer;
    opacity: 0.6;
    transition: ${variables.defaultTransition};
    &:hover,
    &:focus {
      outline: 0;
      opacity: 1;
    }
  }
`;

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.state = {dismissed: false};
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState ({
      dismissed: true
    });
  }

  render() {
    const { icon, colour, floating, children } = this.props;
    const { dismissed } = this.state;
    return (!dismissed &&
      <Item colour={colour} floating={floating}>
        <Icon icon={icon} color="white" />
        <span>{children}</span>
        <Icon icon={["far", "times"]} color="white" tabIndex="0" onClick={this.handleDismiss}/>
      </Item>
    );
  }
}

Notification.propTypes = {
  /** Applies an icon to notification with specified name. */
  icon: PropTypes.array,
  /** Specifies notification colour */
  colour: PropTypes.oneOf(["success", "warning", "danger"]),
  /** Positions notification floating over content in bottom right of screen, instead of inline. */
  floating: PropTypes.bool
};

/** @component */
export default Notification;
