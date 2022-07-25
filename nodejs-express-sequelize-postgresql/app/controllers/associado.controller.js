const db = require("../models");
const Associado = db.associado;
const Op = db.Sequelize.Op;


// Create and Save a new Associado
exports.create = (req, res) => {
    // Validate request
    if (!req.body.codigo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Associado
    const associado = {
      codigo: req.body.codigo,
      nome: req.body.nome,
      senha: req.body.senha,
      endereco: req.body.endereco,
      email: req.body.email,
      status: req.body.status,
    };
    // Save Associado in the database
    Associado.create(associado)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Associado."
        });
      });
  };



// Retrieve all Associado from the database.
exports.findAll = (req, res) => {
  const codigo = req.query.codigo;
  var condition = codigo ? { codigo: { [Op.iLike]: `%${codigo}%` } } : null;
  Associado.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving associado."
      });
    });
};



// Find a single Associado with an codigo
exports.findOne = (req, res) => {
    const codigo = req.params.codigo;
    Associado.findByPk(codigo)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Associado with codigo=${codigo}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Associado with codigo=" + codigo
        });
      });
  };



// Update a Associado by the codigo in the request
exports.update = (req, res) => {
  const codigo = req.params.codigo;
  Associado.update(req.body, {
    where: { codigo: codigo }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Associado was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Associado with codigo=${codigo}. Maybe Associado was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Associado with codigo=" + codigo
      });
    });
};


// Delete a Associado with the specified codigo in the request
exports.delete = (req, res) => {
    const codigo = req.params.codigo;
    Associado.destroy({
      where: { codigo: codigo }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Associado was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Associado with codigo=${codigo}. Maybe Associado was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Associado with codigo=" + codigo
        });
      });
  };


// Delete all Associado from the database.
exports.deleteAll = (req, res) => {
  Associado.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Associado were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all associado."
      });
    });
};


// Find all published Associado
exports.findAllPublished = (req, res) => {
    Associado.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving associado."
        });
      });
  };