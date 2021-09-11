"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tailwindDecorator = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tailwindDecorator = function tailwindDecorator(storyFn, _ref) {
  var parameters = _ref.parameters;
  console.log("parameters", parameters); // aditodo remove this

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Aditya"), /*#__PURE__*/_react["default"].createElement("p", null, "kdg"));
};

exports.tailwindDecorator = tailwindDecorator;