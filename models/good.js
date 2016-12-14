const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const goodSchema = new mongoose.Schema( {
  categoryId: {type: String},
  name: {type: String, required: true},
  purchasingPrice: {type: Number, required: true},
  retailPrice: {type: Number, required: true}
}) 

goodSchema.plugin(autoIncrement.plugin, 'Good');

const Good = mongoose.connection.model('Good', goodSchema);


module.exports = Good
