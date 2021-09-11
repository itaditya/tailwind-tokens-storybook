"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTwTheme = getTwTheme;
exports.setTwTheme = setTwTheme;

var _resolveConfig = _interopRequireDefault(require("tailwindcss/resolveConfig"));

var _flattenColorPalette = _interopRequireDefault(require("tailwindcss/lib/util/flattenColorPalette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = null;

function getTwTheme() {
  return theme || {};
}

function setTwTheme(twConfig) {
  var twTheme = (0, _resolveConfig["default"])(twConfig).theme;
  var flatTextColors = (0, _flattenColorPalette["default"])(twTheme.textColor);
  console.log("flatTextColors", flatTextColors); // aditodo remove this

  theme = twTheme;
}