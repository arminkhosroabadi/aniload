import React from "react";

export function Ring({ color = "black", size = "64px" }) {
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

  return (
    <div className="aniload-ring">
      <style>{css}</style>
    </div>
  );
}
