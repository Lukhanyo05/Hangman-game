// src/components/Keyboard.js
import React from "react";

/**
 * Interactive Keyboard Component
 * Personal touches:
 * - Color-coded key states
 * - Disabled letter feedback
 */
const Keyboard = ({ guessedLetters, onGuess }) => {
  // Generate alphabet array
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  /**
   * Determines keyboard button class based on guess state
   * @param {string} letter - The keyboard letter
   * @returns {string} CSS class names
   */
  const getKeyClass = (letter) => {
    if (!guessedLetters.includes(letter)) return "key";
    return guessedLetters.includes(letter) && !guessedLetters.includes(letter)
      ? "key wrong"
      : "key correct";
  };

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className={getKeyClass(letter)}
          aria-label={`Guess ${letter}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
