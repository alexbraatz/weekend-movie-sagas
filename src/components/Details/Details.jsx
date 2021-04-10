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
        findGenres();
        dispatch({type: 'FETCH_GENRES' } );
    }, []);

    const findGenres = () => {
        
        let movieGenres = []

        genres.map( genre => {
            if( genre.title == movieTitle ){
                console.log( genre.genre )
                movieGenres.push( genre.genre )
            }
        })

        return movieGenres
    }

    

    return (
        <>
            <h2>{ JSON.stringify( movieTitle ) } Details:</h2>
            <Link to={'/'}>
                <button>Back to List</button>
            </Link>
            <p>{ JSON.stringify( movieDescription ) }</p>
            <h3>Genres</h3>
            <p>{ JSON.stringify( findGenres() ) }</p>

        </>
    )
}

export default Details;