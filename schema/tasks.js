'use strict';

const Joi = require('joi');

const validateTask = async (req,res,next) => {

    const body = req.body;

    const schema = Joi.object({
        task: Joi.string().required(),
        is_done: Joi.boolean().required(),
        day: Joi.date().allow(null),
        hour: Joi.string().pattern(new RegExp('^([0-9]{2})\:([0-9]{2})$')).allow(null),
    });

    try {
        const verifJoi = await schema.validateAsync(body);        
        req.task = verifJoi;    
        return next();
    }
    catch(error) {
        return res.status(400).send(error.details[0].message);
    }

};

module.exports = validateTask;