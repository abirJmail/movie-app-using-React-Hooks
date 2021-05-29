import MovieList from './components/MovieList'
import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {list,series} from './data'
import MovieAdd from './components/MovieAdd';
import SearchBox from './components/search'

function App() {

  const [Series, setSeries] = useState(series);
  const [movies, setMovies] = useState(list);
  const [myInput, setmyInput] = useState('');
  const [state, setState] = useState({ rating:0,} );
  
  return (
    
    <div className="App">
      <SearchBox  setmyInput={setmyInput} setState={setState} state={state} />
      <MovieList Series={Series} movies={movies.filter((el)=>el.title.toUpperCase().includes(myInput.toUpperCase().trim())&& el.rating >= state.rating)}  />
      <MovieAdd  setMovies={setMovies} movies={movies} />
      
    </div>
  );
        }



export default App;
