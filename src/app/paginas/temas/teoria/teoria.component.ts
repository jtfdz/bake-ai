import { Component, OnInit } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
declare const openTabTeoria: any;

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
})
export class TeoriaComponent implements OnInit {

  tituloTema: string = '';
  temaContenido: string = '';
  temaAprendido: boolean = false;


  constructor(private temasService: TemasService) { }

   ngOnInit(): void {
  	this.temasService.getTituloTema().subscribe(
         tituloTema => this.tituloTema = tituloTema
      );
  	this.temasService.getTemaContenido().subscribe(
         temaContenido => this.temaContenido = temaContenido
      );
    this.temasService.getTemaAprendido().subscribe(
         temaAprendido => this.temaAprendido = temaAprendido
      );
   }

  setAprendido(aprendido: boolean){
    this.temaAprendido = !this.temaAprendido;
    this.temasService.setAprendido(aprendido)
  }


}
