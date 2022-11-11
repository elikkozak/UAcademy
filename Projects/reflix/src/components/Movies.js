import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

class Movies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };

  render() {
    return this.props.movies.map((movie) => <Movie key ={movie.id} movie={movie} toggleMovieRent = {this.toggleMovieRent} />);
  }
}

export default Movies;
