import React, { Component } from "react";

import "../styles/movieDescription.css";

class MovieDescription extends Component {
  render() {
    return (
      <div className="movie-description">
        <p id="title-description">
          {this.props.movie.title} ({this.props.movie.year})
        </p>
        <img src={this.props.movie.img}></img>
        <p>{this.props.movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDescription;
