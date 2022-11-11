import React, { Component } from "react";
import Movie from "./Movie";
import "../styles/movies.css";


class Movies extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };

  render() {
    return (
      <div className="movies-container">
        <div className="movies">
          {this.props.movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              toggleMovieRent={this.toggleMovieRent}
              isRented={movie.isRented}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
