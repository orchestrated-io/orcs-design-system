import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Flex from "../Flex";
import Typography from "../Typography";
import Badge from "../Badge";
import { themeGet } from "@styled-system/theme-get";

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
  font-size: ${(props) => themeGet("fontSizes.3")(props)};
  text-align: left;
  color: ${(props) => themeGet("colors.greyDarker")(props)};
  padding: ${(props) =>
    props.small ? "8px 33px 8px 8px" : "18px 48px 18px 16px"};
}
  border-left: solid 3px ${(props) => themeGet("colors.greyLightest")(props)};
  border-radius: ${(props) => themeGet("radii.1")(props)};
  background: ${(props) => themeGet("colors.greyLightest")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};

  &:hover {
    background: ${(props) => themeGet("colors.greyLighter")(props)};
    border-left: solid 3px ${(props) => themeGet("colors.greyLighter")(props)};
  }

  &:focus {
    outline: 0;
    border-left: solid 3px ${(props) => themeGet("colors.primary")(props)};
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 12px;
    right: ${(props) =>
      props.small ? themeGet("space.r")(props) : themeGet("space.l")(props)};
    background-color: ${(props) => themeGet("colors.greyDark")(props)};
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  }
  &:before {
    transform: ${(props) =>
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
  padding: ${(props) => themeGet("space.r")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  display: ${(props) => (props.open ? "block" : "none")};
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
  small,
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

  const component = (
    <Item {...props}>
      <Button
        open={baseState}
        small={small}
        aria-expanded={baseState}
        onClick={onToggle}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text>
            {small
              ? title && <Typography.H5>{title}</Typography.H5>
              : title && <Typography.H4>{title}</Typography.H4>}
            {subtitle && <Typography.Small grey>{subtitle}</Typography.Small>}
          </Text>
          {badge && <Badge variant={badgeColour}>{badge}</Badge>}
        </Flex>
      </Button>
      <Content open={baseState} expanded={toggleState}>
        {children}
      </Content>
    </Item>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Expandable.propTypes = {
  /** Sets expandable to open state by default */
  isOpen: PropTypes.bool,
  /** Sets the styling to be a smaller version of the expandable */
  small: PropTypes.bool,
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
