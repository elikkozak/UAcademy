import React, { Component } from "react";
import Budget from "./Budget";
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
    let newValue = e.target.value;
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
        <Budget budget={this.props.user.balance} />
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
