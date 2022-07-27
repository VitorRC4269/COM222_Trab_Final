import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-login',
  templateUrl: './funcionario-login.component.html',
  styleUrls: ['./funcionario-login.component.css']
})
export class FuncionarioLoginComponent implements OnInit {
  funcionario: Funcionario = {
    codigo: 0,
   // nome: '',
    senha: '',
   // funcao: '',
  //  email: '',
    
  };
 // codigo = 0;
 // senha = '';
  submitted = false;
  constructor(private funcionarioService: FuncionarioService, private router: Router,) { }

  ngOnInit(): void {
  }

  loginFuncionario(): void{

    console.log("\n------------------------------\nxablau");
    const data = {
      codigo: this.funcionario.codigo,
       //nome: this.nome,
       senha: this.funcionario.senha,
       //funcao: this.funcionario.funcao,
      // email: this.funcionario.email,
       
     };

     this.funcionarioService.login(data)
      .subscribe({
        next: (res) => {

          if (res) {
            window.alert('Login realizado com sucesso!');
            localStorage.setItem('codigoAtor', res.codigo);
            localStorage.setItem('nomeAtor', res.nome);
            localStorage.setItem('funcao', res.funcao);
            this.router.navigate(['addFuncionario'])
            .then(() => {
              window.location.reload();
            });
          }
          else {
            window.alert('Usuário não encontrado!');
            console.log(res);
          }



          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
