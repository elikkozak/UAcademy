import React, { Component } from "react";

import "../styles/searchBar.css";

class SearchBar extends Component {
  // inputHandler = () => {
  //   this.props.inputHandler(this.props.title);
  // };

  render() {
    return (
      <div class="wrap">
        <div class="search">
          <input
            name="title"
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
            onChange={this.props.inputHandler}
            value={this.props.title}
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
