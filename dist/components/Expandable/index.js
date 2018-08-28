"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  margin: 4px 0;\n"], ["\n  margin: 4px 0;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  border: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  cursor: pointer;\n  width: 100%;\n  margin: 0;\n  font-size: 1.8rem;\n  text-align: left;\n  color: ", ";\n  padding: 18px 38px 18px 16px;\n  border-left: solid 4px ", ";\n  background: ", ";\n  transition: ", ";\n\n  &:hover {\n    background: ", ";\n    border-left: solid 4px ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    border-left: solid 4px ", ";\n  }\n\n  &:after,\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 2px;\n    height: 12px;\n    right: ", ";\n    background-color: ", ";\n    transition: ", ";\n  }\n  &:before {\n    transform: ", ";\n  }\n  &:after {\n    transform: translateY(-50%) rotate(90deg);\n  }\n"], ["\n  position: relative;\n  display: block;\n  border: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  cursor: pointer;\n  width: 100%;\n  margin: 0;\n  font-size: 1.8rem;\n  text-align: left;\n  color: ", ";\n  padding: 18px 38px 18px 16px;\n  border-left: solid 4px ", ";\n  background: ", ";\n  transition: ", ";\n\n  &:hover {\n    background: ", ";\n    border-left: solid 4px ", ";\n  }\n\n  &:focus {\n    outline: 0;\n    border-left: solid 4px ", ";\n  }\n\n  &:after,\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 2px;\n    height: 12px;\n    right: ", ";\n    background-color: ", ";\n    transition: ", ";\n  }\n  &:before {\n    transform: ", ";\n  }\n  &:after {\n    transform: translateY(-50%) rotate(90deg);\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-right: 18px;\n"], ["\n  padding-right: 18px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  padding: ", ";\n  transition: ", ";\n  display: ", ";\n"], ["\n  overflow: hidden;\n  padding: ", ";\n  transition: ", ";\n  display: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

var _Flex = require("../Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _Typography = require("../Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Badge = require("../Badge");

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.button(_templateObject2, _theme2.default.greyDark, _theme2.default.greyLightest, _theme2.default.greyLightest, _variables2.default.defaultTransition, _theme2.default.greyLighter, _theme2.default.greyLighter, _theme2.default.primary, _variables2.default.defaultSpacing, _theme2.default.greyDark, _variables2.default.defaultTransition, function (props) {
  return props.open ? "translateY(-50%) rotate(90deg)" : "translateY(-50%)";
});

var Text = _styledComponents2.default.div(_templateObject3);

var Content = _styledComponents2.default.div(_templateObject4, _variables2.default.defaultSpacing, _variables2.default.defaultTransition, function (props) {
  return props.open ? "block" : "none";
});

var Expandable = function (_React$Component) {
  _inherits(Expandable, _React$Component);

  function Expandable(props) {
    _classCallCheck(this, Expandable);

    var _this = _possibleConstructorReturn(this, (Expandable.__proto__ || Object.getPrototypeOf(Expandable)).call(this, props));

    _this.state = { isOpen: props.isOpen };
    _this.toggleIsOpen = _this.toggleIsOpen.bind(_this);
    return _this;
  }

  _createClass(Expandable, [{
    key: "toggleIsOpen",
    value: function toggleIsOpen() {
      var currentIsOpen = this.state.isOpen;

      this.setState({ isOpen: !currentIsOpen });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          subtitle = _props.subtitle,
          badge = _props.badge,
          badgeColour = _props.badgeColour;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        Item,
        null,
        _react2.default.createElement(
          Button,
          { open: isOpen, onClick: this.toggleIsOpen },
          _react2.default.createElement(
            _Flex2.default,
            { justifyBetween: true, alignCenter: true },
            _react2.default.createElement(
              Text,
              null,
              title ? _react2.default.createElement(
                _Typography2.default.H4,
                null,
                title
              ) : null,
              subtitle ? _react2.default.createElement(
                _Typography2.default.Small,
                { grey: true },
                subtitle
              ) : null
            ),
            badge ? _react2.default.createElement(
              _Badge2.default,
              { colour: badgeColour },
              badge
            ) : null
          )
        ),
        _react2.default.createElement(
          Content,
          { open: isOpen },
          children
        )
      );
    }
  }]);

  return Expandable;
}(_react2.default.Component);

Expandable.propTypes = {
  /** Sets expandable to open state by default */
  isOpen: _propTypes2.default.bool,
  /** Expandable title */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]),
  /** Expandable subtitle */
  subtitle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]),
  /** Adds a badge with text as string */
  badge: _propTypes2.default.string,
  /** Specifies badge colour */
  badgeColour: _propTypes2.default.oneOf(["success", "warning", "danger", "primaryLight", "primaryDark", "primaryDarkest"])
};

/** @component */
exports.default = Expandable;