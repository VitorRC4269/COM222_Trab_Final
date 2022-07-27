const associadoD = require('../data/associado.data');

exports.createAssociado = async function (data) {
	const novoAssociado = data;
    console.log("service");
	return associadoD.createAssociado(novoAssociado);
}

exports.findAllAssociados = async function () {
	return associadoD.findAllAssociados();
}


exports.loginAssociado = async function (data) {
    const associado = await associadoD.findByCodigo(data.codigo);
    if (!associado) { throw new Error('Falha no login'); }

    if (data.senha !== associado.senha) { throw new Error('Falha no login'); }

    //delete associado.senha
    console.log(associado);
    return associado;
}