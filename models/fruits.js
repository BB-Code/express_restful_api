var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var fruitSchema = new Scheme({
    name: String,
    color: String,
    price: String
});

module.exports = mongoose.model('Fruit', fruitSchema);