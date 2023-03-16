const Movie = require('../models/movie-model')

const createMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    try {
        await movie.save()
        return res.status(201).json({
            success: true,
            id: movie._id,
            message: 'Movie created!',
        })
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Movie not created!',
        })
    }
}

const updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    try {
        const movie = await Movie.findOne({ _id: req.params.id })

        if (!movie) {
            return res.status(404).json({
                message: 'Movie not found!',
            })
        }

        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating

        await movie.save()

        return res.status(200).json({
            success: true,
            id: movie._id,
            message: 'Movie updated!',
        })
    } catch (error) {
        return res.status(404).json({
            error,
            message: 'Movie not updated!',
        })
    }
}

const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({ _id: req.params.id })

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    } catch (error) {
        return res.status(400).json({ success: false, error })
    }
}

const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findOne({ _id: req.params.id })

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    } catch (error) {
        return res.status(400).json({ success: false, error })
    }
}

const getMovies = async (req, res) => {
    try {
      const movies = await Movie.find().exec()
      res.status(200).json(movies)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}