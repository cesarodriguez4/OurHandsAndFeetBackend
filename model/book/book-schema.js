const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const bookSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  author: { type: Number, required: false },
  length: { type: String, required: false },
  year: { type: String, required: false },
  url: { type: Number, required: false },
  isCheckedOut: { type: Number, required: false },
  catalogNumba: { type: Number, required: false }
});

bookSchema.methods = {
  findByTitle: function(title){
    //TODO: Figure out if findByTitle method logic should be in schema
    let books = {};

    return books;
  }
}


module.exports = mongoose.model('Book', bookSchema);
