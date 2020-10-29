'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression'); // compress server's responses
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
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
    app.use(express.static(path.join(_dirname,'client/build')));

    app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
};

// ROUTES
routes(app);




app.listen(PORT, () => {
    console.log('Server started, listenning at %s', PORT);
});