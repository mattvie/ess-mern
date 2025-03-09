import express from 'express';
import { getAllJson, getBookByIdJson, writeBookJson, updateBookJson, deleteBookJson } from '../controllers/book.json.controllers.js'

const router = express.Router()

/* JSON */

// GET
router.get('/', getAllJson)
router.get('/:bookId', getBookByIdJson)

// POST
router.post('/', writeBookJson)

// PUT
router.put('/', updateBookJson)

// DELETE
router.delete('/', deleteBookJson)

export default router