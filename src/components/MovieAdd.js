import React, { Component } from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Modal from 'react-bootstrap/Modal'
import { useState,useEffect } from "react";
import {list} from '../data'


const MovieAdd = ({movies,setMovies}) => {

    const [myInput, setmyInput] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

     const handelClick = (event) => {
        let newMovie ={
            id :uuidv4(),
            title,
            description,
            img,
            posterURL,
            rating,
        }
        //setMovies({movies : movies.concat(newMovie) })
        setMovies([...movies, newMovie]);
        setmyInput('');
        event.preventDefault();
  };


    return (
        <div className='movieAdd'>
            <Modal.Dialog>
  
    <Modal.Title>Add Disney Movie </Modal.Title>
  <Modal.Body>
    <div>
        <label>Title : </label>
        <input type="text"  name="title" value={setMovies.title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div>
        <label>Image : </label>
        <input type="" myInput={setmyInput} name="img"  value={setMovies.img} onChange={(e) => setImg(e.target.value)}/>
    </div>
    <div>
        <label>Description : </label>
        <input type="" myInput={setmyInput} name="description" value={setMovies.description} onChange={(e) => setDescription(e.target.value)}/>
    </div>
    <div>
        <label>PosterURL : </label>
        <input type="" myInput={setmyInput} name="posterURL" value={setMovies.posterURL} onChange={(e) => setPosterURL(e.target.value)}/>
    </div>
    <div>
        <label>Rating : </label>
        <input type="" myInput={setmyInput} name="rating" value={setMovies.rating} onChange={(e) => setRating(e.target.value)}/>
    </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary"   onClick={(M)=>handelClick (M)}>Save </Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    )
}

export default MovieAdd
