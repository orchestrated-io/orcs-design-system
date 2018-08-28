"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: ", ";\n  display: ", ";\n\n  color: ", ";\n\n  margin-bottom: ", ";\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: ", ";\n  display: ", ";\n\n  color: ", ";\n\n  margin-bottom: ", ";\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral([""], [""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styleLink = function styleLink(LinkComponent) {
  return (0, _styledComponents2.default)(LinkComponent)(_templateObject, _variables2.default.defaultTransition, function (props) {
    return props.bold ? 600 : 300;
  }, function (props) {
    return props.block ? "block" : "inline";
  }, function (props) {
    return props.active ? _theme2.default.primary : props.white ? _theme2.default.white : _theme2.default.primary;
  }, function (props) {
    return props.marginBottomDouble ? _variables2.default.defaultSpacingDouble : props.marginBottomHalf ? _variables2.default.defaultSpacingHalf : props.marginBottom ? _variables2.default.defaultSpacing : 0;
  }, function (props) {
    return props.white ? _theme2.default.warning : _theme2.default.warningDark;
  });
};

var Hyperlink = styleLink(_styledComponents2.default.a(_templateObject2));

/** @component */
exports.default = { styleLink: styleLink, Hyperlink: Hyperlink };