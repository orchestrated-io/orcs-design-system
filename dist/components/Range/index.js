"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    position:relative;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    \n    &:before {\n      content: \"", "\";\n      font-size: 10px;\n      font-weight: bold;\n    }\n    \n    &:after {\n      content: \"", "\";\n      font-size: 10px;\n      font-weight: bold;\n    }\n    \n    ", "\n"], ["\n    position:relative;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    \n    &:before {\n      content: \"", "\";\n      font-size: 10px;\n      font-weight: bold;\n    }\n    \n    &:after {\n      content: \"", "\";\n      font-size: 10px;\n      font-weight: bold;\n    }\n    \n    ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n            &:before,\n            &:after {\n              color: ", ";\n            }\n            input {\n              &:focus {\n                background: rgba(255, 255, 255, 0.1);\n              }\n              &::-webkit-slider-runnable-track {\n                background: ", ";\n              }\n              &::-moz-range-track {\n                background: ", ";\n              }\n              &::-ms-track {\n                background: ", ";\n              }\n            }\n            output {\n              color: ", ";\n            }\n          "], ["\n            &:before,\n            &:after {\n              color: ", ";\n            }\n            input {\n              &:focus {\n                background: rgba(255, 255, 255, 0.1);\n              }\n              &::-webkit-slider-runnable-track {\n                background: ", ";\n              }\n              &::-moz-range-track {\n                background: ", ";\n              }\n              &::-ms-track {\n                background: ", ";\n              }\n            }\n            output {\n              color: ", ";\n            }\n          "]),
    _templateObject3 = _taggedTemplateLiteral([""], [""]),
    _templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-height: ", ";\n  background: transparent;\n  cursor: ew-resize;\n  padding: 10px 10px;\n  border-radius: 25px;\n  transition: all 200ms ease-in-out;\n\n  &:focus {\n    outline: none;\n    background: rgba(0, 0, 0, 0.05);\n  }\n\n  &,\n  &::-webkit-slider-thumb {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n\n  &::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    ", ";\n  }\n\n  &::-ms-track {\n    ", ";\n  }\n\n  &::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n"], ["\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-height: ", ";\n  background: transparent;\n  cursor: ew-resize;\n  padding: 10px 10px;\n  border-radius: 25px;\n  transition: all 200ms ease-in-out;\n\n  &:focus {\n    outline: none;\n    background: rgba(0, 0, 0, 0.05);\n  }\n\n  &,\n  &::-webkit-slider-thumb {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n\n  &::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    ", ";\n  }\n\n  &::-ms-track {\n    ", ";\n  }\n\n  &::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  display: block;\n  user-select: none;\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  pointer-events: none;\n  text-align: center;\n  flex: 1 1 100%;\n  order: 4;\n  color: ", ";\n"], ["\n  display: block;\n  user-select: none;\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  pointer-events: none;\n  text-align: center;\n  flex: 1 1 100%;\n  order: 4;\n  color: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var vars = {
  trackHeight: "4px",
  thumbDiameter: "20px"
};

var thumb = function thumb(props) {
  return "\n    margin-top: -8px;\n    box-sizing: border-box;\n    border: none;\n    width: " + vars.thumbDiameter + ";\n    height: " + vars.thumbDiameter + ";\n    border-radius: " + vars.thumbDiameter + ";\n    background: " + props.theme.primary + ";\n";
};

var track = function track(props) {
  return "\n    box-sizing: border-box;\n    border: none;\n    width: 100%;\n    height: " + vars.trackHeight + ";\n\t  background: " + props.theme.greyLight + ";\n    border-radius: 4px;\n";
};

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.min;
}, function (props) {
  return props.max;
}, function (props) {
  return props.inverted ? (0, _styledComponents.css)(_templateObject2, _theme2.default.white, props.theme.greyDark, props.theme.greyDark, props.theme.greyDark, _theme2.default.white) : (0, _styledComponents.css)(_templateObject3);
});

var Input = _styledComponents2.default.input.attrs({
  type: "range"
})(_templateObject4, vars.thumbDiameter, track, track, track, thumb, thumb, thumb);

var Output = _styledComponents2.default.output(_templateObject5, _theme2.default.greyDarker);

var Range = function (_React$Component) {
  _inherits(Range, _React$Component);

  function Range() {
    _classCallCheck(this, Range);

    return _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  _createClass(Range, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          inverted = _props.inverted,
          defaultValue = _props.defaultValue;

      return _react2.default.createElement(
        Wrapper,
        { min: min, max: max, inverted: inverted },
        _react2.default.createElement(Input, this.props),
        _react2.default.createElement(
          Output,
          null,
          defaultValue
        )
      );
    }
  }]);

  return Range;
}(_react2.default.Component);

Range.propTypes = {
  /** Sets the minimum value for the range */
  min: _propTypes2.default.number,
  /** Sets the maximum value for the range */
  max: _propTypes2.default.number,
  /** Sets the default value for the range */
  defaultValue: _propTypes2.default.number,
  /** Changes appearance to suit dark backgrounds */
  inverted: _propTypes2.default.bool
};

/** @component */
exports.default = Range;