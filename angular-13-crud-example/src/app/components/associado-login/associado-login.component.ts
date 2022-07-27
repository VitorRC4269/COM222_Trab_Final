import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Associado } from 'src/app/models/associado.model';
import { AssociadoService } from 'src/app/services/associado.service';

@Component({
  selector: 'app-associado-login',
  templateUrl: './associado-login.component.html',
  styleUrls: ['./associado-login.component.css']
})
export class AssociadoLoginComponent implements OnInit {
 associado: Associado = {
    codigo: 0,
   // nome: '',
    senha: '',
    //funcao: '',
    //email: '',
    
  };
  //codigo = 0;
  //senha = '';
  submitted = false;
  constructor(private associadoService: AssociadoService, private router: Router,) { }

  ngOnInit(): void {
  }

  loginAssociado(): void{

    console.log("\n------------------------------\nxablau");
    const data = {
      codigo: this.associado.codigo,
       //nome: this.nome,
       senha: this.associado.senha,
       //funcao: this.associado.funcao,
      // email: this.associado.email,
       
     };

     this.associadoService.login(data)
      .subscribe({
        next: (res) => {

          if (res) {
            window.alert('Login realizado com sucesso!');
            //localStorage.setItem('codigoAtor', res.codigo);
            //localStorage.setItem('nomeAtor', res.nome);
            localStorage.setItem('associado', "true");
            
            this.router.navigate(['publicacaoList'])
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
