"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItem = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    grid-column: ", ""], ["\n    grid-column: ", ""]),
    _templateObject3 = _taggedTemplateLiteral(["\n    grid-row: ", ""], ["\n    grid-row: ", ""]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: grid;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  display: grid;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    grid-template-columns: ", ";\n  "], ["\n    grid-template-columns: ", ";\n  "]),
    _templateObject6 = _taggedTemplateLiteral(["\n    grid-gap: ", ";\n  "], ["\n    grid-gap: ", ";\n  "]),
    _templateObject7 = _taggedTemplateLiteral(["\n    grid-row-gap: ", ";\n  "], ["\n    grid-row-gap: ", ";\n  "]),
    _templateObject8 = _taggedTemplateLiteral(["\n    grid-auto-rows: ", ";\n  "], ["\n    grid-auto-rows: ", ";\n  "]),
    _templateObject9 = _taggedTemplateLiteral(["\n    width: ", ";\n  "], ["\n    width: ", ";\n  "]),
    _templateObject10 = _taggedTemplateLiteral(["\n    height: ", ";\n  "], ["\n    height: ", ";\n  "]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require("styled-is");

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridItem = exports.GridItem = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)("column")(_templateObject2, function (props) {
  return props.column;
}), (0, _styledIs2.default)("row")(_templateObject3, function (props) {
  return props.row;
}));

var Grid = _styledComponents2.default.div(_templateObject4, (0, _styledIs2.default)('templateColumns')(_templateObject5, function (props) {
  return props.templateColumns;
}), (0, _styledIs2.default)('gap')(_templateObject6, function (props) {
  return props.gap;
}), (0, _styledIs2.default)('rowGap')(_templateObject7, function (props) {
  return props.rowGap;
}), (0, _styledIs2.default)('autoRows')(_templateObject8, function (props) {
  return props.autoRows;
}), (0, _styledIs2.default)('width')(_templateObject9, function (props) {
  return props.width;
}), (0, _styledIs2.default)('height')(_templateObject10, function (props) {
  return props.height;
}));

exports.default = Grid;