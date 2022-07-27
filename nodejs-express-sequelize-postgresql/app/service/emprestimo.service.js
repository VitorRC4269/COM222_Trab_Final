var moment = require('moment');

const reservaD = require('../data/reserva.data');
const emprestimoD= require('../data/emprestimo.data');
const associadoD = require('../data/associado.data');


exports.createEmprestimo = async function (data) {
	const reservas = await reservaD.findAllByIsbn(data.isbn);

	let auxReserva = false;
	let reservado;
	(reservas || []).forEach(reserva => {
		if(reserva.status !== "Anulado" && !auxReserva) {
			reservado = reserva;
			auxReserva = true;
		}
		
	})

	//Verifica se o livro não possui reserva, e se caso tiver, o primeiro é o associado
	if(reservado && reservado.codigo_assoc !== data.codigo_assoc) throw new Error("Alguem na frente!");

	const associado = await associadoD.findByCodigo(data.codigo_assoc);

	//Caso ele seja o primeiro na reserva
	if(reservado && reservado.codigo_assoc === data.codigo_assoc) {
		if(associado) {
			const reservaStatus = {
				status: "Anulado"
			}
			await reservaD.updateReserva(reservado.codigo, reservaStatus);
		}
	}


	data.data_emp = moment()
	if(associado.status === "Grad") {
		data.data_devol = moment().add(7, 'd');
	} else if(associado.status === "Posgrad") {
		data.data_devol = moment().add(10, 'd');
	} else {
		data.data_devol = moment().add(14, 'd');
	}
	
	return emprestimoD.createEmprestimo(data);
}


exports.devolverExemplar = async function (data) {
	const emprestimo = await emprestimoD.findEmprestimo(data.isbn, data.nro_exemplar, data.codigo_assoc);

	if(emprestimo) {
		const reservas = await reservaD.findAllByIsbn(data.isbn);
	
		let auxReserva = false;
		let reservado;
		(reservas || []).forEach(reserva => {
			if(reserva.status !== "Anulado" && !auxReserva) {
				reservado = reserva;
				auxReserva = true;
			}
			
		})
	
		if(reservado) {
			const reservaStatus = {
				status: "Avisado"
			}
			await reservaD.updateReserva(reservado.codigo, reservaStatus);
		}
	
	
		await emprestimoD.destroyEmprestimo(emprestimo.codigo);
	
		const now = moment();
		const diff = now.diff(emprestimo.data_devol, "days");
		return diff > 0 ? {multa: diff} : {multa: 0};
	}
	throw "Emprestimo não encontrado";
}

exports.findAtrasados = async function () {
	const emprestimos = await emprestimoD.findAllEmprestimos() ;
	
	let atrasados = [];
	if(emprestimos.length) {
		const now = moment();
		emprestimos.forEach(emprestimo => {
			if(now.diff(emprestimo.data_devol, "days") > 0) {
				atrasados.push(emprestimo);
			}
			
		})
	}

	return atrasados;
}