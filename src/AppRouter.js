import React from 'react'
import {  Route,Switch } from 'react-router-dom';
import Description from './components/Description/Description';
import MovieList from './components/MovieList';

const AppRouter = ({movies , setMovies, Series }) =>  (
        
            <Switch>
            <Route exact path={`/`} 
            render={ () => <MovieList movies={movies} setMovies={setMovies} Series={Series} />}
            />

            <Route path={`/Description/:title`} 
            render={ (props) => <Description movies={movies} {...props} />}
            />
            
            </Switch>
       
    )

export default AppRouter