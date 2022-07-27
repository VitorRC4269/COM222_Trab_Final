import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  funcionario: Funcionario = {
    //codigo: 0,
    nome: '',
    senha: '',
    funcao: '',
    email: '',
    
  };
  submitted = false;
 cargos = ['gerente', 'funcionario'];
  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
  }

  saveFuncionario(): void {
    const data = {
     // codigo: this.funcionario.codigo,
      nome: this.funcionario.nome,
      senha: this.funcionario.senha,
      funcao: this.funcionario.funcao,
      email: this.funcionario.email,
      
    };

    this.funcionarioService.createFuncionario(data).subscribe(
      (res: any) => {
        if (res) {
          window.alert('Cadastro realizado com sucesso!');
          console.log('Funcionário criado com sucesso!');
          this.router.navigate([''])
        }
        else {
          window.alert('Erro ao cadastrar funcionário.');
        }
      }, (error) => {
        console.log(error);
      });

 /*   this.funcionarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });*/
  }

  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = {
     // codigo: 0,
      nome: '',
      senha: '',
      funcao: '',
      email: '',
      
    };
  }

}
