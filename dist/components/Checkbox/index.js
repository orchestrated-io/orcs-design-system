"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  transform: translateZ(0);\n  color: ", ";\n"], ["\n  display: block;\n  transform: translateZ(0);\n  color: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: ", ";\n  opacity: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: ", ";\n  opacity: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none;\n\n  &:focus {\n    + div {\n      border-radius: 2px;\n      box-shadow: 0 0 0 3px\n        ", ";\n    }\n  }\n\n  /* Targeting box */\n  + div {\n    transition: ", ";\n    &:before {\n      background-color: ", ";\n    }\n    > div {\n      color: ", ";\n    }\n  }\n\n  :not(:checked) + div:before {\n    animation: rippleOff 700ms forwards ease-out;\n  }\n\n  :checked + div:before {\n    animation: rippleOn 700ms forwards ease-out;\n  }\n\n  /* Targeting Check */\n  :focus + div div:after {\n    opacity: 0.2;\n  }\n\n  :checked {\n    + div div:before {\n      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,\n        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n      animation: checkboxOn 300ms forwards ease-out;\n    }\n    + div div:after {\n      animation: rippleOn 700ms forwards ease-out;\n    }\n  }\n\n  :not(:checked) + div div:after {\n    animation: rippleOff 700ms forwards ease-out;\n  }\n\n  + div div:before {\n    animation: checkboxOff 300ms forwards ease-out;\n  }\n"], ["\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none;\n\n  &:focus {\n    + div {\n      border-radius: 2px;\n      box-shadow: 0 0 0 3px\n        ", ";\n    }\n  }\n\n  /* Targeting box */\n  + div {\n    transition: ", ";\n    &:before {\n      background-color: ", ";\n    }\n    > div {\n      color: ", ";\n    }\n  }\n\n  :not(:checked) + div:before {\n    animation: rippleOff 700ms forwards ease-out;\n  }\n\n  :checked + div:before {\n    animation: rippleOn 700ms forwards ease-out;\n  }\n\n  /* Targeting Check */\n  :focus + div div:after {\n    opacity: 0.2;\n  }\n\n  :checked {\n    + div div:before {\n      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,\n        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n      animation: checkboxOn 300ms forwards ease-out;\n    }\n    + div div:after {\n      animation: rippleOn 700ms forwards ease-out;\n    }\n  }\n\n  :not(:checked) + div div:after {\n    animation: rippleOff 700ms forwards ease-out;\n  }\n\n  + div div:before {\n    animation: checkboxOff 300ms forwards ease-out;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 20px;\n  width: 20px;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 8px;\n    top: 8px;\n    height: 4px;\n    width: 4px;\n    border-radius: 100%;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    /*transform: scale3d(2.3, 2.3, 1);*/\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  position: relative;\n  height: 20px;\n  width: 20px;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 8px;\n    top: 8px;\n    height: 4px;\n    width: 4px;\n    border-radius: 100%;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    /*transform: scale3d(2.3, 2.3, 1);*/\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid;\n  border-radius: 2px;\n  overflow: hidden;\n  z-index: 1;\n  color: ", ";\n\n  :before {\n    content: \"\";\n    position: absolute;\n    transform: rotate(45deg);\n    display: block;\n    margin-top: -4px;\n    margin-left: 6px;\n    width: 0;\n    height: 0;\n    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,\n      0 0 0 0 inset;\n    /*animation: checkboxOff 300ms forwards ease-out;*/\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid;\n  border-radius: 2px;\n  overflow: hidden;\n  z-index: 1;\n  color: ", ";\n\n  :before {\n    content: \"\";\n    position: absolute;\n    transform: rotate(45deg);\n    display: block;\n    margin-top: -4px;\n    margin-left: 6px;\n    width: 0;\n    height: 0;\n    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,\n      0 0 0 0 inset;\n    /*animation: checkboxOff 300ms forwards ease-out;*/\n  }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  padding-left: 8px;\n"], ["\n  padding-left: 8px;\n"]);

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

var Item = _styledComponents2.default.div(_templateObject, function (props) {
  return props.colour === "white" ? _theme2.default.white : _theme2.default.greyDarkest;
});

var Label = _styledComponents2.default.label(_templateObject2, function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return props.disabled ? "0.5" : "1";
});

var Control = _styledComponents2.default.input.attrs({
  type: "checkbox"
})(_templateObject3, function (props) {
  return props.colour && _theme2.default[props.colour] ? _theme2.default[props.colour].fade(0.6) : _theme2.default.greyDarker.fade(0.6);
}, _variables2.default.defaultTransition, function (props) {
  return props.colour && _theme2.default[props.colour] ? _theme2.default[props.colour] : _theme2.default.greyDarker;
}, function (props) {
  return props.colour && _theme2.default[props.colour] ? _theme2.default[props.colour] : _theme2.default.greyDarker;
});

var Box = _styledComponents2.default.div(_templateObject4);

var Check = _styledComponents2.default.div(_templateObject5, _theme2.default.greyDarker);

var Text = _styledComponents2.default.div(_templateObject6);

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          colour = _props.colour,
          disabled = _props.disabled,
          checked = _props.checked,
          onClick = _props.onClick;

      return _react2.default.createElement(
        Item,
        { colour: colour },
        _react2.default.createElement(
          Label,
          { disabled: disabled },
          _react2.default.createElement(Control, { colour: colour, disabled: disabled, checked: checked }),
          _react2.default.createElement(
            Box,
            { colour: colour, onClick: onClick },
            _react2.default.createElement(Check, null)
          ),
          _react2.default.createElement(
            Text,
            null,
            label
          )
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
  colour: _propTypes2.default.oneOf(["success", "warning", "danger", "primary", "white"]),
  /** Applies disabled attribute and styling */
  disabled: _propTypes2.default.bool,
  /** Applies checked attribute and styling */
  checked: _propTypes2.default.bool
};

/** @component */
exports.default = Checkbox;