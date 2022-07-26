import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca Baianinho';

  codigoAtor = localStorage.getItem('codigoAtor');
  nome = localStorage.getItem('nomeAtor');
  funcao = localStorage.getItem('funcao');

}


