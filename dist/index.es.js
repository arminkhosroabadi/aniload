import React from 'react';

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
  return /*#__PURE__*/React.createElement("div", {
    className: "aniload-ring"
  }, /*#__PURE__*/React.createElement("style", null, css));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "aniload-pulse"
  }, /*#__PURE__*/React.createElement("style", null, css));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "aniload-circle-bar"
  }, /*#__PURE__*/React.createElement("style", null, css));
}

export { CircleBar, Pulse, Ring };
