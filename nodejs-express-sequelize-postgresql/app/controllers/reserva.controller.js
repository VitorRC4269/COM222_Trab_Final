const db = require("../models");
const Reserva = db.reserva;
const Op = db.Sequelize.Op;


// Create and Save a new Reserva
exports.create = (req, res) => {
    // Validate request
    if (!req.body.codigo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Reserva
    const reserva = {
      codigo: req.body.codigo,
      isbn: req.body.isbn,
      codigo_assoc: req.body.codigo_assoc,

      data: req.body.data,
      status: req.body.status,
    };
    // Save Reserva in the database
    Reserva.create(reserva)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Reserva."
        });
      });
  };



// Retrieve all Reserva from the database.
exports.findAll = (req, res) => {
  const codigo = req.query.codigo;
  var condition = codigo ? { codigo: { [Op.iLike]: `%${codigo}%` } } : null;
  Reserva.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reserva."
      });
    });
};



// Find a single Reserva with an codigo
exports.findOne = (req, res) => {
    const codigo = req.params.codigo;
    Reserva.findByPk(codigo)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Reserva with codigo=${codigo}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Reserva with codigo=" + codigo
        });
      });
  };



// Update a Reserva by the codigo in the request
exports.update = (req, res) => {
  const codigo = req.params.codigo;
  Reserva.update(req.body, {
    where: { codigo: codigo }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Reserva was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Reserva with codigo=${codigo}. Maybe Reserva was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Reserva with codigo=" + codigo
      });
    });
};


// Delete a Reserva with the specified codigo in the request
exports.delete = (req, res) => {
    const codigo = req.params.codigo;
    Reserva.destroy({
      where: { codigo: codigo }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Reserva was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Reserva with codigo=${codigo}. Maybe Reserva was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Reserva with codigo=" + codigo
        });
      });
  };


// Delete all Reserva from the database.
exports.deleteAll = (req, res) => {
  Reserva.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Reserva were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reserva."
      });
    });
};


// Find all published Reserva
exports.findAllPublished = (req, res) => {
    Reserva.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reserva."
        });
      });
  };