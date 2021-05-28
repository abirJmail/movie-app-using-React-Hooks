import MovieList from './components/MovieList'
import './App.css';
import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {list} from './data'
import MovieAdd from './components/MovieAdd';
import SearchBox from './components/search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';



function App() {
  
  const [movies, setMovies] = useState(list);
  const [searchValue, setSearchValue] = useState('');
  ;

  return (
    <div className="App">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} setMovies={setMovies}/>
      <MovieAdd  setMovies={setMovies} movies={movies} />
      
    </div>
  );
        }



export default App;
