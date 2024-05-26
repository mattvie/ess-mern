//const express = require('express');
import express from 'express'

import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json())
app.use(cookieParser())

// Routes imports
import pingRoutes from './routes/ping.routes.js'
import bookRoutes from './routes/books.routes.js'
import authRoutes from './routes/auth.routes.js'

app.use('/ping', pingRoutes)
app.use('/books', bookRoutes)
app.use('/auth', authRoutes)

app.listen(4000);