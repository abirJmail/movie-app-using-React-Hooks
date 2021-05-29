import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import { useState} from "react";


const SearchBox = ({setState,setmyInput}) => {
    
	const onStarClick=(nextValue, prevValue, name) =>{
		setState({rating: nextValue});    }
		
	return (
		<div className='search'>
		<div  className='col col-sm-4'>
			<input
				className='form-control'
				value={setmyInput.value}
				onChange={(event) => setmyInput(event.target.value)}
				placeholder='Type to search...'
			></input>

		</div>
		
		<StarRatingComponent className='rating'
                name="rate1" 
                starCount={5}
                value={useState.rating}
                onStarClick={onStarClick}
                />
		</div>
	);
};

export default SearchBox;