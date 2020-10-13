const express = require('express');
const cors = require('cors');
const compression = require('compression'); // compress server's responses
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();

// MIDDLEWARE
const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());


app.get('/', (req,res)=>{
    res.send('Hello world !');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started, listenning at %s', process.env.SERVER_PORT)
});