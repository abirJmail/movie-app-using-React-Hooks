import React from "react";
import StarRatingComponent from "react-star-rating-component";
import MovieAdd from "./MovieAdd";
import MovieCard from "./MovieCard";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

const MovieList = ({ movies }) => {
  return (
    <div className="my-main">
      <Carousel className="carousel">
        {movies.map((movie) => (
          <Carousel.Item>
            <img className="d-block w-100" src={movie.img} alt="First slide" />
            <Carousel.Caption>
              <h3> {movie.title}</h3>
              <StarRatingComponent
                name="rate2"
                editing={false}
                starCount={5}
                value={movie.rating}
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>


        <MovieCard movies={movies} />
    
    </div>
  );
};
export default MovieList;
