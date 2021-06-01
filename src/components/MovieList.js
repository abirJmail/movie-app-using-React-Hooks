import React from "react";
import StarRatingComponent from "react-star-rating-component";
import MovieCard from "./MovieCard";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

const MovieList = ({ movies,Series }) => {

  return (
    
    <div className="my-main">
      <h1 style={{color: 'rgb(221, 217, 217)'}}>The best Disney Movies</h1>
      <Carousel className="carousel" >
        {Series.map((movie) => (
          <Carousel.Item>
            <img className="d-block w-100" style={{ borderRadius: '15px'}} src={movie.img} alt="First slide" />
            <Carousel.Caption style={{ color: '#000'}}>
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
      <hr />
      <h1 style={{color: 'rgb(221, 217, 217)'}}>Movies</h1> <hr />
      <MovieCard movies={movies} /> <hr />
    </div>
  );
};
export default MovieList;
