import React, { Component } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

class Catalog extends Component {
  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };
  toggleShowCatalog = () => {
    this.props.toggleShowCatalog();
  };

  render() {
    return (
      <div>
        <SearchBar />
        <Movies
          movies={this.props.movies}
          toggleMovieRent={this.toggleMovieRent}
          toggleShowCatalog={this.toggleShowCatalog}
        />
      </div>
    );
  }
}

export default Catalog;
