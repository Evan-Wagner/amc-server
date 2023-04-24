import Track from '../models/track-model.js';

const createTrack = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a track',
        });
    }

    const track = new Track(body);

    if (!track) {
        return res.status(400).json({ success: false, error: err });
    }

    try {
        await track.save();
        return res.status(201).json({
            success: true,
            id: track._id,
            message: 'Track created!',
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Track not created!',
        });
    }
};

const updateTrack = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    try {
        const track = await Track.findOne({ _id: req.params.id });

        if (!track) {
            return res.status(404).json({
                message: 'Track not found!',
            });
        }

        track.title = body.title;
        track.url = body.url;
        track.source = body.source;
        track.imageUrl = body.imageUrl;

        await track.save();

        return res.status(200).json({
            success: true,
            id: track._id,
            message: 'Track updated!',
        });
    } catch (error) {
        return res.status(404).json({
            error,
            message: 'Track not updated!',
        });
    }
};

const deleteTrack = async (req, res) => {
    try {
        const track = await Track.findOneAndDelete({ _id: req.params.id });

        if (!track) {
            return res.status(404).json({ success: false, error: 'Track not found' });
        }

        return res.status(200).json({ success: true, data: track });
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }
};

const getTrackById = async (req, res) => {
    try {
        const track = await Track.findOne({ _id: req.params.id });

        if (!track) {
            return res.status(404).json({ success: false, error: 'Track not found' });
        }

        return res.status(200).json({ success: true, data: track });
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }
};

const getTracks = async (req, res) => {
    try {
        const tracks = await Track.find().exec();
        res.status(200).json(tracks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {
    createTrack,
    updateTrack,
    deleteTrack,
    getTracks,
    getTrackById,
};
