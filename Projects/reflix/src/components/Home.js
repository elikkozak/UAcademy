import React, { Component } from "react";
import User  from "./User";

class Home extends Component {
  render() {
    return this.props.users.map(user =><User user = {user}/>)
  }
}

export default Home;
