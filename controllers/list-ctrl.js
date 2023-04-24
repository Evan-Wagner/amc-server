import List from '../models/list-model.js';

const createList = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a list',
        });
    }

    const list = new List(body);

    if (!list) {
        return res.status(400).json({ success: false, error: err });
    }

    try {
        await list.save();
        return res.status(201).json({
            success: true,
            id: list._id,
            message: 'List created!',
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'List not created!',
        });
    }
};

const updateList = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    try {
        const list = await List.findOne({ _id: req.params.id });

        if (!list) {
            return res.status(404).json({
                message: 'List not found!',
            });
        }

        list.name = body.name;
        list.spotifyPlaylistId = body.spotifyPlaylistId;

        await list.save();

        return res.status(200).json({
            success: true,
            id: list._id,
            message: 'List updated!',
        });
    } catch (error) {
        return res.status(404).json({
            error,
            message: 'List not updated!',
        });
    }
};

const deleteList = async (req, res) => {
    try {
        const list = await List.findOneAndDelete({ _id: req.params.id });

        if (!list) {
            return res.status(404).json({ success: false, error: 'List not found' });
        }

        return res.status(200).json({ success: true, data: list });
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }
};

const getListById = async (req, res) => {
    try {
        const list = await List.findOne({ _id: req.params.id });

        if (!list) {
            return res.status(404).json({ success: false, error: 'List not found' });
        }

        return res.status(200).json({ success: true, data: list });
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }
};

const getLists = async (req, res) => {
    try {
        const lists = await List.find().exec();
        res.status(200).json(lists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {
    createList,
    updateList,
    deleteList,
    getLists,
    getListById,
};
