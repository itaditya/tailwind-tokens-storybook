"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = void 0;

var _react = _interopRequireDefault(require("react"));

var _twTheme = require("../twTheme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Colors = function Colors() {
  var theme = (0, _twTheme.getTwTheme)();
  console.log("theme", theme); // aditodo remove this

  return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Text Colors"), /*#__PURE__*/_react["default"].createElement("p", null, "all text Colors"));
};

exports.Colors = Colors;