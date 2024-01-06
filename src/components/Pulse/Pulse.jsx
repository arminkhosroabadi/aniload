import React from "react";

export function Pulse({ color = "black", size = "64px" }) {
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
  return (
    <div class="aniload-pulse">
      <style>{css}</style>
      <div></div>
      <div></div>
    </div>
  );
}
