"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: ", ";\n  width: ", ";\n"], ["\n  position: ", ";\n  width: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  cursor: text;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  font-size: 1.4rem;\n  z-index: 1;\n  border-radius: ", ";\n  transition: ", ";\n  background: ", ";\n  color: ", ";\n  width: ", ";\n  padding: ", ";\n  height: ", ";\n\n  border: 1px solid\n    ", ";\n\n  ", " &:hover {\n    border: 1px solid\n      ", ";\n  }\n\n  &:focus {\n    outline: 0;\n\n    box-shadow: 0 0 0 3px\n      ", ";\n\n    border: 1px solid\n      ", ";\n\n    ", ";\n  }\n"], ["\n  display: block;\n  cursor: text;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  font-size: 1.4rem;\n  z-index: 1;\n  border-radius: ", ";\n  transition: ", ";\n  background: ", ";\n  color: ", ";\n  width: ", ";\n  padding: ", ";\n  height: ", ";\n\n  border: 1px solid\n    ", ";\n\n  ", " &:hover {\n    border: 1px solid\n      ", ";\n  }\n\n  &:focus {\n    outline: 0;\n\n    box-shadow: 0 0 0 3px\n      ", ";\n\n    border: 1px solid\n      ", ";\n\n    ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n          &::placeholder {\n            color: transparent;\n          }\n          &:not(:placeholder-shown) {\n            ~ label {\n              transform: translateY(-10px);\n              font-size: 1.2rem;\n            }\n          }\n        "], ["\n          &::placeholder {\n            color: transparent;\n          }\n          &:not(:placeholder-shown) {\n            ~ label {\n              transform: translateY(-10px);\n              font-size: 1.2rem;\n            }\n          }\n        "]),
    _templateObject4 = _taggedTemplateLiteral(["\n          &::placeholder {\n            color: ", ";\n          }\n        "], ["\n          &::placeholder {\n            color: ", ";\n          }\n        "]),
    _templateObject5 = _taggedTemplateLiteral(["\n            &::placeholder {\n              color: ", ";\n            }\n            ~ label {\n              transform: translateY(-10px);\n              font-size: 1.2rem;\n              color: ", ";\n            }\n          "], ["\n            &::placeholder {\n              color: ", ";\n            }\n            ~ label {\n              transform: translateY(-10px);\n              font-size: 1.2rem;\n              color: ", ";\n            }\n          "]),
    _templateObject6 = _taggedTemplateLiteral([""], [""]),
    _templateObject7 = _taggedTemplateLiteral(["\n  display: block;\n  z-index: 2;\n  text-align: left;\n  font-size: 1.4rem;\n  transition: ", ";\n  margin-bottom: ", ";\n\n  color: ", ";\n\n  ", ";\n      \n      ", ";\n  \n "], ["\n  display: block;\n  z-index: 2;\n  text-align: left;\n  font-size: 1.4rem;\n  transition: ", ";\n  margin-bottom: ", ";\n\n  color: ", ";\n\n  ", ";\n      \n      ", ";\n  \n "]),
    _templateObject8 = _taggedTemplateLiteral(["\n          padding-left: 13px;\n          cursor: text;\n          position: absolute;\n          top: 22px;\n          color: ", ";\n        "], ["\n          padding-left: 13px;\n          cursor: text;\n          position: absolute;\n          top: 22px;\n          color: ", ";\n        "]),
    _templateObject9 = _taggedTemplateLiteral(["\n        &:after{ \n          content: \" *\";\n          color : ", "; \n        }\n      "], ["\n        &:after{ \n          content: \" *\";\n          color : ", "; \n        }\n      "]);

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
  return props.floating ? "relative" : "static";
}, function (props) {
  return props.fullWidth ? "100%" : "auto";
});

