module.exports = app => {
    const publicacao = require("../controllers/publicacao.controller.js");
    var router = require("express").Router();
    
    // Create a new Publicacao
    router.post("/", publicacao.create);
    
    // Retrieve all Publicacao
    router.get("/", publicacao.findAll);
    
    // Retrieve all published Publicacao
    router.get("/published", publicacao.findAllPublished);
   
    // Retrieve a single Publicacao with id
    router.get("/:id", publicacao.findOne);
    
    // Update a Publicacao with id
    router.put("/:id", publicacao.update);
    
    // Delete a Publicacao with id
    router.delete("/:id", publicacao.delete);
    // Create a new Publicacao
    router.delete("/", publicacao.deleteAll);

    router.get("/isbn", publicacao.findAll);

    app.use('/api/publicacao', router);
  };