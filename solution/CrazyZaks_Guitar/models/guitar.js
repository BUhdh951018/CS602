var mongoose = require('mongoose');
var guitarSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	imagelink:{
		type: String,
		required: true
	}
});


//Code to get all guitars
var Guitar = module.exports = mongoose.model('Guitar', guitarSchema);
module.exports.getGuitars = function(callback, limit){
  Guitar.find(callback).limit(limit);
}
//
module.exports.getGuitarById = function(id, callback){
  Guitar.findById(id, callback);

}

module.exports.addGuitar = function(guitar, callback){
  Guitar.create(guitar, callback);
}

module.exports.updateGuitar = function(id, guitar, options, callback){
  var query = {_id: id};
  var update = {
  	title: guitar.title,
  	price: guitar.price,
  	imagelink: guitar.imagelink
  }
  Guitar.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeGuitar = function(id, callback){
  var query = {_id: id};
  Guitar.remove(query, callback);
}