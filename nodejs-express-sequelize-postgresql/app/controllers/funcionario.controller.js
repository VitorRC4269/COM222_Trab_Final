const db = require("../models");
const Funcionario = db.funcionario;
const Op = db.Sequelize.Op;


// Create and Save a new Funcionario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.codigo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Funcionario
    const associado = {
      codigo: req.body.codigo,
      nome: req.body.nome,
      senha: req.body.senha,
      funcao: req.body.funcao,
      email: req.body.email,
     
    };
    // Save Funcionario in the database
    Funcionario.create(associado)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Funcionario."
        });
      });
  };



// Retrieve all Funcionario from the database.
exports.findAll = (req, res) => {
  const codigo = req.query.codigo;
  var condition = codigo ? { codigo: { [Op.iLike]: `%${codigo}%` } } : null;
  Funcionario.findAll({ where: condition })
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



// Find a single Funcionario with an codigo
exports.findOne = (req, res) => {
    const codigo = req.params.codigo;
    Funcionario.findByPk(codigo)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Funcionario with codigo=${codigo}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Funcionario with codigo=" + codigo
        });
      });
  };



// Update a Funcionario by the codigo in the request
exports.update = (req, res) => {
  const codigo = req.params.codigo;
  Funcionario.update(req.body, {
    where: { codigo: codigo }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Funcionario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Funcionario with codigo=${codigo}. Maybe Funcionario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Funcionario with codigo=" + codigo
      });
    });
};


// Delete a Funcionario with the specified codigo in the request
exports.delete = (req, res) => {
    const codigo = req.params.codigo;
    Funcionario.destroy({
      where: { codigo: codigo }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Funcionario was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Funcionario with codigo=${codigo}. Maybe Funcionario was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Funcionario with codigo=" + codigo
        });
      });
  };


// Delete all Funcionario from the database.
exports.deleteAll = (req, res) => {
  Funcionario.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Funcionario were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all associado."
      });
    });
};


// Find all published Funcionario
exports.findAllPublished = (req, res) => {
    Funcionario.findAll({ where: { published: true } })
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