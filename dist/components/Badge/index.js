"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 3px;\n  white-space: nowrap;\n  position: relative;\n  padding: 5px 10px;\n  cursor: default;\n  color: ", ";\n  background: ", ";\n  border-radius: 2px;\n"], ["\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 3px;\n  white-space: nowrap;\n  position: relative;\n  padding: 5px 10px;\n  cursor: default;\n  color: ", ";\n  background: ", ";\n  border-radius: 2px;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Badge = _styledComponents2.default.div(_templateObject, function (props) {
  return props.colour && _theme2.default[props.colour] ? _theme2.default[props.colour].darken(0.2) : _theme2.default.grey.darken(0.2);
}, function (props) {
  return props.colour && _theme2.default[props.colour] ? _theme2.default[props.colour].fade(0.7) : _theme2.default.grey.fade(0.7);
});

Badge.propTypes = {
  /** Specifies badge colour */
  colour: _propTypes2.default.oneOf(["success", "warning", "danger", "primaryLight", "primaryDark", "primaryDarkest"])
};

/** @component */
exports.default = Badge;