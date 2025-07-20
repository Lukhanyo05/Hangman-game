// src/components/HangmanFigure.js
import React from "react";

/**
 * Visual Hangman Figure Component
 * Shows progressive hangman drawing based on wrong guesses
 * Personal touch: Added color changes as game progresses
 */
const HangmanFigure = ({ wrongGuesses }) => {
  // Hangman parts with conditional rendering
  const parts = [
    // Head (appears after 1 wrong guess)
    wrongGuesses >= 1 && (
      <circle cx="150" cy="70" r="20" key="head" className="hangman-part" />
    ),
    // Body (appears after 2 wrong guesses)
    wrongGuesses >= 2 && (
      <line
        x1="150"
        y1="90"
        x2="150"
        y2="150"
        key="body"
        className="hangman-part"
      />
    ),
    // Left arm (appears after 3 wrong guesses)
    wrongGuesses >= 3 && (
      <line
        x1="150"
        y1="120"
        x2="120"
        y2="100"
        key="left-arm"
        className="hangman-part"
      />
    ),
    // Right arm (appears after 4 wrong guesses)
    wrongGuesses >= 4 && (
      <line
        x1="150"
        y1="120"
        x2="180"
        y2="100"
        key="right-arm"
        className="hangman-part"
      />
    ),
    // Left leg (appears after 5 wrong guesses)
    wrongGuesses >= 5 && (
      <line
        x1="150"
        y1="150"
        x2="120"
        y2="180"
        key="left-leg"
        className="hangman-part danger"
      />
    ),
    // Right leg (appears after 6 wrong guesses - game over)
    wrongGuesses >= 6 && (
      <line
        x1="150"
        y1="150"
        x2="180"
        y2="180"
        key="right-leg"
        className="hangman-part danger"
      />
    ),
  ].filter(Boolean);

  return (
    <svg height="250" width="200" className="hangman-figure">
      {/* Gallows structure (always visible) */}
      <line x1="60" y1="20" x2="60" y2="230" className="gallows" />
      <line x1="60" y1="20" x2="150" y2="20" className="gallows" />
      <line x1="150" y1="20" x2="150" y2="50" className="gallows" />

      {/* Conditionally rendered hangman parts */}
      {parts}
    </svg>
  );
};

export default HangmanFigure;
