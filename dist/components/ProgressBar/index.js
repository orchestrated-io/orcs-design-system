"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n  background: ", ";\n  height: 16px;\n  border-radius: 8px;\n"], ["\n  position: relative;\n  background: ", ";\n  background: ", ";\n  height: 16px;\n  border-radius: 8px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  height: 10px;\n  border-radius: 5px;\n  animation: expandWidth 1000ms ease-in-out 1;\n  transition: ", ";\n  ", ";\n"], ["\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  height: 10px;\n  border-radius: 5px;\n  animation: expandWidth 1000ms ease-in-out 1;\n  transition: ", ";\n  ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n          background: linear-gradient(\n            to right,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n          );\n        "], ["\n          background: linear-gradient(\n            to right,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n          );\n        "]),
    _templateObject4 = _taggedTemplateLiteral(["\n            background: ", ";\n          "], ["\n            background: ", ";\n          "]);

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

var Background = _styledComponents2.default.div(_templateObject, _theme2.default.greyLighter, function (props) {
  return props.inverted ? _theme2.default.greyDark : _theme2.default.greyLighter;
});

var Fill = _styledComponents2.default.div(_templateObject2, _variables2.default.defaultTransition, function (props) {
  return props.gradient ? (0, _styledComponents.css)(_templateObject3, _theme2.default.danger, _theme2.default.warning, _theme2.default.success) : props.inverted ? (0, _styledComponents.css)(_templateObject4, _theme2.default.primaryLight) : (0, _styledComponents.css)(_templateObject4, _theme2.default.primaryDark);
});

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          containerWidth = _props.containerWidth,
          fillWidth = _props.fillWidth,
          gradient = _props.gradient,
          inverted = _props.inverted;

      return _react2.default.createElement(
        Background,
        { inverted: inverted, style: { width: containerWidth + "%" } },
        _react2.default.createElement(Fill, {
          gradient: gradient,
          inverted: inverted,
          style: { width: fillWidth + "%" }
        })
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = {
  /** Sets the percentage width of the parent container */
  parentWidth: _propTypes2.default.number,
  /** Sets the percentage width of the fill */
  fillWidth: _propTypes2.default.number,
  /** Changes fill to have a gradient */
  gradient: _propTypes2.default.bool,
  /** Changes appearance to suit dark backgrounds */
  inverted: _propTypes2.default.bool
};

/** @component */
exports.default = ProgressBar;