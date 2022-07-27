import { Component, OnInit } from '@angular/core';

import { Emprestimo } from 'src/app/models/emprestimo.model';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-atrasado-emprestimo',
  templateUrl: './atrasado-emprestimo.component.html',
  styleUrls: ['./atrasado-emprestimo.component.css']
})
export class AtrasadoEmprestimoComponent implements OnInit {

  emprestimos?: Emprestimo[];
  currentEmprestimo: Emprestimo = {};
  currentIndex = -1;
  isbn = '';

  constructor(private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.retrieveEmprestimo();
  }

  retrieveEmprestimo(): void {
    
    /*
    this.emprestimoService.getAll()
      .subscribe({
        next: (data) => {
          this.emprestimos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
*/
      //this.emprestimoService.findAllPublicacoes()

      this.emprestimoService.findAtrasados().subscribe(data => {
  
        console.log(data);
        this.emprestimos = data;
      });
    

  }

  refreshList(): void {
    this.retrieveEmprestimo();
    this.currentEmprestimo = {};
    this.currentIndex = -1;
  }

  setActiveEmprestimo(emprestimo: Emprestimo, index: number): void {
    this.currentEmprestimo = emprestimo;
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
*//*
  searchIsbn(): void {
    this.currentEmprestimo = {};
    this.currentIndex = -1;

    this.emprestimoService.findByIsbn(this.isbn)
      .subscribe({
        next: (data) => {
          this.emprestimos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  */
 searchIsbn():void{}
}

