import React, { Component } from "react";
import RentedMovies from "./RentedMovies";
import UnRentedMovies from "./UnRentedMovies";
import "../../styles/movies.css";

class Movies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };

  toggleShowCatalog = () => {
    this.props.toggleShowCatalog();
  };

  render() {
    let movies = this.props.movies;
    let moviesBySearch = ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(this.props.title.toLowerCase())
        );
    let rentedMovies = moviesBySearch.filter((movie) => movie.isRented);
    let unRentedMovies = moviesBySearch.filter((movie) => !movie.isRented);
    return (
      <div className="all-movies-container">
        {rentedMovies.length > 0 ? (
          <RentedMovies
            movies={rentedMovies}
            toggleMovieRent={this.toggleMovieRent}
            toggleShowCatalog={this.toggleShowCatalog}
          />
        ) : null}
        {unRentedMovies.length > 0 ? (
          <UnRentedMovies
            movies={unRentedMovies}
            toggleMovieRent={this.toggleMovieRent}
            toggleShowCatalog={this.toggleShowCatalog}
          />
        ) : null}
      </div>
    );
  }
}

export default Movies;
