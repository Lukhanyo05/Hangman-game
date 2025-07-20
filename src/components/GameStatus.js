// src/components/GameStatus.js
import React from "react";

/**
 * GameStatus Component - Displays game state information and controls
 *
 * Responsibilities:
 * - Shows win/lose messages or remaining attempts
 * - Provides game control buttons (New Game, Help)
 * - Handles user interactions for game flow
 *
 * Props:
 * @param {string} gameStatus - Current game state ('playing', 'won', 'lost')
 * @param {string} word - The target word (shown when game is lost)
 * @param {number} attemptsLeft - Number of remaining attempts
 * @param {function} onReset - Callback for resetting the game
 * @param {function} onHelp - Callback for showing help modal
 *
 * Personal Touches:
 * - Custom victory/defeat messages
 * - Styled control buttons
 * - Clear attempt counter
 */
const GameStatus = ({ gameStatus, word, attemptsLeft, onReset, onHelp }) => {
  return (
    <div className="game-status">
      {/* Win/Lose Status Messages */}
      {gameStatus === "won" && (
        <div className="message win">🎉 Congratulations! You got it! 🎉</div>
      )}
      {gameStatus === "lost" && (
        <div className="message lose">
          💀 Game Over! Sorry. The word was: <strong>{word}</strong> 💀
        </div>
      )}

      {/* Attempts Counter (only shown during gameplay) */}
      {gameStatus === "playing" && (
        <div className="attempts">
          ❤️ Attempts left: <strong>{attemptsLeft}</strong>
        </div>
      )}

      {/* Game Control Buttons */}
      <div className="controls">
        <button
          onClick={onReset}
          className="reset-btn"
          aria-label="Start a new game"
        >
          🔄 New Game
        </button>
        <button
          onClick={onHelp}
          className="help-btn"
          aria-label="Show game instructions"
        >
          ❓ Help
        </button>
      </div>
    </div>
  );
};

export default GameStatus;
