import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { list, series } from "./data";
import MovieAdd from "./components/MovieAdd/MovieAdd";
import SearchBox from "./components/Search/search";
import AppRouter from "./AppRouter";
import MovieCarousel from "./components/Carousel/MovieCarousel";

function App() {
  const [Series, setSeries] = useState(series);
  const [movies, setMovies] = useState(list);
  const [myInput, setmyInput] = useState("");
  const [state, setState] = useState({ rating: 0 });

  return (
    <div className="App">
      <SearchBox setmyInput={setmyInput} setState={setState} state={state} />
      <AppRouter
        setMovies={setMovies}
        movies={movies.filter(
          (el) =>
            el.title.toUpperCase().includes(myInput.toUpperCase().trim()) &&
            el.rating >= state.rating
        )}
      /> 
      <MovieCarousel Series={Series}/>
      <MovieAdd setMovies={setMovies} movies={movies} />
    </div>
  );
}

export default App;
