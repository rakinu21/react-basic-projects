import React, { useState } from 'react';
import './style.css';

const RandomColor = () => {
  const [color, setColor] = useState('#131313');
  const [mode, setMode] = useState('hex'); // track current mode

  // Generate hex color
  function generateHexaColor() {
    const hexavalue = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += hexavalue[Math.floor(Math.random() * hexavalue.length)];
    }
    setColor(hex);
    setMode('hex');
  }

  // Generate rgb color
  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
    setMode('rgb');
  }

  // Generate random color (choose randomly between hex & rgb)
  function generateRandomColor() {
    const randomChoice = Math.random() > 0.5 ? 'hex' : 'rgb';
    if (randomChoice === 'hex') {
      generateHexaColor();
    } else {
      generateRgbColor();
    }
    setMode('random');
  }

  return (
    <section id="random-color" style={{ backgroundColor: color }}>
      <div className="controller">
        <button className="hexaColor" onClick={generateHexaColor}>
          Hexa color
        </button>
        <button className="rgb-color" onClick={generateRgbColor}>
          Rgb color
        </button>
        <button className="random color" onClick={generateRandomColor}>
          Random color
        </button>
      </div>

      <h2 className="text-color">{mode} color</h2>
      <h1 className="color-value">{color}</h1>
    </section>
  );
};

export default RandomColor;
