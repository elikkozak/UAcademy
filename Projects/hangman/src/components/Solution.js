import React, { Component } from "react";

class Solution extends Component {
  render() {
    return (
      <div>
        {new Array(4).fill(<span>_ </span>)}
        <div>
          <em>HINT HERE</em>
        </div>
      </div>
    );
  }
}

export default Solution;
