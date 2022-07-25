import { Component, OnInit } from '@angular/core';
import { Emprestimo } from 'src/app/models/emprestimo.model';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-add-emprestimo',
  templateUrl: './add-emprestimo.component.html',
  styleUrls: ['./add-emprestimo.component.css']
})
export class AddEmprestimoComponent implements OnInit {

  emprestimo: Emprestimo = {


    //codigo: 0,
    nro_exemplar: 0,
    isbn: '',
    codigo_assoc: 0,
    //data_emp: Date.now().toString(),
    //data_devol: '',

  };
  submitted = false;
  constructor(private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
  }

  saveEmprestimo(): void {
    const data = {

      //numero: this.emprestimo.numero,
      nro_exemplar: this.emprestimo.nro_exemplar,
      isbn: this.emprestimo.isbn,
      codigo_assoc: this.emprestimo.codigo_assoc,
     // data_emp: this.emprestimo.data_emp,
     // data_devol: this.emprestimo.data_devol,




    };

    this.emprestimoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmprestimo(): void {
    this.submitted = false;
    this.emprestimo = {
      //codigo: 0,
      nro_exemplar: 0,
      isbn: '',
      codigo_assoc: 0,
    //  data_emp: Date.toString(),
     // data_devol: '',

    };
  }

}
