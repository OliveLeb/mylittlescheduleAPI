'use strict';

const jwt = require('jsonwebtoken');

module.exports = {
    
    token: (req,res,next) => {

        const token = req.cookies.token || '';



        try {
            if (!token) return res.status(401).send('Accès refusé, connectez-vous.');
            const verified = jwt.verify(token, process.env.SECRET_TOKEN);
            req.user = verified;
            next();
        }
        catch(err) {
            res.status(500).send('Invalid token.').json(err.toString());
        }
        
    },

    scope: (req,res,next) => {

        const user = req.user;
        if(user.admin) return next();
        return res.status(401).send('Vous n\'êtes pas autorisé à circuler ici !');
    }

}



//module.exports = {verifyToken:verifyToken,verifyScope:verifyScope};