module.exports = app => {
    const publicacaoS = require("../service/publicacao.service.js");
    var router = require("express").Router();
    
    // Create a new Publicacao
    
    router.post("/", async (req, res, next) => {
      const data = req.body
      try {
        const novaPublicacao = await publicacaoS.createPublicacao(data)
        
        res.status(201).json(novaPublicacao)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    
        // Retrieve all Publicacao
    router.get("/", async (req, res, next) => {
      try {
        const publicacoes = await publicacaoS.findAllPublicacoes()
        
        res.status(201).json(publicacoes)
      } catch (e) {
        res.status(400).send("Não foi possível encontrar as publicações")
    
      }
    })

    app.use('/api/publicacao', router);
  };