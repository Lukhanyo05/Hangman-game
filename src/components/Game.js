// src/components/Game.js
import React, { Component } from "react";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import GameStatus from "./GameStatus";
import HelpModal from "./HelpModal";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.getRandomWord(),
      guessedLetters: [],
      maxAttempts: 6,
      gameStatus: "playing", // 'playing', 'won', 'lost'
      showHelp: false,
    };
  }

  wordList = [
    "REACT",
    "JAVASCRIPT",
    "DEVELOPER",
    "HANGMAN",
    "PROGRAMMING",
    "COMPONENT",
    "STATE",
    "PROPS",
  ];

  getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * this.wordList.length);
    return this.wordList[randomIndex];
  };

  handleGuess = (letter) => {
    if (
      this.state.gameStatus !== "playing" ||
      this.state.guessedLetters.includes(letter)
    ) {
      return;
    }

    const newGuessedLetters = [...this.state.guessedLetters, letter];
    const isCorrect = this.state.word.includes(letter);

    // Check win/lose conditions
    const isWon = this.state.word
      .split("")
      .every((ltr) => newGuessedLetters.includes(ltr));

    const attemptsLeft =
      this.state.maxAttempts -
      newGuessedLetters.filter((ltr) => !this.state.word.includes(ltr)).length;

    const isLost = attemptsLeft <= 0;

    this.setState({
      guessedLetters: newGuessedLetters,
      gameStatus: isWon ? "won" : isLost ? "lost" : "playing",
    });
  };

  resetGame = () => {
    this.setState({
      word: this.getRandomWord(),
      guessedLetters: [],
      gameStatus: "playing",
    });
  };

  toggleHelp = () => {
    this.setState((prevState) => ({ showHelp: !prevState.showHelp }));
  };

  render() {
    const { word, guessedLetters, maxAttempts, gameStatus, showHelp } =
      this.state;
    const wrongGuesses = guessedLetters.filter(
      (letter) => !word.includes(letter)
    );
    const attemptsLeft = maxAttempts - wrongGuesses.length;

    return (
      <div className="game-container">
        <h1>React Hangman</h1>

        <HangmanFigure wrongGuesses={wrongGuesses.length} />

        <WordDisplay word={word} guessedLetters={guessedLetters} />

        <GameStatus
          gameStatus={gameStatus}
          word={word}
          attemptsLeft={attemptsLeft}
          onReset={this.resetGame}
          onHelp={this.toggleHelp}
        />

        {gameStatus === "playing" && (
          <Keyboard
            guessedLetters={guessedLetters}
            onGuess={this.handleGuess}
            disabled={gameStatus !== "playing"}
          />
        )}

        <HelpModal isOpen={showHelp} onClose={this.toggleHelp} />
      </div>
    );
  }
}

export default Game;
