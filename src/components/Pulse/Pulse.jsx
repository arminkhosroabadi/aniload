import React from "react";

export function Pulse({ color = "black", size = "64px" }) {
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
  return (
    <div className="aniload-pulse">
      <style>{css}</style>
    </div>
  );
}
