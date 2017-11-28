const mongoose = require('mongoose');

const config = require('../etc/config.json');

const setUpConnection = function(){
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

module.exports.setUpConnection = setUpConnection;