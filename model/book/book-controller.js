const Controller = require('../../lib/controller');
const bookModel  = require('./book-facade');


class BookController extends Controller {
  findByTitle(req, res, next) {
    let bar = this.model;
    let result =  this.model.find({
      'title' : req.params.title
    })
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));

    return result;
  }

}

module.exports = new BookController(bookModel);
