import { Component, OnInit } from '@angular/core';
import { HerramientasService, Herramienta } from 'src/app/service/herramientas.service'; //se importa el servicio

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
    herramientas:Herramienta[]=[] //se crea el arreglo  para utilizarlo 

  constructor( private _herramientasService:HerramientasService ) { } //se utiliza de manera privada el servicio

  ngOnInit(): void { //se agrega todo este bloque dentro de los {}
     this. herramientas=this._herramientasService.getHerramientas();
    console.log(this.herramientas);
  }

}
