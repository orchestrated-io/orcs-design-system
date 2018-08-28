"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponentsTheme = require("styled-components-theme");

var _styledComponentsTheme2 = _interopRequireDefault(_styledComponentsTheme);

var _colours = require("./colours");

var _colours2 = _interopRequireDefault(_colours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var theme = _styledComponentsTheme2.default.apply(undefined, _toConsumableArray(Object.keys(_colours2.default)));
exports.default = theme;