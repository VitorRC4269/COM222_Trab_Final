const db = require("../models");
const Funcionario = db.funcionario;



exports.createFuncionario = function (novoFunc) {
	return Funcionario.create(novoFunc, { raw: true });
}

exports.findByEmail = function (email) {
	return Funcionario.findOne({ where: {email}, raw: true});
}

exports.findByCodigo = function (codigo) {
	return Funcionario.findOne({ where: {codigo}, raw: true});
}

