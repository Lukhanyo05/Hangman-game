// src/components/Game.js
import React, { useState, useEffect } from "react";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import GameStatus from "./GameStatus";
import HelpModal from "./HelpModal";

/**
 * Main Game Component - Manages all game state and logic
 * Created by: Lukhanyo
 * Features:
 * - Random word selection
 * - Game state management
 * - Win/lose conditions
 */
const Game = () => {
  // Personal touch: Custom word list focused on programming terms
  const wordList = [
    "REACT",
    "HOOKS",
    "REDUX",
    "ROUTER",
    "COMPONENT",
    "FIBER",
    "VIRTUALDOM",
    "PROPS",
    "STATE",
    "EFFECT",
    "Systems",
    "FUNCTION",
    "ASYNC",
    "PROMISE",
  ];

  // Game state variables
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'
  const [showHelp, setShowHelp] = useState(false);
  const maxAttempts = 6; // Classic hangman rules

  // Initialize game with a random word
  useEffect(() => {
    resetGame();
  }, []);

  /**
   * Selects a random word from wordList
   * @returns {string} Random word in uppercase
   */
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  /**
   * Handles letter guess logic
   * @param {string} letter - The guessed letter
   */
  const handleGuess = (letter) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    // Check win condition
    const isWon = word
      .split("")
      .every((ltr) => newGuessedLetters.includes(ltr));

    // Check lose condition
    const wrongGuesses = newGuessedLetters.filter((ltr) => !word.includes(ltr));
    const isLost = wrongGuesses.length >= maxAttempts;

    // Update game status
    if (isWon) setGameStatus("won");
    else if (isLost) setGameStatus("lost");
  };

  /**
   * Resets all game state for a new game
   */
  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setGameStatus("playing");
  };

  /**
   * Toggles help modal visibility
   */
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  // Calculate wrong guesses and attempts left
  const wrongGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );
  const attemptsLeft = maxAttempts - wrongGuesses.length;

  return (
    <div className="game-container">
      <h1>Lukhanyo's React Hangman</h1>

      <HangmanFigure wrongGuesses={wrongGuesses.length} />

      <WordDisplay word={word} guessedLetters={guessedLetters} />

      <GameStatus
        gameStatus={gameStatus}
        word={word}
        attemptsLeft={attemptsLeft}
        onReset={resetGame}
        onHelp={toggleHelp}
      />

      {gameStatus === "playing" && (
        <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
      )}

      <HelpModal isOpen={showHelp} onClose={toggleHelp} />
    </div>
  );
};

export default Game;
