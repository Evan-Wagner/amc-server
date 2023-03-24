import Tune from '../models/tune-model.js';

const createTune = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tune',
        })
    }

    const tune = new Tune(body)

    if (!tune) {
        return res.status(400).json({ success: false, error: err })
    }

    try {
        await tune.save()
        console.log('Tune saved:', tune)
        return res.status(201).json({
            success: true,
            id: tune._id,
            message: 'Tune created!',
        })
    } catch (error) {
        console.error('Tune save error:', error)
        return res.status(400).json({
            error,
            message: 'Tune not created!',
        })
    }
}

const updateTune = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    try {
        const tune = await Tune.findOne({ _id: req.params.id })

        if (!tune) {
            return res.status(404).json({
                message: 'Tune not found!',
            })
        }

        tune.name = body.name
        tune.streamingUrls = body.streamingUrls
        tune.endorsements = body.endorsements
        tune.description = body.description

        await tune.save()

        return res.status(200).json({
            success: true,
            id: tune._id,
            message: 'Tune updated!',
        })
    } catch (error) {
        return res.status(404).json({
            error,
            message: 'Tune not updated!',
        })
    }
}

const deleteTune = async (req, res) => {
    try {
        const tune = await Tune.findOneAndDelete({ _id: req.params.id })

        if (!tune) {
            return res
                .status(404)
                .json({ success: false, error: `Tune not found` })
        }

        return res.status(200).json({ success: true, data: tune })
    } catch (error) {
        return res.status(400).json({ success: false, error })
    }
}

const getTuneById = async (req, res) => {
    try {
        const tune = await Tune.findOne({ _id: req.params.id })

        if (!tune) {
            return res
                .status(404)
                .json({ success: false, error: `Tune not found` })
        }

        return res.status(200).json({ success: true, data: tune })
    } catch (error) {
        return res.status(400).json({ success: false, error })
    }
}

const getTunes = async (req, res) => {
    try {
      const tunes = await Tune.find().exec()
      res.status(200).json(tunes)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

export {
    createTune,
    updateTune,
    deleteTune,
    getTunes,
    getTuneById,
};