var mongoose = require('mongoose');
var typeSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	}
});

var Type = module.exports = mongoose.model('Type', typeSchema);


module.exports.getTypes = function(callback, limit){
  Type.find(callback).limit(limit);
}

//Code to add different types of guitars
module.exports.addType = function(type, callback){
  Type.create(type, callback);
}

module.exports.updateType = function(id, type, options, callback){
  var query = {_id: id};
  var update = {
  	name: type.name
  }
  Type.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeType = function(id, callback){
  var query = {_id: id};
  Type.remove(query, callback);
}