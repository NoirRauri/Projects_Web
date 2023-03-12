import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  /*   // inline
    template: '<p>empleado works!</p>',
    styles: ['p{background-color: aqua;}'], */
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Juan';
  apellido = 'Diaz';
  edad = 28;
  empresa = 'Rauri yhorel';

  /* cambioEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  } */

  habilitacionCuadro = true;

  userRegister = false;

  textoRegistro = 'No hay nadie registrado';

  getUserRegister() {
    this.userRegister = false;
  }

  setUserRegister(event: Event) {
    /*     alert('El usuario se acaba de registrar');
        this.textoRegistro = 'El usuario se acaba'; */
    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = 'El usuario se acaba';
    } else {
      this.textoRegistro = 'No hay nadie registrado';
    }
  }

  /*   empresa = 'Pildoras imformaticas';
  
    getEdad() {
      return this.edad;
    }
  
    llamaEmpresa(value: string) {} */

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
