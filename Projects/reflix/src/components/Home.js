import React, { Component } from "react";
import User from "./User";
import "../styles/home.css";

class Home extends Component {
  changeCurrUser = (newUserId) => {
    this.props.changeCurrUser(newUserId);
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Who's Watching?</h1>{" "}
        {/* {this.props.users.map((user) => (
          <User changeCurrUser={this.changeCurrUser} user={user} />
        ))} */}
      </div>
    );
  }
}

export default Home;
