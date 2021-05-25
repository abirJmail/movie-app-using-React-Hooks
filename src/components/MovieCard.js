import React from 'react'
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css'

const MovieCard = ({movies}) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => ( 
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.img} />
                        <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                        {movie.description}
                        </Card.Text>
                        <StarRatingComponent name="rate2" editing={false} starCount={5} value={movie.rating}/>
                        </Card.Body>
                        </Card>
                ))}
        </div>
    )
}

export default MovieCard
