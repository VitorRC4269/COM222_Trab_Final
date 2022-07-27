const db = require("../models");

const Exemplar = db.exemplar;


exports.createExemplar = function (novoExemplar) {
	return Exemplar.create(novoExemplar, { raw: true })
}

exports.findAllByIsbn = function (isbn) {
	console.log("data");
	return Exemplar.findAll({ where: { isbn }, raw: true })
}