'use strict';

const Joi = require('joi');

const validateUserRegister = (body) => {

    const schema = Joi.object({
    firstname : Joi.string().min(2).max(50).required(),
    lastname : Joi.string().min(2).max(50).required(),
    email: Joi.string().email({tlds:{allow:true}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')).required(),
    repeat_password: Joi.ref('password'),
    picture: Joi.string().allow(null),
    is_admin: Joi.boolean().required()
});
    return schema.validateAsync(body);
};


const validateUserLogin = (body) => {
    const schema = Joi.object({
        email: Joi.string().email({tlds:{allow:true}}).required(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')).required(),
    })
    return schema.validateAsync(body);
};


module.exports = {validateUserRegister:validateUserRegister,validateUserLogin:validateUserLogin};