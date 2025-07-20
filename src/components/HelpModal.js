// src/components/HelpModal.js
import React from "react";

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Hangman Game Rules</h2>
        <ul>
          <li>Guess the hidden word one letter at a time</li>
          <li>You have 6 attempts before the hangman is complete</li>
          <li>Correct guesses reveal the letter in the word</li>
          <li>Incorrect guesses add a part to the hangman figure</li>
          <li>Win by guessing all letters before running out of attempts</li>
        </ul>
        <button onClick={onClose} className="close-btn">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
