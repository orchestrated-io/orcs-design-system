import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import Flex from "../Flex";
import Typography from "../Typography";
import Badge from "../Badge";
import { darken } from "polished";
import systemtheme from "../../systemtheme";

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
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: pointer;
  width: 100%;
  margin: 0;
  font-size: 1.8rem;
  text-align: left;
  color: ${colours.greyDark};
  padding: 18px 38px 18px 16px;
  border-left: solid 3px ${colours.greyLightest};
  border-radius: ${variables.borderRadiusSmall};
  background: ${colours.greyLightest};
  transition: ${variables.defaultTransition};

  &:hover {
    background: ${darken(0.05, colours.greyLightest)};
    border-left: solid 3px ${colours.greyLighter};
  }

  &:focus {
    outline: 0;
    border-left: solid 3px ${colours.primary};
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
    background-color: ${colours.greyDark};
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

/**
 * This component is to be used when there is a lot of content to present on a page that can instead be split into expandable sections to aid in user comprehension and explorability, rather than overwhelming the user with a whole page of content.
 *
 * A single expandable can also be used, for example if you had some content, but wanted to also have some additional less important subsidiary content hidden away unless the user wants to explore further, e.g. A few paragraphs on a company description, followed by an expandable with the title 'Read more about the history of this company'.
 *
 * This component supports any child elements, not just text, can be other components or any content you like.
 */

export default function Expandable({
  children,
  title,
  subtitle,
  badge,
  badgeColour,
  isOpen,
  theme,
  ...props
}) {
  const [baseState, setBase] = useState(isOpen);
  const [toggleState, setToggle] = useState(false);

  const onToggle = () => {
    if (!toggleState) setToggle(true);
    else setToggle(false);
    if (!baseState) setBase(true);
    else setBase(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Item {...props}>
        <Button
          open={baseState}
          aria-expanded={baseState}
          onClick={onToggle}
          /*        onKeyDown={e => {
          switch (e.key) {
            case " ":
            case "Enter":
              onToggle();
              break;
            default:
          }
        }} */
        >
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
        <Content open={baseState} expanded={toggleState}>
          {children}
        </Content>
      </Item>
    </ThemeProvider>
  );
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
  ]),
  /** Contents of expandable are rendered as a child element. */
  children: PropTypes.element,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Expandable.defaultProps = {
  theme: systemtheme
};
