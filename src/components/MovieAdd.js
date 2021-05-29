import React from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import "../App.css";

const MovieAdd = ({movies,setMovies}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        setMovies([...movies, newMovie]);
        setmyInput('');
        event.preventDefault();
    };

    return (
        <div className='movieAdd'>
                <hr /> <hr /> <hr /><hr />
            <Button variant="primary" className='buttonAdd' onClick={handleShow}>
            Add Disney Movie
            </Button>
            <hr />
            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add Disney Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <label>Title : </label> <br/>
                <input type="text"  name="title" value={setMovies.title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Image : </label><br/>
                <input type="" myInput={setmyInput} name="img"  value={setMovies.img} onChange={(e) => setImg(e.target.value)}/>
            </div>
            <div>
                <label>Description : </label><br/>
                <input type="" myInput={setmyInput} name="description" value={setMovies.description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <label>PosterURL : </label><br/>
                <input type="" myInput={setmyInput} name="posterURL" value={setMovies.posterURL} onChange={(e) => setPosterURL(e.target.value)}/>
            </div>
            <div>
                <label>Rating : </label> <br/>
                <input type="" myInput={setmyInput} name="rating" value={setMovies.rating} onChange={(e) => setRating(e.target.value)}/>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Close </Button>
                <Button variant="primary" className='buttonAdd' onClick={(M)=>handelClick (M)}> Save Changes </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieAdd
