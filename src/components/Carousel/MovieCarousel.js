import React from 'react'
import StarRatingComponent from "react-star-rating-component";
import "./MovieCarousel.css";
import Carousel from "react-bootstrap/Carousel";

const MovieCarousel = ({Series}) => {
    return (
        <div className="Carousel">
        <h2 style={{color: 'rgb(221, 217, 217)'}}>There’s even more to watch.</h2>
            <Carousel className="carousel" >
        {Series.map((movie,i) => (
          <Carousel.Item key={i} >
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
    )
}

export default MovieCarousel
