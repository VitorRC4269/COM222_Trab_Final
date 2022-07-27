import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-logout',
  templateUrl: './funcionario-logout.component.html',
  styleUrls: ['./funcionario-logout.component.css']
})
export class FuncionarioLogoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
  }

}
