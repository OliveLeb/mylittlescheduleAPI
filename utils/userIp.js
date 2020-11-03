'use strict';

const ip = require('ip');

const getUserIp = () => {

    const userIp = ip.address();
    return userIp;

};

module.exports = getUserIp;