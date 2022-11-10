import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Catalog extends Component {
  render() {
    return (
      <div>
        Catalog
        <input
          id="movie-name-input"
            placeholder="Search"
        />
        <Movies movies={this.props.movies} />
      </div>
    );
  }
}

export default Catalog;
