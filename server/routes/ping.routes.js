import express from 'express';
import { ping, ping2 } from '../controllers/ping.controllers.js'

const router = express.Router()

router.get('/', ping)
router.get('/2', ping2)

export default router
