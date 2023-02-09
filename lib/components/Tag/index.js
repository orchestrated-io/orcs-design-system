import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import Icon from "../Icon";
import { themeGet } from "@styled-system/theme-get";

const TagWrapper = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    margin: 0;
  }
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
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
  font-weight: ${(props) => themeGet("fontWeights.2")(props)};
  white-space: nowrap;
  position: relative;
  z-index: 1;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: ${(props) =>
    props.showEdit || props.showRemove ? "15px 0 0 15px" : "15px"};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? themeGet("colors.greyLight")(props)
        : themeGet("colors.primary")(props)};
  padding: ${(props) =>
    props.showEdit || props.showRemove
      ? "3px 4px 4px 10px"
      : "3px 10px 4px 10px"};

  background-color: ${(props) =>
    props.selected
      ? themeGet("colors.primary")(props)
      : props.disabled
      ? themeGet("colors.greyLighter")(props)
      : themeGet("colors.white")(props)};

  color: ${(props) =>
    props.selected
      ? themeGet("colors.white")(props)
      : props.disabled
      ? themeGet("colors.greyDarker")(props)
      : themeGet("colors.primary")(props)};

  ${(props) =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${themeGet("colors.primaryDark")(props)};
            color: ${(props) =>
              props.selected
                ? themeGet("colors.white")(props)
                : themeGet("colors.primaryDark")(props)};
            background-color: ${(props) =>
              props.selected
                ? themeGet("colors.primaryDark")(props)
                : themeGet("colors.white")(props)};
            div {
              color: ${(props) =>
                props.selected
                  ? themeGet("colors.white")(props)
                  : themeGet("colors.primaryDark")(props)};
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

const TagValueText = styled.div`
  max-width: 40ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
`;

const TagEdit = styled(TagValue)`
  border-radius: ${(props) => (props.showRemove ? "0" : "0 15px 15px 0")};
  padding: ${(props) =>
    props.showRemove ? "2px 7px 5px 7px" : "2px 8px 5px 8px"};
  &:focus {
    z-index: 2;
    box-shadow: -0.5px 0 0 3.5px
      ${(props) => themeGet("colors.primary30")(props)};
  }
  ${(props) =>
    props.selected
      ? css`
          border-left: solid 1px ${themeGet("colors.primaryDark")(props)};
          &:hover {
            border-left: solid 1px ${themeGet("colors.primaryDark")(props)};
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
    box-shadow: -0.5px 0 0 3.5px
      ${(props) => themeGet("colors.primary30")(props)};
  }
  ${(props) =>
    props.selected
      ? css`
          border-left: solid 1px ${themeGet("colors.primaryDark")(props)};
          &:hover {
            border-left: solid 1px ${themeGet("colors.primaryDark")(props)};
          }
          &:focus {
            box-shadow: ${themeGet("shadows.thinOutline")(props) +
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
  margin-left: ${(props) => themeGet("space.s")(props)};
  padding: 3px;
  line-height: 1;
  border-radius: ${(props) => themeGet("radii.1")(props)};
  font-size: ${(props) => themeGet("fontSizes.0")(props)};
  background-color: ${(props) =>
    props.selected
      ? themeGet("colors.primaryDark")(props)
      : props.disabled
      ? themeGet("colors.grey")(props)
      : themeGet("colors.primaryLightest")(props)};
  color: ${(props) =>
    props.selected
      ? themeGet("colors.white")(props)
      : props.disabled
      ? themeGet("colors.white")(props)
      : themeGet("colors.primary")(props)};
`;

/**
 * The top two rows are an example of how tags should be used when they are selectable/unselectable. There is the option to display the cross icon or not.
 *
 * The bottom row is when you want to show tags that aren't editable.
 */

export default function Tag({
  selected,
  onSelect,
  disabled,
  showRemove,
  onRemove,
  theme,
  tagType,
  showEdit,
  onEdit,
  children,
  ...props
}) {
  const component = (
    <TagWrapper {...props}>
      <TagValue
        selected={selected}
        disabled={disabled}
        showEdit={showEdit}
        showRemove={showRemove}
        onClick={onSelect}
      >
        <TagValueText>{children}</TagValueText>
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
          onClick={onEdit}
        >
          <Icon icon={["fas", "pen"]} size="xs" />
        </TagEdit>
      ) : null}
      {showRemove ? (
        <TagRemove selected={selected} disabled={disabled} onClick={onRemove}>
          <Icon icon={["fas", "times"]} size="xs" />
        </TagRemove>
      ) : null}
    </TagWrapper>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Tag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Adds selected styling to tag */
  selected: PropTypes.bool,
  /** On tag selected */
  onSelect: PropTypes.func,
  /** Shows the remove button */
  showRemove: PropTypes.bool,
  /** On tag remove button clicked */
  onRemove: PropTypes.func,
  /** Shows edit button */
  showEdit: PropTypes.bool,
  /** On tag edit button clicked */
  onEdit: PropTypes.func,
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
  showRemove: false
};
