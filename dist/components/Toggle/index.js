"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          input {\n            &:focus {\n              + label {\n                box-shadow: 0 0 0 3px ", ";\n              }\n            }\n          }\n          label {\n            color: ", ";\n            &:first-of-type {\n              background: ", ";\n            }\n          }\n        "], ["\n          input {\n            &:focus {\n              + label {\n                box-shadow: 0 0 0 3px ", ";\n              }\n            }\n          }\n          label {\n            color: ", ";\n            &:first-of-type {\n              background: ", ";\n            }\n          }\n        "]),
    _templateObject3 = _taggedTemplateLiteral([""], [""]),
    _templateObject4 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none;\n\n  &:focus {\n    + label {\n      box-shadow: 0 0 0 3px ", ";\n    }\n  }\n\n  :checked {\n    + label {\n      background: ", ";\n      &:after {\n        left: calc(100% - 3px);\n        transform: translateX(-100%);\n      }\n    }\n    &:focus {\n      + label {\n        box-shadow: 0 0 0 3px ", ";\n      }\n    }\n  }\n"], ["\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none;\n\n  &:focus {\n    + label {\n      box-shadow: 0 0 0 3px ", ";\n    }\n  }\n\n  :checked {\n    + label {\n      background: ", ";\n      &:after {\n        left: calc(100% - 3px);\n        transform: translateX(-100%);\n      }\n    }\n    &:focus {\n      + label {\n        box-shadow: 0 0 0 3px ", ";\n      }\n    }\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin: 0;\n  display: block;\n  position: relative;\n  transition: ", ";\n  background: ", ";\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    background: ", ";\n    transition: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n  }\n\n  :active {\n    &:after {\n      width: ", ";\n    }\n  }\n"], ["\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin: 0;\n  display: block;\n  position: relative;\n  transition: ", ";\n  background: ", ";\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    background: ", ";\n    transition: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n  }\n\n  :active {\n    &:after {\n      width: ", ";\n    }\n  }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding-left: 8px;\n  cursor: pointer;\n  font-size: ", ";\n"], ["\n  margin: 0;\n  padding-left: 8px;\n  cursor: pointer;\n  font-size: ", ";\n"]);

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

var Group = _styledComponents2.default.div(_templateObject, function (props) {
  return props.inverted ? (0, _styledComponents.css)(_templateObject2, _theme2.default.greyDark.fade(0.6), _theme2.default.white, _theme2.default.greyDark) : (0, _styledComponents.css)(_templateObject3);
});

var Input = _styledComponents2.default.input.attrs({
  type: "checkbox"
})(_templateObject4, _theme2.default.greyDarker.fade(0.8), _theme2.default.success, _theme2.default.success.fade(0.7));

var Item = _styledComponents2.default.label(_templateObject5, _variables2.default.defaultTransition, _theme2.default.greyDarker, function (props) {
  return props.small ? "36px" : "44px";
}, function (props) {
  return props.small ? "20px" : "24px";
}, function (props) {
  return props.small ? "10px" : "12px";
}, _theme2.default.white, _variables2.default.defaultTransition, function (props) {
  return props.small ? "14px" : "18px";
}, function (props) {
  return props.small ? "14px" : "18px";
}, function (props) {
  return props.small ? "7px" : "9px";
}, function (props) {
  return props.small ? "20px" : "24px";
});

var Label = _styledComponents2.default.label(_templateObject6, function (props) {
  return props.small ? "1.4rem" : "1.6rem";
});

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          inverted = _props.inverted,
          id = _props.id,
          label = _props.label,
          small = _props.small;

      return _react2.default.createElement(
        Group,
        { inverted: inverted },
        _react2.default.createElement(Input, this.props),
        _react2.default.createElement(Item, { htmlFor: id, small: small }),
        _react2.default.createElement(
          Label,
          { htmlFor: id, small: small },
          label
        )
      );
    }
  }]);

  return Toggle;
}(_react2.default.Component);

Toggle.propTypes = {
  /** Must be used to specify a unique ID. */
  id: _propTypes2.default.string,
  /** Specifies the text for the label. */
  label: _propTypes2.default.string,
  /** Changes appearance to suit a dark background. */
  inverted: _propTypes2.default.bool,
  /** Makes toggle and label smaller. */
  small: _propTypes2.default.bool
};

/** @component */
exports.default = Toggle;