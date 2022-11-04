import React, { Component } from "react";

import "./App.css";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Score from "./components/Score";

const A_ASCII_CODE = 65;
const Z_ASCII_CODE = 90;

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "word",
        hint: "hint",
      },
      score: 100,
    };
  }

  generateLetterStatuses() {
    let myObj = {};
    for (let i = A_ASCII_CODE; i <= Z_ASCII_CODE; i++) {
      myObj[String.fromCharCode(i)] = false;
    }
    return myObj;
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
