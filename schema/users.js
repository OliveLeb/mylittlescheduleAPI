'use strict';

const Joi = require('joi');

const validateUser = (body) => {

    const schema = Joi.object({
    firstname : Joi.string().min(2).max(50).required(),
    lastname : Joi.string().min(2).max(50).required(),
    email: Joi.string().email({tlds:{allow:true}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')).required(),
    repeat_password: Joi.ref('password'),
    picture: Joi.string().allow(null),
    is_admin: Joi.boolean().required()
});
    return schema.validateAsync(body)
}


module.exports.validateUser = validateUser;