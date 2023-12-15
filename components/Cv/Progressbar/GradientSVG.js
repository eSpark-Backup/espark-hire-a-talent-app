import React from 'react';

function GradientSVG() {
  const idCSS = 'progress';
  const gradientTransform = `rotate(70)`;

  return (
    <svg style={{ height: 0, width: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="10%" stopColor="#8C818100" />
          <stop offset="60%" stopColor="#049583" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;
