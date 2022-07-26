const db = require("../models");
const Emprestimo = db.emprestimo;
const Op = db.Sequelize.Op;
var moment = require('moment');
const associadoData = require('../controllers/associado.controller');
// Create and Save a new Emprestimo
exports.create = async  (req, res) => {
  console.log("--fifo-----------------\n");
    // Validate request
  /*  if (!req.body.codigo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }*/
    const dia = moment();
    const associado = await associadoData.findOnebyCodigo(req.body.codigo_assoc);
    console.log(req.body.codigo_assoc);
    console.log(associado);
    var data_f;
    //var dia = d.getFullYear().toString() + '-' + d.getMonth().toString() + '-' + d.getDate().toString();
    // Create a Emprestimo
    if(associado.status === "Grad") {
      data_f = moment().add(7, 'd');
    } else if(associado.status === "Posgrad") {
      data_f = moment().add(10, 'd');
    } else {
      data_f = moment().add(14, 'd');
    }
    const emprestimo = {
     // codigo: req.body.codigo,
      nro_exemplar: req.body.nro_exemplar,
      isbn: req.body.isbn,
      codigo_assoc: req.body.codigo_assoc,
      data_emp: dia,
      data_devol: data_f,
    };
    console.log("---------------------------\n");
    console.log(dia);
    // Save Emprestimo in the database
    Emprestimo.create(emprestimo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Emprestimo."
        });
      });
  };



// Retrieve all Emprestimo from the database.
exports.findAll = (req, res) => {
  const codigo = req.query.codigo;
  var condition = codigo ? { codigo: { [Op.iLike]: `%${codigo}%` } } : null;
  Emprestimo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving emprestimo."
      });
    });
};



// Find a single Emprestimo with an codigo
exports.findOne = (req, res) => {
    const codigo = req.params.codigo;
    Emprestimo.findByPk(codigo)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Emprestimo with codigo=${codigo}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Emprestimo with codigo=" + codigo
        });
      });
  };



// Update a Emprestimo by the codigo in the request
exports.update = (req, res) => {
  const codigo = req.params.codigo;
  Emprestimo.update(req.body, {
    where: { codigo: codigo }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Emprestimo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Emprestimo with codigo=${codigo}. Maybe Emprestimo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Emprestimo with codigo=" + codigo
      });
    });
};


// Delete a Emprestimo with the specified codigo in the request
exports.delete = (req, res) => {
    const codigo = req.params.codigo;
    Emprestimo.destroy({
      where: { codigo: codigo }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Emprestimo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Emprestimo with codigo=${codigo}. Maybe Emprestimo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Emprestimo with codigo=" + codigo
        });
      });
  };


// Delete all Emprestimo from the database.
exports.deleteAll = (req, res) => {
  Emprestimo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Emprestimo were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all emprestimo."
      });
    });
};


// Find all published Emprestimo
exports.findAllPublished = (req, res) => {
    Emprestimo.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving emprestimo."
        });
      });
  };