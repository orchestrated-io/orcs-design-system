import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import Icon from "../Icon";
import Loading from "../Loading";
import { themeGet } from "@styled-system/theme-get";

const TagWrapper = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: stretch;
  height: 100%;
  justify-content: center;
  > button {
    margin: 0;
  }
`;

const TagValue = styled.button.attrs((props) => ({
  "aria-pressed": props.selected
}))`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: ${(props) => themeGet("fontSizes.1")(props)};
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: ${(props) =>
    props.small
      ? themeGet("fontSizes.0")(props)
      : themeGet("fontSizes.1")(props)};
  font-weight: ${(props) => themeGet("fontWeights.2")(props)};
  white-space: nowrap;
  position: relative;
  z-index: 1;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: ${(props) =>
    props.showEdit || props.showInfo || props.showRemove
      ? "15px 0 0 15px"
      : "15px"};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? themeGet("colors.greyLight")(props)
        : props.selected && props.highlighted
        ? themeGet("colors.warningDark")(props)
        : themeGet("colors.primary")(props)};
  padding: ${(props) =>
    props.showEdit || props.showInfo || props.showRemove
      ? "3px 4px 4px 10px"
      : props.small
      ? `calc(${themeGet("space.2")(props)} - 1px)` +
        " " +
        themeGet("space.3")(props) +
        " " +
        themeGet("space.2")(props) +
        " " +
        themeGet("space.3")(props)
      : "3px 10px 4px 10px"};

  background-color: ${(props) =>
    props.disabled
      ? themeGet("colors.greyLighter")(props)
      : props.selected && props.highlighted
      ? themeGet("colors.warningDark")(props)
      : props.selected
      ? themeGet("colors.primary")(props)
      : themeGet("colors.white")(props)};

  color: ${(props) =>
    props.disabled
      ? themeGet("colors.greyDarker")(props)
      : props.selected && props.highlighted
      ? themeGet("colors.white")(props)
      : props.selected
      ? themeGet("colors.white")(props)
      : themeGet("colors.primary")(props)};

  ${(props) =>
    props.disabled
      ? css``
      : css`
          &:hover,
          &:focus {
            outline: 0;
            border: ${(props) =>
              props.selected && props.highlighted
                ? `solid 1px ${themeGet("colors.warningDarker")(props)}`
                : `solid 1px ${themeGet("colors.primaryDark")(props)}`};
            color: ${(props) =>
              props.selected
                ? themeGet("colors.white")(props)
                : themeGet("colors.primaryDark")(props)};
            background-color: ${(props) =>
              props.selected && props.highlighted
                ? themeGet("colors.warningDarker")(props)
                : props.selected
                ? themeGet("colors.primaryDark")(props)
                : themeGet("colors.primaryLightest")(props)};
            div {
              color: ${(props) =>
                props.selected
                  ? themeGet("colors.white")(props)
                  : themeGet("colors.primaryDark")(props)};
            }
            div[class*="TagType"] {
              background-color: ${(props) =>
                props.selected && props.highlighted
                  ? "rgba(0,0,0,0.2)"
                  : props.selected
                  ? "rgba(0,0,0,0.3)"
                  : themeGet("colors.primaryLighter")(props)};
            }
          }
        `}
`;

const TagValueText = styled.div`
  text-decoration: ${(props) =>
    props.showStrikeThrough ? "line-through" : "none"};
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  line-height: ${(props) => themeGet("fontSizes.1")(props)};
`;

const TagActionIconWrapper = styled(TagValue)`
  border-radius: ${(props) => (props.showRemove ? "0" : "0 15px 15px 0")};
  padding: ${(props) =>
    props.showRemove
      ? "2px 7px 5px 7px"
      : props.showInfo
      ? "2px 10px 7px 9px"
      : "2px 8px 5px 8px"};
  &:focus {
    z-index: 2;
  }

  ${(props) =>
    props.selected
      ? css`
          border-left: ${(props) =>
            props.selected && props.highlighted
              ? `solid 1px ${themeGet("colors.warningDarker")(props)}`
              : `solid 1px ${themeGet("colors.primaryDark")(props)}`};
          &:hover {
            border-left: ${(props) =>
              props.selected && props.highlighted
                ? `solid 1px ${themeGet("colors.warningDarker")(props)}`
                : `solid 1px ${themeGet("colors.primaryDark")(props)}`};
          }
        `
      : css`
          border-left: 0;
          &:hover,
          &:focus {
            background-color: ${themeGet("colors.primaryLightest")(props)};
            border-left: 0;
          }
        `}
