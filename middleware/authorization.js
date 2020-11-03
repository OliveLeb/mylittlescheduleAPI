'use strict';

const jwt = require('jsonwebtoken');
const db = require('../db');

module.exports = {
    
    token: async (req,res,next) => {

        //const token = req.cookies.token || '';
        const token = req.header('x-auth-token');

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

    refreshToken: async (req,res,next) => {

        const refreshToken = req.cookies.refresh;

        try {
            if (!refreshToken) return res.status(401).send('Accès refusé, connectez-vous.');
            const verified = jwt.verify(refreshToken,process.env.REFRESH_TOKEN);
            console.log(verified);
          /*  if(verified) {
                const {rows} = await db.query('SELECT token fROM refresh_token WHERE ip=$1 AND token=$2',[ip,refreshToken]);
                req.refreshToken = verified;
                next();$
            }
            */
            next();
        }
        catch(err) {
            res.status(500).json(err.toString());
        }

    },

    scope: (req,res,next) => {

        const user = req.user;
        if(user.admin) return next();
        return res.status(401).send('Vous n\'êtes pas autorisé à circuler ici !');
    }

}



//module.exports = {verifyToken:verifyToken,verifyScope:verifyScope};