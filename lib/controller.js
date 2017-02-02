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
      for (let i = 0; i < arrayLength; i++) {
        this.model.create(postBody[i]);
        if (i + 1 === arrayLength) {
          res.status(201);
        }
      }
      // TODO: Control for if body includes an array of obj
      // TODO: If body is an array of objects, send each object individually.
      // Save response of each in a separate array, return array of statuses back
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
// TODO: Write some code to validate if ID is valid

    this.model.update(conditions, req.body)
    .then(doc => {
      if (doc.nModified === 0) {
        return this._errorHandler.internalServerError('Could not update user', req, res, next);
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
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
