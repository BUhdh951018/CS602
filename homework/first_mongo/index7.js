const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(connectionErr, database) {
  if (connectionErr) {
      throw connectionErr;
  }
  const firstDb = database.db('firstDb'); 
  firstDb.collection('person').find({firstName: {$in: ["Frank", "Metor"]},
                                     lastName: "Sadno"
                       }, 
                        (queryErr, results) => {
      if (queryErr) {
          throw queryErr;
      }
      results.forEach(person => {
          console.log(person.firstName);     
      });    
  });
  database.close();
});