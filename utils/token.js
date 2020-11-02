'use strict';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (res,user) => {
    
    const credentials = {id:user.id,admin:user.is_admin};
    const token = jwt.sign(credentials,process.env.SECRET_TOKEN, { expiresIn: '2h'});

    return res.cookie('token', token, {expires: new Date(3600000 + Date.now()),secure:false,httpOnly:true})
}

//module.export = createToken;