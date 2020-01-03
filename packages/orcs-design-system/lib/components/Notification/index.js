import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Item = styled.div`
  position: relative;
  font-size: 1.4rem;
  position: relative;
  padding: 10px 12px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colours.white};
  border-radius: ${variables.borderRadiusSmall};
  background: ${props =>
    props.colour && colours[props.colour]
      ? rgba(colours[`${props.colour}Dark`], 0.9)
      : rgba(colours.primaryDark, 0.9)};

  ${props =>
    props.floating
      ? css`
          z-index: 100;
          position: fixed;
        `
      : css``};

  top: ${props => (props.top ? props.top : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};

  ${props =>
    props.centered
      ? css`
          left: 50%;
          transform: translateX(-50%);
          right: auto;
        `
      : css``};

  span {
    margin-right: 12px;
  }
  svg + span {
      margin-left: 12px;
    }
  }
`;

const Close = styled.button`
  appearance: none;
  background: transparent;
  padding: 0;
  border: none;
  margin-left: auto;
  cursor: pointer;
  opacity: 0.6;
  transition: ${variables.defaultTransition};
    color: ${colours.white};
      &:hover,
      &:focus {
        outline: 0;
        opacity: 1;
      }
  }
`;

/**
 * Notifications should be used to present important and contextual information to the user when particular events are triggered, e.g. saving, error etc. Make sure to use an appropriate icon and colour for the specific notification situation.
 *
 * Default notifications are displayed inline, if a floating notification is required (if something happens that applies to the entire page/view/app for example) then you can add the floating prop, which you can see displayed in an example that is floating and stuck to the bottom right of this screen.
 *
 * If you want your notification to be closable, you must use the onDismiss prop to correctly unmount the component. If you do not do this, clicking the close button will hide the notification visually using CSS and this will not be able to be shown again, even if the event that triggers the notification occurs again.
 */

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dismissed: false };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({
      dismissed: true
    });

    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    const {
      icon,
      colour,
      floating,
      children,
      top,
      right,
      bottom,
      left,
      centered,
      closable = true
    } = this.props;
    const { dismissed } = this.state;
    return (
      !dismissed && (
        <Item
          colour={colour}
          floating={floating}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          centered={centered}
        >
          {icon && <Icon icon={icon} color="white" />}
          <span>{children}</span>
          {closable && (
            <Close
              className="close-button"
              tabIndex="0"
              onClick={this.handleDismiss}
            >
              <Icon color={colours.white} icon={["fas", "times"]} size="lg" />
            </Close>
          )}
        </Item>
      )
    );
  }
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Applies an icon to notification with specified name. */
  icon: PropTypes.array,
  /** Specifies notification colour */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary"]),
  /** Positions notification floating over content, instead of inline. Must be combined with top, right, bottom, left or centered props to correctly position in your desired location */
  floating: PropTypes.bool,
  /** Specifies the position of a floating notification from top of browser window (units must be specified) */
  top: PropTypes.string,
  /** Specifies the position of a floating notification from right of browser window (units must be specified) */
  right: PropTypes.string,
  /** Specifies the position of a floating notification from bottom of browser window (units must be specified) */
  bottom: PropTypes.string,
  /** Specifies the position of a floating notification from left of browser window (units must be specified) */
  left: PropTypes.string,
  /** Horizontally centers a floating notification. If you use this, you don't need to specify left or right props, only top or bottom depending on if you want the notification to sit at the top or bottom of the screen */
  centered: PropTypes.bool,
  /** A callback function for the dismiss operation.*/
  onDismiss: PropTypes.func,
  /** Showing the close button, default to true.*/
  closable: PropTypes.bool
};

/** @component */
export default Notification;
