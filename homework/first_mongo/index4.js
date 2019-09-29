const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/firstDb';
MongoClient.connect(url, function(connectionErr, database) {
  if (connectionErr) {
      throw connectionErr;
  }
  const firstDb = database.db('firstDb');
  
  const queryCount = 
    firstDb.collection('person').find({"lastName": "not-in-database"}, 
                                         (queryErr, results) => {
      if (queryErr) {
          throw queryErr;
      }
      results.forEach(person => {
          console.log(person.firstName);     
      });    
  });
  database.close();
  // you should see absolutely no output in your console window.
});
