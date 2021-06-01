import React from "react";
import StarRatingComponent from "react-star-rating-component";
import MovieCard from "./MovieCard";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

const MovieList = ({ movies,Series }) => {

  return (
    
    <div className="my-main">
            <hr />
      <h1 style={{color: 'rgb(221, 217, 217)'}}> Popular Disney Movies</h1> <hr />
      <h2 style={{color: 'rgb(221, 217, 217)'}}>Watch as much as you want, anytime you want...</h2>
      <MovieCard movies={movies} /> <hr />
      <h2 style={{color: 'rgb(221, 217, 217)'}}>There’s even more to watch.</h2>
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

    </div>
  );
};
export default MovieList;
