module.exports = app => {
    const emprestimo = require("../controllers/emprestimo.controller.js");
    var router = require("express").Router();
    // Create a new Emprestimo
    router.post("/", emprestimo.create);
    // Retrieve all Emprestimo
    router.get("/", emprestimo.findAll);
    // Retrieve all published Emprestimo
    router.get("/published", emprestimo.findAllPublished);
    // Retrieve a single Emprestimo with id
    router.get("/:id", emprestimo.findOne);
    // Update a Emprestimo with id
    router.put("/:id", emprestimo.update);
    // Delete a Emprestimo with id
    router.delete("/:id", emprestimo.delete);
    // Create a new Emprestimo
    router.delete("/", emprestimo.deleteAll);
    app.use('/api/emprestimo', router);
  };