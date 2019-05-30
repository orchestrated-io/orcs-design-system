import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import ReactSelect from "react-select";
import { rgba } from "polished";

const Group = styled.div`
  display: block;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.4rem;
  margin-bottom: ${variables.defaultSpacingQuarter};
  color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
`;

const Input = styled(ReactSelect)`
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  &.Select input::-webkit-contacts-auto-fill-button {
    display: none !important;
  }
  .Select input::-webkit-credentials-auto-fill-button {
    display: none !important;
  }
  &.Select input::-ms-clear {
    display: none !important;
  }
  &.Select input::-ms-reveal {
    display: none !important;
  }
  &.Select div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  & input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  & span {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  &.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: 0.35;
  }
  &.is-disabled > .Select-control {
    background-color: ${props =>
      props.inverted ? colours.greyDark : colours.greyLighter};
  }
  &.is-disabled > .Select-control:hover {
    box-shadow: none;
  }
  &.is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9;
  }
  &.is-open > .Select-control .Select-arrow {
    transform-origin: 50% 31%;
    transform: rotate(180deg);
  }
  &.is-searchable.is-open > .Select-control {
    cursor: text;
  }
  &.is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }
  &.is-focused > .Select-control {
    background-color: ${props =>
      props.inverted ? "transparent" : colours.white};
    border: solid 1px ${colours.primary};
  }
  &.is-focused:not(.is-open) > .Select-control {
    border-color: ${colours.primary};
    background-color: ${props =>
      props.inverted ? "transparent" : colours.white};
  }
  &.has-value.is-clearable.Select--single > .Select-control .Select-value {
    padding-right: 42px;
  }
  &.has-value.Select--single
    > .Select-control
    .Select-value
    .Select-value-label {
    color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
  }
  &.has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    .Select-value-label {
    color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
  }
  &.is-disabled.has-value.Select--single
    > .Select-control
    .Select-value
    .Select-value-label {
    color: ${colours.grey};
  }
  &.is-disabled.has-value.Select--single
    > .Select-control
    .Select-value
    .Select-value-label {
    color: ${colours.grey};
  }
  &.has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  &.has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  &.has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:hover {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }
  &.has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:hover {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }
  &.has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }
  &.has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }
  &.has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    background: #fff;
  }
  &.has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    background: #fff;
  }
  &.has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  &.is-open .Select-arrow,
  & .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  &.Select--rtl {
    direction: rtl;
    text-align: right;
  }
  .Select-control {
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: ${props =>  props.large ? "60px" : "36px"};
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: ${props =>
      props.inverted ? "transparent" : colours.white};
    border-radius: ${variables.borderRadius};
    border: 1px solid
      ${props => props.inverted ? colours.greyDark : rgba(colours.black, 0.2)};
    color: ${props => props.inverted ? colours.white : colours.greyDarkest};
    transition: ${variables.defaultTransition};
  }
  .Select-control:hover {
    border-color: ${colours.primary};
  }
  &.is-disabled .Select-control:hover {
    border: 1px solid ${rgba(colours.black, 0.2)};
  }
  .Select-control .Select-input:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${rgba(colours.primary, 0.3)};
    border: 1px solid ${colours.primary};
  }
  .Select-placeholder {
    bottom: 0;
    color: ${colours.grey};
    left: 0;
    line-height: ${props =>  props.large ? "58px" : "34px"};
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.Select--single > .Select-control .Select-value {
    bottom: 0;
    color: #aaa;
    left: 0;
    line-height: ${props =>  props.large ? "58px" : "34px"};
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Select-input {
    height: ${props =>  props.large ? "56px" : "32px"};
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .Select-input > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    height: ${props =>  props.large ? "56px" : "32px"};
    font-size: 1.6rem;
    margin: 0;
    outline: none;
    line-height: 17px;
    color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
  }
  .is-focused .Select-input > input {
    cursor: text;
  }
  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }
  .Select-loading-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }
  .Select-loading {
    position: relative;
    animation: loadingSpin 500ms infinite linear;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: ${props =>
      props.inverted
        ? "2px solid rgba(255,255,255,0.4)"
        : "2px solid rgba(0,0,0,0.3)"};
    border-right-color: ${props =>
      props.inverted ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)"};
    display: block;
  }
  .Select-clear-zone {
    -webkit-animation: Select-animation-fadeIn 200ms;
    -o-animation: Select-animation-fadeIn 200ms;
    animation: Select-animation-fadeIn 200ms;
    color: #999;
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 17px;
  }
  .Select-clear-zone:hover {
    color: ${colours.danger};
  }
  .Select-clear {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    transition: ${variables.defaultTransition};
  }
  &.Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 25px;
  }
  &.Select--rtl .Select-arrow-zone {
    padding-right: 0;
    padding-left: 5px;
  }
  .Select-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    display: inline-block;
    height: 0;
    width: 0;
    position: relative;
    transition: ${variables.defaultTransition};
  }
  &.Select--multi .Select-multi-value-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  & .Select-aria-only {
    position: absolute;
    display: block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }
  @-webkit-keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .Select-menu-outer {
    border-bottom-right-radius: ${variables.borderRadius};
    border-bottom-left-radius: ${variables.borderRadius};
    background: transparent;
    overflow: hidden;
    border: 1px solid ${colours.primary};
    margin-top: -1px;
    max-height: 200px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    padding: 8px 10px;
    transition: ${variables.defaultTransition};
    background-color: ${props =>
      props.inverted ? colours.greyDarkest : colours.white};
    color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
  }
  .Select-option:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .Select-option.is-selected {
    background-color: ${props =>
      props.inverted ? colours.greyDarker : colours.greyLightest};
  }
  .Select-option.is-focused {
    background-color: ${props =>
      props.inverted ? colours.greyDarker : colours.greyLightest};
  }
  .Select-option.is-disabled {
    color: #cccccc;
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: ${props => (props.inverted ? colours.white : colours.greyDarkest)};
    background: ${props => (props.inverted ? colours.greyDarkest : colours.white)};
    cursor: default;
    display: block;
    padding: 8px 10px;
  }
  &.Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 4px;
    padding: 0;
  }
  &.Select--multi.Select--rtl .Select-input {
    margin-left: 0;
    margin-right: 4px;
  }
  v.Select--multi.has-value .Select-input {
    margin-left: 5px;
  }
  &.Select--multi .Select-value {
    position: relative;
    background-color: ${colours.primary};
    border-radius: 13px;
    color: ${colours.white};
    font-size: 1.4rem;
    margin: 0 3px 3px 0;
    top: 3px;
    left: 3px;
    vertical-align: top;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 3px 12px;
  }
  &.Select--multi .Select-value-icon {
    margin-left: 5px;
  }
  &.Select--multi .Select-value-label {
    display: inline-block;
    vertical-align: middle;
    cursor: default;
    word-break: break-word;
  }
  &.Select--multi a.Select-value-label {
    color: #007eff;
    cursor: pointer;
    text-decoration: none;
  }
  &.Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }
  &.Select--multi .Select-value-icon {
    cursor: pointer;
    transition: ${variables.defaultTransition};
  }
  &.Select--multi .Select-value-icon:hover {
    color: ${colours.primaryDarkest};
  }
  &.Select--multi .Select-value-icon:focus {
    background-color: rgba(0, 113, 230, 0.08);
    color: #0071e6;
  }
  &.Select--multi .Select-value-icon:active {
    background-color: rgba(0, 126, 255, 0.24);
  }
  &.Select--multi.Select--rtl .Select-value {
    margin-left: 0;
    margin-right: 5px;
  }
  &.Select--multi.Select--rtl .Select-value-icon {
    border-right: none;
    border-left: 1px solid rgba(0, 126, 255, 0.24);
  }
  &.Select--multi.is-disabled .Select-value {
    background-color: ${props =>
      props.inverted ? colours.greyDarker : colours.greyDark};
    border: none;
    color: ${colours.greyLightest};
  }
  &.Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right: 1px solid #e3e3e3;
  }
  &.Select--multi.is-disabled .Select-value-icon:hover {
    background-color: #fcfcfc;
  }
  &.Select--multi.is-disabled .Select-value-icon:focus {
    background-color: #fcfcfc;
  }
  &.Select--multi.is-disabled .Select-value-icon:active {
    background-color: #fcfcfc;
  }
`;

class Select extends React.Component {
  render() {
    const { id, label, inverted } = this.props;
    return (
      <Group>
        {label ? (
          <Label inverted={inverted} htmlFor={id}>
            {label}
          </Label>
        ) : null}
        <Input {...this.props} />
      </Group>
    );
  }
}

Select.propTypes = {
  /** Specifies options as a label/value pair, see example code */
  options: PropTypes.array,
  /** Specifies default value or values */
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  /** Specifies a label for the select box */
  label: PropTypes.string,
  /** Specifies placeholder text */
  placeholder: PropTypes.string,
  /** Turns select into a multi select that accepts more than one option */
  multi: PropTypes.bool,
  /** Applies a disabled state and visual appearance. */
  disabled: PropTypes.bool,
  /** Shows loading spinner when loading options */
  isLoading: PropTypes.bool,
  /** Changes appearance to suit dark backgrounds */
  inverted: PropTypes.bool
};

/** @component */
export default Select;
