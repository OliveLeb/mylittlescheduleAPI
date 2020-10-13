'use strict';

const db = require('../db');

module.exports = async (body) => {

    
    const { rows } = await db.query(`SELECT id FROM users WHERE email='${body.email}'`);

    if(rows.length !== 0) return false;
    
    return true;
}
