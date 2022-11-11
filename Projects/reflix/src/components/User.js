import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";
import renderUser from "../styles/user.js";


class User extends Component {

  constructor() {
    super();
    this.state = {
    userRenderer : new renderUser()
    }
  }

  changeCurrUser = () => {
    this.props.changeCurrUser(this.props.user.id);
  };

  render() {
    let currUser = this.props.user
    return (
      <Link to={"/catalog"}>
        <div class="profile" onClick={this.changeCurrUser}>
          {this.state.userRenderer.userProfileCreator(currUser.id,currUser.name)}
        {/* <p>{this.props.user.name}</p> */}
        </div>
      </Link>
    );
  }
}

export default User;
