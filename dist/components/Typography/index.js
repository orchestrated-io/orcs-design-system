"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  font-size: 2.6rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 2.6rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-size: 2.2rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 2.2rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 2rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 1.8rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1.6rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 1.6rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 1.4rem;\n  margin: 0;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n  line-height: 2rem;\n"], ["\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n  line-height: 2rem;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 80%;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n  text-transform: ", ";\n"], ["\n  display: block;\n  font-size: 80%;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n  text-transform: ", ";\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  font-size: 5rem;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  font-size: 5rem;\n  margin-bottom: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  display: block;\n  margin-bottom: ", ";\n  text-align: ", ";\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 2rem;\n  padding: ", " ", ";\n  margin: ", ";\n  border-left: solid 3px ", ";\n  em {\n    display: block;\n    font-style: italic;\n    font-size: 1.4rem;\n    color: ", ";\n    margin-top: ", ";\n  }\n"], ["\n  display: block;\n  margin-bottom: ", ";\n  text-align: ", ";\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 2rem;\n  padding: ", " ", ";\n  margin: ", ";\n  border-left: solid 3px ", ";\n  em {\n    display: block;\n    font-style: italic;\n    font-size: 1.4rem;\n    color: ", ";\n    margin-top: ", ";\n  }\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  text-align: ", ";\n  line-height: 2rem;\n  background: ", ";\n  padding: ", ";\n"], ["\n  margin-bottom: ", ";\n  text-align: ", ";\n  line-height: 2rem;\n  background: ", ";\n  padding: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var marginBottom = function marginBottom(props) {
  return props.marginBottomDouble ? _variables2.default.defaultSpacingDouble : props.marginBottomHalf ? _variables2.default.defaultSpacingHalf : props.marginBottom ? _variables2.default.defaultSpacing : 0;
};

var colour = function colour(props) {
  return props.grey ? _theme2.default.grey : props.success ? _theme2.default.success : props.warning ? _theme2.default.warning : props.danger ? _theme2.default.danger : props.white ? _theme2.default.white : _theme2.default.greyDarkest;
};

var textAlign = function textAlign(props) {
  return props.center ? "center" : props.right ? "right" : props.left ? "left" : "inherit";
};

var bold = function bold(props) {
  return props.bold ? 600 : 300;
};

var H1 = _styledComponents2.default.h1(_templateObject, marginBottom, bold, colour, textAlign);

var H2 = _styledComponents2.default.h2(_templateObject2, marginBottom, bold, colour, textAlign);

var H3 = _styledComponents2.default.h3(_templateObject3, marginBottom, bold, colour, textAlign);

var H4 = _styledComponents2.default.h4(_templateObject4, marginBottom, bold, colour, textAlign);

var H5 = _styledComponents2.default.h5(_templateObject5, marginBottom, bold, colour, textAlign);

var H6 = _styledComponents2.default.h6(_templateObject6, marginBottom, bold, colour, textAlign);

var P = _styledComponents2.default.p(_templateObject7, marginBottom, bold, colour, textAlign);

var Small = _styledComponents2.default.small(_templateObject8, marginBottom, bold, colour, textAlign, function (props) {
  return props.uppercase ? "uppercase" : "none";
});

var Large = _styledComponents2.default.h2(_templateObject9, marginBottom, bold, colour, textAlign);

var Quote = _styledComponents2.default.blockquote(_templateObject10, marginBottom, textAlign, _variables2.default.defaultSpacingHalf, _variables2.default.defaultSpacing, _variables2.default.defaultSpacing, _theme2.default.greyDark, _theme2.default.greyDark, _variables2.default.defaultSpacingQuarter);

var Code = _styledComponents2.default.code(_templateObject11, marginBottom, textAlign, _theme2.default.warningLightest.fade(0.6), _variables2.default.defaultSpacingQuarter);

/** @component */
exports.default = { H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, P: P, Small: Small, Large: Large, Quote: Quote, Code: Code };