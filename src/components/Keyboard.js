// src/components/Keyboard.js
import React from "react";

const Keyboard = ({ guessedLetters, onGuess, disabled }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
          className={`key ${
            guessedLetters.includes(letter)
              ? disabled
                ? "disabled"
                : "used"
              : ""
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
