import MultiSelect from "react-multi-select-component";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios";

function AddMovie() {

    const dispatch = useDispatch();

    const genreOptions = [
        { label: 'Adventure', value: 'Adventure'}, 
        { label: 'Animated', value: 'Animated' }, 
        { label: 'Biographical', value: 'Biographical' }, 
        { label: 'Comedy', value: 'Comedy' },
        { label: 'Disaster', value: 'Disaster' }, 
        { label: 'Drama', value: 'Drama' }, 
        { label: 'Epic', value: 'Epic' }, 
        { label: 'Fantasy', value: 'Fantasy' }, 
        { label: 'Musical', value: 'Musical' },
        { label: 'Romantic', value: 'Romantic' }, 
        { label: 'Science Fiction', value: 'Science Fiction' }, 
        { label: 'Space-Opera', value: 'Space-Opera' }, 
        { label: 'Superhero', value: 'Superhero' }
    ];

    const [ newMovieTitle, setNewMovieTitle ] = useState( '');
    const [ newMoviePosterUrl, setNewMoviePosterUrl ] = useState( '' );
    const [ newMovieDescription, setNewMovieDescription ] = useState( '' );
    const [ selectedGenres, setSelectedGenres ] = useState( [] );
    const [ genreId, setGenreId ] = useState( 0 );

    const saveMovie = () => {

        selectedGenres.map( newGenre => {
            console.log( 'in selectedGenres map', newGenre )
            if( newGenre.label === 'Adventure'){
                setGenreId( prevState => prevState + 1 );
            }
        })

        let newMovie = {
            title: newMovieTitle,
            poster: newMoviePosterUrl,
            description: newMovieDescription,
            genre_id: genreId
        }

        dispatch( { type: 'SAVE_MOVIE', payload: newMovie } );

        axios.post( '/api/movie', newMovie ).then( (response )=>{
            console.log( 'back from addMovie Post', reponse );
        }).catch( error => {
            console.log( 'error in our Post', error )
        })

    }

    return (
        <>
            <h2>Add a Movie:</h2>
            <label>Movie Title </label>
            <input type='text' onChange={ ( event ) => setNewMovieTitle( event.target.value )}></input><br />
            <label>Movie Poster URL </label>
            <input type='text' onChange={ ( event ) => setNewMoviePosterUrl( event.target.value )}></input><br />
            <label>Movie Description </label>
            <input type='text' onChange={ ( event ) => setNewMovieDescription( event.target.value )}></input>
            <div>
                <pre>{JSON.stringify(selectedGenres)}</pre>
                <h4>Add Genres:</h4>
                <MultiSelect
                options={ genreOptions }
                value={ selectedGenres }
                onChange={ setSelectedGenres } 
                labelledBy="Add-Movie-Genres"
                />
            </div><br />
            <button onClick={ (event) => saveMovie() }>Save Movie</button>
            <Link to={'/'}>
                <button>Cancel</button>
            </Link>

        </>
    )
}

export default AddMovie;