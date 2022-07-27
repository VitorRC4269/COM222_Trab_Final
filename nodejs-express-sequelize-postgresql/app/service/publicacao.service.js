const publicacaoD = require('../data/publicacao.data.js');

exports.createPublicacao = async function (data) {
	const novaPublicacao = data;
	return publicacaoD.createPublicacao(novaPublicacao);
}

exports.findAllPublicacoes = async function (data) {
	return publicacaoD.findAllPublicacoes();
}