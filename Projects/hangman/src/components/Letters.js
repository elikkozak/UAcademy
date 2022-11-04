import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available Letters</div>
        {Object.keys(this.props.letterStatus).map(letter =>
            <Letter isSelcted = {this.props.letterStatus[letter]} key={letter} letter={letter} />
        )}
      </div>
    );
  }
}

export default Letters;
