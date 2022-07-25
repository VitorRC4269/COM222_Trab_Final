import { Component, OnInit } from '@angular/core';
import { Exemplar } from 'src/app/models/exemplar.model';
import { ExemplarService } from 'src/app/services/exemplar.service';

@Component({
  selector: 'app-add-exemplar',
  templateUrl: './add-exemplar.component.html',
  styleUrls: ['./add-exemplar.component.css']
})
export class AddExemplarComponent implements OnInit {

  exemplar: Exemplar = {


    //numero: 0,
    isbn: '',
    
   
    preco: 0,
    
  };
  submitted = false;
  constructor(private exemplarService: ExemplarService) { }

  ngOnInit(): void {
  }

  saveExemplar(): void {
    const data = {
      
      //numero: this.exemplar.numero,
      isbn: this.exemplar.isbn,
      
     
      preco: this.exemplar.preco,
      
    };

    this.exemplarService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newExemplar(): void {
    this.submitted = false;
    this.exemplar = {
     // numero: 0,
      isbn: '',
      preco: 0,
      
    };
  }

}
