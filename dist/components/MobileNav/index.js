"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  opacity: 0;\n\tposition: absolute;\n\tmargin: 0;\n\tz-index: -1;\n\twidth: 0;\n\theight: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\n\t~ header,\n\t~ div,\n\t~ main {\n\t\ttransition: ", ";\n\t}\n\n\t&:checked {\n\n    + div > a {\n      opacity: 1;\n      transform: translateX(0);\n\t\t\t\n\t\t\t:nth-of-type(1) { transition-delay: 0.10s; }\n\t\t\t:nth-of-type(2) { transition-delay: 0.20s; }\n\t\t\t:nth-of-type(3) { transition-delay: 0.30s; }\n\t\t\t:nth-of-type(4) { transition-delay: 0.40s; }\n\t\t\t:nth-of-type(5) { transition-delay: 0.50s; }\n\t\t\t:nth-of-type(6) { transition-delay: 0.60s; }\n\t\t\t:nth-of-type(7) { transition-delay: 0.70s; }\n\t\t\t:nth-of-type(8) { transition-delay: 0.80s; }\n\t\t\t:nth-of-type(9) { transition-delay: 0.90s; }\n\t\t\t:nth-of-type(10) { transition-delay: 1s; }\n      }\n\n    /* Mobile menu */\n\t\t+ div {\n\t\t\ttransform: translateX(-250px);\n\t\t}\n\n\t\t~ main {\n\t\t\ttransform: translateX(-250px);\n\t\t}\n\t\t\n\t\t~ header {\n\t\t\ttransform: translateX(-250px);\n      /* Hamburger */\n\t\t\tspan {\n\t\t\t\tbackground-color: transparent !important; // fade away the middle line\n\t\t\t\t&:hover,\n\t\t\t\t&:focus {\n\t\t\t\t\tbackground-color: transparent !important;\n\t\t\t\t}\n\t\t\t\t&:before,\n\t\t\t\t&:after {\n\t\t\t\t\ttransition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\t\t\t\t\ttop: 0;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t}\n\t\t\t\t&:before {\n\t\t\t\t\ttransform: rotate3d(0,0,1,45deg) scale(1.1);\n\t\t\t\t}\n\t\t\t\t&:after {\n\t\t\t\t\ttransform: rotate3d(0,0,1,-45deg) scale(1.1);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n    \n    /* Overlay */\n\t\t~ label {\n\t\t\tz-index: 4;\n\t\t\topacity: 1;\t\n\t\t}\n\t}\n}\n"], ["\n  opacity: 0;\n\tposition: absolute;\n\tmargin: 0;\n\tz-index: -1;\n\twidth: 0;\n\theight: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\n\t~ header,\n\t~ div,\n\t~ main {\n\t\ttransition: ", ";\n\t}\n\n\t&:checked {\n\n    + div > a {\n      opacity: 1;\n      transform: translateX(0);\n\t\t\t\n\t\t\t:nth-of-type(1) { transition-delay: 0.10s; }\n\t\t\t:nth-of-type(2) { transition-delay: 0.20s; }\n\t\t\t:nth-of-type(3) { transition-delay: 0.30s; }\n\t\t\t:nth-of-type(4) { transition-delay: 0.40s; }\n\t\t\t:nth-of-type(5) { transition-delay: 0.50s; }\n\t\t\t:nth-of-type(6) { transition-delay: 0.60s; }\n\t\t\t:nth-of-type(7) { transition-delay: 0.70s; }\n\t\t\t:nth-of-type(8) { transition-delay: 0.80s; }\n\t\t\t:nth-of-type(9) { transition-delay: 0.90s; }\n\t\t\t:nth-of-type(10) { transition-delay: 1s; }\n      }\n\n    /* Mobile menu */\n\t\t+ div {\n\t\t\ttransform: translateX(-250px);\n\t\t}\n\n\t\t~ main {\n\t\t\ttransform: translateX(-250px);\n\t\t}\n\t\t\n\t\t~ header {\n\t\t\ttransform: translateX(-250px);\n      /* Hamburger */\n\t\t\tspan {\n\t\t\t\tbackground-color: transparent !important; // fade away the middle line\n\t\t\t\t&:hover,\n\t\t\t\t&:focus {\n\t\t\t\t\tbackground-color: transparent !important;\n\t\t\t\t}\n\t\t\t\t&:before,\n\t\t\t\t&:after {\n\t\t\t\t\ttransition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\t\t\t\t\ttop: 0;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t}\n\t\t\t\t&:before {\n\t\t\t\t\ttransform: rotate3d(0,0,1,45deg) scale(1.1);\n\t\t\t\t}\n\t\t\t\t&:after {\n\t\t\t\t\ttransform: rotate3d(0,0,1,-45deg) scale(1.1);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n    \n    /* Overlay */\n\t\t~ label {\n\t\t\tz-index: 4;\n\t\t\topacity: 1;\t\n\t\t}\n\t}\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  height: 100vh;\n  right: -250px;\n  top: 0;\n  width: 250px;\n  background: #333;\n  z-index: 5;\n  transition: ", ";\n\n  > div {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    padding: ", ";\n    margin-bottom: ", ";\n    border-bottom: solid 1px rgba(255, 255, 255, 0.2);\n    img {\n      display: block;\n      height: 40px;\n      width: 40px;\n      border-radius: 100%;\n      margin-right: 10px;\n    }\n  }\n\n  a {\n    padding: ", " ", ";\n    opacity: 0;\n    transform: translateX(100px);\n    transition: ", ";\n  }\n"], ["\n  position: fixed;\n  height: 100vh;\n  right: -250px;\n  top: 0;\n  width: 250px;\n  background: #333;\n  z-index: 5;\n  transition: ", ";\n\n  > div {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    padding: ", ";\n    margin-bottom: ", ";\n    border-bottom: solid 1px rgba(255, 255, 255, 0.2);\n    img {\n      display: block;\n      height: 40px;\n      width: 40px;\n      border-radius: 100%;\n      margin-right: 10px;\n    }\n  }\n\n  a {\n    padding: ", " ", ";\n    opacity: 0;\n    transform: translateX(100px);\n    transition: ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: block;\n  height: 42px;\n  width: 42px;\n  border-radius: 100%;\n"], ["\n  display: block;\n  height: 42px;\n  width: 42px;\n  border-radius: 100%;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n"], ["\n  color: ", ";\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: 600;\n  color: ", ";\n  display: block;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  transition: ", ";\n  font-weight: 600;\n  color: ", ";\n  display: block;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ", ";\n  }\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n  opacity: 0;\n  transition: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n  opacity: 0;\n  transition: ", ";\n"]);

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

