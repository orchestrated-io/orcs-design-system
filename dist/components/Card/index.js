"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  word-wrap: break-word;\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n\n  ", ";\n\n  ", ";\n"], ["\n  word-wrap: break-word;\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n\n  ", ";\n\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          border-radius: 0 0 ", " ", ";\n          border-top: solid 3px ", ";\n        "], ["\n          border-radius: 0 0 ", " ", ";\n          border-top: solid 3px ", ";\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["\n            border-radius: 0 0 ", "\n              ", ";\n            border-top: solid 3px ", ";\n          "], ["\n            border-radius: 0 0 ", "\n              ", ";\n            border-top: solid 3px ", ";\n          "]),
    _templateObject4 = _taggedTemplateLiteral(["\n              border-radius: 0 0 ", "\n                ", ";\n              border-top: solid 3px ", ";\n            "], ["\n              border-radius: 0 0 ", "\n                ", ";\n              border-top: solid 3px ", ";\n            "]),
    _templateObject5 = _taggedTemplateLiteral(["\n                border-radius: 0 0 ", "\n                  ", ";\n                border-top: solid 3px ", ";\n              "], ["\n                border-radius: 0 0 ", "\n                  ", ";\n                border-top: solid 3px ", ";\n              "]),
    _templateObject6 = _taggedTemplateLiteral(["\n                  border-radius: 0 0 ", "\n                    ", ";\n                  border-top: solid 3px ", ";\n                "], ["\n                  border-radius: 0 0 ", "\n                    ", ";\n                  border-top: solid 3px ", ";\n                "]),
    _templateObject7 = _taggedTemplateLiteral(["\n                  border-top: 0;\n                "], ["\n                  border-top: 0;\n                "]),
    _templateObject8 = _taggedTemplateLiteral(["\n          > div:first-of-type {\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n          }\n          h4 {\n            margin-left: auto;\n          }\n        "], ["\n          > div:first-of-type {\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n          }\n          h4 {\n            margin-left: auto;\n          }\n        "]),
    _templateObject9 = _taggedTemplateLiteral([""], [""]),
    _templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  svg {\n    margin-right: 10px;\n  }\n"], ["\n  margin-bottom: ", ";\n  svg {\n    margin-right: 10px;\n  }\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 400;\n"], ["\n  font-weight: 400;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require("../Icon/");

var _Icon2 = _interopRequireDefault(_Icon);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.div(_templateObject, function (props) {
  return props.fluid ? "100%" : "auto";
}, function (props) {
  return props.fluid ? "100%" : "auto";
}, _theme2.default.white, _variables2.default.borderRadius, _variables2.default.defaultSpacing, function (_ref) {
  var colour = _ref.colour;
  return colour === "primary" ? (0, _styledComponents.css)(_templateObject2, _variables2.default.borderRadius, _variables2.default.borderRadius, _theme2.default.primary) : colour === "success" ? (0, _styledComponents.css)(_templateObject3, _variables2.default.borderRadius, _variables2.default.borderRadius, _theme2.default.success) : colour === "warning" ? (0, _styledComponents.css)(_templateObject4, _variables2.default.borderRadius, _variables2.default.borderRadius, _theme2.default.warning) : colour === "danger" ? (0, _styledComponents.css)(_templateObject5, _variables2.default.borderRadius, _variables2.default.borderRadius, _theme2.default.danger) : colour === "greyDark" ? (0, _styledComponents.css)(_templateObject6, _variables2.default.borderRadius, _variables2.default.borderRadius, _theme2.default.greyDark) : (0, _styledComponents.css)(_templateObject7);
}, function (props) {
  return props.alternate ? (0, _styledComponents.css)(_templateObject8) : (0, _styledComponents.css)(_templateObject9);
});

var Header = _styledComponents2.default.div(_templateObject10, _variables2.default.defaultSpacing);

var Title = _styledComponents2.default.h3(_templateObject11);

var Subtitle = _styledComponents2.default.h4(_templateObject9);

var Content = _styledComponents2.default.div(_templateObject9);

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          alternate = _props.alternate,
          icon = _props.icon,
          colour = _props.colour,
          title = _props.title,
          subtitle = _props.subtitle,
          children = _props.children,
          fluid = _props.fluid,
          restProps = _objectWithoutProperties(_props, ["alternate", "icon", "colour", "title", "subtitle", "children", "fluid"]);

      return _react2.default.createElement(
        Item,
        _extends({ alternate: alternate, colour: colour, fluid: fluid }, restProps),
        _react2.default.createElement(
          Header,
          null,
          icon ? _react2.default.createElement(_Icon2.default, { icon: icon, size: "lg" }) : null,
          title ? _react2.default.createElement(
            Title,
            null,
            title
          ) : null,
          subtitle ? _react2.default.createElement(
            Subtitle,
            null,
            subtitle
          ) : null
        ),
        _react2.default.createElement(
          Content,
          null,
          children
        )
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {
  /** Changes card styles to suit a card that holds alternate data */
  alternate: _propTypes2.default.bool,
  /** Forces card to take 100% width and height of parent element */
  fluid: _propTypes2.default.bool,
  /** Applies an icon to header of specified name */
  icon: _propTypes2.default.array,
  /** Card title */
  title: _propTypes2.default.node,
  /** Card subtitle */
  subtitle: _propTypes2.default.node
};

/** @component */
exports.default = Card;