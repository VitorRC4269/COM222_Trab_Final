const db = require("../models");
const Emprestimo = db.emprestimo; 

exports.createEmprestimo = function (novoEmprestimo) {
	return Emprestimo.create(novoEmprestimo, { raw: true });
}

exports.findAllByIsbn = function (isbn) {
    return Emprestimo.findAll({ where: { isbn }, raw: true });
}

exports.findAllEmprestimos = function () {
    return Emprestimo.findAll({ raw: true });
}

exports.findEmprestimo = function (isbn, nro_exemplar, codigo_assoc) {
    return Emprestimo.findOne({ where: { isbn, codigo_assoc, nro_exemplar }, raw: true });
}

exports.destroyEmprestimo = function (codigo) {
    return Emprestimo.destroy({ where: {codigo}});
}
