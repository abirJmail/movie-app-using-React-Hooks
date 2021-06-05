import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "../App.css";

const MovieList = ({ movies}) => {

  return (
    
    <div className="my-main">
            <hr />
      <h1 style={{color: 'rgb(221, 217, 217)'}}> Popular Disney Movies</h1> <hr />
      <h2 style={{color: 'rgb(221, 217, 217)'}}>Watch as much as you want, anytime you want...</h2>
      <MovieCard movies={movies} /> <hr />
    </div>
  );
};
export default MovieList;
