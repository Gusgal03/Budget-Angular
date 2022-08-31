import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  //declaramos la variable
  egresos: Egreso[] =[];

  @Input() ingresoTotal: number;

  //inyectamos el servicio
  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit() {
    //inicializamos el arreglo
    this.egresos = this.egresoServicio.egresos;

  }

  eliminarEgreso(egreso: Egreso){
    this.egresoServicio.eliminar(egreso); //de aqui debemos crear el método eliminar en egreso.servicio.ts
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
