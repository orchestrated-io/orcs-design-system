"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  border-radius: 50%;\n  animation: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border: ", ";\n  border-right-color: ", ";\n"], ["\n  position: relative;\n  border-radius: 50%;\n  animation: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border: ", ";\n  border-right-color: ", ";\n"]);

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

var Loading = _styledComponents2.default.div(_templateObject, function (props) {
  return props.large ? "loadingSpin 800ms infinite linear" : "loadingSpin 500ms infinite linear";
}, function (props) {
  return props.large ? "50px" : "16px";
}, function (props) {
  return props.large ? "50px" : "16px";
}, function (props) {
  return props.centered ? "0 auto" : "0";
}, function (props) {
  return props.large ? "4px solid rgba(0,0,0,0.2)" : props.inverted ? "2px solid rgba(255,255,255,0.4)" : "2px solid rgba(0,0,0,0.3)";
}, function (props) {
  return props.large ? "rgba(0,0,0,0.6)" : props.inverted ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)";
});

Loading.propTypes = {
  /** Large loading spinner */
  large: _propTypes2.default.bool,
  /** Centered loading spinner */
  centered: _propTypes2.default.bool,
  /** Changes colours to work on dark background */
  inverted: _propTypes2.default.bool
};

/** @component */
exports.default = Loading;