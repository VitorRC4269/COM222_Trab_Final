const db = require("../models");
const Exemplar = db.exemplar;
const Op = db.Sequelize.Op;


// Create and Save a new Exemplar
exports.create = (req, res) => {
    // Validate request
    if (!req.body.numero) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Exemplar
    const exemplar = {
      numero: req.body.numero,
      isbn: req.body.isbn,
      preco: req.body.preco,
     
    };
    // Save Exemplar in the database
    Exemplar.create(exemplar)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Exemplar."
        });
      });
  };



// Retrieve all Exemplar from the database.
exports.findAll = (req, res) => {
  const numero = req.query.numero;
  var condition = numero ? { numero: { [Op.iLike]: `%${numero}%` } } : null;
  Exemplar.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving exemplar."
      });
    });
};



// Find a single Exemplar with an numero
exports.findOne = (req, res) => {
    const numero = req.params.numero;
    Exemplar.findByPk(numero)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Exemplar with numero=${numero}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Exemplar with numero=" + numero
        });
      });
  };



// Update a Exemplar by the numero in the request
exports.update = (req, res) => {
  const numero = req.params.numero;
  Exemplar.update(req.body, {
    where: { numero: numero }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Exemplar was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Exemplar with numero=${numero}. Maybe Exemplar was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Exemplar with numero=" + numero
      });
    });
};


// Delete a Exemplar with the specified numero in the request
exports.delete = (req, res) => {
    const numero = req.params.numero;
    Exemplar.destroy({
      where: { numero: numero }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Exemplar was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Exemplar with numero=${numero}. Maybe Exemplar was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Exemplar with numero=" + numero
        });
      });
  };


// Delete all Exemplar from the database.
exports.deleteAll = (req, res) => {
  Exemplar.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Exemplar were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all exemplar."
      });
    });
};


// Find all published Exemplar
exports.findAllPublished = (req, res) => {
    Exemplar.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving exemplar."
        });
      });
  };