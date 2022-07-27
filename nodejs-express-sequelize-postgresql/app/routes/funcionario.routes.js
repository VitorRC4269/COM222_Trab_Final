module.exports = app => {
    const funcionarioS = require("../service/funcionario.service.js");
    var router = require("express").Router();
    // Create a new Funcionario
    router.post("/", async (req, res, next) => {
      const data = req.body
      try {
        const novoFunc = await funcionarioS.salvarFuncionario(data)
        
        res.status(201).json(novoFunc)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })
    

    router.post("/login", async (req, res, next) => {
      const data = req.body
      try {
        const token = await funcionarioS.loginFuncionario(data)
        res.status(200).json(token)
      } catch (e) {
        res.status(400).json({error: e})
    
      }
    })




    //router.post("/login", funcionario.login);

    app.use('/api/funcionario', router);

    



  };