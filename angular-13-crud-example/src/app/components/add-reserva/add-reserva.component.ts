import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva.model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-add-reserva',
  templateUrl: './add-reserva.component.html',
  styleUrls: ['./add-reserva.component.css']
})
export class AddReservaComponent implements OnInit {

  reserva: Reserva = {


    //codigo: 0,
    //nro_exemplar: 0,
    isbn: '',
    codigo_assoc: 0,
    //data_emp: Date.now().toString(),
    //data_devol: '',

  };
  submitted = false;
  constructor(private reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
  }

  saveReserva(): void {
    const data = {

      //numero: this.reserva.numero,
      //nro_exemplar: this.reserva.nro_exemplar,
      isbn: this.reserva.isbn,
      codigo_assoc: this.reserva.codigo_assoc,
      // data_emp: this.reserva.data_emp,
      // data_devol: this.reserva.data_devol,




    };
    /*
        this.reservaService.create(data)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.submitted = true;
            },
            error: (e) => console.error(e)
          });
    */
    this.reservaService.createReserva(data).subscribe(
      (res: any) => {
        if (res) {
          window.alert('Reserva realizada com sucesso!');
          console.log('Reserva realizada com sucesso!');
          this.router.navigate([''])
        }
        else {
          window.alert('Erro ao realizar reserva.');
        }
      }, (error) => {
        window.alert('Erro ao realizar reserva. Verifique se há um exemplar disponível');
      });



  }

  /*
  newReserva(): void {
    this.submitted = false;
    this.reserva = {
      //codigo: 0,
      nro_exemplar: 0,
      isbn: '',
      codigo_assoc: 0,
    //  data_emp: Date.toString(),
     // data_devol: '',

    };
  }
*/
}
