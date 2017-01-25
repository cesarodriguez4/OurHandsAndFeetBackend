const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const bookSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  author: { type: String, required: false },
  length: { type: Number, required: false },
  year: { type: Number, required: false },
  url: { type: String, required: false },
  isCheckedOut: { type: Number, required: false },
  catalogNumba: { type: String, required: false }
});


module.exports = mongoose.model('Book', bookSchema);
