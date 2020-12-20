import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

@Component({
  selector: 'app-teoria-modulo',
  templateUrl: './teoria-modulo.component.html',
  styleUrls: ['./teoria-modulo.component.css']
})
export class TeoriaModuloComponent implements OnInit {

  estiloMayorRetencion: string = '';

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getEstiloMayorRetencion().subscribe(
     estiloMayorRetencion => this.estiloMayorRetencion = estiloMayorRetencion
    ); 
  }

}
