module.exports = app => {
  const reservaS = require("../service/reserva.service");
  var router = require("express").Router();

  // Create a new Reserva
  router.post('/', async (req, res, next) => {
    const data = req.body
    try {
      const novaReserva = await reservaS.createReserva(data);
      res.status(201).json(novaReserva);
    } catch (e) {
      res.status(400).json({ error: e });

    }
  })

  router.get('/isbn', async (req, res, next) => {
    try {
      const reservas = await reservaS.findAllByIsbn(req.params.isbn)
      res.status(201).json(reservas);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  })

  router.put('/anular', async (req, res, next) => {
    try {
      await reservaS.anularReserva(req.body);
      res.status(201).send("Reserva anulada com sucesso");
    } catch (e) {
      res.status(400).json({ error: e });

    }
  })















  app.use('/api/reserva', router);
};