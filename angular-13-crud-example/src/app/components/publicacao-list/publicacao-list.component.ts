import { Component, OnInit } from '@angular/core';
import { Exemplar } from 'src/app/models/exemplar.model';
import { Publicacao } from 'src/app/models/publicacao.model';
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
    this.exemplarService.getAll()
      .subscribe({
        next: (data) => {
          this.exemplares = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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

  searchIsbn(): void {
    this.currentExemplar = {};
    this.currentIndex = -1;

    this.exemplarService.findByIsbn(this.isbn)
      .subscribe({
        next: (data) => {
          this.exemplares = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

