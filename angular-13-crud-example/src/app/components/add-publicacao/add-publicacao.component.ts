import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacao } from 'src/app/models/publicacao.model';
import { PublicacaoService } from 'src/app/services/publicacao.service';

@Component({
  selector: 'app-add-publicacao',
  templateUrl: './add-publicacao.component.html',
  styleUrls: ['./add-publicacao.component.css']
})
export class AddPublicacaoComponent implements OnInit {

  publicacao: Publicacao = {

    isbn: '',
    titulo: '',
    autor: '',
    editora: '',
    
  };
  submitted = false;
  constructor(private publicacaoService: PublicacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  savePublicacao(): void {
    const data = {
    
      isbn: this.publicacao.isbn,
      titulo: this.publicacao.titulo,
      autor: this.publicacao.autor,
      editora: this.publicacao.editora,
      
    };

   /* this.publicacaoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });*/

      this.publicacaoService.createPublicacao(data).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Cadastro realizado com sucesso!');
          //  console.log('Publicacao cadastrada com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao cadastrar publicacao.');
          }
        }, (error) => {
          console.log(error);
        });
  }

  newPublicacao(): void {
    this.submitted = false;
    this.publicacao = {
    
      isbn: '',
      titulo: '',
      autor: '',
      editora: '',
      
    };
  }

}
