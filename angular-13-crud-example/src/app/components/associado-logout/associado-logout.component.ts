import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associado-logout',
  templateUrl: './associado-logout.component.html',
  styleUrls: ['./associado-logout.component.css']
})
export class AssociadoLogoutComponent implements OnInit {

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
