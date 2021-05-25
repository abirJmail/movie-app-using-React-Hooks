import MovieList from './components/MovieList'
import './App.css';
import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {list} from './data'
import Filter from './components/Filter';
import MovieAdd from './components/MovieAdd';
import SearchBox from './components/search'


function App() {
  const [movies, setMovies] = useState(list);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

 
  return (
    <div className="App">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
      
    </div>
  );
        }



export default App;
