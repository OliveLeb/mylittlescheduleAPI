'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression'); // compress server's responses
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001

// IMPORTING ROUTES
const routes = require('./routes');

// MIDDLEWARE
const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// ROUTES
routes(app);




app.listen(PORT, () => {
    console.log('Server started, listenning at %s', PORT);
});