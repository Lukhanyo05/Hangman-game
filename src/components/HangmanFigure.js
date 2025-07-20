// src/components/HangmanFigure.js
import React from "react";

const HangmanFigure = ({ wrongGuesses }) => {
  const parts = [
    // Head
    wrongGuesses >= 1 && <circle cx="150" cy="70" r="20" key="head" />,
    // Body
    wrongGuesses >= 2 && <line x1="150" y1="90" x2="150" y2="150" key="body" />,
    // Left arm
    wrongGuesses >= 3 && (
      <line x1="150" y1="120" x2="120" y2="100" key="left-arm" />
    ),
    // Right arm
    wrongGuesses >= 4 && (
      <line x1="150" y1="120" x2="180" y2="100" key="right-arm" />
    ),
    // Left leg
    wrongGuesses >= 5 && (
      <line x1="150" y1="150" x2="120" y2="180" key="left-leg" />
    ),
    // Right leg
    wrongGuesses >= 6 && (
      <line x1="150" y1="150" x2="180" y2="180" key="right-leg" />
    ),
  ].filter(Boolean);

  return (
    <svg height="250" width="200" className="hangman-figure">
      {/* Gallows */}
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="60" y1="20" x2="150" y2="20" />
      <line x1="150" y1="20" x2="150" y2="50" />

      {/* Hangman parts */}
      {parts}
    </svg>
  );
};

export default HangmanFigure;
