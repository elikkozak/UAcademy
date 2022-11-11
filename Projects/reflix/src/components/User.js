import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";

class User extends Component {
  changeCurrUser = () => {
    this.props.changeCurrUser(this.props.user.id);
  };

  render() {
    return (
      <Link to={"/catalog"}>
        <div class="profile" onClick={this.changeCurrUser}>
          <p>{this.props.user.name}</p>
        </div>
      </Link>
    );
  }
}

export default User;
