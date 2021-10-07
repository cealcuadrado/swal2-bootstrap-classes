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

  openDialogCurrent(): void {
    Swal.fire({
      title: "Tres botones",
      text: "Este es un cuadro de diálogo de tres botones.",
      icon: "warning",
      width: "40rem",
      scrollbarPadding: true,
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success mr-1',
        denyButton: 'btn btn-primary mr-1',
        cancelButton: 'btn btn-danger mr-1'
      }
    })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
