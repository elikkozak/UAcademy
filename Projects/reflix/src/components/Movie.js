import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Movie extends Component {
  toggleMovieRent = () => {
    let movieId = this.props.movie.id;
    this.props.toggleMovieRent(movieId);
  };

  render() {
    let currMovie = this.props.movie;
    return (
      <div>
        <Link to={`/movies/${currMovie.id}`}>
          <div>
            <span>{currMovie.title}</span>
          </div>
        </Link>
        <div>
          <button onClick={this.toggleMovieRent}> {currMovie.title}</button>
        </div>
      </div>
    );
  }
}

export default Movie;
