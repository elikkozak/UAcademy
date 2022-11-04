import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        {
        [...this.props.solution.word].map((letter,index) => <Letter key = {index} letter ={letter} />)
        }
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
