import express from 'express';
const router = express.Router();

import {
    createTune,
    updateTune,
    deleteTune,
    getTunes,
    getTuneById,
} from '../controllers/tune-ctrl.js';

router.post('/', createTune);
router.put('/:id', updateTune);
router.delete('/:id', deleteTune);
router.get('/:id', getTuneById);
router.get('/', getTunes);

export default router;