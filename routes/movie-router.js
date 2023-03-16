const express = require('express')
const router = express.Router()

const MovieCtrl = require('../controllers/movie-ctrl')

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)
router.get('/api/movies', MovieCtrl.getMovies);

module.exports = router