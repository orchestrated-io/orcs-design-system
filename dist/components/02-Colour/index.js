"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n\n  background: ", ";\n"], ["\n  width: 100px;\n  height: 100px;\n\n  background: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Colour = _styledComponents2.default.div(_templateObject, function (props) {
  return props.black ? _theme2.default.black : props.greyDarkest ? _theme2.default.greyDarkest : props.greyDarker ? _theme2.default.greyDarker : props.greyDark ? _theme2.default.greyDark : props.grey ? _theme2.default.grey : props.greyLight ? _theme2.default.greyLight : props.greyLighter ? _theme2.default.greyLighter : props.greyLightest ? _theme2.default.greyLightest : props.white ? _theme2.default.white : props.primaryDarkest ? _theme2.default.primaryDarkest : props.primaryDarker ? _theme2.default.primaryDarker : props.primaryDark ? _theme2.default.primaryDark : props.primary ? _theme2.default.primary : props.primaryLight ? _theme2.default.primaryLight : props.primaryLighter ? _theme2.default.primaryLighter : props.primaryLightest ? _theme2.default.primaryLightest : props.successDarkest ? _theme2.default.successDarkest : props.successDarker ? _theme2.default.successDarker : props.successDark ? _theme2.default.successDark : props.success ? _theme2.default.success : props.successLight ? _theme2.default.successLight : props.successLighter ? _theme2.default.successLighter : props.successLightest ? _theme2.default.successLightest : props.warningDarkest ? _theme2.default.warningDarkest : props.warningDarker ? _theme2.default.warningDarker : props.warningDark ? _theme2.default.warningDark : props.warning ? _theme2.default.warning : props.warningLight ? _theme2.default.warningLight : props.warningLighter ? _theme2.default.warningLighter : props.warningLightest ? _theme2.default.warningLightest : props.dangerDarkest ? _theme2.default.dangerDarkest : props.dangerDarker ? _theme2.default.dangerDarker : props.dangerDark ? _theme2.default.dangerDark : props.danger ? _theme2.default.danger : props.dangerLight ? _theme2.default.dangerLight : props.dangerLighter ? _theme2.default.dangerLighter : props.dangerLightest ? _theme2.default.dangerLightest : "transparent;";
});

/** @component */
exports.default = Colour;