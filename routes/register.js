const Router = require('express-promise-router');
const db = require('../db');
const moment = require('moment');
const bcrypt = require('bcrypt');
const createToken = require('../utils/token');
const {validateUser} = require('../schema/users');


const router = new Router();

router.post('/', async (req,res) => {

    const body = req.body;

    const date = moment().format('YYYY-MM-D H:mm:ss');


    const verify = await validateUser(body);
    if(verify.error){
        res.status(400).send(verify.error.details[0].message);
        return ;
    }

    await bcrypt.genSalt(10)
    .then(salt => {
        bcrypt.hash(body.password, salt)
        .then(hashedPwd => {
            db.query(`INSERT INTO users(firstname, lastname, email, password, picture, created_at, updated_at, is_admin)
            VALUES ('${body.firstname}','${body.lastname}','${body.email}','${hashedPwd}','${body.picture}','${date}','${date}','${body.is_admin}')`);
        });
    });
    

    //res.send(createToken(body));

    res.send(body);
});

module.exports = router;