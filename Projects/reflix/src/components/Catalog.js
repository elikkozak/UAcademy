import React, { Component } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  inputHandler = (e) => {
    console.log(e);
    let newValue = e.target.value;
    console.log(newValue);
    this.setState({ title: newValue });
  };

  toggleMovieRent = (movieId) => {
    this.props.toggleMovieRent(movieId);
  };
  toggleShowCatalog = () => {
    this.props.toggleShowCatalog();
  };

  render() {
    return (
      <div>
        <SearchBar title={this.state.title} inputHandler={this.inputHandler} />
        <Movies
          title={this.state.title}
          movies={this.props.movies}
          toggleMovieRent={this.toggleMovieRent}
          toggleShowCatalog={this.toggleShowCatalog}
        />
      </div>
    );
  }
}

export default Catalog;
