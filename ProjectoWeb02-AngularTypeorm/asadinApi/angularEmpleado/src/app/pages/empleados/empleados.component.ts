import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
// import { EmpleadoModel } from 'src/app/shared/models/EmpleadoModel';
import { EmpleadoCardService } from 'src/app/shared/services/empleado-card.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    'idEmpleado',
    'name',
    'apellido1',
    'apellido2',
    'email',
    'telefono1',
    'telefono2',
    'puestos',
    'namePuestos',
  ];
  dataSource = [];
  lista :[]=[];
  constructor(private empleadoSrv: EmpleadoCardService) { }



  getEmpleados(url:string) {
    this.empleadoSrv.getEmpleados(url).subscribe((data: any) => {

      this.lista =data;
      this.dataSource = this.lista;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {
    this.getEmpleados("http://localhost:3000/empleados/")
    console.log("ngOnInit Empleados")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Empleados")
  }

}
