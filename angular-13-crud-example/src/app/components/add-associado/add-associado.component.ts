import { Component, OnInit } from '@angular/core';
import { Associado } from 'src/app/models/associado.model';
import { AssociadoService } from 'src/app/services/associado.service';

@Component({
  selector: 'app-add-associado',
  templateUrl: './add-associado.component.html',
  styleUrls: ['./add-associado.component.css']
})
export class AddAssociadoComponent implements OnInit {

  associado: Associado = {
    //codigo: '',
    nome: '',
    senha: '',
    endereco: '',
    email: '',
    status: '',
  };
  submitted = false;
  tipo = ['Grad', 'Posgrad', 'Prof'];
  constructor(private associadoService: AssociadoService) { }

  ngOnInit(): void {
  }

  saveAssociado(): void {
    const data = {
      //codigo: this.associado.codigo,
      nome: this.associado.nome
    };

    this.associadoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAssociado(): void {
    this.submitted = false;
    this.associado = {
      //codigo: '',
      nome: '',
      senha: '',
      endereco: '',
      email: '',
      status: '',
    };
  }

}
