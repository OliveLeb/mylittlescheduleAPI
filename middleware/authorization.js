'use strict';

const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) => {

    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Accès refusé, token non fourni');

    try {
        
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        next();
    }
    catch(err) {
        res.status(400).send('Invalid token.');
    }
    
}

module.exports = verifyToken;