import MultiSelect from "react-multi-select-component";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function AddMovie() {

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

    console.log( newMovieTitle );
    console.log( newMoviePosterUrl );
    console.log( newMovieDescription );

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
                <MultiSelect
                options={ genreOptions }
                value={ selectedGenres }
                onChange={ setSelectedGenres } 
                labelledBy="Add Movie Genres"
                />
            </div><br />
            <button>Save Movie</button>
            <Link to={'/'}>
                <button>Cancel</button>
            </Link>

        </>
    )
}

export default AddMovie;