"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig = createConfig;

var _resolveConfig = _interopRequireDefault(require("tailwindcss/resolveConfig"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createConfig(twConfig) {
  var twTheme = (0, _resolveConfig["default"])(twConfig).theme;
  return {
    title: 'Tokens',
    parameters: {
      twTheme: twTheme
    },
    decorators: [_.tailwindDecorator]
  };
}