import { Component, OnInit } from '@angular/core';
import { Associado } from 'src/app/models/associado.model';

@Component({
  selector: 'app-associado-login',
  templateUrl: './associado-login.component.html',
  styleUrls: ['./associado-login.component.css']
})
export class AssociadoLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  
  submitted = false;
  associado: Associado = {
    //codigo: 0,
    nome: '',
    senha: '',
    endereco: '',
    email: '',
    status: '',
  };



  
  loginAssociado(): void{

  }

}
