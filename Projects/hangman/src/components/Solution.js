import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        {[...this.props.solution.word].map((letter, index) => (
          <Letter
            key={index}
            letter={this.props.letterStatus[letter] ? letter : " _ "}
          />
        ))}
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
