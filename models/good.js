const mongoose = require('mongoose');

module.exports = mongoose.model('Good', {
  categoryId: {type: String, required: true},
  name: {type: String, required: true},
  purchasingPrice: {type: Number, required: true},
  retailPrice: {type: Number, required: true}
});
