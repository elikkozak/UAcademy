import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";

class User extends Component {
  render() {
    return (
      <Link to={"/catalog"}>
        <div class="profile">
          <p>{this.props.user.name}</p>
        </div>
      </Link>
    );
  }
}

export default User;
