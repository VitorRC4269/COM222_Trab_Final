const db = require("../models");
const Publicacao = db.publicacao;
const Op = db.Sequelize.Op;


// Create and Save a new Publicacao
exports.create = (req, res) => {
    // Validate request
    if (!req.body.isbn) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Publicacao
    const publicacao = {
      isbn: req.body.isbn,
      titulo: req.body.titulo,
      autor: req.body.autor,
      editora: req.body.editora,
     
    };
    // Save Publicacao in the database
    Publicacao.create(publicacao)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Publicacao."
        });
      });
  };



// Retrieve all Publicacao from the database.
exports.findAll = (req, res) => {
  const isbn = req.query.isbn;
  var condition = isbn ? { isbn: { [Op.iLike]: `%${isbn}%` } } : null;
  Publicacao.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving publicacao."
      });
    });
};



// Find a single Publicacao with an isbn
exports.findOne = (req, res) => {
    const isbn = req.params.isbn;
    Publicacao.findByPk(isbn)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Publicacao with isbn=${isbn}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Publicacao with isbn=" + isbn
        });
      });
  };



// Update a Publicacao by the isbn in the request
exports.update = (req, res) => {
  const isbn = req.params.isbn;
  Publicacao.update(req.body, {
    where: { isbn: isbn }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Publicacao was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Publicacao with isbn=${isbn}. Maybe Publicacao was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Publicacao with isbn=" + isbn
      });
    });
};


// Delete a Publicacao with the specified isbn in the request
exports.delete = (req, res) => {
    const isbn = req.params.isbn;
    Publicacao.destroy({
      where: { isbn: isbn }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Publicacao was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Publicacao with isbn=${isbn}. Maybe Publicacao was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Publicacao with isbn=" + isbn
        });
      });
  };


// Delete all Publicacao from the database.
exports.deleteAll = (req, res) => {
  Publicacao.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Publicacao were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all publicacao."
      });
    });
};


// Find all published Publicacao
exports.findAllPublished = (req, res) => {
    Publicacao.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving publicacao."
        });
      });
  };