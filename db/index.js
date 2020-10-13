const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
})

module.exports = {
    query: (text,params,callback) => {
        return pool.query(text,params,callback);
    }
};