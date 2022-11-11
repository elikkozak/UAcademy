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
        <div className="profile-wrap">
          {this.props.users.map((user) => (
            <User
              key={user.id}
              changeCurrUser={this.changeCurrUser}
              user={user}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
