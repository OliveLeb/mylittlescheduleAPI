'use strict';

const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {

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
    
};

const verifyScope = (req,res,next) => {

    const user = req.user;
    if(user.admin) return next();
    return res.status(401).send('Vous n\'êtes pas autorisé à circuler ici !');
}

module.exports = {verifyToken:verifyToken,verifyScope:verifyScope};