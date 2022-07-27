import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo.model';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-devolver-emprestimo',
  templateUrl: './devolver-emprestimo.component.html',
  styleUrls: ['./devolver-emprestimo.component.css']
})
export class DevolverEmprestimoComponent implements OnInit {

  emprestimo: Emprestimo = {


    //codigo: 0,
    nro_exemplar: 0,
    isbn: '',
    codigo_assoc: 0,
    //data_emp: Date.now().toString(),
    //data_devol: '',

  };
  submitted = false;
  constructor(private emprestimoService: EmprestimoService, private router: Router) { }

  ngOnInit(): void {
  }

  devolverExemplar(): void {
    const data = {

      //numero: this.emprestimo.numero,
      nro_exemplar: this.emprestimo.nro_exemplar,
      isbn: this.emprestimo.isbn,
      codigo_assoc: this.emprestimo.codigo_assoc,
     // data_emp: this.emprestimo.data_emp,
     // data_devol: this.emprestimo.data_devol,




    };
/*
    this.emprestimoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
*/
this.emprestimoService.devolverExemplar(data).subscribe(
  (res: any) => {
    if (res) {
      window.alert(`Devolução realizada. É necessário pagar R$${res.multa} de multa`);
      //console.log('Emprestimo realizado com sucesso!');
      this.router.navigate([''])
    }
    else {
      window.alert('Erro ao realizar devolução.');
    }
  }, (error) => {
    console.log(error);
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
