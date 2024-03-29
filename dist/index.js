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
    display: inline-block;
    position: relative;
    width: ${size};
    height: ${size};
  }
  .aniload-pulse div {
    position: absolute;
    border: 4px solid ${color};
    opacity: 1;
    border-radius: 50%;
    animation: aniload-pulse 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .aniload-pulse div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes aniload-pulse {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  
          `;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    class: "aniload-pulse"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css), /*#__PURE__*/React__default["default"].createElement("div", null), /*#__PURE__*/React__default["default"].createElement("div", null));
}

function CircleBar({
  color = "black",
  size = "10px"
}) {
  const css = `.aniload-circle-bar {
        width: ${size};
        height: ${size};
        border-radius: 50%;
        display: block;
        margin: 15px auto;
        position: relative;
        color: ${color};
        left: -100px;
        box-sizing: border-box;
        animation: shadowRolling 2s linear infinite;
      }
      
      @keyframes shadowRolling {
        0% {
          box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
        }
        12% {
          box-shadow: 100px 0 ${color}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
        }
        25% {
          box-shadow: 110px 0 ${color}, 100px 0 ${color}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
        }
        36% {
          box-shadow: 120px 0 ${color}, 110px 0 ${color}, 100px 0 ${color}, 0px 0 rgba(255, 255, 255, 0);
        }
        50% {
          box-shadow: 130px 0 ${color}, 120px 0 ${color}, 110px 0 ${color}, 100px 0 ${color};
        }
        62% {
          box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 ${color}, 120px 0 ${color}, 110px 0 ${color};
        }
        75% {
          box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${color}, 120px 0 ${color};
        }
        87% {
          box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${color};
        }
        100% {
          box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
        }
      }`;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aniload-circle-bar"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css));
}

function SquareDuplication({
  color = "black",
  size = "5px"
}) {
  const css = `.aniload-square-duplication {
        height: ${size};
        width: ${size};
        color: ${color};
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px;
        animation: aniload-square-duplication-animation 6s infinite;
      }

      @keyframes aniload-square-duplication-animation {
        0% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
        8.33% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px;
        }
        16.66% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px;
        }
        24.99% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        33.32% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px -10px 0 5px;
        }
        41.65% {
          box-shadow: 10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px -10px 0 5px;
        }
        49.98% {
          box-shadow: 10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px;
        }
        58.31% {
          box-shadow: -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        66.64% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        74.97% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        83.3% {
          box-shadow: -10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        91.63% {
          box-shadow: -10px -10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        100% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
      }

    `;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aniload-square-duplication"
  }, /*#__PURE__*/React__default["default"].createElement("style", null, css));
}

exports.CircleBar = CircleBar;
exports.Pulse = Pulse;
exports.Ring = Ring;
exports.SquareDuplication = SquareDuplication;
