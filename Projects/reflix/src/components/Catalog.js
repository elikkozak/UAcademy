import React, { Component } from "react";
import Movies from "./Movies";

class Catalog extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };

  render() {
    return (
      <div>
        Catalog
        <input id="movie-name-input" placeholder="Search" />
        <Movies
          movies={this.props.movies}
          toggleMovieRent={this.toggleMovieRent}
        />
      </div>
    );
  }
}

export default Catalog;
