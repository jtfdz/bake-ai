import { Component, OnInit } from '@angular/core';
import { TeoriaService } from 'src/app/servicios/temas/teoria.service';
declare const openTabTeoria: any;
declare const setInStore: any;
import urls from 'src/assets/json/urls.json';


@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
  styleUrls: ['./teoria.component.css']
})
export class TeoriaComponent implements OnInit {

  tituloTema: string = 'general >> historia';
  temaContenido: string = 'la historia de los abecedarios';
  temaAprendido: boolean = false;
  imagenes: String = urls.teoria;



  constructor(private teoriaService: TeoriaService) { }


   ngOnInit(): void {
  	this.teoriaService.getTituloTema().subscribe(
         tituloTema => this.tituloTema = tituloTema
      );
  	this.teoriaService.getTemaContenido().subscribe(
         temaContenido => this.temaContenido = temaContenido
      );
    this.teoriaService.getTemaAprendido().subscribe(
         temaAprendido => this.temaAprendido = temaAprendido
      );
   }

  setAprendido(aprendido: boolean){
    this.temaAprendido = !this.temaAprendido;
    this.teoriaService.setAprendido(aprendido)
  }


}
