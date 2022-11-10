import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Movie extends Component {
  render() {
    return <div>{this.props.movie.title}</div>;
  }
}

export default Movie;
