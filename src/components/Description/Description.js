import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import  './Description.css'

const Description = ({match, movies}) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(movies.find(el=>el.title ===(match.params.title)))
      }, []);
      return (
          <div className="description">
            <img className="img" src={movie.image} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.text}</p>
            <h3>Directed By : </h3>
            <p>{movie.direct}</p>
            <div className="url" >
            <a href={movie.posterURL} className='home'> <button className='home' >Download NOW! </button> </a>
            <Link to={`/`}><button className='home' > Back to the Home Page </button></Link>
            </div>

          </div>
      );
    };
    

export default Description

