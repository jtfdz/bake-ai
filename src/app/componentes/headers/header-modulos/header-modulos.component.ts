import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';

declare const modalFunction: any;
declare const getEbI: any;


@Component({
  selector: 'app-header-modulos',
  templateUrl: './header-modulos.component.html',
  styleUrls: ['./header-modulos.component.css']
})
export class HeaderModulosComponent implements OnInit {

	progresoArr: number[] = [];
	progresoArrIndex: number = 0;

  constructor(private modulosService: ModulosService, private location: Location) { }

  ngOnInit(): void {
  	this.modulosService.getProgresoArray().subscribe(
     progresoArr => this.progresoArr = progresoArr
    ); 
	  this.modulosService.getProgresoAvance().subscribe(
     progresoArrIndex => this.progresoArrIndex = progresoArrIndex
    ); 
  }

  volver(): void{
    this.location.back();
  }


}
