import React, { Component } from "react";
import Movie from "./Movie";
import "../../styles/movies.css";

class UnRentedMovies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };
  toggleShowCatalog = () => {
    this.props.toggleShowCatalog();
  };

  render() {
    return (
      <div className="movies-unrented-container">
        <h6>Catalog:</h6>
        <div className="movies-unrented">
          {this.props.movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              toggleMovieRent={this.toggleMovieRent}
              isRented={movie.isRented}
              toggleShowCatalog={this.toggleShowCatalog}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UnRentedMovies;
