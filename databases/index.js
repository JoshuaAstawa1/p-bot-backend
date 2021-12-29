const config = require('config');
const Mongoose = require('./mongoose');
const mongoose = new Mongoose(config)

module.exports = {
    mongoose_db: mongoose.getMongoose()
};