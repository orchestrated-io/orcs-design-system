"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 300px;\n  border: 0;\n  outline: 0;\n  display: block;\n"], ["\n  width: 100%;\n  max-width: 300px;\n  border: 0;\n  outline: 0;\n  display: block;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../../theme");

var _theme2 = _interopRequireDefault(_theme);

var _variables = require("../../variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Welcome = _styledComponents2.default.img(_templateObject);

/** @component */
exports.default = Welcome;