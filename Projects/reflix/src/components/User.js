import React, { Component } from "react";
import  '../styles/user.css'


class User extends Component {
  render() {
    return <div>
		<div class="profile">
            {this.props.user.name}
        </div>
    </div>;
  }
}

export default User;
