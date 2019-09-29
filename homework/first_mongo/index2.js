const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/firstDb';
MongoClient.connect(url, function(err, database) {
  if (err) {
      throw err;
  }
  console.log("Connected to server");

  const firstDb = database.db('firstDb');
  firstDb.collection('person').insertMany([
     {"firstName": "Frank", "middleName": "Angel", "lastName": "Sadno"},
     {"firstName": "Melio", "middleName": "Twoi", "lastName": "Chiloi"},
     {"firstName": "Metor", "middleName": "Agoi", "lastName": "Berrio"},
     {"firstName": "Egwio", "middleName": "Noa", "lastName": "Chiloi"} ]);
     database.close();
  });

  console.log("Insertion complete");