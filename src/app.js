const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./routes/users');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/users', usersRouter)

module.exports = app;