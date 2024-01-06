'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Ring({
  color = "black",
  size = "64px"
}) {
  const css = `.aniload-ring {
    display: inline-block;
    width: ${size};
    height: ${size};
  }
  .aniload-ring:after {
    content: no-open-quote;
    display: block;
    width: ${size};
    height: ${size};
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${color} transparent ${color} transparent;
    animation: aniload-ring 1.2s linear infinite;
  }
  @keyframes aniload-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aniload-ring"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css));
}

function Pulse({
  color = "black",
  size = "64px"
}) {
  const css = `.aniload-pulse {
        width: ${size};
        height: ${size};
        display: inline-block;
        position: relative;
      }
      .aniload-pulse::after,
      .aniload-pulse::before {
        content: no-open-quote;  
        box-sizing: border-box;
        width: ${size};
        height: ${size};
        border-radius: 50%;
        background: ${color};
        position: absolute;
        left: 0;
        top: 0;
        animation: aniload-pulse 2s linear infinite;
      }
      .aniload-pulse::after {
        animation-delay: 1s;
      }
      
      @keyframes aniload-pulse {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
          `;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aniload-pulse"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css));
}

exports.Pulse = Pulse;
exports.Ring = Ring;
