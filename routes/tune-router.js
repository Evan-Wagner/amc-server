import express from 'express';
const router = express.Router();

import {
    createTune,
    updateTune,
    deleteTune,
    getTunes,
    getTuneById,
} from '../controllers/tune-ctrl.js';

router.post('/tune', createTune);
router.put('/tune/:id', updateTune);
router.delete('/tune/:id', deleteTune);
router.get('/tune/:id', getTuneById);
router.get('/tunes', getTunes);

export default router;