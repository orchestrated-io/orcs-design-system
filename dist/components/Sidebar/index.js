"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  max-width: 360px;\n  height: calc(100vh - 60px);\n  color: white;\n  display: flex;\n  align-items: stretch;\n  align-content: stretch;\n  width: auto;\n"], ["\n  max-width: 360px;\n  height: calc(100vh - 60px);\n  color: white;\n  display: flex;\n  align-items: stretch;\n  align-content: stretch;\n  width: auto;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  min-width: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: flex-start;\n  height: calc(100vh - 60px);\n  background: ", ";\n"], ["\n  min-width: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: flex-start;\n  height: calc(100vh - 60px);\n  background: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  min-width: 60px;\n  padding: 15px 0;\n  border-bottom: solid 1px ", ";\n  display: block;\n  width: 100%;\n  transition: ", ";\n  color: ", ";\n  background: ", ";\n  cursor: ", ";\n  &:hover,\n  &:hover {\n    background: ", ";\n  }\n  ", ";\n"], ["\n  position: relative;\n  min-width: 60px;\n  padding: 15px 0;\n  border-bottom: solid 1px ", ";\n  display: block;\n  width: 100%;\n  transition: ", ";\n  color: ", ";\n  background: ", ";\n  cursor: ", ";\n  &:hover,\n  &:hover {\n    background: ", ";\n  }\n  ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n        :before {\n          content: \"", "\";\n          position: absolute;\n          top: 5px;\n          right: 5px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 20px;\n          height: 20px;\n          border-radius: 100%;\n          font-size: 1.1rem;\n          font-weight: 600;\n          color: ", ";\n          background-color: ", ";\n        }\n      "], ["\n        :before {\n          content: \"", "\";\n          position: absolute;\n          top: 5px;\n          right: 5px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 20px;\n          height: 20px;\n          border-radius: 100%;\n          font-size: 1.1rem;\n          font-weight: 600;\n          color: ", ";\n          background-color: ", ";\n        }\n      "]),
    _templateObject5 = _taggedTemplateLiteral([""], [""]),
    _templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n"], ["\n  position: relative;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  display: ", ";\n  min-width: 300px;\n  height: calc(100vh - (60px + 72px));\n  overflow-y: scroll;\n  background: ", ";\n"], ["\n  display: ", ";\n  min-width: 300px;\n  height: calc(100vh - (60px + 72px));\n  overflow-y: scroll;\n  background: ", ";\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  text-align: center;\n  padding-top: 2px;\n  border-radius: 100%;\n  margin-top: -11px;\n  cursor: w-resize;\n  background: ", ";\n"], ["\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  width: 22px;\n  height: 22px;\n  text-align: center;\n  padding-top: 2px;\n  border-radius: 100%;\n  margin-top: -11px;\n  cursor: w-resize;\n  background: ", ";\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  z-index: 5;\n  padding: 10px 20px;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.3);\n  svg {\n    display: block;\n    margin-bottom: 10px;\n  }\n  small {\n    display: block;\n    font-size: 1.1rem;\n  }\n  a {\n    color: #fff;\n  }\n"], ["\n  z-index: 5;\n  padding: 10px 20px;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.3);\n  svg {\n    display: block;\n    margin-bottom: 10px;\n  }\n  small {\n    display: block;\n    font-size: 1.1rem;\n  }\n  a {\n    color: #fff;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Tabs = _styledComponents2.default.div(_templateObject2, _theme2.default.greyDark);

var Tab = _styledComponents2.default.label(_templateObject3, _theme2.default.grey.darken(0.2), _variables2.default.defaultTransition, function (props) {
  return props.active ? _theme2.default.primary : _theme2.default.greyLight;
}, function (props) {
  return props.active ? _theme2.default.greyDarker : "transparent";
}, function (props) {
  return props.active ? "default" : "pointer";
}, function (props) {
  return props.active ? _theme2.default.greyDarker : "rgba(0, 0, 0, 0.15)";
}, function (props) {
  return props.badge ? (0, _styledComponents.css)(_templateObject4, props.badge, _theme2.default.white, _theme2.default.danger) : (0, _styledComponents.css)(_templateObject5);
});

var Panels = _styledComponents2.default.div(_templateObject6);

var Panel = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.active ? "block" : "none";
}, _theme2.default.greyDarker);

var Close = _styledComponents2.default.label(_templateObject8, _theme2.default.greyDarker);

var Footer = _styledComponents2.default.footer(_templateObject9, _theme2.default.greyDarker);

/** @component */
exports.default = {
  Container: Container,
  Tabs: Tabs,
  Tab: Tab,
  Panels: Panels,
  Panel: Panel,
  Footer: Footer,
  Close: Close
};