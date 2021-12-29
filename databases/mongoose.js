const Mongoose = require('mongoose');

class MongooseClass {
    constructor(config) {
        this.mongoose = null;
        this.config = config.get('mongoose');
        this.connect();
    }

    connect() {
        return Mongoose.connect(this.config.host + this.config.user + ':' + this.config.password + this.config.database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            this.mongoose = Mongoose;
            console.log(`[Mongoose] Connection has been established successfully.`);
            return null;
        }).catch((error) => {
            console.error(`Mongoose Unable to connect to the database: `, error);
            throw error;
        });
    }

    getMongoose() {
        return this.mongoose;
    }

}

module.exports = MongooseClass;
