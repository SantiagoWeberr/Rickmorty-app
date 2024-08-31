const { v4: uuidv4 } = require("uuid");

class ModelCrud {
  constructor(model) {
    this.model = model;
  }
  getAll = (req, res, next) => {
    return this.model
      .findAll()
      .then((results) => res.send(results))
      .catch((err) => next(err));
  };
  getById = (req, res, next) => {
    const id = req.params.id;
    return this.model
      .findByPk(id)
      .then((result) => res.send(result))
      .catch((err) => next(err));
  };
  update = (req, res, next) => {
    const character = req.body;
    const id = req.params.id;
    return this.model
      .update(character, {
        ...character,
        where: {
          id,
        },
      })
      .then((updatedCharacter) => res.send(updatedCharacter))
      .catch((err) => next(err));
  };
  post = (req, res, next) => {
    const character = req.body;
    return this.model
      .create({
        ...character,
        id: uuidv4(),
      })
      .then((result) => res.send(result))
      .catch((err) => next(err));
  };
  delete = (req, res, next) => {
    const id = req.params.id;
    return this.model
      .destroy({
        where: {
          id,
        },
      })
      .then(() => res.sendStatus(200))
      .catch((err) => next(err));
  };
}

module.exports = ModelCrud;
