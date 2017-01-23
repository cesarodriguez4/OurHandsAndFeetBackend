const Controller = require('../../lib/controller');
const bookModel  = require('./book-facade');
if(process.env.NODE_ENV == "production"){
  var server_url = 'http://ourhandsandfeetbackend.herokuapp.com';
}else{
  var server_url = "http://localhost:7000";
}

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

  createCSV(req, res, next) {
    const data = req.body;
    const url = data.url;
    console.log(data);
    console.log(url);
    var Converter = require('csvtojson').Converter;
    var converter = new Converter({ constructResult:false });
    converter.on('record_parsed', (jsonOb) => {
      // this.model.create(jsonOb)
      // .then(doc => res.status(201).json(doc))
      // .catch(err => next(err));
      require('request').post(server_url + '/book/').form(jsonOb);
    });
    require('request').get(url).pipe(converter);

    res.status(200);
    res.send();

  }

}

module.exports = new BookController(bookModel);