var Input = _styledComponents2.default.input(_templateObject2, _variables2.default.borderRadius, _variables2.default.defaultTransition, _theme2.default.white, _theme2.default.greyDarkest, function (props) {
  return props.fullWidth ? "100%" : "auto";
}, function (props) {
  return props.floating ? "25px 12px 6px 12px" : "5px 12px 6px 12px";
}, function (props) {
  return props.floating ? "60px" : "40px";
}, function (props) {
  return props.invalid ? _theme2.default.dangerLight : props.valid ? _theme2.default.successLight : _theme2.default.black.fade(0.8);
}, function (props) {
  return props.floating ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4, _theme2.default.grey);
}, function (props) {
  return props.invalid ? _theme2.default.dangerDark : props.valid ? _theme2.default.successDark : _theme2.default.primary;
}, function (props) {
  return props.invalid ? _theme2.default.danger.fade(0.6) : props.valid ? _theme2.default.success.fade(0.6) : _theme2.default.primary.fade(0.6);
}, function (props) {
  return props.invalid ? _theme2.default.dangerDark : props.valid ? _theme2.default.successDark : _theme2.default.primary;
}, function (props) {
  return props.floating ? (0, _styledComponents.css)(_templateObject5, _theme2.default.greyLight, function (props) {
    return props.invalid ? _theme2.default.dangerDark : props.valid ? _theme2.default.successDark : _theme2.default.primary;
  }) : (0, _styledComponents.css)(_templateObject6);
});

var Label = _styledComponents2.default.label(_templateObject7, _variables2.default.defaultTransition, function (props) {
  return props.floating ? 0 : _variables2.default.defaultSpacingQuarter;
}, function (props) {
  return props.inverted ? _theme2.default.white : props.valid ? _theme2.default.successDark : props.invalid ? _theme2.default.dangerDark : _theme2.default.greyDarkest;
}, function (props) {
  return props.floating ? (0, _styledComponents.css)(_templateObject8, function (props) {
    return props.invalid ? _theme2.default.dangerDark : props.valid ? _theme2.default.successDark : _theme2.default.grey;
  }) : (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.mandatory ? (0, _styledComponents.css)(_templateObject9, _theme2.default.danger) : (0, _styledComponents.css)(_templateObject6);
});

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          inverted = _props.inverted,
          floating = _props.floating,
          id = _props.id,
          label = _props.label,
          invalid = _props.invalid,
          valid = _props.valid,
          fullWidth = _props.fullWidth,
          mandatory = _props.mandatory;

      return _react2.default.createElement(
        Group,
        { floating: floating, fullWidth: fullWidth },
        label && !floating ? _react2.default.createElement(
          Label,
          {
            inverted: inverted,
            invalid: invalid,
            valid: valid,
            htmlFor: id,
            mandatory: mandatory
          },
          label
        ) : null,
        _react2.default.createElement(Input, this.props),
        label && floating ? _react2.default.createElement(
          Label,
          {
            floating: floating,
            invalid: invalid,
            valid: valid,
            htmlFor: id,
            mandatory: mandatory

          },
          label
        ) : null
      );
    }
  }]);

  return TextInput;
}(_react2.default.Component);

TextInput.propTypes = {
  /** Must be used to specify a unique ID. */
  id: _propTypes2.default.string,
  /** Specifies the text for the label. */
  label: _propTypes2.default.string,
  /** Specifies the helper/example text for the placeholder. */
  placeholder: _propTypes2.default.string,
  /** Specifies the type of text input, e.g. text, email, password, number */
  type: _propTypes2.default.string,
  /** Applies different styling for a floating animated label aesthetic */
  floating: _propTypes2.default.bool,
  /** Makes text box take up full width of parent */
  fullWidth: _propTypes2.default.bool,
  /** Applies invalid input styles */
  invalid: _propTypes2.default.bool,
  /** Applies valid input styles */
  valid: _propTypes2.default.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: _propTypes2.default.bool
};

/** @component */
exports.default = TextInput;