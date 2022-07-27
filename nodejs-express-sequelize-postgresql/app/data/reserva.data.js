const db = require("../models");
const Reserva = db.reserva;


exports.createReserva = function (novaReserva) {
	return Reserva.create(novaReserva, { raw: true });
}

exports.findAllByIsbn = function (isbn) {
	return Reserva.findAll({ where: { isbn } });
}

exports.findByAssociado = function (isbn, codigo_assoc) {
	return Reserva.findOne({ where: { isbn, codigo_assoc } });
}

exports.updateReserva = function (codigo, novoDado) {
	return Reserva.update(novoDado, { where: { codigo } });
}


