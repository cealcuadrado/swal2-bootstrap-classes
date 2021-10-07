import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialogBoxDefault(): void {
    Swal.fire('Título', 'Este es el título del cuadro de diálogo', 'warning');
  }
}
