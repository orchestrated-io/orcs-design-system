import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "../Icon/";
import theme from "../../theme";
import variables from "../../variables";

const Item = styled.div`
  word-wrap: break-word;
  width: ${props => props.width ? props.width : props.fluid ? "100%" : "auto"};
  height: ${props => props.fluid ? "100%" : "auto"};
  background: ${theme.white};
  border-radius: ${variables.borderRadius};
  padding: ${variables.defaultSpacing};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  ${({ colour }) =>
    colour === "primary"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${theme.primary};
        `
      : colour === "success"
        ? css`
            border-radius: 0 0 ${variables.borderRadius}
              ${variables.borderRadius};
            border-top: solid 3px ${theme.success};
          `
        : colour === "warning"
          ? css`
              border-radius: 0 0 ${variables.borderRadius}
                ${variables.borderRadius};
              border-top: solid 3px ${theme.warning};
            `
          : colour === "danger"
            ? css`
                border-radius: 0 0 ${variables.borderRadius}
                  ${variables.borderRadius};
                border-top: solid 3px ${theme.danger};
              `
            : colour === "greyDark"
              ? css`
                  border-radius: 0 0 ${variables.borderRadius}
                    ${variables.borderRadius};
                  border-top: solid 3px ${theme.greyDark};
                `
              : css`
                  border-top: 0;
                `};

  ${props => props.center
  ? css`
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  `
  : css``};

  ${props =>
    props.alternate
      ? css`
          > div:first-of-type {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          h4 {
            margin-left: auto;
          }
        `
      : css``};
`;

const Header = styled.div`
  margin-bottom: ${variables.defaultSpacing};
  svg {
    margin-right: 10px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
`;

const Subtitle = styled.h4``;

const Content = styled.div``;

class Card extends React.Component {
  render() {
    const {
      alternate,
      icon,
      colour,
      title,
      subtitle,
      children,
      fluid,
      width,
      center,
      ...restProps
    } = this.props;
    return (
      <Item alternate={alternate} colour={colour} fluid={fluid} width={width} center={center} {...restProps}>
        {!icon & !title & !subtitle ? null :
          <Header>
            {icon ? <Icon icon={icon} size="lg" /> : null}
            {title ? <Title>{title}</Title> : null}
            {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
          </Header>
        }
        <Content>{children}</Content>
      </Item>
    );
  }
}

Card.propTypes = {
  /** Changes card styles to suit a card that holds alternate data */
  alternate: PropTypes.bool,
  /** Forces card to take 100% width and height of parent element */
  fluid: PropTypes.bool,
  /** Applies an icon to header of specified name */
  icon: PropTypes.array,
  /** Card title */
  title: PropTypes.node,
  /** Card subtitle */
  subtitle: PropTypes.node,
  /** Horizontally centers content inside card */
  center: PropTypes.bool,
  /** Can specify a width in pixels or percentages (make sure you specify units) */
  width: PropTypes.string
};

/** @component */
export default Card;
