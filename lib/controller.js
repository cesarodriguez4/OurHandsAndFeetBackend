/*jshint esversion: 6 */
const ErrorHandler = require('./errorHandler');
class Controller {
  constructor(model) {
    this.model = model;
    this._errorHandler = new ErrorHandler();
  }

  find(req, res, next) {
    return this.model.find(req.query)
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  // findOne(req, res, next) {
  //   return this.model.findOne(req.query)
  //   .then(doc => res.status(200).json(doc))
  //   .catch(err => next(err));
  // }

  findById(req, res, next) {
    return this.model.findById(req.params.id)
    .then(doc => {
      if (!doc) { return res.status(404).end(); }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  create(req, res, next) {
    // console.log(req.body);
    const postBody = req.body;
    if (postBody.constructor === Array) {
      const arrayLength = postBody.length;
      const docArray = [];
      for (let i = 0; i < arrayLength; i++) {
        this.model.create(postBody[i])
// TODO: Insert each response into an array and send only that single array back to the client
        // .then((doc) => {
        //   res.status(201).json(doc);
        //   console.log(doc);
        // })

        .then((doc) => {
          docArray.push(doc);
          if (docArray.length === arrayLength) {
            res.status(201).json(docArray);
            console.log(docArray);
          }
        })

        .catch((err) => {
          console.log(err);
          next(err);
        });
      }
    } else {
      this.model.create(req.body)
      .then((doc) => {
        res.status(201).json(doc);
        console.log(doc);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
    }
  }

  update(req, res, next) {
    const conditions = { _id: req.params.id };
    const userType = req.params.userType;
    //userType must be 1 for Charity or 2 for volunteer
    if (userType == 1 || userType == 2) {
      //TODO: Write some code to validate if ID is valid
      this.model.update(conditions, req.body)
      .then(doc => {
        if (doc.nModified === 0) {
          return this._errorHandler.internalServerError('Could not update user', req, res, next);
        }
        return res.status(200).json(doc);
      })
      .catch(err => next(err));
    } else {
      var error = new Error("A correct userType is not supplied");
      res.status(200).json(error);
    }
  }

  // remove(req, res, next) {
  //   this.model.remove(req.params.id)
  //   .then(doc => {
  //     if (!doc) { return res.status(404).end(); }
  //     return res.status(204).end();
  //   })
  //   .catch(err => next(err));
  // }

}

module.exports = Controller;
