const funcionarioD = require('../data/funcionario.data');
//const jwt = require('jsonwebtoken');
//require('dotenv').config();



exports.createFuncionario = async function (data) {
    const novoFuncionario = data;
    return funcionarioD.createFuncionario(novoFuncionario);
}

exports.loginFuncionario = async function (data) {
    const funcionario = await funcionarioD.findByCodigo(data.codigo);
    if (!funcionario) { throw new Error('Falha no login'); }

    if (data.senha !== funcionario.senha) { throw new Error('Falha no login'); }

    //delete funcionario.senha
    console.log(funcionario);
    return funcionario;
}