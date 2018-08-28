"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  width: ", ";\n  min-height: ", ";\n  text-align: ", ";\n  padding: ", ";\n\n  margin: ", ";\n\n  background: ", ";\n\n  ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ";\n  @media only screen and (max-width: 800px) {\n    width: ", ";\n  }\n"], ["\n  display: block;\n  width: ", ";\n  min-height: ", ";\n  text-align: ", ";\n  padding: ", ";\n\n  margin: ", ";\n\n  background: ", ";\n\n  ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ";\n  @media only screen and (max-width: 800px) {\n    width: ", ";\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          flex: 1 1;\n        "], ["\n          flex: 1 1;\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["\n            flex: 1 1 auto;\n          "], ["\n            flex: 1 1 auto;\n          "]),
    _templateObject4 = _taggedTemplateLiteral([""], [""]),
    _templateObject5 = _taggedTemplateLiteral(["\n            border: solid 1px ", ";\n          "], ["\n            border: solid 1px ", ";\n          "]),
    _templateObject6 = _taggedTemplateLiteral(["\n            border: none;\n          "], ["\n            border: none;\n          "]),
    _templateObject7 = _taggedTemplateLiteral(["\n            > * + * {\n              margin-top: ", ";\n            }\n          "], ["\n            > * + * {\n              margin-top: ", ";\n            }\n          "]),
    _templateObject8 = _taggedTemplateLiteral(["\n            > * + * {\n              margin-left: ", ";\n            }\n          "], ["\n            > * + * {\n              margin-left: ", ";\n            }\n          "]),
    _templateObject9 = _taggedTemplateLiteral(["\n            > * > * + * {\n              margin-top: ", ";\n            }\n          "], ["\n            > * > * + * {\n              margin-top: ", ";\n            }\n          "]),
    _templateObject10 = _taggedTemplateLiteral(["\n            > * > * + * {\n              margin-left: ", ";\n            }\n          "], ["\n            > * > * + * {\n              margin-left: ", ";\n            }\n          "]);

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

var Layout = _styledComponents2.default.div(_templateObject, function (props) {
  return props.width ? props.width : "auto";
}, function (props) {
  return props.fullHeight ? "calc(100vh - 60px)" : "0";
}, function (props) {
  return props.textCenter ? "center" : props.textRight ? "right" : "left";
}, function (props) {
  return props.paddingDouble ? _variables2.default.defaultSpacingDouble : props.paddingHalf ? _variables2.default.defaultSpacingHalf : props.padding ? _variables2.default.defaultSpacing : props.verticalPaddingDouble ? _variables2.default.defaultSpacingDouble + " 0" : props.verticalPaddingHalf ? _variables2.default.defaultSpacingHalf + " 0" : props.verticalPadding ? _variables2.default.defaultSpacing + " 0" : props.horizontalPaddingDouble ? "0 " + _variables2.default.defaultSpacingDouble : props.horizontalPaddingHalf ? "0 " + _variables2.default.defaultSpacingHalf : props.horizontalPadding ? "0 " + _variables2.default.defaultSpacing : 0;
}, function (props) {
  return props.marginDouble ? _variables2.default.defaultSpacingDouble : props.marginHalf ? _variables2.default.defaultSpacingHalf : props.margin ? _variables2.default.defaultSpacing : props.verticalMarginDouble ? _variables2.default.defaultSpacingDouble + " 0" : props.verticalMarginHalf ? _variables2.default.defaultSpacingHalf + " 0" : props.verticalMargin ? _variables2.default.defaultSpacing + " 0" : props.horizontalMarginDouble ? "0 " + _variables2.default.defaultSpacingDouble : props.horizontalMarginHalf ? "0 " + _variables2.default.defaultSpacingHalf : props.horizontalMargin ? "0 " + _variables2.default.defaultSpacing : 0;
}, function (props) {
  return props.background ? _theme2.default.greyLightest : props.backgroundWhite ? _theme2.default.white : props.backgroundDark ? _theme2.default.greyDarkest : "transparent";
}, function (props) {
  return props.fluidFlex ? (0, _styledComponents.css)(_templateObject2) : props.growFlex ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.border ? (0, _styledComponents.css)(_templateObject5, _theme2.default.greyLighter) : (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.childVerticalSpacing ? (0, _styledComponents.css)(_templateObject7, _variables2.default.defaultSpacing) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childHorizontalSpacing ? (0, _styledComponents.css)(_templateObject8, _variables2.default.defaultSpacing) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildVerticalSpacing ? (0, _styledComponents.css)(_templateObject9, _variables2.default.defaultSpacing) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildHorizontalSpacing ? (0, _styledComponents.css)(_templateObject10, _variables2.default.defaultSpacing) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childVerticalSpacingHalf ? (0, _styledComponents.css)(_templateObject7, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childHorizontalSpacingHalf ? (0, _styledComponents.css)(_templateObject8, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildVerticalSpacingHalf ? (0, _styledComponents.css)(_templateObject9, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildHorizontalSpacingHalf ? (0, _styledComponents.css)(_templateObject10, _variables2.default.defaultSpacingHalf) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childVerticalSpacingQuarter ? (0, _styledComponents.css)(_templateObject7, _variables2.default.defaultSpacingQuarter) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childHorizontalSpacingQuarter ? (0, _styledComponents.css)(_templateObject8, _variables2.default.defaultSpacingQuarter) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildVerticalSpacingQuarter ? (0, _styledComponents.css)(_templateObject9, _variables2.default.defaultSpacingQuarter) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.childChildHorizontalSpacingQuarter ? (0, _styledComponents.css)(_templateObject10, _variables2.default.defaultSpacingQuarter) : (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.mobileWidth ? props.mobileWidth : "auto";
});

Layout.propTypes = {
  /** Can specify a width in pixels or percentages (make sure you specify units) */
  width: _propTypes2.default.string,
  /** Can specify a width in pixels or percentages (make sure you specify units) for devices/browsers less than 800px wide */
  mobileWidth: _propTypes2.default.string,
  /** Adds a light grey background */
  background: _propTypes2.default.bool,
  /** Adds a white background */
  backgroundWhite: _propTypes2.default.bool,
  /** Adds a dark grey background */
  backgroundDark: _propTypes2.default.bool,
  /** Adds a light grey border */
  border: _propTypes2.default.bool,
  /** Makes text align to center of layout box */
  textCenter: _propTypes2.default.bool,
  /** Makes text align to right of layout box */
  textRight: _propTypes2.default.bool,
  /** Adds vertical and horizontal padding of 20px */
  padding: _propTypes2.default.bool,
  /** Adds vertical padding of 20px */
  verticalPadding: _propTypes2.default.bool,
  /** Adds horizontal padding of 20px */
  horizontalPadding: _propTypes2.default.bool,
  /** Adds vertical and horizontal padding of 10px */
  paddingHalf: _propTypes2.default.bool,
  /** Adds vertical padding of 10px */
  verticalPaddingHalf: _propTypes2.default.bool,
  /** Adds horizontal padding of 10px */
  horizontalPaddingHalf: _propTypes2.default.bool,
  /** Adds vertical and horizontal padding of 40px */
  paddingDouble: _propTypes2.default.bool,
  /** Adds vertical padding of 40px */
  verticalPaddingDouble: _propTypes2.default.bool,
  /** Adds horizontal padding of 40px */
  horizontalPaddingDouble: _propTypes2.default.bool,
  /** Adds vertical and horizontal padding of 20px */
  margin: _propTypes2.default.bool,
  /** Adds vertical margin of 20px */
  verticalMargin: _propTypes2.default.bool,
  /** Adds horizontal margin of 20px */
  horizontalMargin: _propTypes2.default.bool,
  /** Adds vertical and horizontal margin of 10px */
  marginHalf: _propTypes2.default.bool,
  /** Adds vertical margin of 10px */
  verticalMarginHalf: _propTypes2.default.bool,
  /** Adds horizontal margin of 10px */
  horizontalMarginHalf: _propTypes2.default.bool,
  /** Adds vertical and horizontal margin of 40px */
  marginDouble: _propTypes2.default.bool,
  /** Adds vertical margin of 40px */
  verticalMarginDouble: _propTypes2.default.bool,
  /** Adds horizontal margin of 40px */
  horizontalMarginDouble: _propTypes2.default.bool,
  /** Adds vertical margin of 20px between all direct children elements */
  childVerticalSpacing: _propTypes2.default.bool,
  /** Adds vertical margin of 10px between all direct children elements */
  childVerticalSpacingHalf: _propTypes2.default.bool,
  /** Adds vertical margin of 5px between all direct children elements */
  childVerticalSpacingQuarter: _propTypes2.default.bool,
  /** Adds vertical margin of 20px between all direct childrens elements direct children */
  childChildVerticalSpacing: _propTypes2.default.bool,
  /** Adds vertical margin of 10px between all direct childrens elements direct children */
  childChildVerticalSpacingHalf: _propTypes2.default.bool,
  /** Adds vertical margin of 5px between all direct childrens elements direct children */
  childChildVerticalSpacingQuarter: _propTypes2.default.bool,
  /** Adds horizontal margin of 20px between all direct children elements */
  childHorizontalSpacing: _propTypes2.default.bool,
  /** Adds horizontal margin of 10px between all direct children elements */
  childHorizontalSpacingHalf: _propTypes2.default.bool,
  /** Adds horizontal margin of 5px between all direct children elements */
  childHorizontalSpacingQuarter: _propTypes2.default.bool,
  /** Adds horizontal margin of 20px between all direct childrens elements direct children */
  childChildHorizontalSpacing: _propTypes2.default.bool,
  /** Adds horizontal margin of 10px between all direct childrens elements direct children */
  childChildHorizontalSpacingHalf: _propTypes2.default.bool,
  /** Adds horizontal margin of 5px between all direct childrens elements direct children */
  childChildHorizontalSpacingQuarter: _propTypes2.default.bool
};

/** @component */
exports.default = Layout;