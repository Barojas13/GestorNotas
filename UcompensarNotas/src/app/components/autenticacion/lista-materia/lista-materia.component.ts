import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-materia',
  templateUrl: './lista-materia.component.html',
  styleUrls: ['./lista-materia.component.css']
})
export class ListaMateriaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModal(nombreModal: any) {
    this.modalService.open(nombreModal, {
      size: 'xl',
    });
  }
}
