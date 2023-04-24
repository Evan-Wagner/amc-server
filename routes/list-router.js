import express from 'express';
const router = express.Router();

import {
    createList,
    updateList,
    deleteList,
    getLists,
    getListById,
} from '../controllers/list-ctrl.js';

router.post('/', createList);
router.put('/:id', updateList);
router.delete('/:id', deleteList);
router.get('/:id', getListById);
router.get('/', getLists);

export default router;