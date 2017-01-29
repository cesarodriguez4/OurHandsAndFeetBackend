const Controller = require('../../lib/controller');
const bookModel  = require('./book-facade');
if (process.env.NODE_ENV === 'production') {
  const serverUrl = 'http://ourhandsandfeetbackend.herokuapp.com';
}else{
  const serverUrl = "http://localhost:7000";
}

class BookController extends Controller {
  // findByTitle(req, res, next) {
  //   let bar = this.model;
  //   let result =  this.model.find({
  //     'title' : req.params.title
  //   })
  //   .then(doc => {
  //     if (!doc) {
  //       return res.status(404).end();
  //     }
  //     return res.status(200).json(doc);
  //   })
  //   .catch(err => next(err));
  //
  //   return result;
  // }

  createFromCSV(req, res, next) {
    const data = req.body;
    const url = data.url;
    const csv = require('csvtojson');
    csv()
    .fromStream(url)
    .on('json', (json) => {
      router.route(serverUrl + '/',  json);
      console.log('CSV JSON', JSON.stringify(json));
    })
.on('done', (error) => {

});
  }
  //   console.log(data);
  //   console.log(url);
  //   var Converter = require('csvtojson').Converter;
  //   var converter = new Converter({ constructResult:false });
  //   converter.on('record_parsed', (jsonOb) => {
  //     this.model.create(jsonOb);
  //     // .then(doc => res.status(201).json(doc))
  //     // .catch(err => next(err));
  //     //require('request').post(serverUrl + '/book/').form(jsonOb);
  //   });
  //   require('request').get(url).pipe(converter);
  //   res.status(200);
  //   res.send();
  // }

}

module.exports = new BookController(bookModel);
