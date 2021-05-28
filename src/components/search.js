import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import { useState,useEffect } from "react";




const SearchBox = (props) => {

    const [state, setState] = useState({ rating:1,} );

	const onStarClick=(nextValue, prevValue, name) =>{
		setState({rating: nextValue});    }
		
	return (
		<div className='search'>
		<div  className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
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