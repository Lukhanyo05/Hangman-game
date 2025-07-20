// src/components/GameStatus.js
import React from "react";

const GameStatus = ({ gameStatus, word, attemptsLeft, onReset, onHelp }) => {
  return (
    <div className="game-status">
      {gameStatus === "won" && (
        <div className="message win">Congratulations! You won!</div>
      )}
      {gameStatus === "lost" && (
        <div className="message lose">Game Over! The word was: {word}</div>
      )}
      {gameStatus === "playing" && (
        <div className="attempts">Attempts left: {attemptsLeft}</div>
      )}

      <div className="controls">
        <button onClick={onReset} className="reset-btn">
          New Game
        </button>
        <button onClick={onHelp} className="help-btn">
          Help
        </button>
      </div>
    </div>
  );
};

export default GameStatus;
