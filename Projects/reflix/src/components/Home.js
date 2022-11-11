import React, { Component } from "react";
import User from "./User";

class Home extends Component {
  changeCurrUser = (newUserId) => {
    this.props.changeCurrUser(newUserId);
  };

  render() {
    return this.props.users.map((user) => (
      <User changeCurrUser={this.changeCurrUser} user={user} />
    ));
  }
}

export default Home;
