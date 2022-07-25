module.exports = app => {
    const exemplar = require("../controllers/exemplar.controller.js");
    var router = require("express").Router();
    // Create a new Exemplar
    router.post("/", exemplar.create);
    // Retrieve all Exemplar
    router.get("/", exemplar.findAll);
    // Retrieve all published Exemplar
    router.get("/published", exemplar.findAllPublished);
    // Retrieve a single Exemplar with id
    router.get("/:id", exemplar.findOne);
    // Update a Exemplar with id
    router.put("/:id", exemplar.update);
    // Delete a Exemplar with id
    router.delete("/:id", exemplar.delete);
    // Create a new Exemplar
    router.delete("/", exemplar.deleteAll);
    app.use('/api/exemplar', router);
  };