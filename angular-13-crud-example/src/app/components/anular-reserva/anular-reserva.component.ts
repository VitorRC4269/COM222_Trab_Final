import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva.model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-anular-reserva',
  templateUrl: './anular-reserva.component.html',
  styleUrls: ['./anular-reserva.component.css']
})
export class AnularReservaComponent implements OnInit {

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

  anularReserva(): void {
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
    this.reservaService.anularReserva(data).subscribe(
      (res: any) => {
        if (res) {
          window.alert('Reserva anulada com sucesso!');
          console.log('Reserva anulada com sucesso!');
          this.router.navigate([''])
        }
        else {
          window.alert('Erro ao anular reserva.');
        }
      }, (error) => {
        window.alert('Erro ao anular reserva.');
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
