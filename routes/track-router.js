import express from 'express';
const router = express.Router();

import {
    createTrack,
    updateTrack,
    deleteTrack,
    getTracks,
    getTrackById,
} from '../controllers/track-ctrl.js';

router.post('/', createTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);
router.get('/:id', getTrackById);
router.get('/', getTracks);

export default router;