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
    //codigo: 0,
    nome: '',
    senha: '',
    endereco: '',
    email: '',
    status: '',
  };
  submitted = false;
  tipos = ['Grad', 'Posgrad', 'Prof'];
  constructor(private associadoService: AssociadoService) { }

  ngOnInit(): void {
  }

  saveAssociado(): void {
    const data = {
     // codigo: this.associado.codigo,
      nome: this.associado.nome,
      senha: this.associado.senha,
      endereco: this.associado.endereco,
      email: this.associado.email,
      status: this.associado.status,
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
     // codigo: 0,
      nome: '',
      senha: '',
      endereco: '',
      email: '',
      status: '',
    };
  }

}
