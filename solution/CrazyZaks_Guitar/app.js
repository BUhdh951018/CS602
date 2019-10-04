var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Type = require('./models/type');
Guitar = require('./models/guitar');
Check_out = require('./models/check_out');

mongoose.connect('mongodb://localhost/CrazyZaks_Guitar');
var db = mongoose.connection;
app.get('/', function(req, res){
	res.send('Type /api/guitars or /api/types to know the Guitars or there types respectively');
});

app.get('/api/types', function(req, res){
  Type.getTypes(function(err, types){
  	if(err){
  		throw err;
  	}
  	res.json(types);
  });
});


app.post('/api/types', function(req, res){
  var type = req.body;
  Type.addType(type, function(err, type){
    if(err){
      throw err;
    }
    res.json(type);
  });
});

app.put('/api/types/:_id', function(req, res){
  var id = req.params._id;
  var type = req.body;
  Type.updateType(id, type, {}, function(err, type){
    if(err){
      throw err;
    }
    res.json(type);
  });
});

app.delete('/api/types/:_id', function(req, res){
  var id = req.params._id;

  Type.removeType(id, function(err, type){
    if(err){
      throw err;
    }
    res.json(type);
  });
});

app.get('/api/guitars', function(req, res){
  Guitar.getGuitars(function(err, guitars){
  	if(err){
  		throw err;
  	}
  	res.json(guitars);
  });
});

app.get('/api/guitars/:_id', function(req, res){
  Guitar.getGuitarById(req.params._id, function(err, guitar){
    if(err){
      throw err;
    }
    res.json(guitar);
  });
});


app.post('/api/guitars', function(req, res){
  var guitar = req.body;
  Guitar.addGuitar(guitar, function(err, type){
    if(err){
      throw err;
    }
    res.json(guitar);
  });
});

app.put('/api/guitars/:_id', function(req, res){
  var id = req.params._id;
  var guitar = req.body;
  Guitar.updateGuitar(id, guitar, {}, function(err, guitar){
    if(err){
      throw err;
    }
    res.json(guitar);
  }); 
});

app.delete('/api/guitars/:_id', function(req, res){
  var id = req.params._id;

  Guitar.removeGuitar(id, function(err, type){
    if(err){
      throw err;
    }
    res.json(type);
  });
});

app.post('/check_out', function(req, res){
  console.log("checkout");
  res.redirect(check_out.js);
});


app.listen(3000);
console.log('Running on Port 3000');