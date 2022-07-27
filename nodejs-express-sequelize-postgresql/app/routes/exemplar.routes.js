module.exports = app => {
    const exemplarS = require("../service/exemplar.service.js");
    var router = require("express").Router();
    // Create a new Exemplar
    //router.post("/", exemplar.create);
    // Retrieve all Exemplar
   // router.get("/isbn", exemplar.findAll);
    // Retrieve all published Exemplar
    //router.get("/published", exemplar.findAllPublished);
    // Retrieve a single Exemplar with id
    //router.get("/:id", exemplar.findOne);
    // Update a Exemplar with id
    //router.put("/:id", exemplar.update);
    // Delete a Exemplar with id
    //router.delete("/:id", exemplar.delete);
    // Create a new Exemplar
    //router.delete("/", exemplar.deleteAll);


    //router.get("/isbn", exemplar.findIsbn);


    router.post('/', async (req, res, next) => {
      const data = req.body
      try {
        const novoExemp = await exemplarS.createExemplar(data)
        
        res.status(201).json(novoExemp)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    
    // Busca exemplares através do isbn
    router.get('/isbn/:isbn', async (req, res, next) => {
      console.log("pbembem");
      console.log(req.params.isbn);
      try {
        const exemplares = await exemplarS.findAllByIsbn(req.params.isbn)
        res.status(200).json(exemplares)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    
    router.get('/disponiveis/:isbn', async (req, res, next) => {

      console.log("popopi");
      console.log(req.params.isbn);
      try {

        const exemplares = await exemplarS.findExemplaresDisponiveis(req.params.isbn)
        res.status(200).json(exemplares)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })


    app.use('/api/exemplar', router);
  };