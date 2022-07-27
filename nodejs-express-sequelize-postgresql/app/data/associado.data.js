//const associado = require('../models/associado.model');
const db = require("../models");
const Associado = db.associado;

exports.createAssociado = function (novoAssociado) {
	console.log("salvara");
	console.log(novoAssociado);
	return Associado.create(novoAssociado, { raw: true });
}

exports.findByCodigo = function (codigo) {
	return Associado.findOne({ where: { codigo }, raw: true });
}

exports.findAllAssociados = function (codigo) {
	return Associado.findAll({ raw: true });
}