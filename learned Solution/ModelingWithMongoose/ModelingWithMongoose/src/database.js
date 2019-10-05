let mongoose = require('mongoose');

const database = 'ModelingWithMongoose';
const server = 'localhost:27017';

class Database {
    
    constructor() {
        this._connect()
    };

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch( err => {
                console.error('Database connection error');
            })
    };
};

module.exports = new Database();