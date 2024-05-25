//const express = require('express');
import express from 'express'
const app = express();

app.use(express.json())

// import route
import pingRoutes from './routes/ping.routes.js'
import booksRoutes from './routes/books.routes.js'

app.use('/ping', pingRoutes)
app.use('/books', booksRoutes)

app.listen(4000);