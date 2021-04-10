function Details(props) {
    
    let movieDescription = props.location.description.description

    let movieTitle = props.location.description.title

    // console.log( movieTitle );

    return (
        <>
            <h2>{ JSON.stringify( movieTitle ) } Details:</h2>
            <p>{ JSON.stringify( movieDescription ) }</p>
        </>
    )
}

export default Details