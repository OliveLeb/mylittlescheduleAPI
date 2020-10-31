'use strict';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (user) => {
    
    const credentials = {id:user.id,admin:user.is_admin};
    const token = jwt.sign(credentials,process.env.SECRET_TOKEN, { expiresIn: '2h'});
    return token;
}

//module.export = createToken;