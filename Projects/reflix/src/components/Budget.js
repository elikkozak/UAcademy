import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/budget.css";

class Budget extends Component {
  // changeBalance = () => {
  //   this.props.changeBalance(this.props.user.id);
  // };

  render() {
    return <div id="budget">Budget: ${this.props.budget}.0</div>;
  }
}

export default Budget;
