module.exports = app => {
    const reserva = require("../controllers/reserva.controller.js");
    var router = require("express").Router();
    // Create a new Reserva
    router.post("/", reserva.create);
    // Retrieve all Reserva
    router.get("/", reserva.findAll);
    // Retrieve all published Reserva
    router.get("/published", reserva.findAllPublished);
    // Retrieve a single Reserva with id
    router.get("/:id", reserva.findOne);
    // Update a Reserva with id
    router.put("/:id", reserva.update);
    // Delete a Reserva with id
    router.delete("/:id", reserva.delete);
    // Create a new Reserva
    router.delete("/", reserva.deleteAll);
    app.use('/api/reserva', router);
  };