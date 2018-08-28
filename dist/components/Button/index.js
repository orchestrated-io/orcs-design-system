"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  text-decoration: none;\n  text-align: center;\n  border-radius: ", ";\n  transition: ", ";\n  cursor: ", ";\n  width: ", ";\n\n  font-size: ", ";\n\n  color: ", ";\n\n  border: solid 1px\n    ", ";\n\n  background: ", ";\n\n  padding: ", ";\n\n  &:hover {\n    border: solid 1px\n      ", ";\n\n    background: ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px\n      ", ";\n  }\n\n  ", " ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  text-decoration: none;\n  text-align: center;\n  border-radius: ", ";\n  transition: ", ";\n  cursor: ", ";\n  width: ", ";\n\n  font-size: ", ";\n\n  color: ", ";\n\n  border: solid 1px\n    ", ";\n\n  background: ", ";\n\n  padding: ", ";\n\n  &:hover {\n    border: solid 1px\n      ", ";\n\n    background: ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px\n      ", ";\n  }\n\n  ", " ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          svg {\n            margin-right: ", ";\n          }\n        "], ["\n          svg {\n            margin-right: ", ";\n          }\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["\n            svg {\n              margin-left: ", ";\n            }\n          "], ["\n            svg {\n              margin-left: ", ";\n            }\n          "]),
    _templateObject4 = _taggedTemplateLiteral([""], [""]),
    _templateObject5 = _taggedTemplateLiteral(["\n            &:after {\n              content: \"\";\n              position: relative;\n              animation: loadingSpin 500ms infinite linear;\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              margin-left: ", ";\n              border: 2px solid rgba(0, 0, 0, 0.2);\n              border-right-color: rgba(255, 255, 255, 0.7);\n              display: inline-block;\n            }\n          "], ["\n            &:after {\n              content: \"\";\n              position: relative;\n              animation: loadingSpin 500ms infinite linear;\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              margin-left: ", ";\n              border: 2px solid rgba(0, 0, 0, 0.2);\n              border-right-color: rgba(255, 255, 255, 0.7);\n              display: inline-block;\n            }\n          "]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, _variables2.default.borderRadius, _variables2.default.defaultTransition, function (props) {
  return props.disabled ? "not-allowed" : "pointer";
}, function (props) {
  return props.fullWidth ? "100%" : "auto";
}, function (props) {
  var size = "1.6rem";

  if (props.iconOnly) {
    if (props.large) {
      size = "2.2rem";
    } else if (props.small) {
      size = "1.4rem";
    } else {
      size = "1.8rem";
    }
  } else if (props.large) {
    size = "1.8rem";
  } else if (props.small) {
    size = "1.4rem";
  }

  return size;
}, function (props) {
  return props.ghost ? _theme2.default.primary : props.disabled ? _theme2.default.greyLight : _theme2.default.white;
}, function (props) {
  return props.disabled ? _theme2.default.greyLighter.darken(0.05) : props.secondary ? _theme2.default.success.darken(0.05) : props.ghost ? "transparent" : _theme2.default.primary.darken(0.05);
}, function (props) {
  return props.disabled ? _theme2.default.greyLighter : props.secondary ? _theme2.default.success : props.ghost ? "transparent" : _theme2.default.primary;
}, function (props) {
  return props.large ? "14px 24px" : props.small ? "6px 8px" : "10px 16px";
}, function (props) {
  return props.disabled ? _theme2.default.greyLighter.darken(0.05) : props.secondary ? _theme2.default.success.darken(0.2) : props.ghost ? "transparent" : _theme2.default.primary.darken(0.2);
}, function (props) {
  return props.disabled ? _theme2.default.greyLighter : props.secondary ? _theme2.default.success.darken(0.15) : props.ghost ? _theme2.default.primary.fade(0.85) : _theme2.default.primary.darken(0.15);
}, function (props) {
  return props.secondary ? _theme2.default.success.fade(0.6) : _theme2.default.primary.fade(0.6);
}, function (props) {
  return props.iconLeft ? (0, _styledComponents.css)(_templateObject2, _variables2.default.defaultSpacingHalf) : props.iconRight ? (0, _styledComponents.css)(_templateObject3, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.isLoading ? (0, _styledComponents.css)(_templateObject5, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
});

Button.propTypes = {
  /** Secondary button */
  secondary: _propTypes2.default.bool,
  /** Large button */
  large: _propTypes2.default.bool,
  /** Small button */
  small: _propTypes2.default.bool,
  /** ghost style button*/
  ghost: _propTypes2.default.bool,
  /** Full width button that takes up all available space of parent */
  fullWidth: _propTypes2.default.bool,
  /** Adds disabled attribute and styling to button */
  disabled: _propTypes2.default.bool,
  /** Adds loading spinner */
  isLoading: _propTypes2.default.bool
};

/** @component */
exports.default = Button;