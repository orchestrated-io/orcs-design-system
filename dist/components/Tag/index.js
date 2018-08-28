"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  display: block;\n  border-radius: 13px;\n  font-size: 1.4rem;\n  margin: 3px;\n  white-space: nowrap;\n  position: relative;\n  transition: ", ";\n  cursor: ", ";\n  border: solid 1px\n    ", ";\n  padding: ", ";\n\n  background: ", ";\n\n  color: ", ";\n\n  ", " &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px ", ";\n  }\n\n  &::after {\n    content: \"+\";\n    display: block;\n    position: absolute;\n    right: 8px;\n    top: 2px;\n    transform-origin: 50% 50%;\n    color: ", ";\n    transition: ", ";\n    opacity: ", ";\n    transform: ", ";\n  }\n"], ["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  display: block;\n  border-radius: 13px;\n  font-size: 1.4rem;\n  margin: 3px;\n  white-space: nowrap;\n  position: relative;\n  transition: ", ";\n  cursor: ", ";\n  border: solid 1px\n    ", ";\n  padding: ", ";\n\n  background: ", ";\n\n  color: ", ";\n\n  ", " &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px ", ";\n  }\n\n  &::after {\n    content: \"+\";\n    display: block;\n    position: absolute;\n    right: 8px;\n    top: 2px;\n    transform-origin: 50% 50%;\n    color: ", ";\n    transition: ", ";\n    opacity: ", ";\n    transform: ", ";\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral([""], [""]),
    _templateObject3 = _taggedTemplateLiteral(["\n          &:hover {\n            border: solid 1px ", ";\n            color: ", ";\n            background: ", ";\n          }\n        "], ["\n          &:hover {\n            border: solid 1px ", ";\n            color: ", ";\n            background: ", ";\n          }\n        "]);

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

var Tag = _styledComponents2.default.button(_templateObject, _variables2.default.defaultTransition, function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return props.disabled ? _theme2.default.greyDark : _theme2.default.primary;
}, function (props) {
  return props.selected ? "3px 25px 3px 12px;" : "3px 12px 3px 12px;";
}, function (props) {
  return props.selected ? _theme2.default.primary : props.disabled ? _theme2.default.greyDark : _theme2.default.white;
}, function (props) {
  return props.selected ? _theme2.default.white : props.disabled ? _theme2.default.white : _theme2.default.primary;
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(_templateObject2) : (0, _styledComponents.css)(_templateObject3, _theme2.default.primary.darken(0.2), function (props) {
    return props.selected ? _theme2.default.white : _theme2.default.primary.darken(0.3);
  }, function (props) {
    return props.selected ? _theme2.default.primary.darken(0.2) : _theme2.default.white;
  });
}, _theme2.default.primary.fade(0.6), _theme2.default.white, _variables2.default.defaultTransition, function (props) {
  return props.selected ? 1 : 0;
}, function (props) {
  return props.selected ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)";
});

Tag.propTypes = {
  /** Adds selected styling to tag */
  selected: _propTypes2.default.bool,
  /** Adds disabled attribute and styling to tag */
  disabled: _propTypes2.default.bool
};

/** @component */
exports.default = Tag;