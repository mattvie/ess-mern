//const express = require('express');
import express from 'express'
const app = express();

app.get('/ping', (req, res) => {
    res.json('ping!!')
});

app.listen(4000);