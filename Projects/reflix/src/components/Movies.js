import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie  from "./Movie";


class Movies extends Component {
    render() {
        return (this.props.movies.map(movie =><Movie movie = {movie}/>))
      }
}

export default Movies;
