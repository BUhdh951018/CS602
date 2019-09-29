const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  if (err) {
      throw err;
  }
  console.log("Connected to server");
  db.close();
});