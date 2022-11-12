import React, { Component } from "react";
import RentedMovies from "./RentedMovies";
import UnRentedMovies from "./UnRentedMovies";
import "../styles/movies.css";

class Movies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };

  render() {
    let rentedMovies = this.props.movies.filter((movie) => movie.isRented);
    let unRentedMovies = this.props.movies.filter((movie) => !movie.isRented);
    return (
      <div className="all-movies-container">
        {rentedMovies.length > 0 ? (
          <RentedMovies
            movies={rentedMovies}
            toggleMovieRent={this.toggleMovieRent}
          />
        ) : null}
        {unRentedMovies.length > 0 ? (
          <UnRentedMovies
            movies={unRentedMovies}
            toggleMovieRent={this.toggleMovieRent}
          />
        ) : null}
        {/* <div className="movies"> */}
        {/* {this.props.movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              toggleMovieRent={this.toggleMovieRent}
              isRented={movie.isRented}
            />
          ))} */}
        {/* </div> */}
      </div>
    );
  }
}

export default Movies;
