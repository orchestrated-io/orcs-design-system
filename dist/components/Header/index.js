"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60px;\n  position: relative;\n  z-index: 2;\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  padding: 0 ", ";\n  background: ", ";\n\n  > a {\n    display: none;\n    @media (min-width: ", ") {\n      display: block;\n    }\n  }\n\n  > div {\n    display: none;\n    @media (min-width: ", ") {\n      display: flex;\n    }\n  }\n\n  > * + * {\n    margin-left: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 60px;\n  position: relative;\n  z-index: 2;\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  padding: 0 ", ";\n  background: ", ";\n\n  > a {\n    display: none;\n    @media (min-width: ", ") {\n      display: block;\n    }\n  }\n\n  > div {\n    display: none;\n    @media (min-width: ", ") {\n      display: flex;\n    }\n  }\n\n  > * + * {\n    margin-left: ", ";\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 2rem;\n  line-height: 60px;\n  padding-right: ", ";\n  color: ", ";\n  border-right: solid 1px ", ";\n"], ["\n  display: block;\n  font-size: 2rem;\n  line-height: 60px;\n  padding-right: ", ";\n  color: ", ";\n  border-right: solid 1px ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n\n  > * + * {\n    margin-left: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n\n  > * + * {\n    margin-left: ", ";\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: block;\n  height: 42px;\n  width: 42px;\n  border-radius: 100%;\n"], ["\n  display: block;\n  height: 42px;\n  width: 42px;\n  border-radius: 100%;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  text-align: left;\n"], ["\n  text-align: left;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n"], ["\n  color: ", ";\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n"], ["\n  display: block;\n  color: ", ";\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: 600;\n  color: ", ";\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: 600;\n  color: ", ";\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  z-index: 3;\n  cursor: pointer;\n  user-select: none;\n  background: none;\n  border: none;\n  padding-bottom: 7px;\n  display: block;\n  margin-left: auto;\n\n  @media (min-width: ", ") {\n    display: none;\n  }\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    span {\n      background-color: white;\n      &:before,\n      &:after {\n        background-color: white;\n      }\n    }\n  }\n"], ["\n  z-index: 3;\n  cursor: pointer;\n  user-select: none;\n  background: none;\n  border: none;\n  padding-bottom: 7px;\n  display: block;\n  margin-left: auto;\n\n  @media (min-width: ", ") {\n    display: none;\n  }\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    span {\n      background-color: white;\n      &:before,\n      &:after {\n        background-color: white;\n      }\n    }\n  }\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  user-select: none;\n  transition: all 300ms ease;\n  width: 30px;\n  height: 4px;\n  border-radius: 4px;\n  background-color: white;\n  position: relative;\n\n  &:before,\n  &:after {\n    content: \"\";\n    display: inline-block;\n    width: 30px;\n    height: 4px;\n    border-radius: 4px;\n    background-color: white;\n    position: absolute;\n    left: 0;\n    transform-origin: 50% 50%;\n    transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1),\n      transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1),\n      background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n  &:before {\n    top: 9px;\n  }\n  &:after {\n    top: -9px;\n  }\n"], ["\n  display: inline-block;\n  cursor: pointer;\n  user-select: none;\n  transition: all 300ms ease;\n  width: 30px;\n  height: 4px;\n  border-radius: 4px;\n  background-color: white;\n  position: relative;\n\n  &:before,\n  &:after {\n    content: \"\";\n    display: inline-block;\n    width: 30px;\n    height: 4px;\n    border-radius: 4px;\n    background-color: white;\n    position: absolute;\n    left: 0;\n    transform-origin: 50% 50%;\n    transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1),\n      transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1),\n      background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n  &:before {\n    top: 9px;\n  }\n  &:after {\n    top: -9px;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bar = _styledComponents2.default.header(_templateObject, _variables2.default.defaultSpacing, _theme2.default.greyDarkest, _variables2.default.screenMedium, _variables2.default.screenMedium, _variables2.default.defaultSpacing);

var AppName = _styledComponents2.default.span(_templateObject2, _variables2.default.defaultSpacing, _theme2.default.white, _theme2.default.white.fade(0.8));

var RightAlignedChildren = _styledComponents2.default.div(_templateObject3, _variables2.default.defaultSpacing);

var Avatar = _styledComponents2.default.img(_templateObject4);

var LoggedInAs = _styledComponents2.default.div(_templateObject5);

var UserName = _styledComponents2.default.div(_templateObject6, _theme2.default.white);

var Tenant = _styledComponents2.default.small(_templateObject7, _theme2.default.white);

var LogoutLink = _styledComponents2.default.a(_templateObject8, _variables2.default.defaultTransition, _theme2.default.white, _theme2.default.warning);

var MobileMenuToggle = _styledComponents2.default.label(_templateObject9, _variables2.default.screenMedium);

var Hamburger = _styledComponents2.default.span(_templateObject10);

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          appName = _props.appName,
          children = _props.children,
          rightAlignedChildren = _props.rightAlignedChildren;

      return _react2.default.createElement(
        Bar,
        null,
        _react2.default.createElement(
          AppName,
          null,
          appName
        ),
        children,
        _react2.default.createElement(
          RightAlignedChildren,
          null,
          rightAlignedChildren
        ),
        _react2.default.createElement(
          MobileMenuToggle,
          { htmlFor: "mobileMenuToggle" },
          _react2.default.createElement(Hamburger, null)
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

/** @component */


exports.default = { Navbar: Navbar, Avatar: Avatar, LoggedInAs: LoggedInAs, UserName: UserName, Tenant: Tenant, LogoutLink: LogoutLink };