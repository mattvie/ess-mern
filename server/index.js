//const express = require('express');
import express from 'express'
const app = express();

// import route
import pingRoutes from './routes/ping.routes.js'

app.use('/ping', pingRoutes)

app.listen(4000);