var Toggle = _styledComponents2.default.input(_templateObject, _variables2.default.defaultTransition);

var Menu = _styledComponents2.default.div(_templateObject2, _variables2.default.defaultTransition, _variables2.default.defaultSpacing, _variables2.default.defaultSpacingHalf, _variables2.default.defaultSpacingHalf, _variables2.default.defaultSpacing, _variables2.default.defaultTransition);

var User = _styledComponents2.default.div(_templateObject3);

var Avatar = _styledComponents2.default.img(_templateObject4);

var UserName = _styledComponents2.default.div(_templateObject5, _theme2.default.white);

var LogoutLink = _styledComponents2.default.a(_templateObject6, _variables2.default.defaultTransition, _theme2.default.white, _theme2.default.warning);

var Overlay = _styledComponents2.default.label(_templateObject7, _variables2.default.defaultTransition);

var MobileNav = function (_React$Component) {
  _inherits(MobileNav, _React$Component);

  function MobileNav() {
    _classCallCheck(this, MobileNav);

    return _possibleConstructorReturn(this, (MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).apply(this, arguments));
  }

  _createClass(MobileNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          userName = _props.userName,
          avatarSrc = _props.avatarSrc,
          children = _props.children,
          onLogout = _props.onLogout;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(Toggle, { type: "checkbox", id: "mobileMenuToggle" }),
        _react2.default.createElement(
          Menu,
          null,
          _react2.default.createElement(
            User,
            null,
            avatarSrc ? _react2.default.createElement(Avatar, { src: avatarSrc }) : null,
            _react2.default.createElement(
              UserName,
              null,
              userName
            )
          ),
          children,
          _react2.default.createElement(
            LogoutLink,
            { onClick: onLogout },
            "Logout"
          )
        ),
        _react2.default.createElement(Overlay, { htmlFor: "mobileMenuToggle" })
      );
    }
  }]);

  return MobileNav;
}(_react2.default.Component);

/** @component */


exports.default = MobileNav;