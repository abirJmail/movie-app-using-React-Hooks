import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    return (
        <div className="movies-list" >
            {movies.map((movie,i) => ( 
                <div key={i}  className='movie' style={{backgroundImage: `url(${movie.img})`, borderRadius: '15px'}}>
                    <div className='movie__cd'>  
                    <h2 className='movie__title'>{movie.title}</h2>
                    <span className='movie__description'>{movie.description}</span>
                    </div>
                <div className='movie__imdb'>
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={movie.rating}/>
                <Link to={`/Description/${movie.title}`}><button className='movie__imdb-button' target='blank'>MORE</button></Link>
        </div>
    </div>))}
        </div>
    )
}

export default MovieCard
