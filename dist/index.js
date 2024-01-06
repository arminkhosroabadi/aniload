'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Ring({
  color = "black",
  size = "64px"
}) {
  const css = `.ring {
    display: inline-block;
    width: ${size};
    height: ${size};
  }
  .ring:after {
    content: no-open-quote;
    display: block;
    width: ${size};
    height: ${size};
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${color} transparent ${color} transparent;
    animation: ring 1.2s linear infinite;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "ring"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css));
}

exports.Ring = Ring;
