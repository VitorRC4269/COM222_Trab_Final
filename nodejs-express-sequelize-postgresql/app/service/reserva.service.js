const reservaD = require('../data/reserva.data');
const emprestimoD = require('../data/emprestimo.data');
const exemplarD= require('../data/exemplar.data');


exports.createReserva = async function (data) {

    const emprestimos = await emprestimoD.findAllByIsbn(data.isbn);
    const exemplares = await exemplarD.findAllByIsbn(data.isbn);

    if(emprestimos.length < exemplares.length) throw new Error("Ainda existe exemplar disponível");
    data.status = 'Iniciado';
	const novaReserv = data;
	return reservaD.createReserva(novaReserv);
}

exports.findAllByIsbn = async function (isbn) {
	return reservaD.findAllByIsbn(isbn);
}

exports.anularReserva = async function (data) {
	const reserva = await reservaD.findByAssociado(data.isbn, data.codigo_assoc);

    if(reserva) {
        const reservaStatus = {
            status: "Anulado"
        }
        return reservaD.updateReserva(reserva.codigo, reservaStatus);
    }

    throw "Reserva não encontrada";
}