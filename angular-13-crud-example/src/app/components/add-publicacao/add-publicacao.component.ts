import { Component, OnInit } from '@angular/core';
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
  constructor(private publicacaoService: PublicacaoService) { }

  ngOnInit(): void {
  }

  savePublicacao(): void {
    const data = {
    
      isbn: this.publicacao.isbn,
      titulo: this.publicacao.titulo,
      autor: this.publicacao.autor,
      editora: this.publicacao.editora,
      
    };

    this.publicacaoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
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
