import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exemplar } from 'src/app/models/exemplar.model';
import { ExemplarService } from 'src/app/services/exemplar.service';

@Component({
  selector: 'app-add-exemplar',
  templateUrl: './add-exemplar.component.html',
  styleUrls: ['./add-exemplar.component.css']
})
export class AddExemplarComponent implements OnInit {

  exemplar: Exemplar = {


    numero: 1,
    isbn: '',
    
   
    preco: 0,
    
  };
  submitted = false;
  constructor(private exemplarService: ExemplarService, private router: Router) { }

  ngOnInit(): void {
  }

  saveExemplar(): void {
    const data = {
      
      numero: this.exemplar.numero,
      isbn: this.exemplar.isbn,
      
     
      preco: this.exemplar.preco,
      
    };
/*
    this.exemplarService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
*/
this.exemplarService.createExemplar(data).subscribe(
  (res: any) => {
    if (res) {
      window.alert('Cadastro realizado com sucesso!');
      console.log('exemplar criado com sucesso!');
      this.router.navigate([''])
    }
    else {
      window.alert('Erro ao cadastrar exemplar.');
    }
  }, (error) => {
    console.log("plimp");
    console.log(error);
  });


  }

  newExemplar(): void {
    this.submitted = false;
    this.exemplar = {
      numero: 1,
      isbn: '',
      preco: 0,
      
    };
  }

}
