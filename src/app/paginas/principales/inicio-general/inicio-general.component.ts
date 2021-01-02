import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdPasosService } from 'src/app/servicios/principales/shepherd-pasos.service';

@Component({
  selector: 'app-inicio-general',
  templateUrl: './inicio-general.component.html',
  styleUrls: []
})
export class InicioGeneralComponent implements OnInit, AfterViewInit {

  usuarioIniciadoInicioGeneral: boolean = false;

  constructor(private componentesService: ComponentesService, private shepherdPasosService: ShepherdPasosService) { }

  ngOnInit(): void {
    this.componentesService.getUsuarioIniciadoInicioGeneral().subscribe(
     usuarioIniciadoInicioGeneral => this.usuarioIniciadoInicioGeneral = usuarioIniciadoInicioGeneral
    ); 
  }

  ngAfterViewInit() {
    if(!this.usuarioIniciadoInicioGeneral){
      this.shepherdPasosService.iniciarPasosInicioGeneral();
    }
  }


}
