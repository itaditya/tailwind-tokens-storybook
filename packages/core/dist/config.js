"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig = createConfig;

var _twTheme = require("./twTheme");

function createConfig(twConfig) {
  (0, _twTheme.setTwTheme)(twConfig);
  return {
    title: 'Tailwind Theme'
  };
}