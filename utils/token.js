'use strict';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (user) => {
    
    const credentials = {id:user.id};

    const token = jwt.sign(credentials,process.env.SECRET_TOKEN);
    return token;
}

//module.export = createToken;