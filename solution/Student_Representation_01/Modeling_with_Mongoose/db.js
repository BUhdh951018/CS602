var mongoose = require('mongoose'), 
    DB_URL = 'mongodb://localhost:27017/modelsample';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + DB_URL);
});

mongoose.connection.on('error' , (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;