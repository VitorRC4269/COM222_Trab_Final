import { Component, OnInit } from '@angular/core';

import { Exemplar } from 'src/app/models/exemplar.model';
import { ExemplarService } from 'src/app/services/exemplar.service';

@Component({
  selector: 'app-publicacao-list',
  templateUrl: './publicacao-list.component.html',
  styleUrls: ['./publicacao-list.component.css']
})
export class PublicacaoListComponent implements OnInit {

  exemplares?: Exemplar[];
  currentExemplar: Exemplar = {};
  currentIndex = -1;
  isbn = '';

  constructor(private exemplarService: ExemplarService) { }

  ngOnInit(): void {
    this.retrieveExemplar();
  }

  retrieveExemplar(): void {

    /*
    this.publicacaoService.getAll()
      .subscribe({
        next: (data) => {
          this.publicacoes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
*/
    //this.publicacaoService.findAllPublicacoes()
    if (this.isbn) {
      console.log(this.isbn);
      this.exemplarService.findAllByIsbn(this.isbn).subscribe(data => {

        console.log(data);
        this.exemplares = data;
      });
    } else {
      this.exemplares = [];
      this.currentExemplar = {};
    }


  }

  refreshList(): void {
    this.retrieveExemplar();
    this.currentExemplar = {};
    this.currentIndex = -1;
  }

  setActiveExemplar(exemplar: Exemplar, index: number): void {
    this.currentExemplar = exemplar;
    this.currentIndex = index;
  }
  /*
    removeAllExemplar(): void {
      this.exemplarService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  */

  /*
    searchIsbn(): void {
      this.currentPublicacao = {};
      this.currentIndex = -1;
  
      this.publicacaoService.findByIsbn(this.isbn)
        .subscribe({
          next: (data) => {
            this.publicacoes = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
    */
  searchIsbn(): void { }
}

