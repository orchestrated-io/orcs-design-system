import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Icon from "../Icon/";
import Box from "../Box/";
import { H3, H6 } from "../Typography";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";

const Item = styled.div`
  ${space}
  ${layout}
  word-break: break-word;
  width: ${(props) =>
    props.width ? props.width : props.fluid ? "100%" : "auto"};
  height: ${(props) => (props.fluid ? "100%" : "auto")};
  background: ${themeGet("colors.white")};
  border-radius: ${themeGet("radii.2")};
  padding: ${themeGet("space.4")};
  box-shadow: ${themeGet("shadows.boxDefault")};

  ${({ colour }) =>
    colour === "primary"
      ? css`
          border-radius: 0 0 ${themeGet("radii.2")} ${themeGet("radii.2")};
          border-top: solid 3px ${themeGet("colors.primary")};
        `
      : colour === "success"
      ? css`
          border-radius: 0 0 ${themeGet("radii.2")} ${themeGet("radii.2")};
          border-top: solid 3px ${themeGet("colors.success")};
        `
      : colour === "warning"
      ? css`
          border-radius: 0 0 ${themeGet("radii.2")} ${themeGet("radii.2")};
          border-top: solid 3px ${themeGet("colors.warning")};
        `
      : colour === "danger"
      ? css`
          border-radius: 0 0 ${themeGet("radii.2")} ${themeGet("radii.2")};
          border-top: solid 3px ${themeGet("colors.danger")};
        `
      : colour === "greyDark"
      ? css`
          border-radius: 0 0 ${themeGet("radii.2")} ${themeGet("radii.2")};
          border-top: solid 3px ${themeGet("colors.greyDarker")};
        `
      : css`
          border-top: 0;
        `};

  ${(props) =>
    props.center
      ? css`
          ,
          > *,
          > div > * {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `
      : css``};

  ${(props) =>
    props.alternate
      ? css`
          > div:first-of-type {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          h6 {
            margin-left: auto;
            float: right;
          }
        `
      : css``};
`;

const ChangeIcon = styled.div`
  display: inline-block;
  width: 14px;
  height: 2px;
  background-size: 14px 14px;
  background-color: ${themeGet("colors.grey")};
  margin: 0 0 0 ${themeGet("space.3")};
  ${(props) =>
    props.changeIcon === "arrowUp"
      ? css`
          background-color: transparent;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1173.000000, -214.000000)' fill='%2378797D'%3E%3Cg transform='translate(1173.000000, 210.000000)'%3E%3Cpath d='M0.1 12.1L0.8 12.8C1 13 1.3 13 1.4 12.8L6.9 7.3 6.9 19.4C6.9 19.6 7.1 19.8 7.3 19.8L8.3 19.8C8.6 19.8 8.8 19.6 8.8 19.4L8.8 7.3 14.3 12.8C14.4 13 14.7 13 14.9 12.8L15.6 12.1C15.7 11.9 15.7 11.7 15.6 11.5L8.1 4.1C8 4 7.7 4 7.5 4.1L0.1 11.5C0 11.7 0 11.9 0.1 12.1Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          height: 14px;
        `
      : props.changeIcon === "arrowDown"
      ? css`
          background-color: transparent;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1173.000000, -214.000000)' fill='%2378797D'%3E%3Cg transform='translate(1173.000000, 210.000000)'%3E%3Cpath d='M0.1 12.1L0.8 12.8C1 13 1.3 13 1.4 12.8L6.9 7.3 6.9 19.4C6.9 19.6 7.1 19.8 7.3 19.8L8.3 19.8C8.6 19.8 8.8 19.6 8.8 19.4L8.8 7.3 14.3 12.8C14.4 13 14.7 13 14.9 12.8L15.6 12.1C15.7 11.9 15.7 11.7 15.6 11.5L8.1 4.1C8 4 7.7 4 7.5 4.1L0.1 11.5C0 11.7 0 11.9 0.1 12.1Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          height: 14px;
          transform: rotate(180deg);
        `
      : css``}
`;

const ChangeValue = styled.small`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${themeGet("colors.grey")};
  margin: 0 0 0 ${themeGet("space.3")};
`;

/**
 * Example of basic, alternative and complex cards. Child elements can be anything, plain text, graphs, or other components. Subtitles, icons, change values, coloured borders are all optional, not mandatory.
 *
 * If your UI is split into different areas or sections you can also choose to colour code your cards to match, by applying a colour prop which adds the corresponding colour as a top border.
 */

export default function Card({
  alternate,
  icon,
  colour,
  title,
  subtitle,
  changeIcon,
  changeValue,
  children,
  fluid,
  width,
  center,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Item
        alternate={alternate}
        colour={colour}
        fluid={fluid}
        width={width}
        center={center}
        {...props}
      >
        {!icon & !title & !subtitle ? null : (
          <Box mb="r">
            {icon ? <Icon icon={icon} size="lg" mr="s" /> : null}
            {title ? <H3>{title}</H3> : null}
            {changeIcon ? <ChangeIcon changeIcon={changeIcon} /> : null}
            {changeValue ? <ChangeValue>{changeValue}</ChangeValue> : null}
            {subtitle ? <H6>{subtitle}</H6> : null}
          </Box>
        )}
        <Box>{children}</Box>
      </Item>
    </ThemeProvider>
  );
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
  /** Can specify a width in pixels or percentages (make sure you specify units). Can also use calc (see code for example) */
  width: PropTypes.string,
  /** Adds a coloured top border. Uses the system colours (eg primary, warning) */
  colour: PropTypes.string,
  /** Specify the icon to be used for the changeValue element. */
  changeIcon: PropTypes.oneOf(["arrowUp", "arrowDown"]),
  /** Adds a gray inline element to the card heading to describe change in value */
  changeValue: PropTypes.string,
  /** Card contents. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Card.defaultProps = {
  theme: systemtheme
};
