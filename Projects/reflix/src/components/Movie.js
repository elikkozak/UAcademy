import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/movie.css";

class Movie extends Component {
  toggleMovieRent = () => {
    let movieId = this.props.movie.id;
    this.props.toggleMovieRent(movieId);
  };

  render() {
    let currMovie = this.props.movie;
    return (
      <div className="movie">
        <Link to={`/movies/${currMovie.id}`}>
          <img src={currMovie.img} />
          <p>{currMovie.title}</p>
        </Link>
        <i
          className={`fa ${this.props.isRented ? "fa-minus" : "fa-plus"}`}
          onClick={this.toggleMovieRent}
        ></i>
      </div>
    );
  }
}

export default Movie;
