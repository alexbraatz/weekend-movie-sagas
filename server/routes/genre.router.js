const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const sqlQuery = `SELECT movies_genres.id, "movies".id AS movie_id, "movies".title, "genres".name AS genre FROM "movies_genres"
  JOIN "movies" ON "movies".id = "movies_genres".movie_id
  JOIN "genres" ON "genres".id = "movies_genres".genre_id;`
  pool.query( sqlQuery ).then( result => {
    res.send( result.rows );
  }).catch( error =>{
    console.log( 'genre router GET error', error );
    res.sendStatus(500)
  })
  
});

module.exports = router;