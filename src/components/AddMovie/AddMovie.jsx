import MultiSelect from "react-multi-select-component";
import React, { useState } from "react";

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

    const [ selectedGenres, setSelectedGenres ] = useState( [] );

    return (
        <>
            <h2>Add a Movie!</h2>
            <label>Movie Title </label>
            <input type='text'></input><br />
            <label>Movie Poster URL </label>
            <input type='text'></input><br />
            <label>Movie Description </label>
            <input type='text'></input>
            {/* <Dropdown options={ genreOptions }placeholder='Add Genre'>

            </Dropdown> */}
            <div>
                <MultiSelect
                options={ genreOptions }
                value={ selectedGenres }
                onChange={ setSelectedGenres } 
                labelledBy="Add Movie Genres"
                />
            </div>

        </>
    )
}

export default AddMovie;