import { Link } from 'react-router-dom'

function Details(props) {
    
    let movieDescription = props.location.movie.description

    let movieTitle = props.location.movie.title

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