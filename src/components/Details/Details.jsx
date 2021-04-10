import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function Details(props) {
    
    let movieDescription = props.location.movie.description
    let movieTitle = props.location.movie.title

    const dispatch = useDispatch();
    const genres = useSelector( store => store.genres );

    useEffect(()=>{
        dispatch({type: 'FETCH_GENRES' } );
    }, []);

    console.log( 'in details, genres', genres );

    return (
        <>
            <h2>{ JSON.stringify( movieTitle ) } Details:</h2>
            <Link to={'/'}>
                <button>Back to List</button>
            </Link>
            <p>{ JSON.stringify( movieDescription ) }</p>
        </>
    )
}

export default Details;