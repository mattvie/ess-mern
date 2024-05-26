import express from "express";
import { signupJson, loginJson, logoutJson } from '../controllers/auth.json.controllers.js'

const router = express.Router()

/* JSON */
// POST
router.post('/signup', signupJson)
router.post('/login', loginJson)
router.post('/logout', logoutJson)

export default router