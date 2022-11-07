import React, { Component } from "react";

import "./App.css";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Score from "./components/Score";
import EndGame from "./components/EndGame";

const A_ASCII_CODE = 65;
const Z_ASCII_CODE = 90;

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "BYTES",
        hint: "HINT",
      },
      score: 100,
      gameFinished: false,
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = A_ASCII_CODE; i <= Z_ASCII_CODE; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  isGameWon = (letterStatus) => {
    // [...this.state.solution.word].forEach((letter) => {
    //   if (!this.state.letterStatus[letter]) {
    //     return false;
    //   }
    // });

    for (const letter of this.state.solution.word) {
      if (!letterStatus[letter]){
        return false
      }
  }

    return true;
  };

  updateScore = (letterStatus,letter) => {
    let newScore = 0;
    if (this.state.solution.word.includes(letter)) {
      newScore = this.state.score + 5;
    } else {
      newScore = this.state.score - 20;
    }
    this.setState({
      score: newScore,
    });

    if (newScore <= 0 || this.isGameWon(letterStatus)) {
      this.setState({
        gameFinished: true,
      });
    }
  };

  selectLetter = (letter) => {
    if (!this.state.letterStatus[letter]) {
      let letterStatusNew = { ...this.state.letterStatus };
      letterStatusNew[letter] = true;
      this.setState(
        {
          letterStatus: letterStatusNew,
        },
        this.updateScore(letterStatusNew,letter)
      );
    }
  };

  render() {
    let gameFinished = this.state.gameFinished;
    return (
      <div className="App">
        {gameFinished ? (
          <EndGame gameWon={this.state.score > 0} />
        ) : (
          <div>
            <Score score={this.state.score} />

            <Solution
              letterStatus={this.state.letterStatus}
              solution={this.state.solution}
            />
            <Letters
              selectLetter={this.selectLetter}
              letterStatus={this.state.letterStatus}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
