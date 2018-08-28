import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import variables from "../../variables";
import Flex from "../Flex";
import Typography from "../Typography";
import Badge from "../Badge";

const Item = styled.div`
  margin: 4px 0;
`;

const Button = styled.button`
  position: relative;
  display: block;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  cursor: pointer;
  width: 100%;
  margin: 0;
  font-size: 1.8rem;
  text-align: left;
  color: ${theme.greyDark};
  padding: 18px 38px 18px 16px;
  border-left: solid 4px ${theme.greyLightest};
  background: ${theme.greyLightest};
  transition: ${variables.defaultTransition};

  &:hover {
    background: ${theme.greyLighter};
    border-left: solid 4px ${theme.greyLighter};
  }

  &:focus {
    outline: 0;
    border-left: solid 4px ${theme.primary};
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 12px;
    right: ${variables.defaultSpacing};
    background-color: ${theme.greyDark};
    transition: ${variables.defaultTransition};
  }
  &:before {
    transform: ${props =>
      props.open ? "translateY(-50%) rotate(90deg)" : "translateY(-50%)"};
  }
  &:after {
    transform: translateY(-50%) rotate(90deg);
  }
`;

const Text = styled.div`
  padding-right: 18px;
`;

const Content = styled.div`
  overflow: hidden;
  padding: ${variables.defaultSpacing};
  transition: ${variables.defaultTransition};
  display: ${props => (props.open ? "block" : "none")};
`;

class Expandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.isOpen };
    this.toggleIsOpen = this.toggleIsOpen.bind(this);
  }

  toggleIsOpen() {
    const { isOpen: currentIsOpen } = this.state;
    this.setState({ isOpen: !currentIsOpen });
  }

  render() {
    const { children, title, subtitle, badge, badgeColour } = this.props;
    const { isOpen } = this.state;
    return (
      <Item>
        <Button open={isOpen} onClick={this.toggleIsOpen}>
          <Flex justifyBetween alignCenter>
            <Text>
              {title ? <Typography.H4>{title}</Typography.H4> : null}
              {subtitle ? (
                <Typography.Small grey>{subtitle}</Typography.Small>
              ) : null}
            </Text>
            {badge ? <Badge colour={badgeColour}>{badge}</Badge> : null}
          </Flex>
        </Button>
        <Content open={isOpen}>{children}</Content>
      </Item>
    );
  }
}

Expandable.propTypes = {
  /** Sets expandable to open state by default */
  isOpen: PropTypes.bool,
  /** Expandable title */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /** Expandable subtitle */
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /** Adds a badge with text as string */
  badge: PropTypes.string,
  /** Specifies badge colour */
  badgeColour: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primaryDark",
    "primaryDarkest"
  ])
};

/** @component */
export default Expandable;
