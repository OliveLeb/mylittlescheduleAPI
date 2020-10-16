'use strict';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (user) => {
    
    const credentials = {id:user.id};
    console.log(user);
    const token = jwt.sign(credentials,process.env.SECRET_TOKEN);
    console.log(token)
    return token;
}

//module.export = createToken;