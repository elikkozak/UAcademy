import React, { Component } from "react";
import Movie from "./Movie";
import "../styles/movies.css";

class RentedMovies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };
  toggleShowCatalog = () => {
    this.props.toggleShowCatalog();
  };

  render() {
    return (
      <div>
        <h6>Rented:</h6>
        <div className="movies-rented">
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

export default RentedMovies;
