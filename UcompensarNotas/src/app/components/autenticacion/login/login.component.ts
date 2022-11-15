import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarRecibos: boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onClick() {
    this.mostrarRecibos = !this.mostrarRecibos;
  }
}
