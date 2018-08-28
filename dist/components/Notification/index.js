"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  font-size: 1.4rem;\n  position: relative;\n  padding: 10px 12px;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  color: ", ";\n  border-radius: 2px;\n  background: ", ";\n\n  ", ";\n\n  span {\n    margin-right: 12px;\n  }\n  svg:first-of-type {\n    margin-right: 12px;\n  }\n  svg:last-of-type {\n    margin-left: auto;\n    cursor: pointer;\n    opacity: 0.6;\n    transition: ", ";\n    &:hover,\n    &:focus {\n      outline: 0;\n      opacity: 1;\n    }\n  }\n"], ["\n  position: relative;\n  font-size: 1.4rem;\n  position: relative;\n  padding: 10px 12px;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  color: ", ";\n  border-radius: 2px;\n  background: ", ";\n\n  ", ";\n\n  span {\n    margin-right: 12px;\n  }\n  svg:first-of-type {\n    margin-right: 12px;\n  }\n  svg:last-of-type {\n    margin-left: auto;\n    cursor: pointer;\n    opacity: 0.6;\n    transition: ", ";\n    &:hover,\n    &:focus {\n      outline: 0;\n      opacity: 1;\n    }\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          z-index: 100;\n          position: fixed;\n          bottom: ", ";\n          right: ", ";\n        "], ["\n          z-index: 100;\n          position: fixed;\n          bottom: ", ";\n          right: ", ";\n        "]),
    _templateObject3 = _taggedTemplateLiteral([""], [""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.div(_templateObject, _theme2.default.white, function (props) {
  var colour = props.colour && _theme2.default[props.colour + "Dark"] ? props.colour + "Dark" : "primaryDark";
  return _theme2.default[colour].fade(0.1);
}, function (props) {
  return props.floating ? (0, _styledComponents.css)(_templateObject2, _variables2.default.defaultSpacing, _variables2.default.defaultSpacing) : (0, _styledComponents.css)(_templateObject3);
}, _variables2.default.defaultTransition);

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.state = { dismissed: false };
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  _createClass(Notification, [{
    key: "handleDismiss",
    value: function handleDismiss() {
      this.setState({
        dismissed: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          colour = _props.colour,
          floating = _props.floating,
          children = _props.children;
      var dismissed = this.state.dismissed;

      return !dismissed && _react2.default.createElement(
        Item,
        { colour: colour, floating: floating },
        _react2.default.createElement(_Icon2.default, { icon: icon, color: "white" }),
        _react2.default.createElement(
          "span",
          null,
          children
        ),
        _react2.default.createElement(_Icon2.default, { icon: ["far", "times"], color: "white", tabIndex: "0", onClick: this.handleDismiss })
      );
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  /** Applies an icon to notification with specified name. */
  icon: _propTypes2.default.array,
  /** Specifies notification colour */
  colour: _propTypes2.default.oneOf(["success", "warning", "danger"]),
  /** Positions notification floating over content in bottom right of screen, instead of inline. */
  floating: _propTypes2.default.bool
};

/** @component */
exports.default = Notification;