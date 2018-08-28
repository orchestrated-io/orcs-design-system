"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: help;\n  width: 20px;\n  height: 20px;\n  border: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  border-radius: 10px;\n  display: block;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: ", ";\n  background: ", ";\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    background: ", ";\n\n    > div {\n      outline: 0;\n      opacity: 1;\n      pointer-events: auto;\n      transform: translateY(0px) translateX(0px);\n    }\n  }\n"], ["\n  position: relative;\n  cursor: help;\n  width: 20px;\n  height: 20px;\n  border: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  border-radius: 10px;\n  display: block;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: ", ";\n  background: ", ";\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    background: ", ";\n\n    > div {\n      outline: 0;\n      opacity: 1;\n      pointer-events: auto;\n      transform: translateY(0px) translateX(0px);\n    }\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-indent: 1px;\n"], ["\n  display: block;\n  width: 20px;\n  height: 20px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-indent: 1px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  z-index: 2;\n  position: absolute;\n  font-size: 1.2rem;\n  font-weight: 400;\n  text-align: left;\n  left: 34px;\n  outline: 0;\n  opacity: 0;\n  padding: 8px 10px;\n  pointer-events: none;\n  border-radius: 2px;\n  transform: translateX(10px);\n  box-shadow: 0 2px 5px ", ";\n  transition: ", ";\n  width: ", ";\n  background: ", ";\n\n  &:before {\n    content: \"\";\n    z-index: 2;\n    height: 0;\n    width: 0;\n    border-style: solid;\n    border-width: 6px 8px 6px 0;\n    border-color: transparent;\n    border-right-color: ", ";\n    left: -8px;\n    top: 50%;\n    margin-top: -6px;\n    position: absolute;\n  }\n\n  &:after {\n    content: \"\";\n    left: -34px;\n    display: block;\n    height: 100%;\n    top: 0;\n    position: absolute;\n    width: 100%;\n  }\n\n  ", ";\n"], ["\n  z-index: 2;\n  position: absolute;\n  font-size: 1.2rem;\n  font-weight: 400;\n  text-align: left;\n  left: 34px;\n  outline: 0;\n  opacity: 0;\n  padding: 8px 10px;\n  pointer-events: none;\n  border-radius: 2px;\n  transform: translateX(10px);\n  box-shadow: 0 2px 5px ", ";\n  transition: ", ";\n  width: ", ";\n  background: ", ";\n\n  &:before {\n    content: \"\";\n    z-index: 2;\n    height: 0;\n    width: 0;\n    border-style: solid;\n    border-width: 6px 8px 6px 0;\n    border-color: transparent;\n    border-right-color: ", ";\n    left: -8px;\n    top: 50%;\n    margin-top: -6px;\n    position: absolute;\n  }\n\n  &:after {\n    content: \"\";\n    left: -34px;\n    display: block;\n    height: 100%;\n    top: 0;\n    position: absolute;\n    width: 100%;\n  }\n\n  ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n          left: auto;\n          bottom: 34px;\n          transform: translateX(0) translateY(-10px);\n          &:before {\n            left: 50%;\n            top: auto;\n            margin-top: 0;\n            bottom: -10px;\n            margin-left: -4px;\n            transform: rotate(-90deg);\n          }\n          &:after {\n            left: 0;\n            height: calc(100% + 15px);\n          }\n        "], ["\n          left: auto;\n          bottom: 34px;\n          transform: translateX(0) translateY(-10px);\n          &:before {\n            left: 50%;\n            top: auto;\n            margin-top: 0;\n            bottom: -10px;\n            margin-left: -4px;\n            transform: rotate(-90deg);\n          }\n          &:after {\n            left: 0;\n            height: calc(100% + 15px);\n          }\n        "]),
    _templateObject5 = _taggedTemplateLiteral(["\n            /* No changes as same as default */\n          "], ["\n            /* No changes as same as default */\n          "]),
    _templateObject6 = _taggedTemplateLiteral(["\n              left: auto;\n              top: 34px;\n              transform: translateX(0) translateY(10px);\n              &:before {\n                left: 50%;\n                top: -10px;\n                margin-top: 0;\n                margin-left: -4px;\n                transform: rotate(90deg);\n              }\n              &:after {\n                left: 0;\n                top: auto;\n                bottom: 0;\n                height: calc(100% + 15px);\n              }\n            "], ["\n              left: auto;\n              top: 34px;\n              transform: translateX(0) translateY(10px);\n              &:before {\n                left: 50%;\n                top: -10px;\n                margin-top: 0;\n                margin-left: -4px;\n                transform: rotate(90deg);\n              }\n              &:after {\n                left: 0;\n                top: auto;\n                bottom: 0;\n                height: calc(100% + 15px);\n              }\n            "]),
    _templateObject7 = _taggedTemplateLiteral(["\n                left: auto;\n                right: 34px;\n                transform: translateX(-10px);\n                &:before {\n                  left: auto;\n                  right: -8px;\n                  transform: rotate(180deg);\n                }\n                &:after {\n                  left: auto;\n                  right: -34px;\n                }\n              "], ["\n                left: auto;\n                right: 34px;\n                transform: translateX(-10px);\n                &:before {\n                  left: auto;\n                  right: -8px;\n                  transform: rotate(180deg);\n                }\n                &:after {\n                  left: auto;\n                  right: -34px;\n                }\n              "]),
    _templateObject8 = _taggedTemplateLiteral([""], [""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var Container = _styledComponents2.default.button(_templateObject, function (props) {
  return props.inverted ? _theme2.default.greyDarkest : _theme2.default.white;
}, _variables2.default.defaultTransition, function (props) {
  return props.inverted ? _theme2.default.white : _theme2.default.greyDarkest;
}, _theme2.default.primary);

var QuestionMark = _styledComponents2.default.span(_templateObject2);

var Text = _styledComponents2.default.div(_templateObject3, _theme2.default.greyDarkest.fade(0.7), _variables2.default.defaultTransition, function (props) {
  return props.width ? props.width + "px" : "200px";
}, function (props) {
  return props.inverted ? _theme2.default.white : _theme2.default.greyDarkest;
}, function (props) {
  return props.inverted ? _theme2.default.white : _theme2.default.greyDarkest;
}, function (_ref) {
  var direction = _ref.direction;
  return direction === "top" ? (0, _styledComponents.css)(_templateObject4) : direction === "right" ? (0, _styledComponents.css)(_templateObject5) : direction === "bottom" ? (0, _styledComponents.css)(_templateObject6) : direction === "left" ? (0, _styledComponents.css)(_templateObject7) : (0, _styledComponents.css)(_templateObject8);
});

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          direction = _props.direction,
          width = _props.width,
          inverted = _props.inverted;

      return _react2.default.createElement(
        Container,
        { inverted: inverted },
        _react2.default.createElement(
          QuestionMark,
          null,
          "?"
        ),
        _react2.default.createElement(
          Text,
          { direction: direction, width: width, inverted: inverted },
          children
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  /** Specifies the direction of the tooltip */
  direction: _propTypes2.default.oneOf(["top", "right", "bottom", "left"]),
  /** Specifies the width of the tooltip in pixels */
  width: _propTypes2.default.string,
  /** Changes appearance to suit a dark background. */
  inverted: _propTypes2.default.bool
};

/** @component */
exports.default = Tooltip;