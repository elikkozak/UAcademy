import React, { Component } from "react";

class EndGame extends Component {
 

  render() {
    return <div>{this.props.gameWon ? "Congratulation" : "Maybe next time"}</div>;
  }
}

export default EndGame;
