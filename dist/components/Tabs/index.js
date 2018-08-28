"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  appearance: none;\n  font-size: 1.4rem;\n  font-weight: 400;\n  height: 40px;\n  text-transform: uppercase;\n  width: 100%;\n  transition: ", ";\n  border: 0;\n  border-top: solid ", " ", ";\n  background: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  + button {\n    margin-left: 4px;\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    background: ", ";\n  }\n"], ["\n  display: block;\n  appearance: none;\n  font-size: 1.4rem;\n  font-weight: 400;\n  height: 40px;\n  text-transform: uppercase;\n  width: 100%;\n  transition: ", ";\n  border: 0;\n  border-top: solid ", " ", ";\n  background: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  + button {\n    margin-left: 4px;\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    background: ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: ", ";\n"], ["\n  position: relative;\n  display: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Tab = _styledComponents2.default.button(_templateObject2, _variables2.default.defaultTransition, _theme2.default.primary, function (props) {
  return props.active ? "2px" : "0";
}, function (props) {
  return props.active ? _theme2.default.white : _theme2.default.greyLightest;
}, function (props) {
  return props.active ? _theme2.default.primary : _theme2.default.greyDark;
}, function (props) {
  return props.active ? "default" : "pointer";
}, function (props) {
  return props.active ? _theme2.default.white : _theme2.default.greyLighter;
}, function (props) {
  return props.active ? _theme2.default.white : _theme2.default.greyLighter;
});

var Content = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.active ? "block" : "none";
});

/** @component */
exports.default = {
  Container: Container,
  Tab: Tab,
  Content: Content
};