`;

const TagRemoveIconWrapper = styled(TagValue)`
  border-radius: 0 15px 15px 0;
  padding: 2px 10px 5px 9px;
  &:focus {
    z-index: 2;
  }
  ${(props) =>
    props.selected
      ? css`
          border-left: ${(props) =>
            props.selected && props.highlighted
              ? `solid 1px ${themeGet("colors.warningDarker")(props)}`
              : `solid 1px ${themeGet("colors.primaryDark")(props)}`};
          &:hover {
            border-left: ${(props) =>
              props.selected && props.highlighted
                ? `solid 1px ${themeGet("colors.warningDarker")(props)}`
                : `solid 1px ${themeGet("colors.primaryDark")(props)}`};
          }
        `
      : css`
          border-left: 0;
          &:hover,
          &:focus {
            background-color: ${themeGet("colors.primaryLightest")(props)};
            border-left: 0;
          }
        `}
`;

const TagType = styled.div`
  text-transform: uppercase;
  margin-left: ${(props) => themeGet("space.s")(props)};
  padding: ${(props) =>
    props.small ? themeGet("space.1")(props) : themeGet("space.2")(props)};
  line-height: 1;
  white-space: normal;
  text-align: left;
  flex: 1 1 auto;
  border-radius: ${(props) => themeGet("radii.1")(props)};
  font-size: ${(props) =>
    props.small ? "1rem" : themeGet("fontSizes.0")(props)};
  background-color: ${(props) =>
    props.disabled
      ? themeGet("colors.grey")(props)
      : props.selected && props.highlighted
      ? "rgba(0,0,0,0.2)"
      : props.selected
      ? "rgba(0,0,0,0.25)"
      : themeGet("colors.primaryLightest")(props)};
  color: ${(props) =>
    props.disabled
      ? themeGet("colors.white")(props)
      : props.selected && props.highlighted
      ? themeGet("colors.white")(props)
      : props.selected
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
  showInfo,
  onInfo,
  showStrikeThrough,
  children,
  isPending,
  small,
  highlighted,
  ...props
}) {
  const component = (
    <TagWrapper {...props}>
      <TagValue
        selected={selected}
        highlighted={highlighted}
        disabled={disabled}
        showEdit={showEdit}
        showInfo={showInfo}
        showRemove={showRemove}
        onClick={onSelect}
        small={small}
      >
        <TagValueText showStrikeThrough={showStrikeThrough}>
          {showStrikeThrough && <span className="sr-only">Striked out:</span>}
          {children}
        </TagValueText>
        {tagType && (
          <TagType
            selected={selected}
            highlighted={highlighted}
            disabled={disabled}
            small={small}
          >
            {tagType}
          </TagType>
        )}
        {isPending && <Loading ml="s" />}
      </TagValue>
      {showEdit && (
        <TagActionIconWrapper
          selected={selected}
          highlighted={highlighted}
          disabled={disabled}
          showRemove={showRemove}
          onClick={onEdit}
        >
          <Icon icon={["fas", "pen"]} size="xs" />
        </TagActionIconWrapper>
      )}
      {showInfo && (
        <TagActionIconWrapper
          selected={selected}
          highlighted={highlighted}
          disabled={disabled}
          onClick={onInfo}
          showInfo={showInfo}
        >
          <Icon icon={["fas", "info"]} size="xs" />
        </TagActionIconWrapper>
      )}
      {showRemove && (
        <TagRemoveIconWrapper
          selected={selected}
          highlighted={highlighted}
          disabled={disabled}
          onClick={onRemove}
        >
          <Icon icon={["fas", "times"]} size="xs" />
        </TagRemoveIconWrapper>
      )}
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
  /** Shows info button */
  showInfo: PropTypes.bool,
  /** On tag info button clicked */
  onInfo: PropTypes.func,
  /** Can add a type to a tag as text */
  tagType: PropTypes.string,
  /** Adds disabled attribute and styling to tag */
  disabled: PropTypes.bool,
  /** Adds loading spinner to tag to indicate awaiting an action to complete */
  isPending: PropTypes.bool,
  /** Specifies the design theme */
  theme: PropTypes.object,
  /** Add a strikethrough to a tag value text */
  showStrikeThrough: PropTypes.bool,
  /** Applies the small variant styles */
  small: PropTypes.bool,
  /** Applies a highlighted style and colour to the tag */
  highlighted: PropTypes.bool
};

Tag.defaultProps = {
  selected: false,
  small: false,
  highlighted: false,
  disabled: false,
  showEdit: false,
  showInfo: false,
  showRemove: false,
  showStrikeThrough: false
};
