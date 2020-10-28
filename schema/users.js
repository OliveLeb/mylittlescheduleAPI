'use strict';

const Joi = require('joi');

const validateUserRegister = async (req,res,next) => {

    const body = req.body;

    const schema = Joi.object({
    firstname : Joi.string().min(2).max(50).required(),
    lastname : Joi.string().min(2).max(50).required(),
    email: Joi.string().email({tlds:{allow:true}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')).required(),
    repeat_password: Joi.ref('password'),
    picture: Joi.string().allow(null),
    is_admin: Joi.boolean().required()
});
    
    try {
        const verifJoi = await schema.validateAsync(body);
        req.user = verifJoi;
        return next();
    }
    catch(error) {
        return res.status(400).send({type:error.details[0].context.key,message:error.details[0].message});
    }
};


const validateUserLogin = async (req,res,next) => {

    const body = req.body;

    const schema = Joi.object({
        email: Joi.string().email({tlds:{allow:true}}).required(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')).required(),
    });
    
    try {
        const verifJoi = await schema.validateAsync(body);
        req.user = verifJoi;
        return next();
    }
    catch(error) {
        return res.status(400).send({type:error.details[0].context.key,message:error.details[0].message});
    }

};


module.exports = {validateUserRegister:validateUserRegister,validateUserLogin:validateUserLogin};