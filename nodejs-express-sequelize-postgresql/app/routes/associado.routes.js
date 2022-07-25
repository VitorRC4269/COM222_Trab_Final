module.exports = app => {
    const associado = require("../controllers/associado.controller.js");
    var router = require("express").Router();
    // Create a new Associado
    router.post("/", associado.create);
    // Retrieve all Associado
    router.get("/", associado.findAll);
    // Retrieve all published Associado
    router.get("/published", associado.findAllPublished);
    // Retrieve a single Associado with id
    router.get("/:id", associado.findOne);
    // Update a Associado with id
    router.put("/:id", associado.update);
    // Delete a Associado with id
    router.delete("/:id", associado.delete);
    // Create a new Associado
    router.delete("/", associado.deleteAll);
    app.use('/api/associado', router);
  };