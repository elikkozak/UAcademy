import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Movie extends Component {
  render() {
    let currMovie = this.props.movie;
    return (
      <Link to={`/movies/${currMovie.id}`}>
        <div>{currMovie.title}</div>
      </Link>
    );
  }
}

export default Movie;
