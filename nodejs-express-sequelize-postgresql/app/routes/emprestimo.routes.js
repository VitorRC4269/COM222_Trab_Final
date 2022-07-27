module.exports = app => {
    const emprestimoS = require("../service/emprestimo.service.js");
    var router = require("express").Router();
    
    // Create a new Emprestimo
    router.post('/', async (req, res, next) => {
      const data = req.body
      try {
        const novoEmprestimo = await emprestimoS.createEmprestimo(data)  
        res.status(201).json(novoEmprestimo)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    
    router.post('/devolver', async (req, res, next) => {
      try {
        const multa = await emprestimoS.devolverExemplar(req.body)
        res.status(200).json(multa)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    
    router.get('/atrasados', async (req, res, next) => {
      try {
        const emprestimosAtrasados = await emprestimoS.findAtrasados()
        res.status(200).json(emprestimosAtrasados)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    app.use('/api/emprestimo', router);
  };