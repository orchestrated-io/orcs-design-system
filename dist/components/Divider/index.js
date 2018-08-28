"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  background: ", ";\n  height: ", ";\n"], ["\n  display: block;\n  width: 100%;\n  background: ", ";\n  height: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Divider = _styledComponents2.default.div(_templateObject, function (props) {
  return props.light ? _theme2.default.greyLightest : props.inverted ? _theme2.default.greyDark.fade(0.4) : _theme2.default.greyLighter;
}, function (props) {
  return props.thick ? "3px;" : "1px;";
});

Divider.propTypes = {
  /** Divider will use a lighter grey colour */
  light: _propTypes2.default.bool,
  /** Divider will be 3px instead of 1px */
  thick: _propTypes2.default.bool,
  /** Divider will be a darker colour more suited for dark backgrounds */
  inverted: _propTypes2.default.bool
};

/** @component */
exports.default = Divider;