const db = require("../models");
const Publicacao = db.publicacao;


exports.createPublicacao = function (novaPublicacao) {
	return Publicacao.create(novaPublicacao, { raw: true });
}


exports.findAllPublicacoes = function () {
	return Publicacao.findAll({ raw: true });
}