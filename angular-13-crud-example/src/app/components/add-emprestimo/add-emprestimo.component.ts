import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo.model';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-add-emprestimo',
  templateUrl: './add-emprestimo.component.html',
  styleUrls: ['./add-emprestimo.component.css']
})
export class AddEmprestimoComponent implements OnInit {

  emprestimo: Emprestimo = {



    nro_exemplar: 0,
    isbn: '',
    codigo_assoc: 0,
   

  };
  submitted = false;
  constructor(private emprestimoService: EmprestimoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmprestimo(): void {
    const data = {

      nro_exemplar: this.emprestimo.nro_exemplar,
      isbn: this.emprestimo.isbn,
      codigo_assoc: this.emprestimo.codigo_assoc,
    


    };

this.emprestimoService.createEmprestimo(data).subscribe(
  (res: any) => {
    if (res) {
      window.alert('Emprestimo realizado com sucesso!');
     
      this.router.navigate([''])
    }
    else {
      window.alert('Erro ao realizar empréstimo.');
    }
  }, (error) => {
    console.log(error);
  });



  }


  newEmprestimo(): void {
    this.submitted = false;
    this.emprestimo = {
    
      nro_exemplar: 0,
      isbn: '',
      codigo_assoc: 0,
  
    };
  }

}
