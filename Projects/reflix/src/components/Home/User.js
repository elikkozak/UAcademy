import React, { Component } from "react";
import { Link } from "react-router-dom";
import renderUser from "../../styles/user.js";
import "../../styles/user.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      userRenderer: new renderUser(),
    };
  }

  changeCurrUser = () => {
    this.props.changeCurrUser(this.props.user.id);
  };

  render() {
    let currUser = this.props.user;
    return (
      <Link to={"/catalog"} onClick={this.changeCurrUser}>
        {this.state.userRenderer.userProfileCreator(currUser.id, currUser.name)}
      </Link>
    );
  }
}

export default User;
