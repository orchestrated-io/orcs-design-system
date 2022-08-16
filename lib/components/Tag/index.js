import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";
import Icon from "../Icon";
import { themeGet } from "@styled-system/theme-get";

const TagWrapper = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagValue = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 1.3rem;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  transition: ${themeGet("transition.transitionDefault")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: ${(props) =>
    props.showEdit || props.showRemove ? "15px 0 0 15px" : "15px"};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? themeGet("colors.greyLight")
        : themeGet("colors.primary")};
  padding: ${(props) =>
    props.showEdit || props.showRemove
      ? "3px 4px 4px 10px"
      : "3px 10px 4px 10px"};

  background-color: ${(props) =>
    props.selected
      ? themeGet("colors.primary")
      : props.disabled
      ? themeGet("colors.greyLighter")
      : themeGet("colors.white")};

  color: ${(props) =>
    props.selected
      ? themeGet("colors.white")
      : props.disabled
      ? themeGet("colors.greyDarker")
      : themeGet("colors.primary")};

  ${(props) =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${themeGet("colors.primaryDark")};
            color: ${(props) =>
              props.selected
                ? themeGet("colors.white")
                : themeGet("colors.primaryDark")};
            background-color: ${(props) =>
              props.selected
                ? themeGet("colors.primaryDark")
                : themeGet("colors.white")};
            div {
              color: ${(props) =>
                props.selected
                  ? themeGet("colors.white")
                  : themeGet("colors.primaryDark")};
            }
          }
        `}
  &:focus {
    outline: 0;
    z-index: 2;
    box-shadow: ${(props) =>
      themeGet("shadows.thinOutline")(props) +
      " " +
      themeGet("colors.primary30")(props)};
  }
`;

const TagEdit = styled(TagValue)`
  border-radius: ${(props) => (props.showRemove ? "0" : "0 15px 15px 0")};
  padding: ${(props) =>
    props.showRemove ? "2px 7px 5px 7px" : "2px 8px 5px 8px"};
  &:focus {
    z-index: 2;
    box-shadow: -0.5px 0 0 3.5px ${themeGet("colors.primary30")};
  }
  ${(props) =>
    props.selected
      ? css`
          border-left: solid 1px ${themeGet("colors.primaryDark")};
          &:hover {
            border-left: solid 1px ${themeGet("colors.primaryDark")};
          }
          &:focus {
            box-shadow: ${(props) =>
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.primary30")(props)};
          }
        `
      : css`
          border-left: 0;
          &:hover {
            border-left: 0;
          }
        `}
`;

const TagRemove = styled(TagValue)`
  border-radius: 0 15px 15px 0;
  padding: 2px 10px 5px 9px;
  &:focus {
    z-index: 2;
    box-shadow: -0.5px 0 0 3.5px ${themeGet("colors.primary30")};
  }
  ${(props) =>
    props.selected
      ? css`
          border-left: solid 1px ${themeGet("colors.primaryDark")};
          &:hover {
            border-left: solid 1px ${themeGet("colors.primaryDark")};
          }
          &:focus {
            box-shadow: ${(props) =>
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.primary30")(props)};
          }
        `
      : css`
          border-left: 0;
          &:hover {
            border-left: 0;
          }
        `}
`;

const TagType = styled.div`
  text-transform: uppercase;
  margin-left: ${themeGet("space.s")};
  padding: 3px;
  font-size: 1.2rem;
  line-height: 1;
  border-radius: ${themeGet("radii.1")};
  font-size: ${themeGet("fontSizes.0")};
  background-color: ${(props) =>
    props.selected
      ? themeGet("colors.primaryDark")
      : props.disabled
      ? themeGet("colors.grey")
      : themeGet("colors.primaryLightest")};
  color: ${(props) =>
    props.selected
      ? themeGet("colors.white")
      : props.disabled
      ? themeGet("colors.white")
      : themeGet("colors.primary")};
`;

/**
 * The top two rows are an example of how tags should be used when they are selectable/unselectable. There is the option to display the cross icon or not.
 *
 * The bottom row is when you want to show tags that aren't editable.
 */

export default function Tag({
  selected,
  disabled,
  showRemove,
  theme,
  tagType,
  showEdit,
  children,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <TagWrapper {...props}>
        <TagValue
          selected={selected}
          disabled={disabled}
          showEdit={showEdit}
          showRemove={showRemove}
        >
          {children}
          {tagType ? (
            <TagType selected={selected} disabled={disabled}>
              {tagType}
            </TagType>
          ) : null}
        </TagValue>
        {showEdit ? (
          <TagEdit
            selected={selected}
            disabled={disabled}
            showRemove={showRemove}
          >
            <Icon icon={["fas", "pen"]} size="xs" />
          </TagEdit>
        ) : null}
        {showRemove ? (
          <TagRemove selected={selected} disabled={disabled}>
            <Icon icon={["fas", "times"]} size="xs" />
          </TagRemove>
        ) : null}
      </TagWrapper>
    </ThemeProvider>
  );
}

Tag.propTypes = {
  /** Adds selected styling to tag */
  selected: PropTypes.bool,
  /** Shows the remove button */
  showRemove: PropTypes.bool,
  /** Shows edit button */
  showEdit: PropTypes.bool,
  /** Can add a type to a tag as text */
  tagType: PropTypes.string,
  /** Adds disabled attribute and styling to tag */
  disabled: PropTypes.bool,
  /** Specifies the design theme */
  theme: PropTypes.object
};

Tag.defaultProps = {
  selected: false,
  disabled: false,
  showEdit: false,
  showRemove: false,
  theme: systemtheme
};
