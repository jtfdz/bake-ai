import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { TemasService } from 'src/app/servicios/temas/temas.service';

@Component({
  selector: 'app-teoria-modulo',
  templateUrl: './teoria-modulo.component.html',
  styleUrls: ['./teoria-modulo.component.css']
})
export class TeoriaModuloComponent implements OnInit {

  nuevaTeoria: string[] = ['か','き','く','け','こ'];
  estiloMayorRetencion: string = '';

  constructor(private temasService: TemasService, private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getEstiloMayorRetencion().subscribe(
     estiloMayorRetencion => this.estiloMayorRetencion = estiloMayorRetencion
    ); 
   
  }

}
